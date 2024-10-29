from app.services.indexing_system.index_system import IndexHandler

class LegendSearch:
    
    
    def __init__(self):
        self.index_handler = IndexHandler()
        
    def _format_output(self, index_result: dict[str, str]) -> str:
        formatted_output = ""
        for doc_id, doc in index_result.items():
            formatted_output += f"ID: {doc_id}\n"
            formatted_output += f"Title: {doc.get('title', 'N/A')}\n"
            formatted_output += f"URL: {doc.get('url', 'N/A')}\n"
            formatted_output += f"Content: {doc.get('content', 'N/A')}\n"  # Показываем первые 200 символов контента
            formatted_output += "-" * 50 + "\n"  # Разделитель между результатами

        return formatted_output
        
    def search_by_keywords(self, keywords: str) -> str:
        
        index_result: dict[str, str] = self.index_handler.search_from_index(text_query=keywords, index_name="anyz")
        
        return self._format_output(index_result=index_result)
