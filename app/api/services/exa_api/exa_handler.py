from exa_py import Exa
from dotenv import load_dotenv
import os
import os
from dotenv import load_dotenv
from exa_py import Exa  # Импортируем модуль Exa, замените на правильный импорт, если требуется

class ExaHandler:
    """
    Handles interaction with the Exa API based on the type of site.
    """
    def __init__(self, site_type: str):
        PERMITTED_NAMES = {
            "pushkinlibrary": "https://pushkinlibrary.kz/", 
            "esimder": "https://esimder.pushkinlibrary.kz",
            "olketanu": "https://olketanu.pushkinlibrary.kz/", 
            "irbis": "http://irbis.pushkinlibrary.kz:8087",
            "anyz": "https://anyz.pushkinlibrary.kz"
        }

        if site_type == 'base':
            self.INCLUDE_DOMAINS = [
                "https://pushkinlibrary.kz/", 
                "https://olketanu.pushkinlibrary.kz/", 
                "http://irbis.pushkinlibrary.kz:8087"
            ]
        elif site_type == 'anyz_esimder':
            self.INCLUDE_DOMAINS = [
                "https://anyz.pushkinlibrary.kz", 
                "https://esimder.pushkinlibrary.kz"
            ]
        else:
            # Default to all permitted domains if the type is invalid
            self.INCLUDE_DOMAINS = [
                "https://pushkinlibrary.kz/", 
                "https://olketanu.pushkinlibrary.kz/", 
                "http://irbis.pushkinlibrary.kz:8087"
            ]
        
        load_dotenv()
        self._exa_api = os.getenv('EXA_API')
        if not self._exa_api:
            print("Error: EXA_API environment variable not set.")
        self._exa = Exa(self._exa_api)

    def send_request(self, query: str, num_result: int, max_characters: int = 1024):
        print(f"Sending request with query: {query}, num_result: {num_result}, max_characters: {max_characters}, domains: {self.INCLUDE_DOMAINS}")

        try:
            response = self._exa.search_and_contents(
                query=query,
                num_results=num_result,
                include_domains=self.INCLUDE_DOMAINS,
                type="keyword",
            )
            print(f"Response received: {response}")
            
            formatted_result = [{
                "title": item.title,
                "url": item.url,
                "content": item.text[:max_characters]
            } for item in response.results]
            
            print(f"Formatted result: {formatted_result}")

            return formatted_result
        except Exception as e:
            print(f"An error occurred: {e}")
            return []





def main():
    exa: ExaHandler = ExaHandler()
    result = exa.send_request("легенда о рахмановских ключах", 3, 1024)
    print(result)



if __name__ == '__main__':
    main()