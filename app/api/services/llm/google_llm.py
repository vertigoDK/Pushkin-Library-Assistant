import os
from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import CommaSeparatedListOutputParser

class GoogleLLM:
    def __init__(self):
        load_dotenv()
        self._llm = ChatGoogleGenerativeAI(model="gemini-1.5-flash", api_key=os.getenv('GOOGLE_API_KEY'))
        
    def intents_recognize(self, user_message: str):
        prompt = ChatPromptTemplate.from_messages([
            ("system", "Ты должен распознать намерение человека. Если человек хочет найти книги ВАЖНО именно найти а не что бы ты ему порекомендовал, то это books_search, если человек хочет записаться в библиотеку это register, если ничего из этого other, если несколько вариантов ответов то верни через запятую. Return result as a comma seperated list."),
            ("human", "{input}")
        ])
        
        parser = CommaSeparatedListOutputParser()
        
        chain = prompt | self._llm | parser
        
        return chain.invoke({
            "input": user_message
        })
    
    
    
if __name__ == '__main__':
    gLLM = GoogleLLM()
    result = gLLM.intents_recognize("легенда о рахмановских ключах")
    print(result)