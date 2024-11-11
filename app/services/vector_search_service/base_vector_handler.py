from typing import List, Optional, Dict
from abc import ABC
from app.services.vector_search_service.vector_handler import VectorHandler
import chromadb

class BaseVectorHandler(ABC):
    def __init__(self, collection_name: str):
        self.vector_handler = VectorHandler()
        self.collection_name = collection_name
        self.collection = self.vector_handler.create_collection(self.collection_name)

    def add_documents(self,
                     texts: List[str],
                     metadatas: Optional[List[dict]] = None,
                     ids: Optional[List[str]] = None):
        """Добавление документов в коллекцию"""
        self.vector_handler.add_documents(
            texts=texts,
            collection_name=self.collection_name,
            metadatas=metadatas,
            ids=ids
        )

    def search(self,
              query: str,
              n_results: int = 10,
              where: Optional[dict] = None) -> dict:
        """Поиск документов в коллекции"""
        return self.vector_handler.search(
            query=query,
            collection_name=self.collection_name,
            n_results=n_results,
            where=where
        )

    def update_documents(self,
                        texts: List[str],
                        ids: List[str],
                        metadatas: Optional[List[dict]] = None):
        """Обновление документов в коллекции"""
        self.vector_handler.update_documents(
            collection_name=self.collection_name,
            texts=texts,
            ids=ids,
            metadatas=metadatas
        )

    def get_collection(self) -> chromadb.Collection:
        """Получение коллекции"""
        return self.vector_handler.get_collection(self.collection_name)

    def delete_collection(self):
        """Удаление коллекции"""
        self.vector_handler.delete_collection(self.collection_name) 