from pydantic import BaseModel
from typing import Optional, Dict, Any

class IntentRequest(BaseModel):
    query: str

class BookSearchParams(BaseModel):
    book_search_need: bool
    author: Optional[str] = None
    title: Optional[str] = None
    keywords: Optional[str] = None
    year1: Optional[int] = None
    year2: Optional[int] = None

class AnyzSearchParams(BaseModel):
    anyz_search_need: bool
    keywords: Optional[str] = None

class EsimderSearchParams(BaseModel):
    esimder_search_need: bool
    keywords: Optional[str] = None

class GeneralSearchParams(BaseModel):
    general_search_need: bool
    keywords: Optional[str] = None

class Classification(BaseModel):
    book_search: Optional[BookSearchParams] = None
    anyz_search: Optional[AnyzSearchParams] = None
    esimder_search: Optional[EsimderSearchParams] = None
    general_search: Optional[GeneralSearchParams] = None

class IntentResponse(BaseModel):
    intent_type: str
    original_query: str
    classification: Classification

class RephraseResponse(BaseModel):
    original_query: str
    rephrased_query: str