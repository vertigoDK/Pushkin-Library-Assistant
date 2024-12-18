import asyncio
import datetime
import json
import os
import pprint
import time
from typing import List, Any, Optional, Dict

import aiohttp
from bs4 import BeautifulSoup
import uuid


class OlketanuBaseAPIHandler:
    BASE_URL: str = "https://olketanu.pushkinlibrary.kz"
    CATEGORIES_URL: str = "https://olketanu.pushkinlibrary.kz/index.php/ru/"
    CATEGORIES_URL_KZ: str = "https://olketanu.pushkinlibrary.kz/index.php/kz/"

    def __init__(self):
        self.session = None
        self.id = 1

    def get_session(self) -> aiohttp.ClientSession:
        if not self.session:
            headers = {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:131.0) Gecko/20100101 Firefox/131.0",
                "Accept": "*/*",
                "Accept-Language": "ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3",
                "Accept-Encoding": "gzip, deflate, br, zstd",
                "Referer": "https://olketanu.pushkinlibrary.kz/index.php/ru/hist-chronika/znachimye-sobytiya.html",
                "DNT": "1",
                "Sec-GPC": "1",
                "Connection": "keep-alive",
                "Cookie": "a0c9dde081ecbfd28c7e9f629831e66b=46cf91fe016e0904a8c848d235127c1b; 3af929f1ee051bb118af7988b4407c27=ru-RU",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-origin",
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

    @staticmethod
    def is_a(url: str):
        if not (not url.endswith(".jpg") and not url.endswith(".pdf") and (
                url.startswith('/index.php')) or url.startswith('/ru') or url.startswith('/kz')):
            print(url)

        return not url.endswith(".jpg") and not url.endswith(".pdf") and (
            url.startswith('/index.php')) or url.startswith('/ru') or url.startswith('/kz')

    async def get_categories(self, url: str) -> List[tuple[str, str, str]]:
        """

        :return: Список кортежей, где первое это категория, а второе это ссылка на эту категорию
        """

        text = await self.get_text(url)

        soup = BeautifulSoup(text, "html.parser")
        categories: List[tuple[str, str, str]] = list()
        lst = soup.find("dl", attrs={"id": "offlajn-accordion-408-1"})
        category = ""
        if lst is None:
            lst = soup.find("dl", attrs={"id": "offlajn-accordion-409-1"})
        for child in lst.find_all(['dd', 'dt']):
            if child.name == 'dt':
                if child.text:
                    category = child.text.strip()
            else:
                for i in child.find_all("a"):
                    if self.is_a(i["href"]):
                        categories.append((i.text, i['href'], category))

        return categories

    async def get_content(self, c_url: str, d=0) -> Optional[List[Dict]]:

        print("-" * d, c_url)
        text = await self.get_text(c_url)
        if not text:
            return None

        soup = BeautifulSoup(text, "html.parser")

        content = list()

        if lst := soup.find("div", attrs={"class": "blog"}):
            for i in lst.find_all('a', attrs={"class": "readon dd-button"}):
                if not self.is_a(i["href"]):
                    continue
                detailed_url = f'{self.BASE_URL}{i["href"]}'
                det = await self.get_content(detailed_url, d + 1)
                if det:
                    content.append(*det)
        elif lst := soup.find("div", attrs={"class": "item-page"}).find('table'):
            for i in lst.find_all('a'):
                if not self.is_a(i["href"]):
                    continue
                detailed_url = f'{self.BASE_URL}{i["href"]}'
                det = await self.get_content(detailed_url, d + 1)
                if det:
                    content.append(*det)

        else:

            post = soup.find('div', attrs={"class": "item-page"})

            # Попытка найти заголовок статьи

            title = None

            # Проверяем несколько возможных вариантов расположения заголовка

            if post.find('h1'):

                title = post.find('h1').get_text(strip=True)

            elif post.find('h2'):

                title = post.find('h2').get_text(strip=True)

            elif post.find('div', attrs={"class": "dd-postmetadataheader"}):

                title = post.find('div', attrs={"class": "dd-postmetadataheader"}).get_text(strip=True)

            # Находим текстовые блоки статьи: сначала ищем параграфы

            lst_p = post.find_all('p')

            # Если параграфов нет, ищем в альтернативном блоке

            if not lst_p:
                lst_p = post.find_all('div', attrs={"class": "dd-article"})

            # Извлекаем текст, фильтруя ненужные блоки

            detailed_list = list()

            for i in lst_p:

                if i.get_text(strip=True).startswith('  Литература') and i.get_text(strip=True).startswith(

                        '----'):
                    break

                detailed_list.append(i.get_text(strip=True))

            detailed_text = " ".join(detailed_list).replace('\n', ' ').replace('\t', ' ').replace('\xa0', ' ')

            # Если заголовок не найден ранее, используем первый элемент текста как заголовок

            if not title and detailed_list:
                title = detailed_list[0]

            content.append({"title": title, "content": detailed_text, "content_url": c_url})

        return content

    async def parse(self, url_category: str = ""):
        """
        Начало парсинга
        :return:
        """

        ds = [
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3289-abaj-da-yly.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3315-pakhomov-k-shesi.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3290-iz-tty-ajty-ov-k-shesi.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3316-permitin-k-shesi.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3291-astafev-k-shesi.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3317-potanin-k-shesi.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3292-uezov-da-yly.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3318-roshchin-k-shesi.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3293-bazhov-k-shesi.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3319-safonov-k-shesi.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3294-bashikov-k-shesi.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3320-serikbaev-k-shesi.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3295-bespalov-k-shesi.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3321-slavskij-zha-alauy.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3298-burov-k-shesi.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3323-to-tarov-k-shesi.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3299-vartanyan-k-shesi.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3324-turov-k-shesi.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3300-vasilev-k-shesi.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3325-tepov-k-shesi.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3302-volkov-k-shesi.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3327-chernov-k-shesi.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3303-voronin-k-shesi.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3328-chernykh-k-shesi.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3304-golovkov-k-shesi.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3305-karmanov-k-shesi.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3307-karbushev-k-shesi.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3309-likharev-k-shesi.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3311-mashukov-k-shesi.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3312-mekhnin-k-shesi.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3313-mikhaelis-k-shesi.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3314-myzy-k-shesi.html",
            "https://olketanu.pushkinlibrary.kz/index.php/kz/tarih-betterinde/skemen-zhajly-ne-bilesiz/skemen-alasynda-y-k-sheler-tarikhy/92-kraevedcheskie-meropriyatiya/3311-mashukov-k-shesi.html"
        ]

        ds = set(ds)

        # await self.get_content('https://olketanu.pushkinlibrary.kz/index.php/ru/2013-11-13-11-56-26/festivali-i-chteniya.html')
        # return
        categories = (await self.get_categories(url_category))[62:]

        parse = list()
        i = 1
        for category, c_url, main_category in categories:

            print(f'{i}/{len(categories)}', end=' ')
            category_url = f"{self.BASE_URL}{c_url}"

            contents = await self.get_content(category_url)
            # for category_url in ds:
            #     if category_url.startswith("https://olketanu.pushkinlibrary.kz/ru/component/search"):
            #         continue
            #
            #     contents = await self.get_content(category_url)

            for content in contents:
                parse.append(
                    {
                        "id": f"{uuid.uuid4()}",
                        "content": content["content"],
                        "keywords": [category, main_category],
                        "url": content["content_url"],
                        "language": "kz",
                        "title": content["title"],
                        "timestamp": str(datetime.datetime.now()),
                        "related_links": [category_url, ],
                        "source": "olketanu",

                    })
                self.id += 1
            i += 1

        self.write(parse)
        # await self.close_session()

    def write(self, data: list):
        file_path = '../json/olketanu.json'

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
    b = OlketanuBaseAPIHandler()
    await b.parse(url_category=b.CATEGORIES_URL_KZ)
    # await b.parse(url_category=b.CATEGORIES_URL)
    # Конец замера времени
    end_time = time.time()

    # Вычисление времени выполнения
    execution_time = end_time - start_time
    print(execution_time)


if __name__ == "__main__":
    asyncio.run(main())
