from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import chromadb.config
from chromadb.server.fastapi import FastAPI as ChromaFastAPI
from app.api.v1.api import api_router
from app.core.config import settings

# Инициализация ChromaDB
chroma_settings = chromadb.config.Settings()
chroma_server = ChromaFastAPI(chroma_settings)
chroma_app = chroma_server.app()

# Создаем основное приложение
app = FastAPI(
    title="Intent Classification API",
    description="API для классификации поисковых запросов",
    version="1.0.0",
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # В продакшене заменить на список разрешенных доменов
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Подключаем роутеры
app.include_router(api_router, prefix="/api/v1")
app.mount("/chroma", chroma_app)  # Монтируем ChromaDB API отдельно

@app.get("/")
async def root():
    return {
        "message": "Welcome to Intent Classification API", 
        "docs_url": "/docs",
        "redoc_url": "/redoc"
    }
