# api/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import BookSearchParamsSerializer, NewsFetcherParamsSerializer
from .services.books_parser import BookSearchHandler
from .services.news_fetcher import NewsFetcher
from .services.events_fetcher import get_events

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
            latest_news = news_fetcher.get_latest_news()

            # Преобразуем pub_date в ISO формат
            for news in latest_news:
                news['pub_date'] = news['pub_date'].isoformat()

            return Response(latest_news, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EventsFetcherView(APIView):
    def get(self, request, *args, **kwargs):
        events = get_events()
        return Response(events)

