from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='courses_index'),
]