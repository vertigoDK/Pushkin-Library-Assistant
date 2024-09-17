from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='core'),
    path('404', views.handler404, name='handler404'),
    path('403', views.handler403, name='handler403'),
    path('500', views.handler500, name='handler500'),

]
