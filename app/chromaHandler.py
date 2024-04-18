import chromadb
from typing import List
from geminiDataBaseParser import GeminiEmbeddingFunction

def create_chroma_db(documents:List, path:str, name:str):
    try:
        chroma_client = chromadb.PersistentClient(path=path)
        db = chroma_client.create_collection(name=name, embedding_function=GeminiEmbeddingFunction())
    except chromadb.db.base.UniqueConstraintError:
        print(f"Collection '{name}' already exists. Please choose another name.")
        return None, None

    for i, d in enumerate(documents):
        db.add(documents=d, ids=str(i))

    return db, name

def load_chroma_collection(path, name):
    chroma_client = chromadb.PersistentClient(path=path)
    db = chroma_client.get_collection(name=name, embedding_function=GeminiEmbeddingFunction())

    return db