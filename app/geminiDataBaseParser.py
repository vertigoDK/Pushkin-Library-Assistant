import re
import os
import google.generativeai as genai
from chromadb import Documents, EmbeddingFunction, Embeddings
from app.appConfig import GOOGLE_API

class DataBaseParser: #Класс превращающий путь к базе данных (.txt , ...) в текст разбитый на чанки 

    def __init__(self, data_base_path: str):
        self.__data_base_path = data_base_path #Инициализация пути к базе данных

    def load_text(self): #Чтение текста из файла
        with open(self.__data_base_path, 'r', encoding='utf-8') as file:
            text = file.read()
        return text

    def split_text(self, text: str): #Расспличивание самого текста
        split_text = re.split('\n \n', text)
        return [i for i in split_text if i != ""]
    

class GeminiEmbeddingFunction(EmbeddingFunction):
    # Класс, представляющий функцию встраивания для библиотеки ChromaDB
    # Наследуется от базового класса EmbeddingFunction

    def __call__(self, input: Documents) -> Embeddings:
        # Метод __call__, вызываемый при вызове объекта класса как функции
        # Принимает в качестве аргумента input - документы для встраивания
        # Возвращает векторные представления (embeddings) входных документов
        gemini_api_key = GOOGLE_API  # Получение API-ключа из файла appConfig.py
        if not gemini_api_key:
            # Проверка наличия API-ключа
            raise ValueError("Gemini API Key not provided. Please provide GEMINI_API_KEY as an environment variable")

        genai.configure(api_key=gemini_api_key)  # Настройка библиотеки genai с помощью API-ключа

        model = "models/embedding-001"  # Указание модели для встраивания
        title = "Custom query"  # Настройка заголовка запроса

        # Вызов функции встраивания контента с использованием указанной модели
        # и других параметров
        embedding = genai.embed_content(model=model,
                                         content=input,
                                         task_type="retrieval_document",
                                         title=title)["embedding"]

        return embedding  # Возвращение векторных представлений документов
