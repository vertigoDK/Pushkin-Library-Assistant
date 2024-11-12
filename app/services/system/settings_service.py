import json
import os
from datetime import datetime, timezone
from typing import Optional, Dict, Any
from app.core.config import settings

class SystemSettingsService:
    def __init__(self):
        self.settings_file = settings.SYSTEM_SETTINGS_FILE
        self._ensure_settings_file()
    
    def _ensure_settings_file(self):
        if not os.path.exists(self.settings_file):
            default_settings = {
                "system": {
                    "enabled": True,
                    "maintenance_mode": False,
                    "maintenance_message": settings.DEFAULT_MAINTENANCE_MESSAGE,
                    "maintenance_until": None,
                    "last_maintenance": None
                },
                "search": {
                    "max_results": 10,
                    "enabled_sources": ["books", "anyz", "esimder", "general"]
                },
                "llm": {
                    "enabled": True,
                    "model": settings.GOOGLE_MODEL_NAME,
                    "temperature": 0.7
                }
            }
            self.save_settings(default_settings)
    
    def get_settings(self) -> Dict[str, Any]:
        try:
            with open(self.settings_file, 'r') as f:
                return json.load(f)
        except Exception:
            return self._ensure_settings_file()
    
    def save_settings(self, new_settings: Dict[str, Any]) -> None:
        with open(self.settings_file, 'w') as f:
            json.dump(new_settings, f, indent=2)
    
    def enable_system(self) -> dict:
        settings = self.get_settings()
        settings["system"]["enabled"] = True
        settings["system"]["maintenance_mode"] = False
        settings["system"]["maintenance_until"] = None
        self.save_settings(settings)
        return {"status": "success", "settings": settings["system"]}
    
    def disable_system(self, 
                      message: Optional[str] = None,
                      maintenance_until: Optional[str] = None) -> dict:
        settings = self.get_settings()
        settings["system"]["enabled"] = False
        settings["system"]["maintenance_mode"] = True
        settings["system"]["maintenance_message"] = message or settings.DEFAULT_MAINTENANCE_MESSAGE
        settings["system"]["maintenance_until"] = maintenance_until
        settings["system"]["last_maintenance"] = datetime.now(timezone.utc).isoformat()
        self.save_settings(settings)
        return {"status": "success", "settings": settings["system"]} 