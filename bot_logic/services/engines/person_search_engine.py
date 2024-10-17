import requests
from bs4 import BeautifulSoup

class EsimderEngineParser:
    
    BASE_LINK="https://esimder.pushkinlibrary.kz/"
    
    def parse_person(self, html_content: str) -> str:
        soup = BeautifulSoup(html_content, 'html.parser')

        content_div = soup.find('div', class_='item-page')
        
        # Находим первый <strong>
        first_strong = content_div.find('strong')
        
        # Извлекаем содержимое первого <strong>, если он найден
        strong_text = first_strong.get_text(strip=True) if first_strong else "Strong элемент не найден"
        
        
        # Возвращаем содержимое первого <strong> и параграфы
        return strong_text


            
    def parse_category_and_count(self, html_content: str) -> dict:
        """Парсит результаты поиска и возвращает ссылки на объекты с категориями."""
        soup = BeautifulSoup(html_content, 'html.parser')
        
        # Ищем элемент с результатами поиска
        search_results = soup.find('dl', class_='search-results')
        if not search_results:
            return {
                'total_recs': 0,
                'recs': [],
                'error': 'Элемент search-results не найден'
            }
        
        # Ищем все теги <dt> для имен и <dd> для категорий
        result_titles = search_results.find_all('dt', class_='result-title')
        result_categories = search_results.find_all('dd', class_='result-category')
        
        # Собираем записи в список
        recs = []
        for dt, dd in zip(result_titles, result_categories):
            a_tag = dt.find('a')
            if a_tag:
                name = a_tag.get_text(strip=True)
                link = a_tag['href']
            
            # Находим категорию для этого объекта
            category_span = dd.find('span', class_='small')
            if category_span:
                category = category_span.get_text(strip=True).strip("()")  # Убираем скобки вокруг названия категории
            else:
                category = "Категория не найдена"
            
            
            content = ""
                        
            if category != 'Категория':
                content = self.parse_person(requests.get(f"{self.BASE_LINK}/{link}").text)
            else:
                content = "Это категория"
            
            # Добавляем запись в список
            recs.append({'name': name, 'link': link, 'category': category, 'content': content})
        
        # Ищем количество найденных объектов по тексту "Результат поиска: найдено X объектов"
        search_intro = soup.find('div', class_='searchintro')
        if search_intro:
            result_count_text = search_intro.find('p').get_text(strip=True)
            count_str = result_count_text.split('найдено')[-1].split('объектов')[0].strip()
            try:
                total_recs = int(count_str)
            except ValueError:
                total_recs = 0  # Если не получилось распарсить количество
        else:
            total_recs = 0  # Если элемент с количеством объектов не найден
        
        # Возвращаем результат в виде словаря
        return {
            'total_recs': total_recs,
            'recs': recs  # Возвращаем только первые 5 записей
        }

class EsimderEngineBase:

    def send_get_request(self, url: str) -> str:
        """Отправляет GET-запрос и возвращает текст HTML-контента."""
        response = requests.get(url)
        response.raise_for_status()  # Проверка успешности запроса
        return response.text

    def send_post_request(self, url: str, data: dict) -> str:
        response = requests.post(url=url, data=data)
        response.raise_for_status()
        
        return response.text

class EsimderEngine(EsimderEngineBase, EsimderEngineParser):
    """Комбинированный класс, который использует отправку запросов и парсинг результатов."""
    def __init__(self):
        pass

    def search_query(self, search_word: str) -> dict:
        """Отправляет запрос на сайт и парсит 5 самых похожих результатов."""
        
        payload = {
            "limit": 5,
            "odering": "popular",
        }
        
        url = f'https://esimder.pushkinlibrary.kz/ru/component/search/?searchword={search_word}&searchphrase=all&Itemid=502'
        html_content = self.send_post_request(url=url, data=payload)
        return self.parse_category_and_count(html_content)


if __name__ == '__main__':
    eEngine = EsimderEngine()
    
    search_word: str = "Партизаны"[:11]
    
    result_search = eEngine.search_query(search_word=search_word)
    
    print(result_search)
