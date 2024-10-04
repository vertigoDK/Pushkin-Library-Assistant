import os
from uuid import uuid4

from langchain_core.documents import Document
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_chroma import Chroma
from langchain_google_genai.embeddings import GoogleGenerativeAIEmbeddings

from dotenv import load_dotenv

class BaseDocumentLoader:
    
    def __init__(self,
                 base_dir_path: str):
        if os.path.exists(base_dir_path):
            self._base_dir_path = base_dir_path
        else:
            self._base_dir_path = "knowledgebase"
            
    def get_text_from_file(self, file_path: str) -> str:
        try:
            with open(file_path, 'r', encoding='utf-8') as file:
                return file.read()
        except FileNotFoundError:
            print(f"File {file_path} not found.")
            return ""
        except Exception as e:
            print(f"An error occurred while reading the file: {e}")
            return ""

    def get_all_text_files_from_base_dir(self) -> list[tuple[str, ...]]:
        text_files: list[tuple[str, ...]] = []
        for root, dirs, files in os.walk(self._base_dir_path):
            for file in files:
                if file.endswith(".txt"):
                    text_files.append((file, os.path.join(root, file)))
        return text_files
    
    def get_chunks(self) -> list[tuple[str, ...]]:
        text_paths: list[tuple[str, ...]] = self.get_all_text_files_from_base_dir()
        chunks: list[tuple[str, ...]] = []
        
        for item in text_paths:
            chunks.append((item[0], self.get_text_from_file(item[1])))
            
        return chunks
    
class DocumentLoader(BaseDocumentLoader):
    
    def __init__(self,
                 base_dir_path: str = "knowledgebase"):
        super().__init__(base_dir_path)
        
        load_dotenv()
        
        self._text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=3000,
            chunk_overlap=200,
            length_function=len,
        )
        
        embeddings = GoogleGenerativeAIEmbeddings(model="models/text-embedding-004")
        
        self._vector_store = Chroma(
            collection_name="example_collection",
            embedding_function=embeddings,
            persist_directory="./chroma_langchain_db",
        )
        
    def load_chunks_into_documents(self, chunks: list[tuple[str, ...]]) -> list[Document]:

        documents: list[Document] = []
        
        for chunk in chunks:
            documents.append(
                Document(
                    page_content=chunk[1],
                    metadata={"url": chunk[0]}
                )
            )    
        
        return documents
    
    def split_documents_to_chunks(self, documents: list[Document]):
        return self._text_splitter.split_documents(documents=documents)
    
    def load_documents_to_vector_store(self, documents: list[Document]):
        uuids = [str(uuid4()) for _ in range(len(documents))]
        self._vector_store.add_documents(documents=documents, ids=uuids)
    
if __name__ == '__main__':
    dLoader = DocumentLoader(base_dir_path="knowledgebase")  # Укажите путь к директории с текстовыми файлами
    
    # Получение чанков из текстовых файлов
    all_chunks = dLoader.get_chunks()
    
    # Проверяем, что чанки были загружены
    print("Полученные чанки:")
    for file_name, chunk in all_chunks:
        print(f"Файл: {file_name}, Чанк: {chunk[:30]}...")  # Выводим первые 30 символов чанка для проверки
    
    # Загружаем чанки в документы
    documents = dLoader.load_chunks_into_documents(all_chunks)
    
    # Разбиваем документы на более мелкие части
    split_documents = dLoader.split_documents_to_chunks(documents)
    
    # Загружаем документы в векторное хранилище
    dLoader.load_documents_to_vector_store(split_documents)

    print(f"Загружено {len(split_documents)} документов в векторное хранилище.")

    