from . import baseai
import json
import re

class Prompts:
    BOOKS_SEARCH_PROMPT = """Тебе передают какой-то пользовательский запрос по поиску книги, у тебя есть конкретная задача: ты должен разбить этот запрос на параметры. Всего есть следующие параметры: author, title, year1, year2. Вернуть ответ ты должен в формате ключ-значение, то есть 'author': 'абай', и т.д.
    
    Верни данные в следующем формате JSON:
    {
        "author": "<автор>",
        "title": "<название>",
        "year1": <год1>,
        "year2": <год2>
    }
    выводи в таком формате НО КАК ТЕКСТ ОБЫЧНЫЙ
    Вот запрос пользователя:\n"""


class ParamsSplitter(baseai.BaseAI):
    
    def __init__(self, task_classification: str = "error", model_name: str = "gemini-1.5-flash"):
        super().__init__(model_name)
        self._task_classification = task_classification

    def _books_params_splitter(self, user_message: str):
        # Этот метод можно реализовать отдельно, если потребуется расширение логики
        pass

    def params_split(self, user_message: str):
        # Проверка на наличие ошибки
        if self._task_classification == 'error':
            raise Exception("Беда")

        # Формируем запрос к модели
        
        # Отправляем запрос и получаем ответ
        model_response: str = self.send_request(user_message=user_message, model_prompt=Prompts.BOOKS_SEARCH_PROMPT)
        print(model_response)
        # Обрабатываем строку, чтобы извлечь JSON
        result_dict = json.loads(model_response)
        return result_dict


        return {}
