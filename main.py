import os 
from app.chromaHandler import create_chroma_db, load_chroma_collection #Импортирование методов для работы с векторной базой данных
from app import appConfig
from app.geminiDataBaseParser import DataBaseParser, GeminiEmbeddingFunction

parser = DataBaseParser(appConfig.DATA_FILE_PATH)
text = parser.load_text()
chunked_text = parser.split_text(text)
print(chunked_text)
