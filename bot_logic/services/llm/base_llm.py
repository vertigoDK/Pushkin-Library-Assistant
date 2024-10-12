from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.output_parsers import JsonOutputParser
from langchain_openai import ChatOpenAI
from pydantic import BaseModel
from langchain.prompts import ChatPromptTemplate

from dotenv import load_dotenv

class LLMBase:
    
    def __init__(self, model_name: str = "gpt-4o-mini", api_key: str = None, chat_history=None):
        # Загрузка переменных окружения (например, для API ключей)
        load_dotenv()

        self._chat_history = chat_history  # История чатов
        self._model_name = model_name
        self._api_key = api_key
        
        # Инициализация модели OpenAI (или другой модели) с переданными параметрами
        self._model = ChatOpenAI(model=self._model_name, api_key=self._api_key)

    def call_json_output_parser(self, text_query: str, llm_prompt: str, pydantic_object: BaseModel):
        prompt = ChatPromptTemplate.from_messages([
            ("system", "{llm_prompt}\nFormatting Instruction {format_instruction}"),
            ("human", "{phrase}")
        ])

        parser = JsonOutputParser(pydantic_object=pydantic_object)

        chain = prompt | self._model | parser

        return chain.invoke({
            "llm_prompt": llm_prompt,
            "phrase": text_query,
            "format_instruction": parser.get_format_instructions()
        })
    
    def base_query_handler(self, text_query: str, llm_prompt: str):
        prompt = ChatPromptTemplate.from_messages([
            ("system", "Chat History: \n {chat_history} \n {llm_prompt}"),
            ("human", "{phrase}")
        ])

        chain = prompt | self._model

        return chain.invoke({
            "llm_prompt": llm_prompt,
            "phrase": text_query,
            "chat_history": self._chat_history  # Передаём историю
        })

    def rag_query_handler(self, text_query: str, llm_prompt: str, context: str):
        prompt = ChatPromptTemplate.from_template(("chat history: \n{chat_history} \n {llm_prompt} \n context: \n------------ {context} \n ---------------- Вопрос: {phrase}"))

        prompt = prompt.format(llm_prompt=llm_prompt, context=context, phrase=text_query, chat_history=self._chat_history)

        return self._model.invoke(prompt)
