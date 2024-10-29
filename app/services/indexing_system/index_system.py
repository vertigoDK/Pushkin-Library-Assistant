import meilisearch
from typing import Dict, Any
from app.core.config import settings

class IndexHandler:
    
    indexes_name = [
        "anyz",
        "olketanu",
        "esimder"
    ]
    
    def __init__(self):
        self.client = meilisearch.Client(settings.meilisearch_host)
        
    def search_from_index(self, text_query: str, index_name: str) -> Dict[str, Dict[str, Any]]:
        if index_name not in self.indexes_name:
            raise ValueError(f"You need to provide a correct index name. Choose from: {', '.join(self.indexes_name)}")
        
        # Получение индекса
        index = self.client.index(index_name)
        
        # Выполнение поиска по текстовому запросу
        search_result = index.search(text_query)
        
        # Обработка результатов с учетом различных структур
        formatted_results = {}
        for hit in search_result["hits"]:
            # Динамическое формирование результата для каждого документа
            result_data = {key: hit.get(key, "") for key in hit.keys()}
            formatted_results[hit["id"]] = result_data
        
        return dict(list(formatted_results.items())[:3])

