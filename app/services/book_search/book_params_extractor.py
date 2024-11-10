from langchain_google_genai import GoogleGenerativeAI
from dotenv import load_dotenv
from langchain_core.output_parsers import PydanticOutputParser
from .book_parser import SearchParams
from langchain_core.prompts import ChatPromptTemplate
from app.core.config import settings

load_dotenv()

def extract_book_params(text: str) -> dict:
    google_genai = GoogleGenerativeAI(model=settings.GOOGLE_MODEL_NAME)
    prompt = ChatPromptTemplate.from_messages([
        ("system", "Ты - эксперт по книгам. Ты умеешь извлекать параметры книги из текста. НЕ КОВЕРКАЙ НИКАК ПАРАМЕТРЫ ЕСЛИ ЧЕЛОВЕК ПЕРЕДАЛ Книги пушкина то передавай автор: Пушкин\nFormat instructions: {format_instructions}"),
        ("user", "{text}")
    ])

    parser = PydanticOutputParser(pydantic_object=SearchParams)

    chain = prompt | google_genai | parser
    return chain.invoke({"text": text, "format_instructions": parser.get_format_instructions()})
