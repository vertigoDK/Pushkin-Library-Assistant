from fastapi import APIRouter, HTTPException
from app.schemas.intent import IntentRequest, IntentResponse, RephraseResponse
from app.services.intent_classification import IntentClassification

router = APIRouter()
intent_classifier = IntentClassification()

@router.post("/classify", response_model=IntentResponse)
async def classify_intent(request: IntentRequest):
    try:
        result = intent_classifier.process_query(request.query)
        return result
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error processing query: {str(e)}"
        )

@router.get("/health")
async def health_check():
    return {"status": "healthy"}

@router.post("/rephrase", response_model=RephraseResponse)
async def rephrase_query(request: IntentRequest):
    try:
        rephrased = intent_classifier.rephrase_query(request.query)
        return {
            "original_query": request.query,
            "rephrased_query": rephrased
        }
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error rephrasing query: {str(e)}"
        ) 