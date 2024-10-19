from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.output_parsers import JsonOutputParser
from pydantic import BaseModel, Field
from app.core.config import settings
from langchain_core.prompts import ChatPromptTemplate


class BaseLLM:
    

    model_presets = {
        'high_performance': settings.high_performance_llm,
        'base_performance': settings.llm_model,
    }

    def __init__(self, llm_presets: str = 'base_performance'):
        """
        Инициализация модели LLM с выбранным пресетом.
        
        :param llm_presets: Строка, которая указывает, какую модель использовать. 
                            Допустимые значения: 'base_performance', 'high_performance'
        """
        if llm_presets not in self.model_presets:
            raise ValueError(f"Недопустимое значение llm_presets: {llm_presets}. "
                             f"Допустимые значения: {list(self.model_presets.keys())}")
        
        selected_model = self.model_presets[llm_presets]
        self.model = ChatGoogleGenerativeAI(api_key=settings.GOOGLE_API_KEY, model=selected_model)


    def send_request_json(self, text_query: str, pydantic_object: BaseModel, instruction_for_llm: str):
        ...

    def send_request(self, full_prompt: str) -> dict[str, str]:
        return self.model.invoke(full_prompt)

