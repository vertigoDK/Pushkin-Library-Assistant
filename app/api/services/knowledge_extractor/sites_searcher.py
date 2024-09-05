"""
Класс для поиска информации по сайту
"""
import sys

import requests
from typing import Dict, Optional
from result_parser import parse_search_results, fetch_and_parse_page

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

        if response and response.ok:
            # Распечатайте статус-код и содержимое ответа
            result_links = parse_search_results(response.text)
            print(result_links)
            if isinstance(result_links, list) and result_links:
                # Обрабатываем только первый результат
                first_result = result_links[0]
                # Извлекаем URL из строки формата "Название: URL"
                result_url = first_result.split(': ')[1] if ': ' in first_result else None
                if result_url:
                    content = fetch_and_parse_page(result_url)
                    if 'error' in content:
                        print(f"Ошибка при запросе страницы: {content['error']}")
                    else:
                        print(content['text'])
                else:
                    print("Не удалось извлечь URL из результата.")
            else:
                print(result_links)  # Это сообщение об ошибке или "Нет записей"
        else:
            print("Failed to retrieve data.")


if __name__ == "__main__":
    search_engine: PushkinSearchEngine = PushkinSearchEngine("График работы")
    search_engine.start_search()