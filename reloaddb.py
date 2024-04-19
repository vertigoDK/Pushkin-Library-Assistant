from app.chromaHandler import create_chroma_db, load_chroma_collection #Импортирование методов для работы с векторной базой данных
from app import appConfig
from app.geminiDataBaseParser import DataBaseParser, GeminiEmbeddingFunction
from app.LibraryQueryHandler import QueryHandler
import time
import os
import shutil

def clear_directory(directory):
    for filename in os.listdir(directory):
        file_path = os.path.join(directory, filename)
        try:
            if os.path.isfile(file_path):
                os.unlink(file_path)  # удаление файла
            elif os.path.isdir(file_path):
                shutil.rmtree(file_path)  # удаление поддиректории и всего ее содержимого
        except Exception as e:
            print(f"Failed to delete {file_path}. Reason: {e}")

def reload_db():
    try:
        database_path = appConfig.get_database_path(appConfig.CHROMA_DB_PATH, appConfig.CHROMA_DB_NAME)
        if os.path.exists(database_path):
            #print(appConfig.get_database_path(appConfig.CHROMA_DB_PATH, appConfig.CHROMA_DB_NAME))
            clear_directory(appConfig.CHROMA_DB_PATH)
            parser = DataBaseParser(appConfig.DATA_FILE_PATH)
            text = parser.load_text()
            chunked_text = parser.split_text(text)

            db, name = create_chroma_db(documents=chunked_text,
                                            path=appConfig.CHROMA_DB_PATH,
                                            name=appConfig.CHROMA_DB_NAME)
            if db and name:
                print(f"Chroma Collection '{name}' successfully created.")
    except Exception as e:
        print(f'Error: {e}')

reload_db()