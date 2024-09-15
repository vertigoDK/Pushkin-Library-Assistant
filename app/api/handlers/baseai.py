import google.generativeai as genai
import os
from dotenv import load_dotenv

class BaseAI:
    def __init__(self, model_name: str = "gemini-1.5-flash"):
        load_dotenv()
        genai.configure(api_key=os.getenv('GOOGLE_API_KEY'))

        self._model = genai.GenerativeModel(model_name=model_name)

    def send_request(self, user_message: str, model_prompt: str = "") -> str:
        """
        На входе сообщение пользователя на выходе response
        """
        response = None
        try:
            response = self._model.generate_content(f"{model_prompt} {user_message}")
            return response.text
        except Exception as e:
            print(e)
            raise ValueError(e)