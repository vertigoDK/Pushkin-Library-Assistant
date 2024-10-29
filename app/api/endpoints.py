from fastapi import APIRouter
from app.services.request_handler import RequestHandler

router = APIRouter()

@router.get("/request-handler")
async def request_handler(text_query: str):
    rHandler: RequestHandler = RequestHandler()

    result = rHandler.handle_request(text_query=text_query)

    return {"data": result}