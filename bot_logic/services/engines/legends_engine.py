import re
from collections import defaultdict
from uuid import uuid4
from langchain_chroma import Chroma
from langchain_core.documents import Document
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from dotenv import load_dotenv
from ..llm.vector_database_handlers import VectorDatabaseHandlers

load_dotenv()



class LegendsEngine(VectorDatabaseHandlers):
    
    def __init__(self):
        super().__init__(collection="legends_collection")


