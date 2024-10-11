import json

from ..llm.vector_database_handlers import VectorDatabaseHandlers 

from langchain_core.documents import Document


class LegendsEngine(VectorDatabaseHandlers):
    
    collection="legends_collection"

    def __init__(self):
        super().__init__(collection_name=self.collection)
    
    def legends_vectore_store_upsert(self):
        
        legends_chunks: list[Document] = []

        with open('knowledge_base/legends/legends.jsonl', 'r', encoding='utf-8') as file:
            for line in file:
                record = json.loads(line.strip())
                legends_chunks.append(
                    Document(page_content=record.get('content'))
                )


        self.upsert_chroma(legends_chunks)