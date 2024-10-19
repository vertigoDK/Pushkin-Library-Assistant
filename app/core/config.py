from pydantic import ConfigDict
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    llm_model: str
    high_performance_llm: str 
    GOOGLE_API_KEY: str
    OPENAI_API_KEY: str

    model_config = ConfigDict(env_file=".env")

settings = Settings()
