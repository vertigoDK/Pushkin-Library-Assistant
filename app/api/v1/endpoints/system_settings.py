from fastapi import APIRouter, HTTPException
from typing import Optional, Dict, Any
from pydantic import BaseModel
from app.services.system.settings_service import SystemSettingsService

router = APIRouter()
settings_service = SystemSettingsService()

class SystemSettingsUpdate(BaseModel):
    maintenance_message: Optional[str] = None
    maintenance_until: Optional[str] = None
    settings: Optional[Dict[str, Any]] = None

class SystemSettingsResponse(BaseModel):
    status: str
    settings: Dict[str, Any]

@router.get("/settings", response_model=SystemSettingsResponse)
async def get_system_settings():
    """Получение текущих системных настроек"""
    try:
        settings = settings_service.get_settings()
        return {"status": "success", "settings": settings}
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error getting settings: {str(e)}"
        )

@router.post("/maintenance/enable", response_model=SystemSettingsResponse)
async def enable_maintenance(request: SystemSettingsUpdate):
    """Включение режима обслуживания"""
    try:
        return settings_service.disable_system(
            message=request.maintenance_message,
            maintenance_until=request.maintenance_until
        )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error enabling maintenance: {str(e)}"
        )

@router.post("/maintenance/disable", response_model=SystemSettingsResponse)
async def disable_maintenance():
    """Выключение режима обслуживания"""
    try:
        return settings_service.enable_system()
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error disabling maintenance: {str(e)}"
        ) 