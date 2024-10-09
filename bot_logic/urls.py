from django.urls import path
from . import views

urlpatterns = [
    path('engines/legends-engine/', views.legends_engine_view, name='legend_engine'),
    path('engines/book-search/', views.book_search_view, name='book_search_engine'),
    path('extract-engine-intents/', views.engine_intent_view, name='engine-intents-view'),
    path('chat/', views.conservation_view, name='conservation-view')
]