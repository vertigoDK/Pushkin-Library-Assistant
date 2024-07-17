# api/urls.py
from django.urls import path
from .views import BookSearchAPIView

urlpatterns = [
    path('search/', BookSearchAPIView.as_view(), name='book-search'),
    # path('exa-search/', Bo)
]
