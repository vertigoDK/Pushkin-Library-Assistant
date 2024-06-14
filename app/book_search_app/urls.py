from django.urls import path
from . import views

urlpatterns = [
    path('', views.search_books, name='search_books'),
    path('search/', views.search_page, name='search_page'),
]
