from typing import Dict, Any
from app.services.intent_classification import IntentClassification
from app.services.vector_search_service.anyz_vector_handler import AnyzVectorHandler
from app.services.vector_search_service.general_vector_handler import GeneralVectorHandler
from app.services.book_search.book_parser import SearchParams, BookSearchEngine
from langchain_google_genai import GoogleGenerativeAI
from app.core.config import settings
from langchain_core.prompts import ChatPromptTemplate

class ChatService:
    def __init__(self):
        self.intent_classifier = IntentClassification()
        self.anyz_handler = AnyzVectorHandler()
        self.general_handler = GeneralVectorHandler()
        self.llm = GoogleGenerativeAI(
            model=settings.GOOGLE_MODEL_NAME,
            temperature=0.7
        )

    async def process_chat(self, text_query: str) -> Dict[str, Any]:
        # 1. Перефразируем запрос
        rephrased_query = self.intent_classifier.rephrase_query(text_query)
        
        # 2. Классифицируем запрос
        intent_result = self.intent_classifier.process_query(rephrased_query)
        intent_type = intent_result["intent_type"]
        
        search_results = None
        llm_response = None

        # 3. В зависимости от типа запроса используем соответствующий поиск
        if intent_type == "book":
            # Используем поиск книг
            search_params = SearchParams(
                author=intent_result["classification"]["book_search"].get("author"),
                title=intent_result["classification"]["book_search"].get("title"),
                keywords=intent_result["classification"]["book_search"].get("keywords"),
                year1=intent_result["classification"]["book_search"].get("year1"),
                year2=intent_result["classification"]["book_search"].get("year2")
            )
            search_engine = BookSearchEngine(search_params=search_params)
            search_results = search_engine.execute_search()

        elif intent_type == "anyz":
            # Используем векторный поиск для легенд
            search_results = self.anyz_handler.search(
                query=rephrased_query,
                n_results=5
            )
            # Формируем контекст из результатов поиска
            context = self._prepare_context_from_results(search_results)
            llm_response = await self._generate_llm_response(text_query, context)

        elif intent_type == "general":
            # Используем векторный поиск для общей информации
            search_results = self.general_handler.search(
                query=rephrased_query,
                n_results=5
            )
            context = self._prepare_context_from_results(search_results)
            llm_response = await self._generate_llm_response(text_query, context)

        return {
            "original_query": text_query,
            "rephrased_query": rephrased_query,
            "intent_classification": intent_result,
            "search_results": search_results,
            "llm_response": llm_response
        }

    def _prepare_context_from_results(self, search_results: Dict) -> str:
        """Подготавливает контекст из результатов поиска"""
        context_parts = []
        
        if "documents" in search_results:
            for doc in search_results["documents"]:
                if isinstance(doc, dict) and "text" in doc:
                    context_parts.append(doc["text"])
                else:
                    context_parts.append(str(doc))
                    
        return "\n\n".join(context_parts)

    async def _generate_llm_response(self, query: str, context: str) -> str:
        """Генерирует ответ на основе контекста"""
        prompt = ChatPromptTemplate.from_messages([
            ("system", """Ты - помощник библиотеки. Используй предоставленный контекст 
            для ответа на вопрос пользователя. Отвечай дружелюбно и информативно.

            Контекст:
            {context}"""),
            ("user", "{query}")
        ])

        chain = prompt | self.llm
        response = chain.invoke({
            "context": context,
            "query": query
        })

        return str(response) 