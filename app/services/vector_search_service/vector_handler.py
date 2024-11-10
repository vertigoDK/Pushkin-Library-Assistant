from typing import List, Optional
from app.core.config import settings
import chromadb
from langchain_openai import OpenAIEmbeddings

class VectorHandler:
    def __init__(self):
        # Обновленная инициализация клиента ChromaDB
        self.client = chromadb.PersistentClient(path="chroma_db")
        self.embeddings = OpenAIEmbeddings(
            model=settings.OPENAI_EMBEDDINGS_MODEL,
            openai_api_key=settings.OPENAI_API_KEY
        )

    def create_collection(self, collection_name: str) -> chromadb.Collection:
        """Создание новой коллекции или получение существующей"""
        return self.client.get_or_create_collection(
            name=collection_name,
            metadata={"hnsw:space": "cosine"}
        )

    def add_documents(self, 
                     texts: List[str], 
                     collection_name: str,
                     metadatas: Optional[List[dict]] = None,
                     ids: Optional[List[str]] = None):
        """Добавление документов в коллекцию с их эмбеддингами"""
        collection = self.create_collection(collection_name)
        
        if ids is None:
            ids = [str(i) for i in range(len(texts))]
            
        embeddings = self.embeddings.embed_documents(texts)
            
        collection.add(
            documents=texts,
            embeddings=embeddings,
            metadatas=metadatas,
            ids=ids
        )

    def search(self, 
               query: str, 
               collection_name: str, 
               n_results: int = 10,
               where: Optional[dict] = None) -> dict:
        """Поиск похожих документов по эмбеддингам"""
        collection = self.create_collection(collection_name)
        
        query_embedding = self.embeddings.embed_query(query)
        
        results = collection.query(
            query_embeddings=[query_embedding],
            n_results=n_results,
            where=where
        )
        return results

    def delete_collection(self, collection_name: str):
        """Удаление коллекции"""
        self.client.delete_collection(collection_name)

    def get_collection(self, collection_name: str) -> chromadb.Collection:
        """Получение существующей коллекции"""
        return self.client.get_collection(collection_name)

    def update_documents(self,
                        collection_name: str,
                        texts: List[str],
                        ids: List[str],
                        metadatas: Optional[List[dict]] = None):
        """Обновление существующих документов с новыми эмбеддингами"""
        collection = self.get_collection(collection_name)
        embeddings = self.embeddings.embed_documents(texts)
        
        collection.update(
            documents=texts,
            embeddings=embeddings,
            ids=ids,
            metadatas=metadatas
        )

    def delete_documents(self,
                        collection_name: str,
                        ids: List[str]):
        """Удаление документов из коллекции"""
        collection = self.get_collection(collection_name)
        collection.delete(ids=ids)
