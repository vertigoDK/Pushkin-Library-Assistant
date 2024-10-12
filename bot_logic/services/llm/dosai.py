from .base_llm import LLMBase
import redis
from django.conf import settings  # Импорт настроек Django

class DosAIConversation:
    def __init__(self):
        # Инициализация Redis через параметры конфигурации из settings.py
        self.r = redis.Redis(
            host=settings.REDIS_HOST, 
            port=settings.REDIS_PORT, 
            db=settings.REDIS_DB
        )
        self.HISTORY_TIME_TO_LIVE = settings.HISTORY_TTL

    # Метод для добавления сообщений в историю
    def add_message_to_history(self, user_uuid, user_message, bot_message):
        key = f"chat_history:{user_uuid}"
        self.r.rpush(key, f"User: {user_message}")
        self.r.rpush(key, f"Bot: {bot_message}")
        self.r.ltrim(key, -6, -1)  # Оставляем только последние 6 сообщений
        self.r.expire(key, self.HISTORY_TIME_TO_LIVE)  # История будет храниться 10 минут

    # Метод для получения истории чатов
    def get_chat_history(self, user_uuid):
        key = f"chat_history:{user_uuid}"
        current_history = self.r.lrange(key, 0, -1)
        # Проверяем, что история не пуста
        if not current_history:
            return []
        return [msg.decode('utf-8') for msg in current_history]

    # Метод для генерации ответа через модель с учетом истории
    def generate_response(self, user_uuid, user_message):
        chat_history = self.get_chat_history(user_uuid)
        # Передаём историю в базовый класс
        self._chat_history = "\n".join(chat_history) if chat_history else "История пуста."
        prompt = f"История сообщений:\n{self._chat_history}\nПользователь: {user_message}\nБот:"
        return self._model.invoke(prompt)


class DosAI(LLMBase, DosAIConversation):
    def __init__(self):
        # Наследуем от LLMBase и DosAIConversation
        super().__init__(model_name=settings.MODEL_NAME, api_key=settings.OPENAI_API_KEY)
        DosAIConversation.__init__(self)
        
        # Базовый ответ для использования книг и легенд
        self._base_response = {"use_books_engine": False, "use_legend_engine": False}

    # Общий метод для обработки движков (DRY)
    def process_engine(self, engine_type: str, data: dict, user_uuid: str, user_message: str):
        if engine_type == "legends":
            chunks = self._execute_legend_engine(data)
            response_content = self.rag_query_handler(
                text_query=user_message, 
                llm_prompt="""Ты — продвинутый библиотечный помощник. Используя предоставленный контекст, ответь на вопрос пользователя. Если информация не найдена в контексте, честно сообщи об этом. Так же предоставляй ссылки на те легенды что ты находишь!""", 
                context=chunks
            ).content
            engine_output = {"legend_engine_output": {"llm_response": response_content}}
        elif engine_type == "books":
            books, books_search_params = self._execute_books_engine(data)
            response_content = str(books)
            engine_output = {"book_engine_output": books} | books_search_params
        else:
            raise ValueError(f"Unknown engine type: {engine_type}")

        # Сохраняем в историю
        self.add_message_to_history(user_uuid, user_message, response_content)
        return self._base_response | engine_output

    # Вызов движка для легенд
    def _execute_legend_engine(self, data):
        from bot_logic.services.engines import legends_engine
        self._base_response['use_legend_engine'] = True
        lEngine = legends_engine.LegendsEngine()
        return lEngine.search_in_database(data['legend_search_params']['legend_name'])

    # Вызов движка для книг
    def _execute_books_engine(self, data):
        from bot_logic.services.engines import book_search_engine
        self._base_response['use_books_engine'] = True
        books_search_params: dict = data['book_search_params']
        bEngine = book_search_engine.BookSearchEngine(search_params=books_search_params)
        result_books: dict = bEngine.execute_search()
        return result_books, books_search_params

    # Обработка сообщений
    def handle_message(self, user_uuid: str, user_message: str) -> dict:
        from bot_logic.services import engine_intent_router as e_intent

        eIntent = e_intent.EngineIntentRouter()
        data = eIntent.extract_engine_intents(user_message)

        # Если найдено намерение использовать движок легенд
        if data.get('use_legends_engine') == True:
            return self.process_engine("legends", data, user_uuid, user_message)

        # Если найдено намерение использовать движок книг
        if data.get('use_books_engine') == True:
            return self.process_engine("books", data, user_uuid, user_message)

        # Если движки не нужны, генерируем стандартный ответ
        result = self.generate_response(user_uuid, user_message)
        self.add_message_to_history(user_uuid, user_message, result.content)
        
        return self._base_response | {"llm_response": result.content}
