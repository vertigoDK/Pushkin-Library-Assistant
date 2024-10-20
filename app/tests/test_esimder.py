import pytest
from app.services.processors.esimder_search import EsimderSearch
from pydantic import ValidationError

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
