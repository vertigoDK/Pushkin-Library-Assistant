# api/urls.py
from django.urls import path
from .views import BookSearchAPIView, LatestNewsView

urlpatterns = [
    path('search/', BookSearchAPIView.as_view(), name='book-search'),
    path('latest-news/', LatestNewsView.as_view(), name='latest-news'),
]
