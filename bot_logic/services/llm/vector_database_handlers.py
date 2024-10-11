import os
import shutil
from uuid import uuid4
from typing import List
from .get_embedings_function import get_embedding_function
from langchain_chroma import Chroma
from langchain_core.documents import Document


class VectorDatabaseHandlers:
    
    CHROMA_PATH = "./chroma_langchain_db"

    def __init__(self, collection_name: str):
        embedding = get_embedding_function()
        self._db = Chroma(
            collection_name=collection_name,
            embedding_function=embedding,
            persist_directory=self.CHROMA_PATH
        )


    def upsert_chroma(self, documents: List[Document]):
        """Добавление новых документов в базу данных, если они не существуют."""
        try:
            # Получаем уже существующие элементы из базы
            existing_items = self._db.get(include=["metadatas"])
            if existing_items is None:
                existing_items = {"metadatas": []}

            # Собираем уже существующие идентификаторы документов из метаданных
            existing_ids = set(item["id"] for item in existing_items["metadatas"] if "id" in item)
            print(f"Number of existing documents in DB: {len(existing_ids)}")

            # Создаем список документов с метаданными и генерируем уникальные ID для новых документов
            chunks_with_ids = self.calculate_chunk_ids(documents)

            # Только добавляем новые документы, которых еще нет в базе
            new_chunks = [chunk for chunk in chunks_with_ids if chunk.metadata["id"] not in existing_ids]

            if new_chunks:
                print(f"👉 Adding new documents: {len(new_chunks)}")
                # Получаем только ID для новых документов
                new_chunk_ids = [chunk.metadata["id"] for chunk in new_chunks]
                # Добавляем новые документы в базу данных
                self._db.add_documents(new_chunks, ids=new_chunk_ids)
            else:
                print("✅ No new documents to add")
                
        except Exception as e:
            print(f"⚠️ Error while upserting documents: {e}")

    def calculate_chunk_ids(self, chunks: List[Document]):
        """Генерация уникальных ID для каждого документа."""
        last_page_id = None
        current_chunk_index = 0

        for chunk in chunks:
            source = chunk.metadata.get("source")
            page = chunk.metadata.get("page")
            current_page_id = f"{source}:{page}"

            # Если это тот же документ, увеличиваем индекс части
            if current_page_id == last_page_id:
                current_chunk_index += 1
            else:
                current_chunk_index = 0

            # Генерация уникального ID для каждого документа
            chunk_id = f"{current_page_id}:{current_chunk_index}"
            last_page_id = current_page_id

            # Добавляем ID в метаданные
            chunk.metadata["id"] = chunk_id

        return chunks

    def search_in_database(self, query_text: str):
        results = self._db.similarity_search(query_text, k=3)
        return results


if __name__ == '__main__':
    # Пример документа
    document_1 = Document(
        page_content="I had chocolate chip pancakes and scrambled eggs for breakfast this morning.",
        metadata={"source": "tweet", "page": 1},
        id=1,
    )

    # Пример использования
    vDatabaseHandler = VectorDatabaseHandlers("legends_collection")
    
    vDatabaseHandler.upsert_chroma([document_1])
