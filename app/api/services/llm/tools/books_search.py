from pydantic import BaseModel, Field
from typing import Optional

    

class BooksSearchQuery(BaseModel):
    author: Optional[str] = Field(None, description="Автор книги")
    personality: Optional[str] = Field(None, description="Персоналия (выдающиеся личности, связанные с книгой)")
    title: Optional[str] = Field(None, description="Заглавие книги")
    keywords: Optional[str] = Field(None, description="Ключевые слова для поиска")
    keywords_field: Optional[str] = Field(None, description="Поле для поиска по ключевым словам (например, 'любое поле')")
    subject_heading: Optional[str] = Field(None, description="Предметная рубрика книги")
    publication_year_start: Optional[int] = Field(None, description="Год начала издания")
    publication_year_end: Optional[int] = Field(None, description="Год окончания издания")
    publisher: Optional[str] = Field(None, description="Издательство")
    isbn: Optional[str] = Field(None, description="ISBN номер книги")
    document_character: Optional[str] = Field(None, description="Характер документа")
    document_type: Optional[str] = Field(None, description="Тип документа")
    document_language: Optional[str] = Field(None, description="Язык документа")
    books_result: Optional[list[str]]  # Список результатов поиска книг
