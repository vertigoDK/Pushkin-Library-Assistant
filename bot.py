from app.chromaHandler import create_chroma_db, load_chroma_collection #Импортирование методов для работы с векторной базой данных
from app import appConfig
from app.geminiDataBaseParser import DataBaseParser, GeminiEmbeddingFunction
from app.LibraryQueryHandler import QueryHandler
import time
import os

def chat():
    try:
        database_path = appConfig.get_database_path(appConfig.CHROMA_DB_PATH, appConfig.CHROMA_DB_NAME)
        if not os.path.exists(database_path):
            choose = input(f'Не найдено векторной базы данных по пути {appConfig.CHROMA_DB_PATH}, хотите ли вы создать новую используя {appConfig.CHROMA_DB_NAME}, y n')
            if choose == 'y':
                parser = DataBaseParser(appConfig.DATA_FILE_PATH)
                text = parser.load_text()
                chunked_text = parser.split_text(text)

                db, name = create_chroma_db(documents=chunked_text,
                                            path=appConfig.CHROMA_DB_PATH,
                                            name=appConfig.CHROMA_DB_NAME)
                if db and name:
                    print(f"Chroma Collection '{name}' successfully created.")
            else:
                return
        load_database_everyytime = input("Подгружать ли каждый раз заного базу данных? no yes: ")
        if load_database_everyytime == 'no':
            db = load_chroma_collection(path=appConfig.CHROMA_DB_PATH, name=appConfig.CHROMA_DB_NAME) #Загрузка базы данных
        
        while True:
            try:
                if load_database_everyytime != 'no':
                    db = load_chroma_collection(path=appConfig.CHROMA_DB_PATH, name=appConfig.CHROMA_DB_NAME) #Загрузка базы данных
                query = input("Введите запрос или нажмите ctrl + c что бы выйти: ")
                qHandler = QueryHandler()
                answer = qHandler.generate_answer(db, query=query)
                print(f"Вопрос: {query}")
                print(f"Ответ: {answer}")
            except KeyboardInterrupt:
                print("bye bye")
                return
    except Exception as e:
        print(f"Error: {e}")

chat()