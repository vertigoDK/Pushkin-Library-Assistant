import os
from django.http import JsonResponse
from django.shortcuts import render
from difflib import SequenceMatcher


def parse_data_file():
    file_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), '../../database', 'output_books.txt')
    with open(file_path, 'r', encoding='utf-8', errors="ignore") as f:
        lines = f.readlines()

    books = [convert_str_to_dict(line.strip()) for line in lines if line.strip()]
    return books


def convert_str_to_dict(s: str) -> dict:
    pairs = s.split('|')
    result_dict = {}
    for pair in pairs:
        if ': ' in pair:
            key, value = pair.split(': ', 1)
            result_dict[key.strip()] = value.strip() if value.strip() != "Null" else "нету"
    return result_dict


def similar(a: str, b: str) -> float:
    return SequenceMatcher(None, b, a).ratio()


def search_books(request):
    query = request.GET.get('q', '').lower()
    page = int(request.GET.get('page', 1))
    results_per_page = 10

    if not query:
        return JsonResponse({'results': [], 'total_pages': 0, 'current_page': page})

    books = parse_data_file()
    filtered_books = [book for book in books if
                      query in book.get('title', '').lower() or query in book.get('author', '').lower()]

    sorted_books = sorted(filtered_books, key=lambda x: similar(x.get('title', '').lower(), query), reverse=True)

    total_pages = (len(sorted_books) + results_per_page - 1) // results_per_page
    start = (page - 1) * results_per_page
    end = start + results_per_page
    paginated_books = sorted_books[start:end]

    return JsonResponse({'results': paginated_books, 'total_pages': total_pages, 'current_page': page})


def search_page(request):
    return render(request, 'book_search_app/search_book.html', context={'show_chatbot': True})
