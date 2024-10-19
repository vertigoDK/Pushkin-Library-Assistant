from fastapi import FastAPI
from app.core.config import settings
from app.api.endpoints import router as api_router
import logging


app = FastAPI(title='DosAI')

app.include_router(api_router, prefix="/api")