from exa_py import Exa
from dotenv import load_dotenv
import os


class ExaHandler:

    INCLUDE_DOMAINS = ["https://pushkinlibrary.kz/", "https://esimder.pushkinlibrary.kz",
                       "https://olketanu.pushkinlibrary.kz/", "http://irbis.pushkinlibrary.kz:8087",
                       "https://anyz.pushkinlibrary.kz"]


    def __init__(self):
        load_dotenv()
        self._exa_api = os.getenv('EXA_API')
        self._exa: Exa = Exa(self._exa_api)

    def send_request(self, query: str,
                     num_result: int,
                     max_characters: int = 1024):
        # Выполняем запрос
        response = self._exa.search_and_contents(query=query,
                                                 num_results=num_result,
                                                 include_domains=self.INCLUDE_DOMAINS,
                                                 type="keyword",
                                                 text={"max_characters": max_characters})

        # Обрабатываем результат, обращаясь к атрибутам объектов напрямую
        formatted_result = [{
            "title": item.title,
            "url": item.url,
            "content": item.text # Обрезаем текст по лимиту символов
        } for item in response.results]  # Переходим по правильному атрибуту results

        return formatted_result


def main():
    exa: ExaHandler = ExaHandler()
    result = exa.send_request("легенда о рахмановских ключах", 3, 1024)
    print(result)



if __name__ == '__main__':
    main()