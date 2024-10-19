from fastapi.testclient import TestClient
from app.main import app
import pytest
from ratelimit import limits, sleep_and_retry

client = TestClient(app)

# Ограничение: 15 запросов в минуту (60 секунд)
RATE_LIMIT = 15
TIME_PERIOD = 60  # в секундах

@sleep_and_retry  # Автоматически приостановит выполнение теста при превышении лимита
@limits(calls=RATE_LIMIT, period=TIME_PERIOD)
@pytest.mark.parametrize('text_query, expected_intent', [
    # Тесты на русском языке
    ('Книги абая', 'books_search'),
    ('Легенда о горе толагай', 'legends_search'),
    ('Как дела?', 'just_speak'),

    # Тесты на английском языке
    ('Do you have any books by A. Bay?', 'books_search'),
    ('Tell me the legend of Mount Tolagai', 'legends_search'),
    ('How are you?', 'just_speak'),

    # Тесты на казахском языке
    ('Абайдың кітаптары бар ма?', 'books_search'),
    ('Толагай туралы аңыз айтшы', 'legends_search'),
    ('Қалың қалай?', 'just_speak'),
])
def test_get_intents(text_query: str, expected_intent: str):
    response = client.get("api/get-intents", params={'text_query': text_query})

    assert response.status_code == 200

    content = response.json()["data"]["content"]

    # Проверяем, что ожидаемое намерение присутствует в контенте
    assert expected_intent in content.strip()
