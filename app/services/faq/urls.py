from django.urls import path
from . import views


urlpatterns = [
    path('virtual-help/', views.virtual_help, name='virtual-help'),
    path('electronic-document-delivery/', views.electronic_document_delivery, name='electronic-document-delivery'),
    path('', views.index, name='faq.txt'),
]
