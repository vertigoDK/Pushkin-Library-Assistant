from fastapi import APIRouter, HTTPException
from typing import List, Optional, Dict
from pydantic import BaseModel
from app.services.vector_search_service.base_vector_handler import BaseVectorHandler

class DocumentBase(BaseModel):
    text: str
    metadata: Optional[dict] = None

class DocumentCreate(BaseModel):
    documents: List[DocumentBase]
    ids: Optional[List[str]] = None

class SearchQuery(BaseModel):
    query: str
    n_results: Optional[int] = 10
    filter: Optional[dict] = None

class CollectionStats(BaseModel):
    total_documents: int
    documents_preview: List[Dict]

class BaseVectorSearchRouter:
    def __init__(self, vector_handler: BaseVectorHandler):
        self.router = APIRouter()
        self.vector_handler = vector_handler
        self._init_routes()

    def _init_routes(self):
        @self.router.post("/documents", status_code=201)
        async def add_documents(request: DocumentCreate):
            """Добавление документов"""
            try:
                texts = [doc.text for doc in request.documents]
                metadatas = [doc.metadata for doc in request.documents]
                self.vector_handler.add_documents(
                    texts=texts,
                    metadatas=metadatas,
                    ids=request.ids
                )
                return {"status": "success", "message": "Documents added successfully"}
            except Exception as e:
                raise HTTPException(status_code=500, detail=str(e))

        @self.router.post("/search")
        async def search_documents(query: SearchQuery):
            """Поиск документов"""
            try:
                return self.vector_handler.search(
                    query=query.query,
                    n_results=query.n_results,
                    where=query.filter
                )
            except Exception as e:
                raise HTTPException(status_code=500, detail=str(e))

        @self.router.get("/stats", response_model=CollectionStats)
        async def get_collection_stats():
            """Получение статистики коллекции"""
            try:
                collection = self.vector_handler.get_collection()
                count = collection.count()
                preview = collection.peek(limit=5)
                
                documents_preview = [
                    {
                        "id": id,
                        "metadata": metadata,
                        "text_preview": doc[:200] + "..." if len(doc) > 200 else doc
                    }
                    for id, metadata, doc in zip(
                        preview['ids'],
                        preview['metadatas'],
                        preview['documents']
                    )
                ]
                
                return CollectionStats(
                    total_documents=count,
                    documents_preview=documents_preview
                )
            except Exception as e:
                raise HTTPException(status_code=500, detail=str(e))

        @self.router.get("/documents")
        async def list_documents(skip: int = 0, limit: int = 10):
            """Получение списка документов с пагинацией"""
            try:
                collection = self.vector_handler.get_collection()
                all_ids = collection.get()['ids']
                paginated_ids = all_ids[skip:skip + limit]
                
                if not paginated_ids:
                    return {
                        "total": len(all_ids),
                        "documents": [],
                        "skip": skip,
                        "limit": limit
                    }
                    
                result = collection.get(
                    ids=paginated_ids,
                    include=['documents', 'metadatas']
                )
                
                documents = [
                    {
                        "id": id,
                        "metadata": metadata,
                        "text_preview": doc[:200] + "..." if len(doc) > 200 else doc
                    }
                    for id, metadata, doc in zip(
                        result['ids'],
                        result['metadatas'],
                        result['documents']
                    )
                ]
                
                return {
                    "total": len(all_ids),
                    "documents": documents,
                    "skip": skip,
                    "limit": limit
                }
            except Exception as e:
                raise HTTPException(status_code=500, detail=str(e))

        @self.router.get("/documents/{document_id}")
        async def get_document(document_id: str):
            """Получение документа по ID"""
            try:
                collection = self.vector_handler.get_collection()
                result = collection.get(
                    ids=[document_id],
                    include=['documents', 'metadatas']
                )
                
                if not result['ids']:
                    raise HTTPException(status_code=404, detail="Document not found")
                    
                return {
                    "id": document_id,
                    "document": result['documents'][0],
                    "metadata": result['metadatas'][0]
                }
            except Exception as e:
                raise HTTPException(status_code=500, detail=str(e))

        @self.router.delete("/collection", status_code=200)
        async def delete_collection():
            """Удаление коллекции"""
            try:
                self.vector_handler.delete_collection()
                return {
                    "status": "success",
                    "message": "Collection successfully deleted"
                }
            except Exception as e:
                raise HTTPException(
                    status_code=500, 
                    detail=f"Failed to delete collection: {str(e)}"
                ) 