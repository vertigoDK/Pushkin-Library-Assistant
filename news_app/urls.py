from django.contrib import admin
from django.urls import path
from . import views


urlpatterns = [
    path('', views.news_list, name='news'),
    path('<slug:slug>/', views.news_detail, name='news_detail'),
    path('soon/', views.soon, name='soon'),
]
