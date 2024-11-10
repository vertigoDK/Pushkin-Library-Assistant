from fastapi import APIRouter
from .endpoints import anyz_vector_search, general_vector_search, book_search

# Основной роутер API v1
api_router = APIRouter()

# Подключаем роутер для работы с векторным поиском
api_router.include_router(
    anyz_vector_search.router,
    prefix="/anyz-vector-search",
    tags=["Anyz Vector Search"]
)

# Подключаем роутер для работы с общей коллекцией
api_router.include_router(
    general_vector_search.router,
    prefix="/general-vector-search",
    tags=["General Vector Search"]
)

# Подключаем роутер для работы с книгами
api_router.include_router(
    book_search.router,
    prefix="/book-search",
    tags=["Book Search"]
)

