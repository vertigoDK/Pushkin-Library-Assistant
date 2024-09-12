# api/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import BookSearchParamsSerializer, NewsFetcherParamsSerializer, ExaSearchSerializer, ExaResultSerializer
from app.api.services.books_api.books_parser import BookSearchHandler
from app.api.services.data_extractors.news_fetcher import NewsFetcher
from app.api.services.data_extractors.events_fetcher import get_events
from app.api.services.exa_api import exa_handler
from .services.exa_api.exa_handler import ExaHandler


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


class ExaSearchView(APIView):

    def get(self, request, *args, **kwargs):
        # Получаем параметры запроса
        query = request.query_params.get('query', '')
        num_result = int(request.query_params.get('num_result', 5))
        max_characters = int(request.query_params.get('max_characters', 10000))
        site_name = request.query_params.get('site_name', None)

        # Печатаем для отладки
        print(f"Received site_name: {site_name}")

        # Инициализируем объект ExaHandler с site_name
        try:
            exa_handler = ExaHandler(site_name)
        except ValueError as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

        result = exa_handler.send_request(query, num_result, max_characters)

        # Сериализуем результат
        serializer = ExaResultSerializer(result, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

