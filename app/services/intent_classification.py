from langchain_google_genai import GoogleGenerativeAI
from app.core.config import settings
from langchain_core.prompts import ChatPromptTemplate
from typing import Dict, Any
import json

class IntentClassification:
    def __init__(self):
        self.google_genai = GoogleGenerativeAI(
            model=settings.GOOGLE_MODEL_NAME,
            temperature=0
        )

    def classify_intent(self, text: str) -> Dict[str, Any]:
        prompt = ChatPromptTemplate.from_messages([
            ("system", """Ты - классификатор поисковых запросов. Проанализируй запрос и верни JSON с классификацией.

СТРОГО следуй формату ответа:
{{
    "intent_type": "book|anyz|esimder|general|other",
    "search_params": {{
        // для book:
        "author": "имя автора или null",
        "title": "название или null",
        "keywords": "ключевые слова",
        "year1": число или null,
        "year2": число или null

        // для anyz:
        "keywords": "ключевые слова для поиска легенд"

        // для esimder:
        "keywords": "ключевые слова для поиска имен или известных людей"

        // для general:
        "keywords": "ключевые слова для общего поиска"

        // для other:
        "keywords": "исходный запрос"
    }}
}}

Правила классификации:
1. book - если запрос о книгах, произведениях, авторах
2. anyz - если запрос о легендах, аңыз, сказаниях
3. esimder - если запрос о известных людях, к примеру Акулов В И и прочее
4. general - если запрос о поиске в общей коллекции, к примеру история усть каменогорска, как стать читателем
5. other - для всех остальных запросов

Примеры:
- "Найди книги Пушкина про любовь" -> book
- "Расскажи легенду о Марқакөл" -> anyz
- "Информация об Акулове В.И." -> esimder
- "История Усть-Каменогорска" -> general
- "Как приготовить бешбармак" -> other"""),
            ("user", "{text}")
        ])

        try:
            chain = prompt | self.google_genai
            # Получаем ответ от модели
            result = chain.invoke({"text": text})
            
            # Теперь result это строка, а не объект
            response_text = str(result)
            
            # Находим начало и конец JSON
            start = response_text.find('{')
            end = response_text.rfind('}') + 1
            
            if start >= 0 and end > start:
                json_str = response_text[start:end]
                try:
                    return json.loads(json_str)
                except json.JSONDecodeError as e:
                    print(f"JSON parsing error: {str(e)}")
                    print(f"Attempted to parse: {json_str}")
            else:
                print(f"No JSON found in response: {response_text}")
                
        except Exception as e:
            print(f"Error in classify_intent: {str(e)}")
            print(f"Full response: {result if 'result' in locals() else 'No response'}")
        
        # Возвращаем other в случае ошибки
        return {
            "intent_type": "other",
            "search_params": {"keywords": text}
        }

    def process_query(self, text: str) -> Dict[str, Any]:
        try:
            # Получаем классификацию
            classification = self.classify_intent(text)
            intent_type = classification.get("intent_type", "other")
            search_params = classification.get("search_params", {"keywords": text})

            # Формируем ответ в зависимости от типа
            response = {
                "intent_type": intent_type,
                "original_query": text,
                "classification": {
                    "book_search": None,
                    "anyz_search": None,
                    "esimder_search": None,
                    "general_search": None
                }
            }

            # Заполняем соответствующий раздел
            if intent_type == "book":
                response["classification"]["book_search"] = {
                    "book_search_need": True,
                    "author": search_params.get("author"),
                    "title": search_params.get("title"),
                    "keywords": search_params.get("keywords"),
                    "year1": search_params.get("year1"),
                    "year2": search_params.get("year2")
                }
            elif intent_type == "anyz":
                response["classification"]["anyz_search"] = {
                    "anyz_search_need": True,
                    "keywords": search_params.get("keywords")
                }
            elif intent_type == "esimder":
                response["classification"]["esimder_search"] = {
                    "esimder_search_need": True,
                    "keywords": search_params.get("keywords")
                }
            elif intent_type == "general":
                response["classification"]["general_search"] = {
                    "general_search_need": True,
                    "keywords": search_params.get("keywords")
                }

            return response

        except Exception as e:
            print(f"Error in process_query: {str(e)}")
            return {
                "intent_type": "other",
                "original_query": text,
                "classification": {
                    "book_search": None,
                    "anyz_search": None,
                    "esimder_search": None,
                    "general_search": None
                }
            }

    def rephrase_query(self, text: str) -> str:
        prompt = ChatPromptTemplate.from_messages([
            ("system", """Ты - эксперт по обработке поисковых запросов. 
            Перефразируй запрос, оставив только ключевую суть вопроса/поиска.
            Убери все лишние слова, приветствия и прочее.
            
            Примеры:
            Вход: "Привет! Не подскажешь, где можно найти книги Абая?"
            Выход: "книги Абая"
            
            Вход: "Здравствуйте, мне бы хотелось узнать про историю Усть-Каменогорска"
            Выход: "история Усть-Каменогорска"
            
            Вход: "Добрый день! Подскажите пожалуйста, что означает имя Айсулу?"
            Выход: "значение имени Айсулу"
            
            Вход: "А можно узнать, есть ли какие-нибудь легенды о Маркаколе?"
            Выход: "легенды о Маркаколе"
            
            ВАЖНО: Верни только перефразированный текст, без кавычек и дополнительных пояснений."""),
            ("user", "{text}")
        ])

        try:
            chain = prompt | self.google_genai
            result = chain.invoke({"text": text})
            return str(result).strip()
        except Exception as e:
            print(f"Error in rephrase_query: {str(e)}")
            return text
