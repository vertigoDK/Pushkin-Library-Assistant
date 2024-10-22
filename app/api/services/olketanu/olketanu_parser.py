import asyncio
import json
import os
import time
from ast import parse
from pprint import pprint
from typing import List, Any, Set, Optional

import aiohttp
from bs4 import BeautifulSoup
from certifi import contents
from django.template.defaultfilters import title
from unicodedata import category

from flowise.test import url_link


class OlketanuBaseAPIHandler:
    BASE_URL: str = "https://olketanu.pushkinlibrary.kz"
    CATEGORIES_URL: str = "https://olketanu.pushkinlibrary.kz/index.php/ru/"

    def __init__(self):
        self.session = None

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

        return not url.endswith(".jpg") and not url.endswith(".pdf") and url.startswith('/index.php')

    async def get_categories(self) -> List[tuple[str, Any]]:
        """

        :return: Список кортежей, где первое это категория, а второе это ссылка на эту категорию
        """

        text = await self.get_text(self.CATEGORIES_URL)

        soup = BeautifulSoup(text, "html.parser")
        categories: List[tuple[str, Any]] = list()
        lst = soup.find("dl", attrs={"id": "offlajn-accordion-408-1"})
        for i in lst.find_all('a'):

            if self.is_a(i["href"]):
                categories.append((i.text, i['href']))

        return categories

    async def get_content(self, c_url: str, d=0) -> Optional[List[Set]]:

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
            lst_p = post.find_all('p')
            title = None
            if not len(lst_p):
                title = post.find('div', attrs={"class": "dd-postmetadataheader"}).text
                lst_p = post.find_all('div', attrs={"class": "dd-article"})
            detailed = " ".join(i.text for i in lst_p if not i.text.startswith('Литература:') and not i.text.startswith(
                '----')).strip().replace('/n',
                                                ' ').replace(
                '/t', ' ').replace('\xa0', ' ')

            if not title:
                title = lst_p[0].text
            content.append({"title": title, "content": detailed, "content_url": c_url})

        return content

    async def parse(self):

        """
        Начало парсинга
        :return:
        """

        # await self.get_content('https://olketanu.pushkinlibrary.kz/index.php/ru/2013-11-13-11-56-26/festivali-i-chteniya.html')
        # return
        # categories = await self.get_categories()
        categories = [('Культура и искусство ВКО', '/index.php/ru/vostochnyj-kazakhstan-v-seti/kultura-i-iskusstvo-vko.html'), ('Значимые события', '/index.php/ru/hist-chronika/znachimye-sobytiya.html'), ('История сёл ВКО', '/index.php/ru/hist-chronika/istoriya-sjol-vko.html'), ('История улиц Усть-Каменогорска', '/index.php/ru/hist-chronika/istoriya-ulits-ust-kamenogorska.html'), ('Памятники Усть-Каменогорска', '/index.php/ru/hist-chronika/pamyatniki-g-ust-kamenogorska.html'), ('Восточно-Казахстанская область', '/index.php/ru/pasport-vko/vostochno-kazakhstanskaya-oblast.html'), ('Усть-Каменогорск', '/index.php/ru/pasport-vko/gorod-ust-kamenogorsk.html'), ('Риддер', '/index.php/ru/pasport-vko/g-ridder.html'), ('Район Алтай', '/index.php/ru/pasport-vko/2012-05-03-05-30-42.html'), ('Глубоковский район', '/index.php/ru/pasport-vko/2012-05-03-05-28-40.html'), ('Зайсанский район ', '/index.php/ru/pasport-vko/2012-05-03-05-30-00.html'), ('Катон-Карагайский район', '/index.php/ru/pasport-vko/2012-05-03-05-31-43.html'), ('Курчумский район', '/index.php/ru/pasport-vko/2012-05-03-05-32-28.html'), ('Самарский район', '/index.php/ru/pasport-vko/samarskii-raion.html'), ('Тарбагатайский район', '/index.php/ru/pasport-vko/2012-05-03-05-33-17.html'), ('Уланский район', '/index.php/ru/pasport-vko/ulanskii-raion-vostochnyi-kazahstan.html'), ('Шемонаихинский район', '/index.php/ru/pasport-vko/shemonaikhinskij-rajon.html'), ('Легенды ВКО', '/index.php/ru/folklor-zolotogo-altaya/legendy-vko.html'), ('Музыкальное наследие ВКО', '/index.php/ru/folklor-zolotogo-altaya/audiokollektsiya.html'), ('Фольклорные сборники', '/index.php/ru/folklor-zolotogo-altaya/literaturnoe-nasledie-vostochnogo-kazakhstana.html'), ('Природные ресурсы', '/index.php/ru/priroda/priroda.html'), ('Заповедные места', '/index.php/ru/priroda/zapovednye-mesta.html'), ('Уникальные места', '/index.php/ru/priroda/unikalnye-mesta.html'), ('Ашутас', '/index.php/ru/sakralnaya-geografiya-vostochniy-qazaqstan/ashutas.html'), ('Пещера "Коныр Аулие"', '/index.php/ru/sakralnaya-geografiya-vostochniy-qazaqstan/peshchera-konyr-aulie.html'), ('Шиликтинская долина', '/index.php/ru/sakralnaya-geografiya-vostochniy-qazaqstan/shiliktinskaya-dolina.html'), ('Белуха', '/index.php/ru/sakralnaya-geografiya-vostochniy-qazaqstan/belukha.html'), ('Мавзолей Ыргызбай Досканулы', '/index.php/ru/sakralnaya-geografiya-vostochniy-qazaqstan/mavzolej-yrgyzbaj-doskanuly.html'), ('Берель', '/index.php/ru/sakralnaya-geografiya-vostochniy-qazaqstan/berel.html'), ('Дом «Алаш арыстары» ', '/index.php/ru/sakralnaya-geografiya-vostochniy-qazaqstan/dom-alash-arystary.html'), ('Литературно-мемориальный музей Ф.М. Достоевского города Семей', '/index.php/ru/sakralnaya-geografiya-vostochniy-qazaqstan/iteraturno-memorialnyj-muzej-f-m-dostoevskogo-goroda-semej.html'), ('Мемориальный комплекс «Абай-Шакарим»', '/index.php/ru/sakralnaya-geografiya-vostochniy-qazaqstan/gosudarstvennyj-istoriko-kulturnyj-i-literaturno-memorialnyj-zapovednik-muzej-abaya-zhidebaj-borili.html'), ('Монумент «Сильнее смерти»', '/index.php/ru/sakralnaya-geografiya-vostochniy-qazaqstan/monument-silnee-smerti.html'), ('Мавзолей Козы Корпеш и Баян Сулу', '/index.php/ru/sakralnaya-geografiya-vostochniy-qazaqstan/mavzolej-kozy-korpesh-i-bayan-sulu.html'), ('Мавзолей Енлик - Кебек', '/index.php/ru/sakralnaya-geografiya-vostochniy-qazaqstan/mavzolej-enlik-kebek.html'), ('Ак-Баур', '/index.php/ru/sakralnaya-geografiya-vostochniy-qazaqstan/ak-baur.html'), ('Абылайкит', '/index.php/ru/sakralnaya-geografiya-vostochniy-qazaqstan/ablajkit.html'), ('Святилище Сарыколь', '/index.php/ru/sakralnaya-geografiya-vostochniy-qazaqstan/svyatilishche-sarykol.html'), ('Краеведческий альманах 2024', '/index.php/ru/kraevedcheskij-almanakh/kraevedcheskij-almanakh-2024.html'), ('Краеведческий альманах 2023', '/index.php/ru/kraevedcheskij-almanakh/kraevedcheskij-almanakh-2023.html'), ('Краеведческий альманах 2022', '/index.php/ru/kraevedcheskij-almanakh/kraevedcheskij-almanakh-2022.html'), ('Краеведческий альманах 2021', '/index.php/ru/kraevedcheskij-almanakh/kraevedcheskij-almanakh-2021.html'), ('Краеведческий альманах 2020', '/index.php/ru/kraevedcheskij-almanakh/kraevedcheskij-almanakh-2020.html'), ('Краеведческий альманах 2019', '/index.php/ru/kraevedcheskij-almanakh/kraevedcheski-almanakh-2019.html'), ('Краеведческий альманах 2018', '/index.php/ru/kraevedcheskij-almanakh/kraev-alman-2018.html'), ('Краеведческий альманах 2017', '/index.php/ru/kraevedcheskij-almanakh/kraevedcheskij-almanakh-2017.html'), ('Краеведческий альманах 2016', '/index.php/ru/kraevedcheskij-almanakh/kraevedcheskij-almanakh-2016.html'), ('Краеведческий альманах 2015', '/index.php/ru/kraevedcheskij-almanakh/kraialmanakh2015.html'), ('Краеведческий альманах 2014', '/index.php/ru/kraevedcheskij-almanakh/kraevedcheskij-almanakh-2014.html'), ('Геология', '/index.php/ru/kraevedcheskij-almanakh/publikatsii-kraevedov/geologiya.html'), ('Достопримечательности и памятники края', '/index.php/ru/kraevedcheskij-almanakh/publikatsii-kraevedov/dostoprimechatelnosti-i-pamyatniki-kraya.html'), ('Исследователи края', '/index.php/ru/kraevedcheskij-almanakh/publikatsii-kraevedov/issledovateli-kraya.html'), ('История.· Этнография.· Культура', '/index.php/ru/kraevedcheskij-almanakh/publikatsii-kraevedov/istoriya-etnografiya-kultura.html'), ('О тех, кто пишет', '/index.php/ru/kraevedcheskij-almanakh/publikatsii-kraevedov/o-tekh-kto-pishet.html'), ('Образование', '/index.php/ru/kraevedcheskij-almanakh/publikatsii-kraevedov/obrazovanie.html'), ('Ономастика', '/index.php/ru/kraevedcheskij-almanakh/publikatsii-kraevedov/onomastika.html'), ('Религия', '/index.php/ru/kraevedcheskij-almanakh/publikatsii-kraevedov/religiya.html'), ('Искусство', '/index.php/ru/kraevedcheskij-almanakh/publikatsii-kraevedov/iskusstvo.html'), ('Партизаны подпольщики', '/index.php/ru/vko-pobedy/partizan.html'), ('Участники трудовой армии', '/index.php/ru/vko-pobedy/uchastniki-trudovoj-armii.html'), ('В тылу как в бою', '/index.php/ru/vko-pobedy/v-tylu-kak-v-boyu.html'), ('30-ая Гвардейская дивизия', '/index.php/ru/vko-pobedy/30-gvardeiskaya-divizia.html'), ('Воспоминания о войне', '/index.php/ru/vko-pobedy/vospominaniya-o-vojne.html'), ('Статьи "Восточный Казахстан в годы ВОВ" ', '/index.php/ru/vko-pobedy/stati-vostochnyj-kazakhstan-v-gody-vov.html'), ('Участники обороны Брестcкой крепости - восточноказахстанцы', '/index.php/ru/vko-pobedy/uchastniki-oborony-brestkoj-kreposti-vostochnokazakhstantsy.html'), ('Видеоколлекция', '/index.php/ru/video-coll.html'), ('Литературное объединение «Звено Алтая»', '/index.php/ru/2013-11-13-11-56-26/zveno-altaya.html'), ('Фестивали и чтения', '/index.php/ru/2013-11-13-11-56-26/festivali-i-chteniya.html'), ('От первого лица', '/index.php/ru/2013-11-13-11-56-26/2013-11-13-11-59-36.html'), ('Литературные и памятные места Восточного Казахстана', '/index.php/ru/2013-11-13-11-56-26/literaturnye-i-pamyatnye-mesta-vostochnogo-kazakhstana.html'), ('Журнал фантастики Фэнзин', '/index.php/ru/2013-11-13-11-56-26/fenzin-ru.html'), ('К. Мухамедханов: библиографический указатель', '/index.php/ru/k-mukhamedkhanovu.html')]


        parse = list()
        i = 1
        for category, c_url in categories:
            print(f'{i}/{len(categories)}',end=' ')
            category_url = f"{self.BASE_URL}{c_url}"
            contents = await self.get_content(category_url)

            category_parse = list()

            for content in contents:
                category_parse.append(content)

            parse.append({"category": category, "category_url": category_url, "category_content": category_parse})

            self.write(parse)

            i+=1

        # await self.close_session()

    def write(self, data: list):
        file_path = 'olketanu_output_list.json'

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
    await b.parse()
    # Конец замера времени
    end_time = time.time()

    # Вычисление времени выполнения
    execution_time = end_time - start_time
    print(execution_time)


def read_categories(json_file_path):
    categories = list()  # Множество для хранения уникальных категорий

    # Чтение JSON данных из файла
    with open(json_file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)

        # Проход по каждому элементу в данных и добавление категории в множество
        for entry in data:
            category = entry.get("category")
            if category:
                if len(categories) < 1 or categories[-1] != category:
                    categories.append(category)

    # Вывод категорий
    print("Найденные категории:")
    for category in categories:
        print(category)

    return categories


if __name__ == "__main__":
    asyncio.run(main())
