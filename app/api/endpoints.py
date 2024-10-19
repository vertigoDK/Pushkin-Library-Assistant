from fastapi import APIRouter
from app.services.intents_recognize import recognize_intent


router = APIRouter()

@router.get("/get-intents")
async def get_intents(text_query: str):
    recognized_intent: str = recognize_intent(text_query=text_query)

    return {"data": recognized_intent}