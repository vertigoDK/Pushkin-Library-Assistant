from fastapi import APIRouter, HTTPException
from typing import Optional, Dict, Any
from pydantic import BaseModel
from app.services.book_search.book_parser import SearchParams, BookSearchEngine

router = APIRouter()

class BookSearchRequest(BaseModel):
    author: Optional[str] = None
    title: Optional[str] = None
    keywords: Optional[str] = None
    year1: Optional[str] = None
    year2: Optional[str] = None
    isbn: Optional[str] = None
    first_number: Optional[int] = 1

class BookAvailabilityRequest(BaseModel):
    record_id: str

@router.post("/search")
async def search_books(request: BookSearchRequest):
    """
    Поиск книг по заданным параметрам
    """
    try:
        # Создаем параметры поиска
        search_params = SearchParams(
            author=request.author,
            title=request.title,
            keywords=request.keywords,
            year1=request.year1,
            year2=request.year2,
            isbn=request.isbn
        )

        # Инициализируем поисковый движок
        search_engine = BookSearchEngine(
            search_params=search_params,
            first_number=request.first_number
        )

        # Выполняем поиск
        results = search_engine.execute_search()

        if not results:
            return {
                "status": "success",
                "message": "No results found",
                "data": []
            }

        return {
            "status": "success",
            "message": "Search completed successfully",
            "data": results
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Search failed: {str(e)}"
        )

@router.get("/availability/{record_id}")
async def check_book_availability(record_id: str):
    """
    Проверка наличия книги по ID записи
    """
    try:
        # Создаем поисковый движок с пустыми параметрами
        search_engine = BookSearchEngine(search_params=SearchParams())
        
        # Проверяем наличие
        availability = search_engine.check_book_availability(record_id)

        return {
            "status": "success",
            "message": "Availability check completed",
            "data": availability
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Availability check failed: {str(e)}"
        )

@router.post("/search-with-availability")
async def search_books_with_availability(request: BookSearchRequest):
    """
    Поиск книг с проверкой наличия для каждой найденной книги
    """
    try:
        # Сначала ищем книги
        search_params = SearchParams(
            author=request.author,
            title=request.title,
            keywords=request.keywords,
            year1=request.year1,
            year2=request.year2,
            isbn=request.isbn
        )

        search_engine = BookSearchEngine(
            search_params=search_params,
            first_number=request.first_number
        )

        results = search_engine.execute_search()

        if not results or not results.get('records'):
            return {
                "status": "success",
                "message": "No results found",
                "data": []
            }

        # Добавляем информацию о наличии для каждой книги
        for record in results['records']:
            if record.get('record_id'):
                availability = search_engine.check_book_availability(record['record_id'])
                record['availability'] = availability

        return {
            "status": "success",
            "message": "Search with availability completed successfully",
            "data": results
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Search with availability failed: {str(e)}"
        ) 