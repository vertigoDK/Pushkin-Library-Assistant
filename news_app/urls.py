from django.contrib import admin
from django.urls import path
from . import views


urlpatterns = [
    path('soon/', views.soon, name='soon'),
    path('news/', views.news_list, name='news'),
    path('news/<slug:slug>/', views.news_detail, name='news_detail'),
]
