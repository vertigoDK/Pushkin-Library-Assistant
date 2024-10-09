from langchain_google_genai import GoogleGenerativeAIEmbeddings
from dotenv import load_dotenv

def get_embedding_function():
    load_dotenv()
    embeddings = GoogleGenerativeAIEmbeddings(
        model="models/embedding-001"
    )
    return embeddings
