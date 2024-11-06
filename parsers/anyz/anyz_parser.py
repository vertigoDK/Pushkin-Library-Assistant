import asyncio
import json
import os
import time
from typing import List, Any, Tuple

import aiohttp
from bs4 import BeautifulSoup


class BaseAPIHandler:
    LEGENDS_URL: str = "https://anyz.pushkinlibrary.kz/ru/iz-ust-v-usta/"
    LEGENDS_URL_KZ: str = "https://anyz.pushkinlibrary.kz/kone-anyz-apsanalar/"

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

    async def get_legends_links(self, category_url:str) -> List[str]:
        """

        :return: Список ссылок на категории
        """

        text = await self.get_text(category_url)

        soup = BeautifulSoup(text, "html.parser")
        links: List[str] = list()
        lst = soup.find_all("div", attrs={"class": "elementor-cta"})
        for i in lst:
            links.append(i.find('a')['href'])

        return links

    async def get_content(self, url: str) -> Tuple[str, str]:
        """

        :return: Список кортежей, где первое это категория, а второе это ссылка на эту категорию
        """

        text = await self.get_text(url)

        soup = BeautifulSoup(text, "html.parser")

        title: str = soup.find('h1').get_text(strip=True)
        content = soup.find_all("div", attrs={"class": "elementor-widget-wrap elementor-element-populated"})[
            10].get_text(strip=True)

        return title, content

    async def parse(self, category_url: str):
        """
        Начало парсинга
        :return:
        """

        links_legends = await self.get_legends_links(category_url)

        parse = list()
        l_len = len(links_legends)
        i = 1
        id = 0
        for url in links_legends:
            id += 1
            print(f"{i}/{l_len} {l_len}")
            title, content = await self.get_content(url)

            parse.append({"id": id, "title": title, "content": content, "url": url})
            id += 1
            i += 1

        self.write(parse)

        await self.close_session()

    def write(self, data: list):
        file_path = '../json/anyz.json'

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
    await b.parse(b.LEGENDS_URL_KZ)
    await b.parse(b.LEGENDS_URL)
    # Конец замера времени
    end_time = time.time()

    # Вычисление времени выполнения
    execution_time = end_time - start_time
    print(execution_time)


if __name__ == "__main__":
    asyncio.run(main())
    # read_categories("esimder_output_list.json")
