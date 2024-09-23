import asyncio
from typing import List, Any

import aiohttp
from bs4 import BeautifulSoup


class BaseAPIHandler:
    BASE_URL: str = "https://esimder.pushkinlibrary.kz/ru/pisateli-i-poety.html"
    DEFAULT_URL: str = "https://esimder.pushkinlibrary.kz/ru/pisateli-i-poety.html"

    def __init__(self):
        self.session = None

    async def get_categories(self) -> List[tuple[str, Any]]:
        '''

        :return: Список кортежей, где первое это категория, а второе это ссылка на эту категорию
        '''
        self.session = aiohttp.ClientSession()
        async with self.session.get("https://esimder.pushkinlibrary.kz/ru/ushiteli.html") as response:
            text = await response.text()
        soup = BeautifulSoup(text, "html.parser")
        names = list()
        lst = soup.find("dl", attrs={"id": "offlajn-accordion-140-1", "class": "level1"})
        for i in lst.find_all('a'):
            names.append((i.text, i['href']))

        [print(i) for i in names]

        return names

    def compare_categories(self) -> bool:
        """

        :return:
        """




def main():
    b = BaseAPIHandler()
    asyncio.run(b.get_categories())


if __name__ == "__main__":
    main()




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


