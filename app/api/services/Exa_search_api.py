from exa_py import Exa
from dotenv import load_dotenv
import os
from typing import Dict

class ExaSearch:
    def __init__(self):
        load_dotenv()
        self.exa = Exa(api_key=os.getenv('EXA_API_KEY'))

    def send_request(self, query: str) -> Dict[str, str]:
        result: Dict[str, str] = self.exa.search_and_contents(
          query,
          type="keyword",
          num_results=1,
          text={
            "max_characters": 10000
          },
          include_domains=["https://olketanu.pushkinlibrary.kz/"]
        )
        return result
    
exa_Search: ExaSearch = ExaSearch()
print(exa_Search.send_request('история усть каменогорска'))
