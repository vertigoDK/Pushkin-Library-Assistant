# Здесь файл настроек реализованный через библиотеку pydantic-settings
from pydantic_settings import BaseSettings
from pydantic import Field
from dotenv import load_dotenv

load_dotenv()


class Settings(BaseSettings):
    # App
    app_title: str = "DosAI API"
    redis_url: str = "redis://localhost:6379"
    PROJECT_NAME: str = "DosAI API"
    
    
    # API keys
    GOOGLE_API_KEY: str = Field(default="")
    OPENAI_API_KEY: str = Field(default="")

    GOOGLE_MODEL_NAME: str = Field(default="gemini-1.5-flash")

    # Vector search
    OPENAI_EMBEDDINGS_MODEL: str = Field(default="")
    
    # Vector search index names
    GENERAL_VECTOR_SEARCH_NAME: str = Field(default="")
    ANYZ_VECTOR_SEARCH_NAME: str = Field(default="")
    ESIMDER_VECTOR_SEARCH_NAME: str = Field(default="")

    # DosAI status
    DOSAI_ENABLED: bool = Field(default=True)
    DOSAI_STATUS_FILE: str = Field(default="dosai_status.json")
    DOSAI_MAINTENANCE_MESSAGE: str = Field(
        default="DosAI временно отключен для технического обслуживания. Пожалуйста, попробуйте позже."
    )

    # System settings
    SYSTEM_SETTINGS_FILE: str = Field(default="system_settings.json")
    DEFAULT_MAINTENANCE_MESSAGE: str = Field(
        default="Система временно недоступна для технического обслуживания. Пожалуйста, попробуйте позже."
    )

settings = Settings()
