from fastapi import APIRouter, HTTPException
from typing import Optional, Dict, Any
from pydantic import BaseModel
from app.services.chat_service import ChatService

router = APIRouter()
chat_service = ChatService()

class ChatRequest(BaseModel):
    query: str

class ChatResponse(BaseModel):
    original_query: str
    intent_classification: Dict[str, Any]
    search_results: Optional[Dict[str, Any]]
    llm_response: Optional[str]

@router.post("/chat", response_model=ChatResponse)
async def process_chat(request: ChatRequest):
    """
    Обработка чат-запроса:
    1. Классификация намерения
    2. Поиск по соответствующей коллекции
    3. Генерация ответа (если не book)
    """
    try:
        result = await chat_service.process_chat(request.query)
        return result
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error processing chat: {str(e)}"
        )

@router.get("/health")
async def health_check():
    """Проверка здоровья сервиса"""
    return {"status": "healthy"} 