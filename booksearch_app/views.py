import os

from django.http import JsonResponse
from django.shortcuts import render
from difflib import SequenceMatcher
from Levenshtein import ratio, distance


def parse_data_file():
    file_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'database', 'data.txt')
    books = []
    with open(file_path, 'r', encoding='utf-8', errors="ignore") as file:
        for line in file:
            title = line.strip()  # Получаем название книги из строки без лишних пробелов
            if title:  # Проверяем, что строка не пустая
                books.append({'title': title})
    return books


def similar(a: str, b: str):
    return 1 - (SequenceMatcher(None, b, a).find_longest_match().size / len(a))


def search_books(request):
    query = request.GET.get('q', '').lower()
    results = []
    sort_index = []
    books = parse_data_file()

    if query:
        for book in books:
            if x := ratio(book.get('title', '').lower(), query) > 0.7:
                results.append({'title': book['title']})
                sort_index.append(x)
            if len(results) >= 20:
                break

    return JsonResponse({'results': results})


def search_page(request):
    return render(request, 'booksearch_app/search_book.html', context={'show_chatbot': True})


def levenshtein_distance(a: str, b: str):
    if len(b) == 0:
        return len(a)

    previous_row = range(len(b) + 1)
    for i, c1 in enumerate(a):
        row = [i + 1]
        for j, c2 in enumerate(b):
            insertions = previous_row[j + 1] + 1
            deletions = row[j] + 1
            substitutions = previous_row[j] + (c1 != c2)
            row.append(min(insertions, deletions, substitutions))
        previous_row = row

    return previous_row[-1]
