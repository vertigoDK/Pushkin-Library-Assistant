import asyncio
import datetime
import json
import os
import time
from typing import List, Any, Set, Dict

import aiohttp
import uuid
from bs4 import BeautifulSoup


class BaseAPIHandler:
    BASE_URL: str = "https://esimder.pushkinlibrary.kz"
    DEFAULT_URL: str = "https://esimder.pushkinlibrary.kz/ru/pisateli-i-poety.html"
    CATEGORIES_URL: str = "https://esimder.pushkinlibrary.kz/ru/ushiteli.html"
    CATEGORIES_URL_KZ: str = "https://esimder.pushkinlibrary.kz/kz/100-janaesim.html"
    CATEGORIES_URL_EN: str = "https://esimder.pushkinlibrary.kz/en/100-new-names.html"

    def __init__(self):
        self.session = None

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

            cookies = {
                # "2984f25a664ec8dbe4b165aaa42d3810": "4e2d09466fa0c87fdf9a1d25c2b432ac",
                # "61cb0e9afd8a5aec45494fe62d65aa75": "ru-RU"
            }
            self.session = aiohttp.ClientSession(headers=headers, cookies=cookies)

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

    async def get_categories(self, url_category: str, lang) -> List[tuple[str, Any]]:
        """

        :return: Список кортежей, где первое это категория, а второе это ссылка на эту категорию
        """

        text = await self.get_text(url_category)

        soup = BeautifulSoup(text, "html.parser")
        categories: List[tuple[str, Any]] = list()
        if lang == 'ru':
            lst = soup.find("dl", attrs={"id": "offlajn-accordion-140-1", "class": "level1"})
        elif lang == 'kz':
            lst = soup.find("dl", attrs={"id": "offlajn-accordion-142-1", "class": "level1"})
        else:
            print(1)
            lst = soup.find("dl", attrs={"id": "offlajn-accordion-143-1", "class": "level1"})

        for i in lst.find_all('a'):
            categories.append((i.text, i['href']))

        return categories

    async def get_names_in_categories(self, c_url: str) -> List[tuple[str, Any]]:
        """
        :param c_url: category url
        :return: Возвращает список имен и ссылку на них.
        """

        text = await self.get_text(c_url)

        soup = BeautifulSoup(text, "html.parser")
        names: List[tuple[str, Any]] = list()
        lst = soup.find('table', attrs={'class': "category"})
        try:
            for i in lst.find_all('a'):
                names.append((i.text.strip(), i['href']))
        except:
            return names

        return names

    async def get_content_name(self, short_name: str, name_url: str):
        """

        :param short_name:
        :param name_url:
        :return:
        """
        try:
            text = await self.get_text(name_url)

            soup = BeautifulSoup(text, 'html.parser')

            soup = soup.find('div', {'class': 'item-page'}).find_all('p')
            content = ""
            for p in soup:
                style = p.get('style', '')
                if 'text-align: center' in style or 'margin-bottom: 0cm' in style:
                    # Найден параграф с text-align: center, цикл прерывается.
                    break
                content += p.get_text()

            content = content.replace('\u00A0', ' ')
            # Если имена состоят из 2 слов а не из 3
            full_name = " ".join(content.split()[:len(short_name.split(' '))])
        except:
            print(name_url)
            return
        return full_name, content

    async def parse(self, url_category: str, lang: str = 'ru'):
        """
        Начало парсинга
        :return:
        """

        categories = await self.get_categories(url_category, lang)

        list_url = set()

        parse = list()
        c_len = len(categories)
        # url: (short_name, [category])
        all_name: Dict[str, Dict] = dict()

        i = 1
        for category, c_url in categories:
            category_url = f"{self.BASE_URL}{c_url}?limit=0"
            text_p = f"{i}/{c_len} {category_url}"
            print(text_p)
            names = await self.get_names_in_categories(category_url)
            j = 1
            for name, url in names:
                print(f"{text_p}   {j}/{len(names)}   {name}")
                a = all_name.get(url, {
                    "short_name": '',
                    "category": [],
                    'category_url': []
                })

                a["short_name"] = name
                a["category"] = a["category"] + [category]
                a["category_url"] = a["category_url"] + [category_url]

                all_name[url] = a
                j+=1
            i+=1


        c_len = len(all_name)
        i = 1
        for n_url, a in all_name.items():

            short_name = a["short_name"]
            categories = a["category"] = a["category"]
            categories_url= a["category_url"] = a["category_url"]

            print(f"{i}/{c_len} {short_name}")
            # Добавляем в уникальный список
            list_url.add(n_url)
            name_url = f"{self.BASE_URL}{n_url}"
            if name_url.find('#') != -1:
                continue
            full_name, content = await self.get_content_name(short_name, name_url)
            parse.append(
                {
                    "id": f"{uuid.uuid4()}",
                    "title": full_name,
                    "content": content,
                    "url": name_url,
                    "keywords": categories,
                    "timestamp": str(datetime.datetime.now()),
                    "related_links": categories_url,
                    "language": lang,
                    "source": "esimder",
                })
            i += 1

        self.write(parse, lang)

        await self.close_session()

    def write(self, data: list, lang: str = 'ru'):
        file_path = f'../json/esimder-{lang}.json'

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
    await b.parse(b.CATEGORIES_URL_EN, lang='en')
    await b.parse(b.CATEGORIES_URL, lang='ru')
    await b.parse(b.CATEGORIES_URL_KZ, lang='kz')
    # Конец замера времени
    end_time = time.time()

    # Вычисление времени выполнения
    execution_time = end_time - start_time
    print(execution_time)


if __name__ == "__main__":
    asyncio.run(main())
    # read_categories("esimder_output_list.json")

