import json
from app.services.vector_search_service.anyz_vector_handler import AnyzVectorHandler
from typing import List, Dict

def load_anyz_data(file_path: str = "anyz.json") -> List[Dict]:
    """Загрузка данных из JSON файла"""
    with open(file_path, 'r', encoding='utf-8') as file:
        return json.load(file)

def prepare_documents(data: List[Dict]):
    """Подготовка документов для загрузки"""
    texts = []
    metadatas = []
    
    for item in data:
        # Объединяем заголовок и содержание для лучшего поиска
        text = f"{item['title']}\n\n{item['content']}"
        texts.append(text)
        
        # Метаданные для каждого документа
        metadata = {
            "title": item['title'],
            "url": item['url']
        }
        metadatas.append(metadata)
    
    return texts, metadatas

def main():
    # Загружаем данные
    data = load_anyz_data()
    
    # Подготавливаем документы
    texts, metadatas = prepare_documents(data)
    
    # Инициализируем handler
    handler = AnyzVectorHandler()
    
    try:
        # Загружаем документы
        handler.add_documents(
            texts=texts,
            metadatas=metadatas
        )
        print(f"Успешно загружено {len(texts)} документов")
        
        # Тестовый поиск
        test_query = "рахмановские ключи"
        results = handler.search(
            query=test_query,
            n_results=2
        )
        print("\nТестовый поиск:")
        print(f"Запрос: {test_query}")
        print("Результаты:")
        for i, (doc, metadata) in enumerate(zip(results['documents'][0], results['metadatas'][0])):
            print(f"\n{i+1}. {metadata['title']}")
            print(f"URL: {metadata['url']}")
            print("Начало текста:", doc[:200], "...")
        
    except Exception as e:
        print(f"Ошибка при загрузке документов: {str(e)}")

if __name__ == "__main__":
    main() 