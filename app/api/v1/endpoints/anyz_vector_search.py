from app.services.vector_search_service.anyz_vector_handler import AnyzVectorHandler
from .base_vector_search import BaseVectorSearchRouter

router = BaseVectorSearchRouter(AnyzVectorHandler()).router