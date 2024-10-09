from langchain_chroma import Chroma
from .get_embedings_function import get_embedding_function

class VectorDatabaseHandlers:

    def __init__(self, collection: str):
        embedding = get_embedding_function()
        self._db = Chroma(
            collection_name=collection,
            embedding_function=embedding,
            persist_directory="./chroma_langchain_db"
        )

    def search_in_database(self, query_text: str):
        results = self._db.similarity_search(query_text, k=5)
        return results