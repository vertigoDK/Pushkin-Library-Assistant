import pytest
from app.services.intents_recognize import ParamsExtractor
from pydantic import ValidationError
from ratelimit import limits, sleep_and_retry

RATE_LIMIT = 15
TIME_PERIOD = 60  # в секундах

@sleep_and_retry  # Автоматически приостановит выполнение теста при превышении лимита
@limits(calls=RATE_LIMIT, period=TIME_PERIOD)
@pytest.mark.parametrize("text_query, expected_author, expected_year1, expected_year2", [
    # Пример 1: корректные данные для поиска книг
    ('книги абая с 1800 по 1900 год', 'Абай', 1800, 1900),
    
    # Пример 2: только автор без диапазона лет
    ('Мне нужны книги Абая', 'Абай', None, None),
    
    # Пример 3: диапазон лет без указания автора
    ('Ищу книги с 1800 по 1900 год', None, 1800, 1900),
    
    # Пример 4: некорректные данные (ожидаемая ошибка)
    ('Привет, просто что-нибудь', None, None, None),
    
    # Пример 5: неуказанный автор и некорректный диапазон лет
    ('Книги с 3000 по 4000 год', None, None, None),
    
    # Пример 6: запрос без указания книги или автора
    ('Где найти это?', None, None, None),
    
    # Пример 7: некорректные символы в запросе
    ('!@#$%^&*()_+', None, None, None),
    
    # Пример 8: только год без авторов и названий
    ('1800 год', None, 1800, None),  # Исправлено ожидание для этого теста
    
    # Пример 9: запрос с фрагментами предложений
    ('что-то про книги', None, None, None),
    
    # Пример 10: короткий запрос без контекста
    ('Книга', None, None, None),
    
    # Пример 11: запрос с лишней информацией и без параметров
    ('Привет, как дела? Мне нужны какие-то книги, не знаю какие', None, None, None),
])
def test_extract_books_search_params(text_query, expected_author, expected_year1, expected_year2):
    """
    Тестирование метода extract_books_search_params на разных примерах запросов
    """
    try:
        # Вызов метода для извлечения параметров
        pExtcrator = ParamsExtractor()

        result = pExtcrator.extract_search_params_by_intent(text_query=text_query, intent='books_search')

        # Проверка автора
        assert result.author == expected_author

        # Проверка диапазона лет
        assert result.year1 == expected_year1
        assert result.year2 == expected_year2

    except ValidationError as e:
        # Если ожидаемая ошибка валидации
        assert expected_author is None and expected_year1 is None and expected_year2 is None
        print(f"Ошибка валидации: {e}")
