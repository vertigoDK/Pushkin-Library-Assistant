"""
Модуль содержит классы для обработки API запросов к системе IRBIS.

Классы:
- BaseAPIHandler: Базовый класс для обработки запросов к API. Содержит методы для генерации случайных строк и проверки статуса ответа.
- BookSearchHandler: Класс для выполнения поисковых запросов в системе IRBIS. Включает методы для выполнения запросов, установки выбранных баз данных и профиля пользователя, а также получения результатов поиска.

Методы класса BaseAPIHandler:
- _generate_random_string: Генерирует случайную строку заданной длины, состоящую из букв и цифр.
- _generate_random_number_string: Генерирует случайную строку заданной длины, состоящую только из цифр.
- _check_response: Проверяет статус ответа и вызывает исключение, если запрос завершился с ошибкой.
- _post_request: Отправляет POST запрос с данными.
- _get_request: Отправляет GET запрос по указанному URL.

Методы класса BookSearchHandler:
- __init__: Инициализирует обработчик с параметрами поиска и настраивает сессию.
- _search_request: Отправляет запрос на поиск с заданными параметрами.
- _set_selected_databases: Устанавливает выбранные базы данных для поиска.
- _set_user_profile: Устанавливает пользовательский профиль для поиска.
- _get_search_results: Получает результаты поиска.
- execute_search: Выполняет полный процесс поиска и возвращает результаты.
"""

import requests
import random
import string
from typing import Dict, Optional
from .HTMLParser import HTMLParser
from typing import Union, Any

class BaseAPIHandler:
    BASE_URL: str = "http://irbis.pushkinlibrary.kz:8087/jirbis2/components/com_irbis/ajax_provider.php"

    @staticmethod
    def _generate_random_number_string(length: int = 10) -> str:
        """
        Генерирует случайную строку заданной длины, состоящую только из цифр.

        Аргументы:
            length (int): Длина генерируемой строки. По умолчанию 10.

        Возвращает:
            str: Случайная строка из цифр.
        """
        digits = string.digits
        return ''.join(random.choice(digits) for _ in range(length))

    def _check_response(self, response: requests.Response) -> requests.Response:
        """
        Проверяет статус ответа и вызывает исключение, если запрос завершился с ошибкой.

        Аргументы:
            response (requests.Response): Ответ на запрос.

        Возвращает:
            requests.Response: Проверенный ответ.

        Исключения:
            Exception: Если статус код ответа не равен 200.
        """
        if response.status_code != 200:
            raise Exception(f"Request failed: {response.status_code} {response.text}")
        return response

    def _post_request(self, data: Dict[str, Union[str, Any]]) -> requests.Response:
        """
        Отправляет POST запрос с данными.

        Аргументы:
            data (Dict[str, str]): Данные для отправки в запросе.

        Возвращает:
            requests.Response: Ответ на запрос.
        """
        response = self.session.post(self.BASE_URL, data=data)
        return self._check_response(response)

    def _get_request(self, url: str) -> requests.Response:
        """
        Отправляет GET запрос по указанному URL.

        Аргументы:
            url (str): URL для отправки GET запроса.

        Возвращает:
            requests.Response: Ответ на запрос.
        """
        response = self.session.get(url)
        return self._check_response(response)


class BookSearchHandler(BaseAPIHandler):
    def __init__(self, search_params: Dict[str, str], first_number: int):
        """
        Инициализирует обработчик с параметрами поиска и настраивает сессию.

        Аргументы:
            search_params (Dict[str, str]): Параметры поиска.
            first_number (int): Номер первого элемента для поиска.
        """
        super().__init__()
        self.session = requests.Session()
        self.search_params = search_params
        self.client_request_id = self._generate_random_number_string(10)
        self.form_request_id = self._generate_random_number_string(10)
        self.first_number = max(1, first_number)

    def _search_request(self, first_number: Optional[int] = None) -> requests.Response:
        """
        Отправляет запрос на поиск с заданными параметрами.

        Аргументы:
            first_number (Optional[int]): Номер первого элемента для поиска. По умолчанию используется self.first_number.

        Возвращает:
            requests.Response: Ответ на запрос.
        """
        if first_number is None:
            first_number = self.first_number
        data = {
            'req_static': '0',
            'author': self.search_params.get('author', ''),
            'person': self.search_params.get('person', ''),
            'title': self.search_params.get('title', ''),
            'keywords': self.search_params.get('keywords', ''),
            'keywords_cvalif': self.search_params.get('keywords_cvalif', ''),
            'subject_rubric': self.search_params.get('subject_rubric', ''),
            'year1': self.search_params.get('year1', ''),
            'year2': self.search_params.get('year2', ''),
            'publishing': self.search_params.get('publishing', ''),
            'isbn': self.search_params.get('isbn', ''),
            'document_type': self.search_params.get('document_type', ''),
            'document_form': self.search_params.get('document_form', ''),
            'document_language': self.search_params.get('document_language', ''),
            'task': 'search_broadcast',
            'first_number': first_number,
            'req_id_client': self.client_request_id,
            'selected_search_flag': '0'
        }
        return self._post_request(data)

    def _set_selected_databases(self) -> requests.Response:
        """
        Устанавливает выбранные базы данных для поиска.

        Возвращает:
            requests.Response: Ответ на запрос.
        """
        url = f"{self.BASE_URL}?task=set_selected_bases&bl_id_array_selected%5B1%5D=1&bl_id_array_selected%5B2%5D=2&bl_id_array_selected%5B3%5D=3&_={self.form_request_id}"
        return self._get_request(url)

    def _set_user_profile(self) -> requests.Response:
        """
        Устанавливает пользовательский профиль для поиска.

        Возвращает:
            requests.Response: Ответ на запрос.
        """
        url = f"{self.BASE_URL}?task=set_selected_user_profile&rp_elements%5B%5D=document_form&rp_elements%5B%5D=keywords&rp_elements%5B%5D=contents&profile_name=info&_={self.form_request_id}"
        return self._get_request(url)

    def _get_search_results(self) -> requests.Response:
        """
        Получает результаты поиска.

        Возвращает:
            requests.Response: Ответ на запрос с результатами поиска.
        """
        url = f"{self.BASE_URL}?task=show_results&req_id_client={self.client_request_id}&first_number=1&recs_outputed=0&reqs_outputed=0&last_output_time=0&finish_flag=last&_={self.form_request_id}"
        return self._get_request(url)

    def execute_search(self) -> Dict:
        """
        Выполняет полный процесс поиска и возвращает результаты.

        Возвращает:
            Dict: Результаты поиска в формате JSON.
        """
        try:
            self._search_request()
            self._set_selected_databases()
            self._set_user_profile()
            self._search_request() # Я не знаю почему оно так работает, у меня сроки горели :)

            results = self._get_search_results()
            results_json_first = results.json()

            html_parser = HTMLParser(results_json_first['recs'])
            results_json_first['recs'] = html_parser.start_parsing_data()

            return results_json_first

        except Exception as e:
            print(f"Произошла ошибка: {e}")
            return {}
