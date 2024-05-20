import os

from django.http import JsonResponse
from django.shortcuts import render


def parse_data_file():
    file_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'database', 'data.txt')
    books = []
    with open(file_path, 'r', encoding='utf-8') as file:
        for line in file:
            title = line.strip()  # Получаем название книги из строки без лишних пробелов
            if title:  # Проверяем, что строка не пустая
                books.append({'title': title})
    return books


def search_books(request):
    query = request.GET.get('q', '').lower()
    results = []
    books = parse_data_file()

    if query:
        for book in books:
            if query in book.get('title', '').lower():
                results.append({'title': book['title']})
                if len(results) >= 20:
                    break

    return JsonResponse({'results': results})

def search_page(request):
    return render(request, 'booksearch_app/search_book.html', context={'show_chatbot': True})
