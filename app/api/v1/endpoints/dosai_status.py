from fastapi import APIRouter, HTTPException
from typing import Optional
from pydantic import BaseModel
from datetime import datetime
from app.services.dosai.status_service import DosAIStatusService

router = APIRouter()
status_service = DosAIStatusService()

class DisableRequest(BaseModel):
    message: Optional[str] = None
    disabled_until: Optional[str] = None

class StatusResponse(BaseModel):
    status: str
    enabled: bool
    message: Optional[str] = None
    disabled_at: Optional[str] = None
    disabled_until: Optional[str] = None

@router.get("/status", response_model=StatusResponse)
async def get_status():
    """Получение текущего статуса DosAI"""
    try:
        status = status_service.get_status()
        return {"status": "success", **status}
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error getting status: {str(e)}"
        )

@router.post("/enable", response_model=StatusResponse)
async def enable_dosai():
    """Включение DosAI"""
    try:
        return status_service.enable()
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error enabling DosAI: {str(e)}"
        )

@router.post("/disable", response_model=StatusResponse)
async def disable_dosai(request: DisableRequest):
    """Выключение DosAI с указанием причины и срока"""
    try:
        return status_service.disable(
            message=request.message,
            disabled_until=request.disabled_until
        )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error disabling DosAI: {str(e)}"
        ) 