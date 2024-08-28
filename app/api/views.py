# api/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import BookSearchParamsSerializer, NewsFetcherParamsSerializer
from .services.books_parser import BookSearchHandler
from .services.news_fetcher import NewsFetcher

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


class LatestNewsView(APIView):
    """
    Представление для получения последних новостей.
    """
    
    def get(self, request, *args, **kwargs):
        serializer = NewsFetcherParamsSerializer(data=request.query_params)
        if serializer.is_valid():
            news_count = serializer.validated_data.get('news_count', 10)
            news_fetcher = NewsFetcher(news_count=news_count)
            latest_news = news_fetcher._get_latest_news()

            # Формируем ответ в формате JSON
            response_data = [
                {
                    'title': news[0],
                    'content': news[1],
                    'pub_date': news[2].isoformat(),  # Преобразуем datetime в строку ISO
                    'slug': news[3]
                }
                for news in latest_news
            ]

            return Response(response_data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
