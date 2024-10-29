from app.services.llm.llm_handlers import BaseLLM
from pydantic import BaseModel, Field
from typing import Optional
from app.services.processors.esimder_search import CATEGORIES



class IntentRecognize:
    
    @staticmethod
    def recognize_intent(text_query: str) -> str:
        basellm: BaseLLM = BaseLLM(llm_presets='high_performance')

        categories_list = ", ".join(CATEGORIES.keys())

        instructions_for_llm: str = f"""
        Определи намерение пользователя по тексту запроса. Возможные намерения:

        1) **books_search** - если запрос явно связан с поиском книг. Примеры: "Книги Абая", "Есть ли книга Пушкина". Игнорируй общие вопросы о книгах, советы и рекомендации.

        2) **legends_search** - если запрос связан с конкретной легендой или упоминанием легенд. Примеры: "Легенда о горе Толагай", "Какие есть легенды об Иртыше". Не используй для поиска по людям или категориям.

        3) **esimder_search** - если запрос связан с конкретными людьми или категориями, такими как "Партизаны", "Писатели", "Батыры", или содержит имя/фамилию. Вот все категории: {categories_list}.

        4) **just_speak** - если запрос не относится к книгам, легендам или известным людям. Это могут быть приветствия или общие вопросы без конкретных поисковых намерений.

        Примеры для каждой категории:
        - books_search: "Книги Толстого"
        - legends_search: "Легенда о Толагай"
        - esimder_search: "Писатели", "Абая Кунанбаева"
        - just_speak: "Привет, как дела?", "Расскажи что-нибудь интересное"

        ВАЖНО: Обращай внимание только на ключевые слова запроса, такие как "легенда", "книга", "писатель" и т.д.
        
        ВЫВОДИ ТОЛЬКО НАМЕРЕНИЕ И ВСЕ
        
        """

        # Формируем полный запрос для модели
        full_prompt = f"{instructions_for_llm}\n\nТекст запроса: {text_query}"

        # Отправляем запрос к модели
        recognized_intent: str = basellm.send_request(full_prompt=full_prompt)

        return recognized_intent


