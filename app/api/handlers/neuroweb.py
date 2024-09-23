from . import params_splitter, baseai
from app.api.services import (
    books_api,
    data_extractors,
    exa_api,
)


class AIHandler(baseai.BaseAI):

    def __init__(self, model_name: str = "gemini-1.5-flash"):
        super().__init__(model_name)

    MODEL_PROMPT = """
    у тебя есть 1 четкая задача, определять какого намерение пользователя, ответ возвращаешь
    в таком формате `tool_name` если же пользователю нужно несколько тулз то передавай их через пробел
    всего есть вот такие тулзы
    knowledge_base - получить доп информацию по вопросам библиотеки, к примеру какие то вопросы которые относятся к библиотеке то возвращай ее

    club_info_provider = получить информацию о клубах или же кружках которые есть в библиотеке

    books_search - если человек хочет сделать поиск по книгам

    undefined - если ты не уверен что хочет выполнить пользователь.

    ТЫ НЕ МОЖЕШЬ ОТВЕЧАТЬ НИЧЕГО КРОМЕ ЭТИХ ТУЛЗ

    Вот его запрос:\n
    """

    def classify_requested_tools(self, user_message: str):
        return self.send_request(user_message=user_message, model_prompt=self.MODEL_PROMPT)


if __name__ == '__main__':
    aiHandler: AIHandler = AIHandler()
    ai_response: str = aiHandler.send_request("книги абая")
    ai_response = ai_response.strip()
    print(ai_response)
    if 'books_search' == ai_response:
        print('Будте')
