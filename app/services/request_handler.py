from app.services.intents_recognize import recognize_intent

class RequestHandlerIntentProccessed:
    """
    Класс для обработки действий на основе намерений.
    Содержит методы для взаимодействия с различными движками.
    """

    def books_search_proccessed(self, params: dict) -> dict:
        """
        Логика поиска книг.
        :param params: Параметры для поиска книг.
        :return: Результат поиска книг.
        """
        if not params or "title" not in params:
            return {"error": "Необходимо передать параметры для поиска книги."}

        # Пример вызова логики поиска книг (замени на реальную логику)
        return {"result": f"Поиск книг по названию: {params['title']}"}

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

    def handle_request(self, text_query: str, params: dict = None) -> dict:
        """
        Обработка запроса: распознавание намерения и выполнение соответствующего действия.
        
        :param text_query: Строка запроса пользователя.
        :param params: Дополнительные параметры для выполнения действия (если есть).
        :return: Результат действия.
        """
        
        recognize_intent_data: dict = recognize_intent(text_query=text_query)

        intent: str = recognize_intent_data['data']['content'].strip()

        if intent == 'books_search':
            
            return self.intent_processor.books_search_proccessed(params=params)

        elif intent == 'legends_search':
            
            return {"data": "Пока не реализовал"}

        else:
            return {"data": "Пока не реализовал"}