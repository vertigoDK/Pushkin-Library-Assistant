from app.appConfig import GOOGLE_API  # Импорт API-ключа из файла настроек
import google.generativeai as genai

class QueryHandler:
    # Класс для обработки запросов и генерации ответов на основе релевантного текста

    def get_relevant_passage(self, query, db, n_results):
        # Метод для получения наиболее релевантного отрывка текста по запросу из базы данных
        passage = db.query(query_texts=[query], n_results=n_results)['documents'][0]
        return passage

    def make_rag_prompt(self, query, relevant_passage):
        # Метод для формирования промпта для библиотечного помощника с учетом запроса и релевантного текста
        escaped = relevant_passage.replace("'", "").replace('"', "").replace("\n", " ")
        prompt = ("""Ты - помощник в библиотеке, тебя зовут Вася. Твоя задача - помогать людям и отвечать на их вопросы. 
                Если в предоставленном контексте есть информация, которая может помочь ответить на вопрос, ты можешь использовать её, 
                но помни, что контекст может быть разнообразным и не всегда содержит полезные данные. Так же давай полный ответ.
                НЕ ПРИ КАКИХ ОБСТОЯТЕЛЬСТВАХ не упомянай о контексте в ответе

                QUESTION: '{query}'
                PASSAGE: '{relevant_passage}'

                ANSWER:
                """).format(query=query, relevant_passage=escaped)
        
        return prompt

    def generate_response(self, prompt):
        # Метод для генерации ответа на основе промпта с использованием модели искусственного интеллекта
        gemini_api_key = GOOGLE_API
        if not gemini_api_key:
            raise ValueError("Gemini API Key not provided. Please provide GEMINI_API_KEY as an environment variable")
        genai.configure(api_key=gemini_api_key)
        model = genai.GenerativeModel('gemini-pro')
        answer = model.generate_content(prompt)
        return answer.text

    def generate_answer(self, db,query):
        # Метод для генерации ответа на основе запроса и релевантного текста из базы данных
        relevant_text = self.get_relevant_passage(query,db,n_results=3)
        prompt = self.make_rag_prompt(query, 
                                relevant_passage="".join(relevant_text)) # joining the relevant chunks to create a single passage
        answer = self.generate_response(prompt)

        return answer  
