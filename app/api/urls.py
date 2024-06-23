from django.urls import path
from .views import BookSearchView

urlpatterns = [
    path('search-book/', BookSearchView.as_view(), name='book-search'),
]
