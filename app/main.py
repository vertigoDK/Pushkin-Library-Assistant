from fastapi import FastAPI
from app.api import api
app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Root endpoint"}

app.include_router(api.router, prefix="/api/v1")
