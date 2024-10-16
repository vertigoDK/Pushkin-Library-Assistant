# api/urls.py
from django.urls import path

from .views import LatestNewsView, EventsFetcherView, AIRequestHandlerView, BookSearchAPIView

urlpatterns = [
    path('books-search/', BookSearchAPIView.as_view(), name='book-search'),
    path('latest-news/', LatestNewsView.as_view(), name='latest-news'),
    path('events-fetcher/', EventsFetcherView.as_view(), name='events-fetcher'),
    path('send-request/', AIRequestHandlerView.as_view(), name='ai-request-handler')
]
