from .llm.base_llm import LLMBase
from pydantic import BaseModel, Field

class EngineIntentModel(BaseModel):
    use_books_engine: bool = Field(description="if user want to use books engine, for example книги абая")
    use_legends_engine: bool = Field(description="if user want to use legends engine, for example легенда о рахмановских ключах")

class EngineIntentRouter(LLMBase):

    def __init__(self):
        super().__init__()
        self._llm_prompt = "йоу"

    def extract_engine_intents(self, text_request: str):
        return self.call_json_output_parser(text_query=text_request,
                                            llm_prompt=self._llm_prompt,
                                            pydantic_object=EngineIntentModel)