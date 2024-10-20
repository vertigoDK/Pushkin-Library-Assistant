from app.services.intents_recognize import recognize_intent, ParamsExtractor
from pydantic import BaseModel, Field

from app.services.processors.books_search import BookSearchEngine
from app.services.processors.esimder_search import EsimderSearch


class RequestHandlerIntentProccessed:
    """
    Класс для обработки действий на основе намерений.
    Содержит методы для взаимодействия с различными движками.
    """

    def books_search_proccessed(self, params: BaseModel) -> dict:
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

    def esimder_search_people_proccessed(self, text_query: str):
        """
        Логика поиска по проекту Esimder (поиск по известным людям).
        """
        eSearch = EsimderSearch()

        # Определение типа поиска: person или category
        search_type_data: BaseModel = eSearch.get_search_type(text_query=text_query)

        # Выполняем Fuzzy Search по найденному типу
        fuzzy_search_result: str = eSearch.execute_fuzzy_search(
            search_type=search_type_data.search_type,
            search_type_content=search_type_data.content
        )

        # Если найденная категория, возвращаем ссылку
        if search_type_data.search_type == 'category':
            return {"category_info": fuzzy_search_result}

        # Если это человек, пытаемся найти самое похожее имя и вернуть данные о человеке
        target_object = eSearch.find_target_object_with_llm(
            objects=fuzzy_search_result,
            text_query=search_type_data.content
        )

        record = eSearch.get_record(target_object)

        return {'record': record}

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
        params_extractor = ParamsExtractor()
        recognize_intent_data: dict = recognize_intent(text_query=text_query)

        intent = recognize_intent_data.content

        if intent == 'books_search':
            
            params = params_extractor.extract_search_params_by_intent(text_query=text_query, intent=intent)
            return self.intent_processor.books_search_proccessed(params=params)

        elif intent == 'legends_search':
            
            return {"data": "legends"}

        elif intent == 'esimder_search':
            
            return self.intent_processor.esimder_search_people_proccessed(text_query=text_query)

        else:
            return {"data": "just speak"}