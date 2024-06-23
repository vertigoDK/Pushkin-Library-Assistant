from django.urls import path
from . import views


urlpatterns = [
    path('renew-your-book/', views.renew_your_book, name='renew-your-book'),
    path('significant-calendar/', views.renew_your_book, name='significant-calendar'),
    path('', views.index, name='readers'),
]
