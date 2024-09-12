from exa_py import Exa
from dotenv import load_dotenv
import os

class ExaHandler:

    def __init__(self, site_name: str = None):
        PERMITTED_NAMES = {
            "pushkinlibrary": "https://pushkinlibrary.kz/", 
            "esimder": "https://esimder.pushkinlibrary.kz",
            "olketanu": "https://olketanu.pushkinlibrary.kz/", 
            "irbis": "http://irbis.pushkinlibrary.kz:8087",
            "anyz": "https://anyz.pushkinlibrary.kz"
        }
        
        # Проверяем, указан ли site_name и включен ли он в разрешенные домены
        if site_name and site_name in PERMITTED_NAMES:
            self.INCLUDE_DOMAINS = [PERMITTED_NAMES[site_name]]
        else:
            # Печатаем для отладки
            print(f"Invalid domain: {site_name}")
            raise ValueError(f"Invalid domain: {site_name}")

        load_dotenv()
        self._exa_api = os.getenv('EXA_API')
        self._exa: Exa = Exa(self._exa_api)

    def send_request(self, query: str, num_result: int, max_characters: int = 1024):
        response = self._exa.search_and_contents(
            query=query,
            num_results=num_result,
            include_domains=self.INCLUDE_DOMAINS,
            type="keyword",
        )

        formatted_result = [{
            "title": item.title,
            "url": item.url,
            "content": item.text[:max_characters]
        } for item in response.results]

        return formatted_result




def main():
    exa: ExaHandler = ExaHandler()
    result = exa.send_request("легенда о рахмановских ключах", 3, 1024)
    print(result)



if __name__ == '__main__':
    main()