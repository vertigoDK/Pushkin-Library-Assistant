from django.urls import path
from . import views


urlpatterns = [
    path('renew-the-book/', views.renew_the_book, name='renew-the-book'),
]
