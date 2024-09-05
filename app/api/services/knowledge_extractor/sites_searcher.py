"""
Класс для поиска информации по сайту
"""
import sys

import requests
from typing import Dict, Optional
from result_parser import parse_search_results

class BaseSearchEngine:

    def __init__(self, user_request: str):
        self._user_request = user_request

    LINKS: Dict[str, str] = {
        "PUSHKIN_LIBRARY_SEARCH": "https://pushkinlibrary.kz/ru/component/search/",
        #Параметры к PUSHKIN_LIBRARY_SEARCH ?searchword=%D1%87%D1%82%D0%BE%20%D1%82%D0%BE&searchphrase=all&Itemid=101

    }

    @staticmethod
    def _get_request(url: str, params: Optional[Dict[str, str]] = None, headers: Optional[Dict[str, str]] = None,
                     timeout: Optional[int] = 10) -> Optional[requests.Response]:
        try:
            response = requests.get(url, params=params, headers=headers, timeout=timeout)
            response.raise_for_status()  # Проверка на http ошибки
            return response
        except requests.exceptions.RequestException as e:
            import logging
            logging.error(f"Error while making GET request: {e}")
            return None

class PushkinSearchEngine(BaseSearchEngine):

    def __init__(self, user_request: str):
        super().__init__(user_request)
        self.__url = BaseSearchEngine.LINKS["PUSHKIN_LIBRARY_SEARCH"]

    def start_search(self):
        params: Dict[str, str] = {
            "searchword": self._user_request,
            "searchphrase": "all"
        }
        response: requests.Response = self._get_request(self.__url, params=params)

        if response:
            # Распечатайте статус-код и содержимое ответа
            result_link: str = parse_search_results(response.text)
            print(result_link)
        else:
            print("Failed to retrieve data.")


if __name__ == "__main__":
    search_engine: PushkinSearchEngine = PushkinSearchEngine("Виртуальная справка")
    search_engine.start_search()