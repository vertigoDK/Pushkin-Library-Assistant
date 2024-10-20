import pytest
from app.services.processors.esimder_search import EsimderSearch
from pydantic import ValidationError
from app.main import app
from fastapi.testclient import TestClient

client = TestClient(app)

@pytest.mark.parametrize("text_query, expected_search_type, expected_content", [
    # Тесты на русском
    ('медики вко', 'category', 'Медицинские работники'),
    ('батыры', 'category', 'Батыры'),
    ('Привететаптвоаывшаоы', 'Null', None),
    
    # Тесты на казахском
    ('дәрігерлер', 'category', 'Медицинские работники'),
    ('батырлар', 'category', 'Батыры'),
    ('сәлем, қалайсың?', 'Null', None),
])
def test_get_search_type(text_query, expected_search_type, expected_content):
    try:
        eSearch = EsimderSearch()

        result = eSearch.get_search_type(text_query=text_query)

        # Проверка значений полей результата
        assert result.search_type == expected_search_type
        assert result.content == expected_content

    except ValidationError as e:
        print(f'Ошибка валидации: {e}')


@pytest.mark.parametrize("text_query, url", [
    # Тесты на категорию
    ('медики вко', 'https://esimder.pushkinlibrary.kz/ru/mediki.html?limit=0'),
    ('Акулов в и', 'https://esimder.pushkinlibrary.kz/ru/100-novykh-imen/1702-.html'),
    ('Партизаны', 'https://esimder.pushkinlibrary.kz/ru/zashchitniki-otechestva/partizany.html?limit=0'),
    ('Погибшие в афганистане', 'https://esimder.pushkinlibrary.kz/ru/zashchitniki-otechestva/augan-ru.html?limit=0'),
])
def test_request_handler(text_query, url):
    response = client.get(f"/api/request-handler?text_query={text_query}")
    assert response.status_code == 200

    data = response.json().get('data', {})

    if 'category_info' in data:
        assert data['category_info'][1] == url
    elif 'record' in data:
        assert data['record']['name_url'] == url