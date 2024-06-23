import re
from fuzzywuzzy import fuzz


class SearchBook:
    def __init__(self):
        self.books = self.extract_books()

    def extract_books(self):
        books = []
        with open('search_books/output_booksru.txt', 'r', encoding='utf-8') as file:
            content = file.read()
            book_entries = re.split(r'(?=\blang:)', content)
            for entry in book_entries:
                book = {}
                book['lang'] = self.extract_field(r'lang: ([^\n,]+)', entry)
                book['country'] = self.extract_field(r'country: ([^\n,]+)', entry)
                book['title'] = self.extract_field(r'title: ([^\n,]+)', entry)
                book['author'] = self.extract_field(r'author: ([^\n,]+)', entry)
                book['description'] = self.extract_field(r'description: ([^\n,]+)', entry)
                book['keywords'] = self.extract_field(r'keywords: ([^\n,]+)', entry)

                if all(book.values()):  # Ensure all fields are extracted
                    books.append(book)
        return books

    def extract_field(self, pattern, text):
        match = re.search(pattern, text)
        return match.group(1) if match else None

    def find_similar_books(self, query, threshold=0.8):
        matches = []
        for book in self.books:
            if fuzz.token_set_ratio(query, book['title']) / 100 >= threshold:
                matches.append(book)
        return matches[:20]  # Возвращаем максимум 20 записей
