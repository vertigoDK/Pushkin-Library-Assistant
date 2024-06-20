from django.urls import path
from . import views

urlpatterns = [
    path('mini', views.index, name='chat_bot'),
    path('', views.chat_page, name='chat_page'),
]
