import asyncio
import json
import os
import time
from typing import List, Any

import aiohttp
from bs4 import BeautifulSoup

class BaseAPIHandler:
    BASE_URL: str = "https://esimder.pushkinlibrary.kz"
    DEFAULT_URL: str = "https://esimder.pushkinlibrary.kz/ru/pisateli-i-poety.html"
    CATEGORIES_URL: str = "https://esimder.pushkinlibrary.kz/ru/ushiteli.html"

    def __init__(self, max_concurrent_requests=10):
        self.session = None
        self.semaphore = asyncio.Semaphore(max_concurrent_requests)  # Ограничиваем количество запросов
        self.lock = asyncio.Lock()  # Блокировка для записи данных в файл

    def get_session(self) -> aiohttp.ClientSession:
        if not self.session:
            headers = {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:131.0) Gecko/20100101 Firefox/131.0",
                "Accept": "text/css,*/*;q=0.1",
                "Accept-Language": "ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3",
                "Accept-Encoding": "gzip, deflate, br, zstd",
                "Referer": "https://esimder.pushkinlibrary.kz/ru/",
                "DNT": "1",
                "Sec-GPC": "1",
                "Connection": "keep-alive",
                "Sec-Fetch-Dest": "style",
                "Sec-Fetch-Mode": "no-cors",
                "Sec-Fetch-Site": "same-origin",
                "Priority": "u=2",
                "Pragma": "no-cache",
                "Cache-Control": "no-cache",
                "TE": "trailers"
            }
            self.session = aiohttp.ClientSession(headers=headers)
        return self.session

    async def get_text(self, url, retries=3):
        async with self.semaphore:
            for attempt in range(retries):
                try:
                    async with self.get_session().get(url, timeout=aiohttp.ClientTimeout(total=10)) as response:
                        if response.status == 200:
                            return await response.text()
                except Exception as e:
                    if attempt == retries - 1:
                        print(f"Ошибка при запросе {url}: {e}")
                    await asyncio.sleep(2)
            return None

    async def get_categories(self) -> List[tuple[str, Any]]:
        text = await self.get_text(self.CATEGORIES_URL)
        soup = BeautifulSoup(text, "html.parser")
        categories = [
            (i.text, i['href'])
            for i in soup.find("dl", attrs={"id": "offlajn-accordion-140-1"}).find_all('a')
        ]
        return categories

    async def get_names_in_categories(self, c_url: str) -> List[tuple[str, Any]]:
        text = await self.get_text(c_url)
        soup = BeautifulSoup(text, "html.parser")
        return [
            (i.text.strip(), i['href'])
            for i in soup.find('table', attrs={'class': "category"}).find_all('a')
        ]

    async def get_content_name(self, short_name: str, name_url: str):
        text = await self.get_text(name_url)
        if not text:
            return None

        soup = BeautifulSoup(text, 'html.parser').find('div', {'class': 'item-page'}).find_all('p')
        content = ""
        for p in soup:
            style = p.get('style', '')
            if 'text-align: center' in style or 'margin-bottom: 0cm' in style:
                break
            content += p.get_text()
        content = content.replace('\u00A0', ' ')
        full_name = " ".join(content.split()[:len(short_name.split(' '))])
        return full_name, content

    async def process_category(self, category, c_url):
        category_url = f"{self.BASE_URL}{c_url}?limit=0"
        names = await self.get_names_in_categories(category_url)
        tasks = [
            self.process_name(name_url, category, category_url, short_name, idx)
            for idx, (short_name, name_url) in enumerate(names)
        ]
        await asyncio.gather(*tasks)

    async def process_name(self, name_url, category, category_url, short_name, idx):
        if name_url.find('#') != -1:
            return
        name_url = f"{self.BASE_URL}{name_url}"
        result = await self.get_content_name(short_name, name_url)
        if result:
            full_name, content = result
            await self.write({
                "id": idx,
                "name_url": name_url,
                "full_name": full_name,
                "content": content,
                "category": category,
                "category_url": category_url
            })

    async def parse(self):
        categories = await self.get_categories()
        tasks = [self.process_category(category, c_url) for category, c_url in categories]
        await asyncio.gather(*tasks)
        await self.close_session()

    async def write(self, data):
        async with self.lock:
            file_path = 'esimder_output_list1.json'
            if os.path.exists(file_path):
                with open(file_path, 'r', encoding='utf-8') as json_file:
                    try:
                        existing_data = json.load(json_file)
                    except json.JSONDecodeError:
                        existing_data = []
            else:
                existing_data = []
            existing_data.append(data)
            with open(file_path, 'w', encoding='utf-8') as json_file:
                json.dump(existing_data, json_file, ensure_ascii=False, indent=4)

    async def close_session(self):
        if self.session:
            await self.session.close()
            self.session = None

async def main():
    start_time = time.time()
    b = BaseAPIHandler()
    await b.parse()
    print(f"Время выполнения: {time.time() - start_time} секунд")

if __name__ == "__main__":
    asyncio.run(main())
