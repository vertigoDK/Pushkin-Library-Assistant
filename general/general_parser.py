import asyncio
import datetime
import json
import os
import time
import uuid
from typing import List, Any

import aiohttp
from bs4 import BeautifulSoup


class BaseAPIHandler:
    BASE_URL: str = "https://pushkinlibrary.kz"
    CATEGORIES_URL: str = "https://pushkinlibrary.kz/ru"
    CATEGORIES_URL_KZ: str = "https://pushkinlibrary.kz/kz"
    CATEGORIES_URL_EN: str = "https://pushkinlibrary.kz/en"

    def __init__(self):
        self.session = None

    def get_session(self) -> aiohttp.ClientSession:
        if not self.session:
            self.session = aiohttp.ClientSession()

        # Создаем новую сессию с переданными заголовками и куками
        return self.session

    async def get_text(self, url, retries=60):
        attempt = 0
        while attempt < retries:
            attempt += 1
            try:
                timeout = aiohttp.ClientTimeout(total=1 * attempt)
                async with self.get_session().get(url, timeout=timeout) as response:
                    if response.status == 400:
                        return None

                    text = await response.text()
                    return text
            except asyncio.TimeoutError:
                print(f"Таймаут при попытке запроса: {url}. Попытка {attempt} из {retries}")
                if attempt == retries:
                    return None
            except Exception as e:
                print(f"Произошла ошибка: {e}")
                return None

    async def get_categories(self, url_category: str, lang:str) -> List[tuple[str, Any]]:
        """

        :return: Список кортежей, где первое это категория, а второе это ссылка на эту категорию
        """

        text = await self.get_text(url_category)

        soup = BeautifulSoup(text, "html.parser")
        categories: List[tuple[str, Any]] = list()
        lst = soup.find("header", attrs={"id": "sp-header"})
        for i in lst.find_all('a'):
            if i['href'].startswith('http') or i['href'].startswith('#') or i['href'].startswith('javascript') or i['href'].endswith('news.html')or i['href'] == f'/{lang}/':
                continue
            categories.append((i.text, i['href']))

        return categories

    async def get_content(self, url: str) -> tuple[str, str, list, set]:
        """
        :return:
        """
        text = await self.get_text(url)
        print(url)

        soup = BeautifulSoup(text, 'html.parser')

        main_c = soup.find('section', {'id': 'sp-main-body'})
        lst = soup.find('article', {'class': 'item-page'})
        if lst is None:
            lst = main_c
        title = lst.find('div', {'class': 'entry-header'})
        content = lst.text

        links = list()

        keywords = list()
        k = soup.find('section', {'id': 'sp-page-title'})
        for i in k.find_all('a'):
            try:
                keywords.append(self.make_text(i.text))
                links.append(i['href'])
            except:
                pass
        for i in lst.find_all('a'):
            try:
                if len(links) >= 10:
                    break
                if i['href'].startswith('#'):
                    continue
                links.append(i['href'])
            except:
                pass

        keywords = set(keywords)
        full_links = list()
        for link in set(links):
            if link.startswith("http"):
                full_links.append(link)
            else:
                full_links.append(f"{self.BASE_URL}{link}")



        if title is None:
            title = lst.find('p')

        return title.get_text(strip=True), self.make_text(content), full_links, keywords


    def make_text(self, text: str) -> str:
        return " ".join(text.replace('\n', ' ').replace('\t', ' ').strip().split())



    async def parse(self, url_category: str, lang: str = 'ru'):
        """
        Начало парсинга
        :return:
        """

        categories = await self.get_categories(url_category, lang)
        c_len = len(categories)
        parse = list()
        i = 1
        for category, c_url in categories:
            if c_url.startswith("#") or c_url.startswith("https") or not c_url:
                continue
            category_url = f"{self.BASE_URL}{c_url}"
            print(f"{i}/{c_len} {category_url}")

            title, content, links, keywords = await self.get_content(category_url)

            parse.append(
                {
                    "id": f"{uuid.uuid4()}",
                    "title": title,
                    "content": content,
                    "url": category_url,
                    "keywords": list({*keywords, self.make_text(category)}),
                    "timestamp": str(datetime.datetime.now()),
                    "related_links": links,
                    "language": lang,
                    "source": "general",
                })

            i += 1

        self.write(parse, lang)

        await self.close_session()

    def write(self, data: list, lang: str):
        file_path = f'../json/general-{lang}.json'

        # Проверяем, существует ли файл
        if os.path.exists(file_path):
            # Читаем существующие данные из файла
            with open(file_path, 'r', encoding='utf-8') as json_file:
                try:
                    existing_data = json.load(json_file)
                except json.JSONDecodeError:
                    # Если файл пустой или поврежден, инициализируем пустой список
                    existing_data = []
        else:
            # Если файл не существует, создаем пустой список
            existing_data = []

        # Добавляем новые данные к существующим
        existing_data.extend(data)

        # Записываем объединенные данные обратно в файл
        with open(file_path, 'w', encoding='utf-8') as json_file:
            json.dump(existing_data, json_file, ensure_ascii=False, indent=4)

    async def close_session(self):
        if self.session is not None:
            await self.session.close()
            self.session = None


async def main():
    start_time = time.time()
    b = BaseAPIHandler()
    await b.parse(b.CATEGORIES_URL_KZ, lang='kz')
    await b.parse(b.CATEGORIES_URL_EN,lang='en')
    # await b.parse(b.CATEGORIES_URL)
    # Конец замера времени
    end_time = time.time()

    # Вычисление времени выполнения
    execution_time = end_time - start_time
    print(execution_time)


if __name__ == "__main__":
    asyncio.run(main())
    # read_categories("esimder_output_list.json")
