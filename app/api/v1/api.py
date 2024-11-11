from fastapi import APIRouter
from .endpoints import vector_search, book_search
from app.api.v1.endpoints import intent, chat

# Основной роутер API v1
api_router = APIRouter()

# Подключаем единый роутер для работы с векторным поиском
api_router.include_router(
    vector_search.router,
    prefix="/vector-search",
    tags=["Vector Search"]
)

# Подключаем роутер для работы с книгами
api_router.include_router(
    book_search.router,
    prefix="/book-search",
    tags=["Book Search"]
)

# Подключаем роутер для работы с намерениями
api_router.include_router(
    intent.router, 
    prefix="/intent", 
    tags=["Intent"]
)

# Подключаем роутер для работы с чатом
api_router.include_router(
    chat.router, 
    prefix="/chat", 
    tags=["Chat"]
)