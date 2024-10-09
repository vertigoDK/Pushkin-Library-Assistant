from django.urls import path
from . import views

urlpatterns = [
    path('engines/legends-engine/', views.legends_engine_view, name='legend-engine'),
]