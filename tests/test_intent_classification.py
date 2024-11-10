from app.services.intent_classification import IntentClassification
import json
from typing import Any, Dict

def print_result(query: str, result: Dict[str, Any]) -> None:
    """Красиво выводит результат классификации"""
    print("\n" + "="*80)
    print(f"Запрос: {query}")
    print(f"Тип намерения: {result['intent_type']}")
    print("\nДетали классификации:")
    print(json.dumps(result['classification'], ensure_ascii=False, indent=2))
    
    # Добавляем вывод raw response для отладки
    if 'raw_response' in result:
        print("\nRAW Response:")
        print(result['raw_response'])
    print("="*80)

def main():
    classifier = IntentClassification()
    
    # Список тестовых запросов
    test_queries = [
        "Акулов В И"
    ]
    
    # Тестируем каждый запрос
    for query in test_queries:
        try:
            result = classifier.process_query(query)
            # Получаем raw response для отладки
            raw_result = classifier.classify_intent(query)
            result['raw_response'] = raw_result
            print_result(query, result)
        except Exception as e:
            print(f"\nОшибка при обработке запроса '{query}': {str(e)}")

if __name__ == "__main__":
    main() 