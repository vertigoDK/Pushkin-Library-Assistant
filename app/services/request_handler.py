from app.services.intents_recognize import recognize_intent
from app.services.processors.books_search import BookSearchEngine, BookSearchParams, extract_books_search_params
from pydantic import BaseModel, Field


class RequestHandlerIntentProccessed:
    """
    Класс для обработки действий на основе намерений.
    Содержит методы для взаимодействия с различными движками.
    """

    def books_search_proccessed(self, params: BookSearchParams) -> dict:
        """
        Логика поиска книг.
        :param params: Параметры для поиска книг.
        :return: Результат поиска книг.
        """
        # Сейчас нужно провалидировать данные из params
        book_search_engine = BookSearchEngine(search_params=params)

        results: dict = book_search_engine.execute_search()

        return {"result": results, "params": params.dict()}

    def legends_search_proccessed(self, params: dict) -> dict:
        """
        Логика поиска легенд.
        :param params: Параметры для поиска легенд.
        :return: Результат поиска легенд.
        """
        if not params or "legend_name" not in params:
            return {"error": "Необходимо передать параметры для поиска легенды."}

        # Пример вызова логики поиска легенд
        return {"result": f"Поиск легенд по имени: {params['legend_name']}"}



class RequestHandler():

    def __init__(self):
        self.intent_processor = RequestHandlerIntentProccessed()

    def handle_request(self, text_query: str) -> dict:
        """
        Обработка запроса: распознавание намерения и выполнение соответствующего действия.
        
        :param text_query: Строка запроса пользователя.
        :param params: Дополнительные параметры для выполнения действия (если есть).
        :return: Результат действия.
        """
        
        recognize_intent_data: dict = recognize_intent(text_query=text_query)

        print(recognize_intent_data)
        intent = 'books_search'

        if intent == 'books_search':

            params = extract_books_search_params(text_query=text_query)
            return self.intent_processor.books_search_proccessed(params=params)

        elif intent == 'legends_search':
            
            return {"data": "Пока не реализовал"}

        else:
            return {"data": "Пока не реализовал"}