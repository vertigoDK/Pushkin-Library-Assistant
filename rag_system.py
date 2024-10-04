from chroma_handlers.document_loader import DocumentLoader
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI

class RagSystem:
    
    def __init__(self):
        # Инициализация загрузчика базы данных и модели Gemini
        self._dbLoader = DocumentLoader(base_dir_path="knowledgebase")
        # self._model = ChatGoogleGenerativeAI(model="gemini-1.5-flash")
        self._model = ChatOpenAI(model="gpt-4o-mini")


    def search(self, user_query: str):
        # Выполняем поиск по векторной базе данных
        results = self._dbLoader._vector_store.similarity_search_with_relevance_scores(
            query=user_query,
            k=5  # Количество возвращаемых релевантных результатов
        )
        return results

    def generate_answer(self, user_query: str, search_results):
        # Формируем контекст на основе результатов поиска
        context = "\n\n".join([f"Релевантный результат {i+1}: {result[0].page_content}" for i, result in enumerate(search_results)])
        
        # Создаем шаблон для запроса к модели Gemini
        prompt = ChatPromptTemplate([
            ("system", """
                Ты — продвинутая система ответа на запросы, использующая RAG (Retrieve and Generate). 
                Я дам тебе несколько релевантных результатов поиска на основе запроса пользователя.
                Используя эти результаты, сгенерируй краткий и полезный ответ для пользователя.

                Контекст поиска:
                {context}
            """),
            ("human", "Запрос пользователя: {query}")
        ])

        # Выполняем генерацию ответа от модели Gemini
        chain = prompt | self._model
        answer = chain.invoke({
            "query": user_query,
            "context": context
        })
        
        return answer

if __name__ == '__main__':
    rSystem: RagSystem = RagSystem()

    user_request: str = "прялка великанши"

    # Поиск по запросу
    results = rSystem.search(user_request)
    print(results)
    # Генерация ответа с использованием результатов поиска
    answer = rSystem.generate_answer(user_request, results)


    print(answer.usage_metadata['total_tokens'])    
    print(answer.content)
