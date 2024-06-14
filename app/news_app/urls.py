from django.urls import path
from . import views


urlpatterns = [
    path('soon/', views.soon, name='soon'),
    path('', views.news_list, name='news'),
    path('<slug:slug>/', views.news_detail, name='news_detail'),
]
