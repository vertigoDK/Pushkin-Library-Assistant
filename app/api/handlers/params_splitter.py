from . import baseai


class ParamsSplitter(baseai.BaseAI):

    MODEL_PROMPT = ""

    def __init__(self,
     task_classification: str = "error",
     model_name: str = "gemini-1.5-flash"):

        super().__init__(model_name)
        self._task_classification = task_classification

    def _books_params_splitter(self):
        ...
        

    def params_split(self, user_message: str):
        self.MODEL_PROMPT = "Тебе передают какой то пользовательский запрос по поиску книги, у тебя есть конкретная задача, ты должен разбить этот запрос на параметры, всего есть вот какие параметры, author, title, year1, year2, вернуть ответ ты должен в формате ответа ключ значение то есть, 'author': 'абай' и тд ОТВЕЧАЙ ТОЛЬТКО ТАК И НИКАК ИНАЧЕ вот запрос пользователя НЕ НАДО ЭТО ВЫВОДИТЬ В ФОРМАТЕ JSON, ВЫВОДИ КАК ОБЫЧНЫЙ ТЕКСТ:\n"
        if self._task_classification == 'error':
            raise Exception("Беда")
        model_response: str = self.send_request(user_message=user_message, model_prompt=self.MODEL_PROMPT)
        return model_response