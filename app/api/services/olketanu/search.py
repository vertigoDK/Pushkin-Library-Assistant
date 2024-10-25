import json
import meilisearch
import time


class MeiliSearchManager:
    def __init__(self, url: str, api_key: str):
        # Инициализация клиента MeiliSearch
        self.client = meilisearch.Client(url, api_key)

    def create_index(self, index_name, key='id'):
        self.client.create_index(index_name, {'primaryKey': key})

    def delete_index(self, index_name):
        self.client.delete_index(index_name)

    def load_data_from_json(self, file_path: str, index_name: str):
        """Загружает данные из JSON-файла и добавляет их в индекс."""
        with open(file_path, encoding='utf-8') as json_file:
            data = json.load(json_file)

        task = self.client.index(index_name).add_documents_json(data)
        self.wait_for_task(task.task_uid, index_name)
        print("Данные успешно добавлены в индекс.")

    def wait_for_task(self, task_uid: int, index_name: str):
        """Ожидает завершения задачи индексации."""
        status = self.client.index(index_name).get_task(task_uid)
        while status.status != 'succeeded':
            print(f"Индексация в процессе, текущий статус: {status.status}")
            time.sleep(1)
            status = self.client.index(index_name).get_task(task_uid)

        print("Индексация завершена.")

    def search(self, query, index_name: str, limit=10):
        """Выполняет поиск по индексу."""
        results = self.client.index(index_name).search(query, {'limit': limit})
        return results['hits']

    def delete_document(self, document_id: str, index_name: str):
        """Удаляет документ по его ID."""
        task = self.client.index(index_name).delete_document(document_id)
        self.wait_for_task(task.task_uid)
        print(f"Документ с ID {document_id} успешно удален.")

    def add_documents(self, documents: str, index_name: str):
        """Добавляет список документов в индекс."""
        task = self.client.index(index_name).add_documents(documents, )
        self.wait_for_task(task.task_uid)
        print("Документы успешно добавлены.")


def main():
    # Создаем объект менеджера
    #
    manager = MeiliSearchManager('http://localhost:7700', 'abfgKS-kxxZ6Dlp2C19wHzcF-IPmKO20fpQtwmhj4XM')
    #
    manager.create_index('olketanu')
    manager.create_index('esimder')

    # Загрузка и добавление данных из JSON файла
    manager.load_data_from_json('esimder_output_list.json', "esimder")
    manager.load_data_from_json('olketanu_output_list.json', "olketanu")

    # Выполнение поиска
    query = 'Абай'
    results = manager.search(query, 'olketanu', limit=2,)
    print("Результаты поиска:", json.dumps(results, indent=4, ensure_ascii=False))


if __name__ == "__main__":
    main()
