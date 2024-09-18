from typing import List, Any

import requests
from bs4 import BeautifulSoup


class BaseAPIHandler:
    BASE_URL: str = "https://esimder.pushkinlibrary.kz/ru/pisateli-i-poety.html"
    DEFAULT_URL: str = "https://esimder.pushkinlibrary.kz/ru/pisateli-i-poety.html"

    def __init__(self):
        pass

    def get_categories(self) -> List[tuple[str, Any]]:
        '''

        :return: Список кортежей, где первое это категория, а второе это ссылка на эту категорию
        '''
        soup = BeautifulSoup(requests.get(self.DEFAULT_URL).text, "html.parser")
        names = list()
        lst = soup.find("dl", attrs={"id": "offlajn-accordion-140-1", "class": "level1"})
        for i in lst.find_all('a'):
            names.append((i.text, i['href']))

        [print(i) for i in names]

        return names


def main():
    b = BaseAPIHandler()
    b.get_categories()


if __name__ == "__main__":
    main()
