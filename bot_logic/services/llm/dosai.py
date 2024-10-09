from .base_llm import LLMBase
from django.urls import reverse
from django.test import Client
import json

class DosAI(LLMBase):
    
    def __init__(self):
        super().__init__()

        self._llm_prompt = ""

    def handle_message(self, user_message: str) -> str:

        from bot_logic.services.engines import legends_engine, book_search_engine
        from bot_logic.services import engine_intent_router as e_intent

        eIntent = e_intent.EngineIntentRouter()
        data = eIntent.extract_engine_intents(user_message)

        if data.get('use_legends_engine') == True:
            lEngine = legends_engine.LegendsEngine()
            
            chunks = lEngine.search_in_database(data['legend_search_params']['legend_name'])

            result = self.rag_query_handler(text_query=user_message, llm_prompt="""Ты — продвинутый библиотечный помощник. Используя предоставленный контекст, ответь на вопрос пользователя. 
            Если информация не найдена в контексте, честно сообщи об этом.""", context=chunks)

            return {"data": result.content}


        return {"data": data}