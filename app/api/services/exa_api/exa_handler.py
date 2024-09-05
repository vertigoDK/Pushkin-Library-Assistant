from exa_py import Exa
from dotenv import load_dotenv
import os
from typing import List

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
                     max_characters: int = 500
                     ):
        result = self._exa.search_and_contents(query=query,
                                               num_results=num_result,
                                               include_domains=self.INCLUDE_DOMAINS,
                                               type="keyword",
                                               text={
                                                   "max_characters": max_characters
                                               })
        return result


def main():
    exa: ExaHandler = ExaHandler()
    result = exa.send_request("абай кунанбаев", 3, 500)
    print(result)



if __name__ == '__main__':
    main()