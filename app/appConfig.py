import os
from dotenv import load_dotenv

load_dotenv()

DATA_FILE_PATH = "DataBase/txtdb/data.txt" #Путь к базе знаний
CHROMA_DB_PATH = "DataBase/chromadb" #Путь к базе данных хрома
CHROMA_DB_NAME = "chroma" #Название базы данных chroma
GOOGLE_API = os.getenv("API_KEY")