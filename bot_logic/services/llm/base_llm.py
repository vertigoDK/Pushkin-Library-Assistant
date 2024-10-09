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
            ("system", "{llm_prompt}\Formatting Instruction {format_instruction}"),
            ("human", "{phrase}")
        ])

        parser = JsonOutputParser(pydantic_object=pydantic_object)

        chain = prompt | self._model | parser

        return chain.invoke({
            "llm_prompt": llm_prompt,
            "phrase": text_query,
            "format_instruction": parser.get_format_instructions()
        })