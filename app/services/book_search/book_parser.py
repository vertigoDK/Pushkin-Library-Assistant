import requests
import random
import string
import re
from bs4 import BeautifulSoup
from typing import Dict, Optional, Union, Any, List
from pydantic import BaseModel, Field
import json

class SearchParams(BaseModel):
    author: Optional[str] = Field(default=None, description="Автор книги")
    title: Optional[str] = Field(default=None, description="Название книги")
    keywords: Optional[str] = Field(default=None, description="Ключевые слова для поиска")
    year1: Optional[str] = Field(default=None, description="Год издания от")
    year2: Optional[str] = Field(default=None, description="Год издания до")
    isbn: Optional[str] = Field(default=None, description="ISBN книги")
    

class BaseAPIHandler:
    BASE_URL: str = "http://irbis.pushkinlibrary.kz:8087/jirbis2/components/com_irbis/ajax_provider.php"

    @staticmethod
    def _generate_random_number_string(length: int = 10) -> str:
        """Генерирует случайную строку заданной длины, состоящую только из цифр."""
        digits = string.digits
        return ''.join(random.choice(digits) for _ in range(length))

    def _check_response(self, response: requests.Response) -> requests.Response:
        """Проверяет статус ответа и вызывает исключение, если запрос завершился с ошибкой."""
        if response.status_code != 200:
            raise Exception(f"Request failed: {response.status_code} {response.text}")
        return response

    def _post_request(self, data: Dict[str, Union[str, Any]]) -> requests.Response:
        """Отправляет POST запрос с данными."""
        response = self.session.post(self.BASE_URL, data=data)
        return self._check_response(response)

    def _get_request(self, url: str) -> requests.Response:
        """Отправляет GET запрос по указанному URL."""
        response = self.session.get(url)
        return self._check_response(response)


class HTMLParser:
    """Класс для парсинга HTML-контента и извлечения информации о записях."""

    def __init__(self, html_content: str):
        self._html_content = html_content

    def clean_html(self, html_content: str) -> str:
        """Очищает HTML-контент от ненужных символов и тегов."""
        html_content = re.sub(r'\\[trn]', '', html_content).replace('\\', '')
        soup = BeautifulSoup(html_content, 'html.parser')
        
        for span in soup.find_all('span'):
            span.unwrap()
        
        return str(soup)

    def parse_records_table(self, soup: BeautifulSoup) -> List[Dict[str, str]]:
        """Извлекает данные о записях из таблиц в HTML-контенте."""
        records = []
        for record in soup.find_all('table', class_='record'):
            record_data = {}
            
            bo_tabs_div = record.find('div', id=lambda x: x and x.startswith('bo_tabs'))
            if bo_tabs_div:
                div_id = bo_tabs_div['id']
                record_data['record_id'] = div_id.replace('bo_tabs-', '').replace('bo_tabs', '')
            
            number_cell = record.find('td', class_='number_cell')
            if number_cell:
                record_data['number'] = number_cell.find('div', class_='number').text.strip()
                record_data['code'] = number_cell.find('input', class_='code_checkbox')['value']
            
            cover_cell = record.find('td', class_='cover_cell')
            if cover_cell:
                img_tag = cover_cell.find('img', class_='cover_img')
                record_data['cover_url'] = img_tag['src']
            
            bo_cell = record.find('td', class_='bo_cell')
            if bo_cell:
                bo_div = bo_cell.find('div', class_='bo_div')
                if bo_div:
                    record_data['type'] = bo_div.find(string=' Вид документа').next_element.strip() if bo_div.find(string=' Вид документа') else ''
                    record_data['code'] = bo_div.find(string=' Шифр издания').next_element.strip() if bo_div.find(string=' Шифр издания') else ''
                    record_data['author'] = bo_div.find(string=' Автор(ы)').next_element.strip() if bo_div.find(string=' Автор(ы)') else ''
                    record_data['title'] = bo_div.find(string=' Заглавие').next_element.strip() if bo_div.find(string=' Заглавие') else ''
                    record_data['parallel_title'] = bo_div.find(string=' Параллельн. заглавия').next_element.strip() if bo_div.find(string=' Параллельн. заглавия') else ''
                    record_data['publish_info'] = bo_div.find(string=' Выходные данные').next_element.strip() if bo_div.find(string=' Выходные данные') else ''
                    record_data['pages'] = bo_div.find(string=' Колич.характеристики').next_element.strip() if bo_div.find(string=' Колич.характеристики') else ''
                    record_data['series'] = bo_div.find(string=' Серия:').next_element.strip() if bo_div.find(string=' Серия:') else ''
                    record_data['isbn_price'] = bo_div.find(string=' ISBN,  Цена    ').next_element.strip() if bo_div.find(string=' ISBN,  Цена    ') else ''
            
            records.append(record_data)
        return records

    def start_parsing_data(self) -> List[Dict[str, str]]:
        """Начинает процесс парсинга данных."""
        clean_html_content = self.clean_html(self._html_content)
        soup = BeautifulSoup(clean_html_content, 'html.parser')
        return self.parse_records_table(soup)


class BookSearchEngine(BaseAPIHandler):
    def __init__(self, search_params: BaseModel, first_number: int = 1):
        """Инициализирует обработчик с параметрами поиска и настраивает сессию."""
        super().__init__()
        self.session = requests.Session()
        self.search_params = search_params
        self.client_request_id = self._generate_random_number_string(10)
        self.form_request_id = self._generate_random_number_string(10)
        self.first_number = max(1, first_number)

    def _search_request(self, first_number: Optional[int] = None) -> requests.Response:
        """Отправляет запрос на поиск с заданными параметрами."""
        if first_number is None:
            first_number = self.first_number
        data = {
            'req_static': '0',
            'author': self.search_params.author or '',
            'title': self.search_params.title or '',
            'keywords': self.search_params.keywords or '',
            'year1': self.search_params.year1 or '',
            'year2': self.search_params.year2 or '',
            'isbn': self.search_params.isbn or '',
            'task': 'search_broadcast',
            'first_number': first_number,
            'req_id_client': self.client_request_id,
            'selected_search_flag': '0'
        }
        return self._post_request(data)

    def _set_selected_databases(self) -> requests.Response:
        """Устанавливает выбранные базы данных для поиска."""
        url = f"{self.BASE_URL}?task=set_selected_bases&bl_id_array_selected%5B1%5D=1&bl_id_array_selected%5B2%5D=2&bl_id_array_selected%5B3%5D=3&_={self.form_request_id}"
        return self._get_request(url)

    def _set_user_profile(self) -> requests.Response:
        """Устанавливает пользовательский профиль для поиска."""
        url = f"{self.BASE_URL}?task=set_selected_user_profile&rp_elements%5B%5D=document_form&rp_elements%5B%5D=keywords&rp_elements%5B%5D=contents&profile_name=info&_={self.form_request_id}"
        return self._get_request(url)

    def _get_search_results(self) -> requests.Response:
        """Получает результаты поиска."""
        url = f"{self.BASE_URL}?task=show_results&req_id_client={self.client_request_id}&first_number=1&recs_outputed=0&reqs_outputed=0&last_output_time=0&finish_flag=last&_={self.form_request_id}"
        return self._get_request(url)

    def execute_search(self) -> Dict:
        """Выполняет полный процесс поиска и возвращает результаты."""
        try:
            self._search_request()
            self._set_selected_databases()
            self._set_user_profile()
            self._search_request()  # Повторный запрос для обновления данных

            results = self._get_search_results()
            results_json_first = results.json()

            # Парсинг HTML-результатов
            html_parser = HTMLParser(results_json_first['recs'])
            results_json_first['recs'] = html_parser.start_parsing_data()

            return self._format_results(results_json_first)

        except Exception as e:
            print(f"Произошла ошибка: {e}")
            return {}

    def _format_results(self, results: Dict) -> Dict:
        """Форматирует результаты поиска для лучшего восприятия."""
        formatted_results = {
            "search_id": results.get('req_id_client'),
            "total_records": results.get('recs_total'),
            "records": results.get('recs', []),
        }
        return formatted_results

    def check_book_availability(self, record_id: str) -> Dict[str, Any]:
        """Проверяет наличие книги в библиотеке."""
        try:
            url = f"{self.BASE_URL}?unit=exemplars_static&task=show_exemp&rec_id={record_id}&bl_id=3&format_type=exemp&_={self._generate_random_number_string()}"
            response = self._get_request(url)
            
            if response.status_code == 200:
                # Проверяем на ошибку MySQL
                if "Ошибка: Не удаётся извлечь кэшированную запись" in response.text:
                    return {
                        "status": "error",
                        "message": "Ошибка базы данных",
                        "availability": {}
                    }
                
                soup = BeautifulSoup(response.text, 'html.parser')
                availability_data = {}
                
                table = soup.find('table', class_='show_ex')
                if table:
                    # Проверяем на сообщение об отсутствии экземпляров
                    no_books = table.find('span', class_='no_exems')
                    if no_books:
                        return {
                            "status": "success",
                            "message": "Нет доступных экземпляров",
                            "availability": {}
                        }
                    
                    # Обрабатываем данные о наличии
                    rows = table.find_all('tr')[1:]  # Пропускаем заголовок
                    for row in rows:
                        location = row.find('td', class_='ex_full_name_cell')
                        available = row.find('td', class_='ex_number_cell')
                        if location and available:
                            location_text = location.text.strip()
                            available_text = available.text.strip()
                            availability_data[location_text] = available_text
                
                return {
                    "status": "success",
                    "message": "Данные получены" if availability_data else "Нет данных",
                    "availability": availability_data
                }
            
            return {
                "status": "error",
                "message": f"Ошибка запроса: {response.status_code}",
                "availability": {}
            }
            
        except Exception as e:
            return {
                "status": "error",
                "message": str(e),
                "availability": {}
            }
    
