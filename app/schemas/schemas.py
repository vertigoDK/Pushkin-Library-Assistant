from pydantic import BaseModel
from typing import Dict, Any, Optional

class ChatRequest(BaseModel):
    query: str

class ChatResponse(BaseModel):
    original_query: str
    intent_classification: Dict[str, Any]
    rephrased_query: str
    search_results: Optional[Dict[str, Any]]
    llm_response: str
