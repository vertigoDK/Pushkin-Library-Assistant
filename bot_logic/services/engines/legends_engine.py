from ..llm.vector_database_handlers import VectorDatabaseHandlers

class LegendsEngine(VectorDatabaseHandlers):
    
    def __init__(self):
        super().__init__(collection="legends_collection")
    
    """
    Написать upsert через CLI либо же через билдер
    """