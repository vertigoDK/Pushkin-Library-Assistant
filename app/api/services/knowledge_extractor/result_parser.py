import requests
from bs4 import BeautifulSoup

def parse_search_results(html_content: str):
    # Создаем объект BeautifulSoup для парсинга HTML
    soup = BeautifulSoup(html_content, 'html.parser')

    # Находим все элементы <dt> с классом 'result-title'
    result_titles = soup.find_all('dt', class_='result-title')

    # Проверяем, есть ли такие элементы
    if not result_titles:
        return "Нет записей"

    results = []
    for dt in result_titles[:3]:  # Ограничиваем выборку тремя результатами
        link_tag = dt.find('a')
        if link_tag and 'href' in link_tag.attrs:
            link = link_tag['href']
            title = link_tag.get_text(strip=False)  # Используем strip=False
            results.append(f"{title}: https://pushkinlibrary.kz{link}")

    if results:
        return results
    else:
        return "Ссылки не найдены"