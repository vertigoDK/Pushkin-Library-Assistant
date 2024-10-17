from .llm.base_llm import LLMBase
from pydantic import BaseModel, Field


class BookSearchEngineParams(BaseModel):
    author: str = Field(description="Автор книги НЕ ИЗМЕНЯЙ ЕГО, ЕСЛИ ПЕРЕДАЕТСЯ `книги абая значит просто Абай не Кунанбаев Абай`")
    title: str = Field(description="Название книги")
    year1: str = Field(description="От какого года книга")
    year2: str = Field(description="До какого года книга")


class LegendSearchEngineParams(BaseModel):
    legend_name: str = Field(description="Название легенды")


class EngineIntentModel(BaseModel):
    use_books_engine: bool = Field(description="if user want to use books engine, for example книги абая", default=False)
    use_legends_engine: bool = Field(description="if user want to use legends engine, for example легенда о рахмановских ключах", default=False)
    use_general_engine: bool = Field(description="Use this engine to handle general inquiries such as greetings, providing website links, or responses that do not require specialized search engines. This engine acts as a fallback for simple or general questions that cannot be classified under other engines.", default=False)
    book_search_params: BookSearchEngineParams = Field(description="Параметры для того что бы можно было сделать поиск по книгам")
    legend_search_params: LegendSearchEngineParams = Field(description="Параметры для того что бы можно было сделать запрос по легендам")
    base_engine_search_param: str = Field(description="Здесь просто передай запрос человека.")
    
class EngineIntentRouter(LLMBase):

    def __init__(self):
        super().__init__()
        self._llm_prompt = "Ты должен извлекать правильные данные, ТВОЯ ЗАДАЧА ПРОСТО ИЗВЛЕЧЬ ДАННЫЕ, НЕ НУЖНО ОТВЕЧАТЬ НА ЗАПРОС НИ ПРИ КАКИХ ОБСТОЯТЕЛЬСТВАХ НЕ ОТВЕЧАЙ НА ВОПРОС ЧЕЛОВЕКА"

    def extract_engine_intents(self, text_request: str):
        return self.call_json_output_parser(text_query=text_request,
                                            llm_prompt=self._llm_prompt,
                                            pydantic_object=EngineIntentModel)