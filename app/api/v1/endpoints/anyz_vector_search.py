from fastapi import APIRouter, HTTPException
from typing import List, Optional, Dict
from pydantic import BaseModel
from app.services.vector_search_service.anyz_vector_handler import AnyzVectorHandler

router = APIRouter()
vector_handler = AnyzVectorHandler()

# Модели данных
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

@router.post("/documents", status_code=201)
async def add_documents(request: DocumentCreate):
    """Добавление документов в векторное хранилище"""
    try:
        texts = [doc.text for doc in request.documents]
        metadatas = [doc.metadata for doc in request.documents]
        
        vector_handler.add_documents(
            texts=texts,
            metadatas=metadatas,
            ids=request.ids
        )
        return {"status": "success", "message": "Documents added successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/search")
async def search_documents(query: SearchQuery):
    """Поиск документов"""
    try:
        results = vector_handler.search(
            query=query.query,
            n_results=query.n_results,
            where=query.filter
        )
        return results
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/stats", response_model=CollectionStats)
async def get_collection_stats():
    """Получение статистики коллекции"""
    try:
        collection = vector_handler.get_collection()
        
        # Получаем количество документов
        count = collection.count()
        
        # Получаем превью первых 5 документов
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

@router.get("/documents/{document_id}")
async def get_document(document_id: str):
    """Получение конкретного документа по ID"""
    try:
        collection = vector_handler.get_collection()
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

@router.get("/documents")
async def list_documents(skip: int = 0, limit: int = 10):
    """Получение списка документов с пагинацией"""
    try:
        collection = vector_handler.get_collection()
        
        # Получаем все ID документов
        all_ids = collection.get()['ids']
        
        # Применяем пагинацию
        paginated_ids = all_ids[skip:skip + limit]
        
        if not paginated_ids:
            return {
                "total": len(all_ids),
                "documents": [],
                "skip": skip,
                "limit": limit
            }
            
        # Получаем данные для выбранных ID
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

@router.delete("/collection", status_code=200)
async def delete_collection():
    """Полное удаление коллекции ANYZ"""
    try:
        vector_handler.delete_collection()
        return {
            "status": "success",
            "message": "Collection successfully deleted"
        }
    except Exception as e:
        raise HTTPException(
            status_code=500, 
            detail=f"Failed to delete collection: {str(e)}"
        ) 