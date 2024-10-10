from .base_llm import LLMBase
from django.urls import reverse
from django.test import Client
import json

class DosAI(LLMBase):
    
    def __init__(self):
        super().__init__()
        self._base_response = {"draw_books_window": False}


        self._llm_prompt = ""


    def _execute_legend_engine(self, data):
        from bot_logic.services.engines import legends_engine

        lEngine = legends_engine.LegendsEngine()

        chunks = lEngine.search_in_database(data['legend_search_params']['legend_name'])

        return chunks

    def _execute_books_engine(self, data):
        from bot_logic.services.engines import book_search_engine


        books_search_params: dict = data['book_search_params']

        bEngine = book_search_engine.BookSearchEngine(search_params=books_search_params)

        result_books: dict = bEngine.execute_search()

        self._base_response['draw_books_window'] = True

        return result_books

    def handle_message(self, user_message: str) -> str:

        from bot_logic.services import engine_intent_router as e_intent

        eIntent = e_intent.EngineIntentRouter()
        data = eIntent.extract_engine_intents(user_message)

        if data.get('use_legends_engine') == True:
            
            chunks = self._execute_legend_engine(data=data)

            result = self.rag_query_handler(text_query=user_message, llm_prompt="""Ты — продвинутый библиотечный помощник. Используя предоставленный контекст, ответь на вопрос пользователя. 
            Если информация не найдена в контексте, честно сообщи об этом.""", context=chunks)

            return self._base_response | {
                "legend_engine_output": 
            {"llm_response": result.content}
            }

        if data.get('use_books_engine') == True:
            
            books = self._execute_books_engine(data=data)

            return self._base_response | {"book_engine_output": books}


        return {"data": data}