from app.services.llm.llm_handlers import BaseLLM
from pydantic import BaseModel, Field
from typing import Optional
from app.services.processors.esimder_search import CATEGORIES

class ParamsExtractor:
    
    def __init__(self):
        self.bLlm: BaseLLM = BaseLLM(llm_presets='high_performance')
    
    def _extract_legends_search_params(self, text_query: str) -> BaseModel:
        
        class LegendSearchParams(BaseModel):
            keywords: str = Field(None, description="ключевые слова через пробел")
        
        legends_search_params = self.bLlm.send_request_pydantic(
            text_query=text_query,
            pydantic_object=LegendSearchParams,
            system_prompt="""
            Твоя задача - вытащить пармаметры для легенд, к примеру если человек говорит легенда о толагае то передаешь
            keywords: толагай легенда
            """ 
        )
        
        return legends_search_params
        
    def _extract_books_search_params(self, text_query: str) -> BaseModel:
        """
        Метод для извлечения параметров для books_search
        """
        class BookSearchParams(BaseModel):
            author: Optional[str] = Field(None, description="Автор книги")
            title: Optional[str] = Field(None, description="Название книги")
            keywords: Optional[str] = Field(None, description="Ключевые слова")
            year1: Optional[int] = Field(None, description="Год начала публикации")
            year2: Optional[int] = Field(None, description="Год конца публикации")
            isbn: Optional[str] = Field(None, description="ISBN книги")

        

        pydantic_books_search_params = self.bLlm.send_request_pydantic(
            text_query=text_query, 
            pydantic_object=BookSearchParams, 
            system_prompt="""
            Твоя задача — вытащить параметры для поиска книг из текста. Параметры включают: автора, название, ключевые слова, годы публикации и ISBN.
            Если человек делает какой то запрос о книге ты должен извлекать только ТО что есть в запросе к примеру
            Ввод 'Кто автор книги «Ұшқан ұя»?'
            Вывол {"title": "Ұшқан ұя"} И ВСЕ БОЛЬШЕ НИЧЕГО не нужно указывать автора
            - Всегда возвращай ответ в формате JSON, даже если не найдены параметры.
            - Игнорируй несуществующие годы (например, больше 2100 или меньше 1000).
            - Если нет упоминания конкретного автора, года или названия, возвращай эти значения как null (None).
            - НЕ ПЕРЕДАВАЙ ГОД ЕСЛИ ТЕБЯ НЕ ПРОСЯТ
            - УКАЗЫВАЙ ТОЛЬКО ТЕ ПАРАМЕТРЫ ЧТО ТЕБЕ ПЕРЕДАЮТ НЕ УКАЗЫВАЙ ЛИШНИХ ПАРАМЕТРОВ
            Пример:
            Ввод: 'Книги Абая с 1800 по 1900 год'
            Вывод: {"author": "Абай", "year1": 1800, "year2": 1900}
            """
        )


        return pydantic_books_search_params

        

    def extract_search_params_by_intent(self, text_query: str, intent: str) -> BaseModel:

        intents = ['books_search', 'legends_search', 'esimder_search', 'just_speak']

        if intent not in intents:
            raise ValueError('intents must be in', ', '.join(intents))
        
        if intent == 'books_search':
            return self._extract_books_search_params(text_query=text_query)
        elif intent == 'legends_search':
            return self._extract_legends_search_params(text_query=text_query)
        
        
        