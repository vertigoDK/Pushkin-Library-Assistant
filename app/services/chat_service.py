from typing import Dict, Any
from app.services.intent_classification import IntentClassification
from app.services.vector_search_service.anyz_vector_handler import AnyzVectorHandler
from app.services.vector_search_service.general_vector_handler import GeneralVectorHandler
from app.services.vector_search_service.esimder_vector_handler import EsimderVectorHandler
from app.services.book_search.book_parser import SearchParams, BookSearchEngine
from langchain_google_genai import GoogleGenerativeAI
from app.core.config import settings
from langchain_core.prompts import ChatPromptTemplate
from app.services.dosai.status_service import DosAIStatusService
from app.services.system.settings_service import SystemSettingsService

class ChatService:
    def __init__(self):
        self.intent_classifier = IntentClassification()
        self.anyz_handler = AnyzVectorHandler()
        self.general_handler = GeneralVectorHandler()
        self.esimder_handler = EsimderVectorHandler()
        self.llm = GoogleGenerativeAI(
            model=settings.GOOGLE_MODEL_NAME,
            temperature=0.7
        )
        self.status_service = DosAIStatusService()
        self.settings_service = SystemSettingsService()

    async def process_chat(self, text_query: str) -> Dict[str, Any]:
        settings = self.settings_service.get_settings()
        if not settings["system"]["enabled"]:
            message = settings["system"]["maintenance_message"]
            if settings["system"]["maintenance_until"]:
                message += f"\nСистема будет доступна после: {settings['system']['maintenance_until']}"
                
            return {
                "original_query": text_query,
                "intent_classification": {"intent_type": "disabled"},
                "search_results": None,
                "llm_response": message
            }
            
        # Классифицируем запрос
        intent_result = self.intent_classifier.process_query(text_query)
        intent_type = intent_result["intent_type"]
        
        search_results = None
        llm_response = None

        # В зависимости от типа запроса используем соответствующий поиск
        if intent_type == "book":
            search_params = SearchParams(
                author=intent_result["classification"]["book_search"].get("author"),
                title=intent_result["classification"]["book_search"].get("title"),
                keywords=intent_result["classification"]["book_search"].get("keywords"),
                year1=intent_result["classification"]["book_search"].get("year1"),
                year2=intent_result["classification"]["book_search"].get("year2")
            )
            search_engine = BookSearchEngine(search_params=search_params)
            search_results = search_engine.execute_search()
            if search_results:
                context_data = self._prepare_context_from_results(search_results)
                llm_response = await self._generate_llm_response(text_query, context_data)
                search_results["documents"] = context_data["documents"]

        elif intent_type in ["anyz", "esimder", "general"]:
            handler = getattr(self, f"{intent_type}_handler")
            search_results = handler.search(
                query=text_query,
                n_results=5
            )
            if search_results:
                context_data = self._prepare_context_from_results(search_results)
                llm_response = await self._generate_llm_response(text_query, context_data)
                search_results["documents"] = context_data["documents"]

        elif intent_type == "other":
            prompt = ChatPromptTemplate.from_messages([
                ("system", """Ты - помощник библиотеки. Используй предоставленные документы 
            для ответа на вопрос пользователя. Отвечай дружелюбно и информативно. ДАВАЙ ВСЕГДА ФОРМАТ В HTML но пиши текстом обычным, не форматируй. Используй так же классы. 
            Руководство по использованию классов:
Основной текст:
.text-normal - для обычного текста
.text-emphasis - для выделения важных частей текста
.text-quote - для цитат или важных выдержек
Списки:
.list-decimal - для нумерованных списков (шаги, инструкции)
.list-disc - для маркированных списков (перечисления)
Заголовки:
.heading-large - для основных заголовков секций
.heading-medium - для подзаголовков
Выделения:
.highlight - для выделения ключевых слов или фраз
.note - для дополнительной информации или примечаний
Таблицы:
.table-container - обертка для таблиц (обеспечивает горизонтальную прокрутку)
.table-simple - базовый стиль для таблиц
ЖИЗНЕННО ВАЖНО!!! ОТВЕЧАЙ БЕЗ ЭМОДЗИ!!!
"""),
                ("user", "{query}")
            ])
            
            chain = prompt | self.llm
            llm_response = str(chain.invoke({"query": text_query}))

        return {
            "original_query": text_query,
            "intent_classification": intent_result,
            "search_results": search_results,
            "llm_response": llm_response
        }

    def _prepare_context_from_results(self, search_results: Dict) -> Dict[str, Any]:
        documents = []
        
        if isinstance(search_results, dict):
            # Для векторного поиска (anyz, esimder, general)
            if "ids" in search_results and "documents" in search_results:
                ids = search_results["ids"][0] if search_results["ids"] else []
                docs = search_results["documents"][0] if search_results["documents"] else []
                metadatas = search_results["metadatas"][0] if search_results.get("metadatas") else []
                
                for i, (id, doc, metadata) in enumerate(zip(ids, docs, metadatas)):
                    documents.append({
                        "text": doc,
                        "metadata": {
                            **metadata,
                            "id": id,
                            "type": "document"
                        }
                    })
            
            # Для поиска книг
            elif "recs" in search_results:
                for book in search_results["recs"]:
                    doc = {
                        "text": f"Название: {book.get('title', '')}\nАвтор: {book.get('author', '')}\n",
                        "metadata": {
                            "title": book.get('title', 'Неизвестная книга'),
                            "author": book.get('author', ''),
                            "year": book.get('year', ''),
                            "type": "book"
                        }
                    }
                    if book.get('year'):
                        doc["text"] += f"Год: {book['year']}\n"
                    if book.get('description'):
                        doc["text"] += f"Описание: {book['description']}"
                    documents.append(doc)
                    
        return {
            "documents": documents,
            "total": len(documents)
        }

    async def _generate_llm_response(self, query: str, context_data: Dict[str, Any]) -> str:
        """Генерирует ответ на основе контекста с указанием источников"""
        prompt = ChatPromptTemplate.from_messages([
            ("system", """Ты - помощник библиотеки. Используй предоставленные документы 
            для ответа на вопрос пользователя. Отвечай дружелюбно и информативно. ДАВАЙ ВСЕГДА ФОРМАТ В HTML. Используй так же классы. 
            Руководство по использованию классов:
Основной текст:
.text-normal - для обычного текста
.text-emphasis - для выделения важных частей текста
.text-quote - для цитат или важных выдержек
Списки:
.list-decimal - для нумерованных списков (шаги, инструкции)
.list-disc - для маркированных списков (перечисления)
Заголовки:
.heading-large - для основных заголовков секций
.heading-medium - для подзаголовков
Выделения:
.highlight - для выделения ключевых слов или фраз
.note - для дополнительной информации или примечаний
Таблицы:
.table-container - обертка для таблиц (обеспечивает горизонтальную прокрутку)
.table-simple - базовый стиль для таблиц
ЖИЗНЕННО ВАЖНО!!! ОТВЕЧАЙ БЕЗ ЭМОДЗИ!!!
            Документы:
            {documents}"""),
            ("user", "{query}")
        ])
        
        documents_text = "\n\n".join([
            f"[Документ {i+1}]: {doc['text']} Источник: {doc['metadata']['url']}\n\n" 
            for i, doc in enumerate(context_data["documents"])
        ])

        chain = prompt | self.llm
        response = chain.invoke({
            "documents": documents_text,
            "query": query
        })

        return str(response) 