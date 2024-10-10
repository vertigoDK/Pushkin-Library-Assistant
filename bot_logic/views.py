from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import LegendSerializer, BookSearchSerializer, TextQuerySerualizer
from .services.engines.legends_engine import LegendsEngine
from .services.engines.book_search_engine import BookSearchEngine
from .services.engine_intent_router import EngineIntentRouter
from .services.llm.dosai import DosAI
from django.http import HttpRequest


@api_view(['POST'])
def legends_engine_view(request: HttpRequest):
    serializer = LegendSerializer(data=request.data)
    if serializer.is_valid():

        LEngine: LegendsEngine = LegendsEngine()

        legend_name = serializer.validated_data['legend_name']

        result = LEngine.search_in_database(query_text=legend_name)

        return Response({"legends": result}, status=status.HTTP_200_OK)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def book_search_view(request: HttpRequest):
    # Валидация входящих данных с помощью сериализатора
    serializer = BookSearchSerializer(data=request.data)
    if serializer.is_valid():
        # Извлекаем валидированные данные
        search_params = serializer.validated_data

        # Создаем экземпляр обработчика поиска
        search_handler = BookSearchEngine(search_params=search_params)

        # Выполняем поиск
        search_results = search_handler.execute_search()

        # Возвращаем результаты поиска
        return Response(search_results, status=status.HTTP_200_OK)
    else:
        # Возвращаем ошибки валидации
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def engine_intent_view(request: HttpRequest):

    serializer = TextQuerySerualizer(data=request.data)

    if serializer.is_valid():
        text_query: str = serializer.validated_data['text_query']

        engineIRouter = EngineIntentRouter()

        result = engineIRouter.extract_engine_intents(text_request=text_query)

        return Response({"data": result}, status=status.HTTP_200_OK)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def conservation_view(request: HttpRequest):

    serializer = TextQuerySerualizer(data=request.data)
    if serializer.is_valid():
        text_query: str = serializer.validated_data['text_query']

        dosai = DosAI()

        response: str = dosai.handle_message(text_query)

        return Response({"response": response}, status=status.HTTP_200_OK)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)