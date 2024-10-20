from app.services.llm.llm_handlers import BaseLLM
from pydantic import BaseModel, Field
from typing import Optional
from app.services.processors.esimder_search import CATEGORIES


def recognize_intent(text_query: str) -> str:
    basellm: BaseLLM = BaseLLM(llm_presets='high_performance')

    categories_list = ", ".join(CATEGORIES.keys())

    instructions_for_llm: str = f"""
    Тебе будет передан текст, и ты должен будешь определить намерение человека. Всего существует 4 возможных намерения:
    1) books_search (Когда человек хочет сделать поиск по книгам. ВАЖНО: обращай внимание только на фразы, связанные с книгами или наличием книг, например: "Книги Абая" или "Есть ли книга Пушкина?". Не используй это намерение для общих вопросов о книгах, рекомендациях или советах.)
    2) legends_search (Когда человек интересуется конкретной легендой или просит рассказать её. Например, "Легенда о горе Толагай", "Расскажи про Прялку великанши" или "Какие есть легенды об Иртыше". Не спутывай с запросами на поиск по известным людям или категориям.)
    3) esimder_search (Когда человек хочет узнать о конкретных людях или категориях людей. Например, если запрос содержит фамилию, имя, отчество или упоминание категорий людей, таких как "Партизаны", "Писатели", "Батыры" и другие. Вот все возможные категории: {categories_list}. Если встречается категория или имя, обязательно возвращай это намерение.)
    4) just_speak (Когда запрос не относится ни к книгам, ни к легендам, ни к известным людям. Например, это может быть приветствие или общие вопросы, которые не требуют поиска информации по книгам, легендам или людям.)

    ВАЖНО: Игнорируй лишние слова и сосредотачивайся на ключевых элементах запроса. Например, если человек напишет "Привееет, книги Абая", просто анализируй "книги Абая". 
    Обязательно проверь, не принадлежит ли запрос к одной из четко перечисленных категорий или намерений.
    """


    # Формируем полный запрос для модели
    full_prompt = f"{instructions_for_llm}\n\nТекст запроса: {text_query}"

    # Отправляем запрос к модели
    recognized_intent: str = basellm.send_request(full_prompt=full_prompt)

    return recognized_intent


class ParamsExtractor:

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

        bParams = BookSearchParams() # Инициализируется объект класса BookSearchParams

        
        bLlm: BaseLLM = BaseLLM(llm_presets='high_performance')

        pydantic_books_search_params = bLlm.send_request_pydantic(
            text_query=text_query, 
            pydantic_object=BookSearchParams, 
            system_prompt="""
            Твоя задача — вытащить параметры для поиска книг из текста. Параметры включают: автора, название, ключевые слова, годы публикации и ISBN.
            - Всегда возвращай ответ в формате JSON, даже если не найдены параметры.
            - Игнорируй несуществующие годы (например, больше 2100 или меньше 1000).
            - Если нет упоминания конкретного автора, года или названия, возвращай эти значения как null (None).
            - НЕ ПЕРЕДАВАЙ ГОД ЕСЛИ ТЕБЯ НЕ ПРОСЯТ
            Пример:
            Ввод: 'Книги Абая с 1800 по 1900 год'
            Вывод: {"author": "Абай", "year1": 1800, "year2": 1900}
            """
        )


        return pydantic_books_search_params


    def extract_search_params_by_intent(self, text_query: str, intent: str) -> BaseModel:

        intents = ['books_search', 'legends_search', 'esimder_search_people', 'just_speak']

        bLlm: BaseLLM = BaseLLM(llm_presets='high_performance')

        if intent not in intents:
            raise ValueError('intents must be in', ', '.join(intents))
        
        if intent == 'books_search':
            return self._extract_books_search_params(text_query=text_query)
        elif intent == 'esimder_search':
            ...