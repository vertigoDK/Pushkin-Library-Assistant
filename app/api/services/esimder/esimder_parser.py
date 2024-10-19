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

    def __init__(self):
        self.session = None

    def get_session(self) -> aiohttp.ClientSession:
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
            "2984f25a664ec8dbe4b165aaa42d3810": "4e2d09466fa0c87fdf9a1d25c2b432ac",
            "61cb0e9afd8a5aec45494fe62d65aa75": "ru-RU"
        }

        # Создаем новую сессию с переданными заголовками и куками
        return aiohttp.ClientSession(headers=headers, cookies=cookies)

    async def get_text(self, url, retries=60):
        attempt = 0
        while attempt < retries:
            attempt += 1
            try:
                async with self.get_session() as session:
                    timeout = aiohttp.ClientTimeout(total=1 * attempt)  # Увеличиваем таймаут до 20 секунд
                    async with session.get(url, timeout=timeout) as response:
                        text = await response.text()
                        return text
            except asyncio.TimeoutError:
                print(f"Таймаут при попытке запроса: {url}. Попытка {attempt} из {retries}")
                if attempt == retries:
                    return None
            except Exception as e:
                print(f"Произошла ошибка: {e}")
                return None

    async def get_categories(self) -> List[tuple[str, Any]]:
        """

        :return: Список кортежей, где первое это категория, а второе это ссылка на эту категорию
        """

        text = await self.get_text(self.CATEGORIES_URL)

        soup = BeautifulSoup(text, "html.parser")
        categories: List[tuple[str, Any]] = list()
        lst = soup.find("dl", attrs={"id": "offlajn-accordion-140-1", "class": "level1"})
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
        for i in lst.find_all('a'):
            names.append((i.text.strip(), i['href']))

        return names

    async def get_content_name(self, short_name: str, name_url: str):
        """

        :param short_name:
        :param name_url:
        :return:
        """
        text = await self.get_text(name_url)

        soup = BeautifulSoup(text, 'html.parser')

        soup = soup.find('div', {'class': 'item-page'}).find_all('p')
        content = ""
        for p in soup:
            style = p.get('style', '')
            if 'text-align: center' in style:
                # Найден параграф с text-align: center, цикл прерывается.
                break
            content += p.get_text()

        # Если имена состоят из 2 слов а не из 3
        full_name = " ".join(content.split()[:len(short_name.split(' '))])
        return full_name, content

    async def parse(self):
        """
        Начало парсинга
        :return:
        """

        categories = await self.get_categories()

        parse = list()

        for category, c_url in categories:
            category_url = f"{self.BASE_URL}{c_url}?limit=0"
            names = await self.get_names_in_categories(category_url)
            for short_name, n_url in names:
                name_url = f"{self.BASE_URL}{n_url}"
                full_name, content = await self.get_content_name(short_name, name_url)
                parse.append({"name_url": name_url, "full_name": full_name, "content": content, "category": category,
                              "category_url": category_url})

            self.write(parse)

        await self.close()

    def write(self, data: list):
        file_path = 'esimder_output_list.json'

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

    async def close(self):
        await self.session.close()


async def main():
    start_time = time.time()
    b = BaseAPIHandler()
    await b.parse()
    # Конец замера времени
    end_time = time.time()

    # Вычисление времени выполнения
    execution_time = end_time - start_time
    print(execution_time)


if __name__ == "__main__":
    asyncio.run(main())


class EsimderParser:
    BASE_URL = 'https://esimder.pushkinlibrary.kz/index.php'

    def __init__(self):
        self.session = None

    async def parse(self):
        self.session = aiohttp.ClientSession()
        links = await self.get_all_links()

        for link in links:
            lst_name = await self.get_list_name(link[1])
            for name in lst_name:
                print(name[0])  # имя
                text = await self.get_main_text(name[1])
                # TODO: Дописать формат и все с этим связанное. У меня есть text который просто возврощает описание данного имени

        await self.close_session()

    async def get_all_links(self):
        async with self.session.get("https://esimder.pushkinlibrary.kz/ru/ushiteli.html") as response:
            re = await response.text()

        soup = BeautifulSoup(re, 'html.parser')

        links = []
        for i in soup.find('div', {'class': 'offlajn-accordion-140-1-container-inner'}).find_all('dt',
                                                                                                 class_='notparent'):
            link = i.find('a')
            links.append((link.text, self.BASE_URL + link.get('href')))

        s = soup.find('div', class_='display-limit').find('option', {'selected': 'selected'}).text

        return links

    async def get_list_name(self, url: str) -> list[tuple[str, str]]:
        async with self.session.get(f'{url}?limit=0') as response:
            re = await response.text()

        print(url)

        soup = BeautifulSoup(re, 'html.parser')

        _list_name = soup.find('table', class_='category').find_all('a')
        list_name = list()
        for i in _list_name:
            list_name.append((i.text.replace('\n', '').replace('\r', '').strip(), f"{self.BASE_URL}{i.get('href')}"))
        return list_name

    async def get_main_text(self, url: str) -> str:
        """
        :return: возвращает просто текст
        """
        async with self.session.get(url) as response:
            re = await response.text()
        soup = BeautifulSoup(re, 'html.parser')

        soup = soup.find('div', {'class': 'item-page'}).find_all('p')
        text = ""
        for p in soup:
            style = p.get('style', '')
            if 'text-align: center' in style:
                print("Найден параграф с text-align: center, цикл прерывается.")
                break
            text += p.get_text()
        return text

    async def close_session(self):
        await self.session.close()
