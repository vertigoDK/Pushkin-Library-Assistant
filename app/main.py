from fastapi import FastAPI
import chromadb.config
from chromadb.server.fastapi import FastAPI as ChromaFastAPI
from app.api.v1.api import api_router
from app.core.config import settings

# Инициализация ChromaDB
chroma_settings = chromadb.config.Settings()
chroma_server = ChromaFastAPI(chroma_settings)
chroma_app = chroma_server.app()

# Создаем основное приложение
app = FastAPI(title=settings.PROJECT_NAME)

# Подключаем роутеры
app.include_router(api_router, prefix="/api/v1")
app.mount("/chroma", chroma_app)  # Монтируем ChromaDB API отдельно
