from langchain_google_genai import GoogleGenerativeAI
from app.core.config import settings
from langchain_core.prompts import ChatPromptTemplate
from pydantic import BaseModel, Field

class IntentClassification:
    def __init__(self):
        self.google_genai = GoogleGenerativeAI(model=settings.GOOGLE_MODEL_NAME)

    def classify_intent(self, text: str) -> str:
        prompt = ChatPromptTemplate.from_messages([
            ("system", "Ты - эксперт по книгам. Ты умеешь извлекать параметры книги из текста. НЕ КОВЕРКАЙ НИКАК ПАРАМЕТРЫ ЕСЛИ ЧЕЛОВЕК ПЕРЕДАЛ Книги пушкина то передавай Пушкин\nFormat instructions: {format_instructions}"),
            ("user", "{text}")
        ])
