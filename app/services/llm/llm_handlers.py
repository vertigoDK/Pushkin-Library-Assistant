from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.output_parsers import JsonOutputParser, PydanticOutputParser
from pydantic import BaseModel, Field
from app.core.config import settings
from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI

class BaseLLM:
    

    model_presets = {
        'base_performance': 'gemini-1.5-flash-8b',  # Модель Google Generative AI
        'high_performance': 'gpt-4o-mini',          # Модель OpenAI GPT-4
    }
    
    def __init__(self, llm_presets: str = 'base_performance'):
        """
        Инициализация модели LLM с выбранным пресетом.
        
        :param llm_presets: Строка, которая указывает, какую модель использовать. 
                            Допустимые значения: 'base_performance', 'high_performance'
        """
        # Проверяем, что переданный пресет есть в списке допустимых
        if llm_presets not in self.model_presets:
            raise ValueError(f"Недопустимое значение llm_presets: {llm_presets}. "
                             f"Допустимые значения: {list(self.model_presets.keys())}")
        
        # Выбираем модель на основе пресета
        selected_model = self.model_presets[llm_presets]
        
        if selected_model == 'gpt-4o-mini':
            # Если выбран пресет для модели OpenAI GPT-4
            self.model = ChatOpenAI(api_key=settings.OPENAI_API_KEY, model=selected_model)
        else:
            # Иначе используем Google Generative AI
            self.model = ChatGoogleGenerativeAI(api_key=settings.GOOGLE_API_KEY, model=selected_model)



    def send_request_pydantic(self, text_query: str, pydantic_object: BaseModel, system_prompt: str):
        parser = PydanticOutputParser(pydantic_object=pydantic_object)

        format_instructions = parser.get_format_instructions()

        prompt = ChatPromptTemplate.from_messages([
                ('system', '{system_prompt}\n\n\n{format_instructions}'),
                ('human', '{input}')
        ])

        chain = prompt | self.model

        response: dict =  chain.invoke({
            'system_prompt': system_prompt,
            'format_instructions': format_instructions,
            'input': text_query
        })

        pydantic_parsed_data: BaseModel = parser.parse(response.content)

        return pydantic_parsed_data


    def send_request_json(self, text_query: str, pydantic_object: BaseModel, instruction_for_llm: str):
        ...

    def send_request(self, full_prompt: str) -> dict[str, str]:
        return self.model.invoke(full_prompt)

