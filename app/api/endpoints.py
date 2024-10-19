from fastapi import APIRouter
from app.services.intents_recognize import recognize_intent
from app.services.request_handler import RequestHandler

router = APIRouter()

@router.get("/get-intents")
async def get_intents(text_query: str):
    recognized_intent: str = recognize_intent(text_query=text_query)

    return {"data": recognized_intent}

@router.get("/request-handler")
async def request_handler(text_query: str):
    rHandler: RequestHandler = RequestHandler()

    result = rHandler.handle_request(text_query=text_query)

    return {"data": result}