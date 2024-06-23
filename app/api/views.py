from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import SearchQuerySerializer
from .services.book_search import SearchBook


class BookSearchView(APIView):
    def post(self, request):
        serializer = SearchQuerySerializer(data=request.data)
        if serializer.is_valid():
            query = serializer.validated_data['query']
            threshold = serializer.validated_data['threshold']
            search_book = SearchBook()
            similar_books = search_book.find_similar_books(query, threshold)
            exact_match = any(book['title'] == query for book in similar_books)
            return Response({
                "exact_match": exact_match,
                "results": similar_books
            }, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
