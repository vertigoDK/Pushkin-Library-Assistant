import asyncio
import json
import os
import time
from typing import List, Any

import aiohttp
from bs4 import BeautifulSoup
import uuid


class BaseAPIHandler:
    BASE_URL: str = "http://irbis.pushkinlibrary.kz:8087"
    DEFAULT_URL: str = "https://esimder.pushkinlibrary.kz/ru/pisateli-i-poety.html"
    CATEGORIES_URL: str = "http://irbis.pushkinlibrary.kz:8087/jirbis2/index.php?lang=ru"
    CATEGORIES_URL_KZ: str = "http://irbis.pushkinlibrary.kz:8087/jirbis2/index.php?lang=kz"
    CATEGORIES_URL_EN: str = "http://irbis.pushkinlibrary.kz:8087/jirbis2/index.php?lang=en"

    id = 1

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

    async def get_categories(self, url_category: str) -> List[tuple[str, Any]]:
        """

        :return: Список кортежей, где первое это категория, а второе это ссылка на эту категорию
        """

        text = await self.get_text(url_category)

        soup = BeautifulSoup(text, "html.parser")
        categories: List[tuple[str, Any]] = list()
        lst = soup.find_all("div", attrs={"class": "module_round_box_outer"})
        for i in lst[2].find_all('a'):
            categories.append((i.text, i['href']))

        return categories

    async def get_content(self, url: str) -> tuple[str, str, set, set]:
        """
        :return:
        """
        text = await self.get_text(url)
        print(url)

        soup = BeautifulSoup(text, 'html.parser')

        lst = soup.find('div', {'class': 'item-page'})
        title = lst.find('h2')
        content = lst.text

        links = set(self.links(lst=lst.find_all('a')))
        keywords = list()

        for i in soup.find("div", attrs={"id": "s5_breadcrumb_wrap"}).find_all('a')[1:]:
            keywords.append(i.text)

        keywords = set(keywords)

        if title is None:
            title = lst.find('p')

        return title.get_text(strip=True), content, links, keywords

    def links(self, lst) -> List[str]:
        links = list()
        for i in lst:
            if len(links) > 10: break
            try:
                a = i['href']

                if a.startswith("/jirbis2/index.php"):
                    a = "http://irbis.pushkinlibrary.kz:8087" + a
                elif a.startswith("http://imena.pushkinlibrary.kz"):
                    continue
                elif a.startswith("index.php?option"):
                    a = "http://irbis.pushkinlibrary.kz:8087/jirbis2" + a
                elif a.startswith("index.php"):
                    continue

                if a.endswith(".jpeg") or a.endswith(".jpg") or a.endswith(".png"):
                    continue

                links.append(a)

            except Exception as e:
                continue

        return links




    async def parse(self, url_category: str, lang: str = 'ru'):
        """
        Начало парсинга
        :return:
        """

        categories = await self.get_categories(url_category)
        c_len = len(categories)
        parse = list()
        i = 1
        for category, c_url in categories:
            if c_url.startswith("#") or c_url.startswith("https") or not c_url:
                continue
            category_url = f"{self.BASE_URL}{c_url}"
            print(f"{i}/{c_len} {category_url}")

            title, content, links, keywords = await self.get_content(category_url)

            import datetime
            parse.append(
                {
                    "id": f"{uuid.uuid4()}",
                    "title": title,
                    "content": content,
                    "url": category_url,
                    "keywords": [*keywords, category],
                    "timestamp": str(datetime.datetime.now()),
                    "related_links": [*links],
                    "language": lang,
                    "source": "irbis",
                })

            self.id += 1
            i += 1

        self.write(parse, lang)

        await self.close_session()

    def write(self, data: list, lang: str):
        file_path = f'../json/irbis-{lang}.json'

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
