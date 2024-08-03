# api/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import BookSearchParamsSerializer
from .services.books_parser import BookSearchHandler

class BookSearchAPIView(APIView):
    def post(self, request):
        serializer = BookSearchParamsSerializer(data=request.data)
        if serializer.is_valid():
            search_params = serializer.validated_data
            first_handler = BookSearchHandler(search_params=search_params, first_number=1)
            second_handler = BookSearchHandler(search_params=search_params, first_number=10)
            
            try:
                first_result = first_handler.execute_search()
                second_result = second_handler.execute_search()
                
                # Объединение результатов
                combined_results = first_result
                combined_results['recs'].extend(second_result['recs'])
                
                return Response(combined_results, status=status.HTTP_200_OK)
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
