# api/urls.py
from django.urls import path

from .services.exa_api.exa_handler import ExaHandler
from .views import BookSearchAPIView, LatestNewsView, EventsFetcherView, IntentsRecognize

urlpatterns = [
    path('search/', BookSearchAPIView.as_view(), name='book-search'),
    path('latest-news/', LatestNewsView.as_view(), name='latest-news'),
    path('events-fetcher/', EventsFetcherView.as_view(), name='events-fetcher'),
    path('intents-recognize/', IntentsRecognize.as_view(), name='intents_recognize')
]
