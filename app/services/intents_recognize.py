from app.services.llm.llm_handlers import BaseLLM

def recognize_intent(text_query: str) -> str:
    basellm: BaseLLM = BaseLLM(llm_presets='high_performance')

    instructions_for_llm: str = """
    Тебе будет передан текст, и ты должен будешь определить намерение человека. Всего существует 3 возможных намерения:
    1) books_search (Когда человек хочет сделать какой-то поиск по книгам. ВАЖНО: человеку нужно узнать, есть ли какие-то книги в наличии. Не вызывай books_search, если человек просит, к примеру, посоветовать книгу.)
    2) legends_search (Когда человек задает какой-то вопрос о легендах. Например, "Расскажи легенду о горе Толагай" или "Прялка великаны".)
    3) just_speak (Если человек просто задает вопрос, который не требует ни одного из прошлых движков.)
    """

    # Формируем полный запрос для модели
    full_prompt = f"{instructions_for_llm}\n\nТекст запроса: {text_query}"

    # Отправляем запрос к модели
    recognized_intent: str = basellm.send_request(full_prompt=full_prompt)

    return recognized_intent