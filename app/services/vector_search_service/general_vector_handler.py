from app.core.config import settings
from app.services.vector_search_service.base_vector_handler import BaseVectorHandler

class GeneralVectorHandler(BaseVectorHandler):
    def __init__(self):
        super().__init__(settings.GENERAL_VECTOR_SEARCH_NAME) 