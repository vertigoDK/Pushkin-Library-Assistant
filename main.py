import os 
from app.chromaHandler import create_chroma_db, load_chroma_collection #Импортирование методов для работы с векторной базой данных
from app import appConfig
from app.geminiDataBaseParser import DataBaseParser, GeminiEmbeddingFunction
from app.LibraryQueryHandler import QueryHandler
import time

start_time = time.time()

parser = DataBaseParser(appConfig.DATA_FILE_PATH)
text = parser.load_text()
chunked_text = parser.split_text(text)

# db,name = create_chroma_db(documents=chunked_text,
#                            path=appConfig.CHROMA_DB_PATH,
#                            name=appConfig.CHROMA_DB_NAME)
# if db and name:
#     print(f"Chroma Collection '{name}' successfully created.")   #Создание векторной базы данных

db = load_chroma_collection(path=appConfig.CHROMA_DB_PATH, name=appConfig.CHROMA_DB_NAME) #Загрузка базы данных
qHandler = QueryHandler()
answer = qHandler.generate_answer(db, query="2 + 2")
print(answer)


end_time = time.time()
execution_time = end_time - start_time
print(f"Время выполнения кода: {execution_time} секунд")

