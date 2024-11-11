from fastapi import APIRouter, HTTPException
from typing import List, Optional, Dict
from pydantic import BaseModel
from app.services.vector_search_service.anyz_vector_handler import AnyzVectorHandler
from app.services.vector_search_service.general_vector_handler import GeneralVectorHandler
from app.services.vector_search_service.esimder_vector_handler import EsimderVectorHandler
from app.core.config import settings
from enum import Enum

router = APIRouter()

class CollectionType(str, Enum):
    anyz = settings.ANYZ_VECTOR_SEARCH_NAME
    general = settings.GENERAL_VECTOR_SEARCH_NAME
    esimder = settings.ESIMDER_VECTOR_SEARCH_NAME

HANDLERS = {
    CollectionType.anyz: AnyzVectorHandler(),
    CollectionType.general: GeneralVectorHandler(),
    CollectionType.esimder: EsimderVectorHandler()
}

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

@router.post("/{collection}/documents", status_code=201)
async def add_documents(collection: CollectionType, request: DocumentCreate):
    """
    Добавление документов в векторное хранилище.
    
    Args:
        collection: Тип коллекции (anyz, general, esimder)
        request: Документы для добавления
        
    Returns:
        dict: Статус операции
    """
    try:
        handler = HANDLERS[collection]
        texts = [doc.text for doc in request.documents]
        metadatas = [doc.metadata for doc in request.documents]
        
        handler.add_documents(
            texts=texts,
            metadatas=metadatas,
            ids=request.ids
        )
        return {"status": "success", "message": "Documents added successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/{collection}/documents")
async def list_documents(collection: CollectionType, skip: int = 0, limit: int = 10):
    """
    Получение списка документов с пагинацией.
    
    Args:
        collection: Тип коллекции (anyz, general, esimder)
        skip: Количество пропускаемых документов
        limit: Максимальное количество возвращаемых документов
        
    Returns:
        dict: Список документов с метаданными и общим количеством
    """
    try:
        handler = HANDLERS[collection]
        collection_obj = handler.get_collection()
        all_ids = collection_obj.get()['ids']
        paginated_ids = all_ids[skip:skip + limit]
        
        if not paginated_ids:
            return {
                "total": len(all_ids),
                "documents": [],
                "skip": skip,
                "limit": limit
            }
            
        result = collection_obj.get(
            ids=paginated_ids,
            include=['documents', 'metadatas']
        )
        
        documents = [
            {
                "id": id,
                "metadata": metadata,
                "text": doc
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

@router.post("/{collection}/search")
async def search_documents(collection: CollectionType, query: SearchQuery):
    """
    Поиск документов в коллекции.
    
    Args:
        collection: Тип коллекции (anyz, general, esimder)
        query: Параметры поиска
        
    Returns:
        dict: Результаты поиска
    """
    try:
        handler = HANDLERS[collection]
        return handler.search(
            query=query.query,
            n_results=query.n_results,
            where=query.filter
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/{collection}/documents/{document_id}")
async def get_document(collection: CollectionType, document_id: str):
    """
    Получение документа по ID.
    
    Args:
        collection: Тип коллекции (anyz, general, esimder)
        document_id: ID документа
        
    Returns:
        dict: Документ с метаданными
    """
    try:
        handler = HANDLERS[collection]
        result = handler.get_collection().get(
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

@router.delete("/{collection}")
async def delete_collection(collection: CollectionType):
    """
    Удаление коллекции.
    
    Args:
        collection: Тип коллекции (anyz, general, esimder)
        
    Returns:
        dict: Статус операции
    """
    try:
        handler = HANDLERS[collection]
        handler.delete_collection()
        return {"status": "success", "message": "Collection deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) 