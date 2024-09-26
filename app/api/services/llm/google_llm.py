import os
from dotenv import load_dotenv
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import PydanticOutputParser
from langchain_openai import ChatOpenAI
from app.api.services.llm.tools.books_search import BooksSearchQuery
from pydantic import BaseModel, Field
from typing import Optional
class GoogleLLM:
    def __init__(self):
        load_dotenv()
        self._llm = ChatOpenAI(model="gpt-4o-mini", api_key=os.getenv('OPENAI_API_KEY'))
        
    def intents_recognize(self, user_message: str):

        class Intents(BaseModel):
            books_search: Optional[BooksSearchQuery] = Field(description="если человек хочет найти книги")
            other: Optional[str] = Field(description="other")
        
        prompt = ChatPromptTemplate.from_messages([
            ("system", "Ты должен распознать намерение человека. Если человек хочет найти книги ВАЖНО именно найти а не что бы ты ему порекомендовал, то это books_search, если человек хочет записаться в библиотеку это register, если ничего из этого other. {format_instructions}"),
            ("human", "{input}")
        ])

        parser = PydanticOutputParser(pydantic_object=Intents)
        format_instructions = parser.get_format_instructions()
        chain = prompt | self._llm | parser
        
        return chain.invoke({
            "input": user_message,
            "format_instructions": format_instructions
        })
    
    
    
if __name__ == '__main__':
    gLLM = GoogleLLM()
    result = gLLM.intents_recognize("Книги абая с 1900 по 2000 год")
    print(result)