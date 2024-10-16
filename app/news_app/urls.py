from django.urls import path

from .views import NewsDetailView, NewsListView


urlpatterns = [
    path('<slug:slug>', NewsDetailView.as_view(), name='news_detail'),
    path('', NewsListView.as_view(), name='news'),
]
