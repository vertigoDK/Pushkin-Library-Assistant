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
        prompt = ("""Ты - помощник в библиотеке, тебя зовут Вася. Отвечай на любой вопрос который тебе дадут даже если его нет в контексте,
                  старайся давать полный ответ и быть дружелюбным

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

    def generate_llm_response(self, prompt):
        # Получение ключа API Gemini
        gemini_api_key = GOOGLE_API
        if not gemini_api_key:
            raise ValueError("Gemini API Key not provided. Please provide GEMINI_API_KEY as an environment variable")

        # Настройка LLM-модели
        genai.configure(api_key=gemini_api_key)
        model = genai.GenerativeModel('gemini-pro')

        # Генерация ответа с помощью LLM
        answer = model.generate_content(prompt)

        # Возвращение сгенерированного ответа
        return answer.text


    def generate_answer(self, db, query):
        # Получение релевантного текста из базы данных
        relevant_text = self.get_relevant_passage(query, db, n_results=3)
        context_available = len(relevant_text) > 0

        # Формирование запроса
        if context_available:
            # Контекст доступен
            prompt = self.make_rag_prompt(query, 
                                        relevant_passage="".join(relevant_text))
        else:
            # Контекст недоступен
            prompt = """Ты - помощник в библиотеке, тебя зовут Вася. Отвечай на любой вопрос который тебе дадут даже если его нет в контексте,
                          старайся давать полный ответ и быть дружелюбным

                        QUESTION: '{query}'

                        ANSWER:
                        """.format(query=query)

        # Генерация ответа
        try:
            # Попытка сгенерировать ответ с использованием контекста
            if context_available:
                answer = self.generate_response(prompt)
            else:
                # Если контекст недоступен, используем LLM напрямую
                answer = self.generate_llm_response(prompt)
        except Exception as e:
            # Обработка ошибок
            answer = f"К сожалению, я не могу сейчас ответить на ваш вопрос. {e}"

        return answer