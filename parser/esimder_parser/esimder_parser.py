import asyncio
from typing import List
from bs4 import BeautifulSoup
from requests import Response
import aiohttp


class EsimderParser:
    BASE_URL = 'https://esimder.pushkinlibrary.kz/index.php'

    def __init__(self):
        self.session = None

    async def parse(self):
        self.session = aiohttp.ClientSession()
        links = await self.get_all_links()

        for link in links:
            lst_name = await self.get_list_name(link[1])

        await self.close_session()

    async def get_all_links(self):
        async with self.session.get("https://esimder.pushkinlibrary.kz/ru/ushiteli.html") as response:
            re = await response.text()

        soup = BeautifulSoup(re, 'html.parser')

        links = []
        for i in soup.find('div', {'class': 'offlajn-accordion-140-1-container-inner'}).find_all('a'):
            links.append((i.text, self.BASE_URL + i.get('href')))

        s = soup.find('div', class_='display-limit').find('option', {'selected': 'selected'}).text

        return links

    async def get_list_name(self, url) -> List[List[str]]:
        async with self.session.get(f'{url}?limit=0') as response:
            re = await response.text()

        soup = BeautifulSoup(re, 'html.parser')

        _list_name = soup.find('table', class_='category').find_all('a')
        list_name = list()
        for i in _list_name:
            list_name.append([i.text, f"{self.BASE_URL}{i.get('href')}"])
        print(list_name)
        return list_name

    async def get_main_text(self) -> str:
        """
        :return: возвращает просто текст
        """
        async with self.session.get('https://esimder.pushkinlibrary.kz/ru/pisateli-i-poety/898-.html') as response:
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


if __name__ == '__main__':
    parser = EsimderParser()
    asyncio.run(parser.parse())
