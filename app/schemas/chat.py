from pydantic import BaseModel
from typing import Optional, Dict, Any

class ChatRequest(BaseModel):
    query: str

class ChatResponse(BaseModel):
    original_query: str
    rephrased_query: str
    intent_classification: Dict[str, Any]
    response: Optional[str]
    has_book_results: bool 