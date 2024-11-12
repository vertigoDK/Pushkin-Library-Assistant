import json
import os
from datetime import datetime, timezone
from typing import Optional
from app.core.config import settings

class DosAIStatusService:
    def __init__(self):
        self.status_file = settings.DOSAI_STATUS_FILE
        self._ensure_status_file()
    
    def _ensure_status_file(self):
        if not os.path.exists(self.status_file):
            self.save_status(
                enabled=settings.DOSAI_ENABLED,
                message=settings.DOSAI_MAINTENANCE_MESSAGE
            )
    
    def get_status(self) -> dict:
        try:
            with open(self.status_file, 'r') as f:
                return json.load(f)
        except Exception:
            return {
                "enabled": settings.DOSAI_ENABLED,
                "message": settings.DOSAI_MAINTENANCE_MESSAGE,
                "disabled_at": None,
                "disabled_until": None
            }
    
    def save_status(self, 
                   enabled: bool, 
                   message: Optional[str] = None,
                   disabled_until: Optional[str] = None) -> None:
        status = {
            "enabled": enabled,
            "message": message or settings.DOSAI_MAINTENANCE_MESSAGE,
            "disabled_at": datetime.now(timezone.utc).isoformat() if not enabled else None,
            "disabled_until": disabled_until
        }
        with open(self.status_file, 'w') as f:
            json.dump(status, f)
    
    def enable(self) -> dict:
        self.save_status(enabled=True)
        return {
            "status": "success",
            "enabled": True,
            "message": "DosAI успешно включен"
        }
    
    def disable(self, 
                message: Optional[str] = None,
                disabled_until: Optional[str] = None) -> dict:
        self.save_status(
            enabled=False,
            message=message,
            disabled_until=disabled_until
        )
        return {
            "status": "success",
            "enabled": False,
            "message": message or settings.DOSAI_MAINTENANCE_MESSAGE,
            "disabled_until": disabled_until
        } 