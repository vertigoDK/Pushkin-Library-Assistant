from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.output_parsers import JsonOutputParser
from langchain_core.prompts import ChatPromptTemplate
from pydantic import BaseModel

from dotenv import load_dotenv

class LLMBase:
    
    def __init__(self):
        load_dotenv()

        self._model = ChatGoogleGenerativeAI(model="gemini-1.5-flash")

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
            ("system", "{llm_prompt}"),
            ("human", "{phrase}")
        ])

        chain = prompt | self._model

        return chain.invoke({
            "llm_prompt": llm_prompt,
            "phrase": text_query
        })

    def rag_query_handler(self, text_query: str, llm_prompt: str, context: str):
        prompt = ChatPromptTemplate.from_template(("{llm_prompt} \n context: \n------------ {context} \n ---------------- Вопрос: {phrase}"))

        prompt = prompt.format(llm_prompt=llm_prompt, context=context, phrase=text_query)


        return self._model.invoke(prompt)