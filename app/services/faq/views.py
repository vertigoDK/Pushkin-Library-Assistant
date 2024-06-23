from django.shortcuts import render


# Create your views here.


def index(request):
    return render(request=request, template_name='faq-info.html', context={'show_chatbot': True})


def virtual_help(request):
    return render(request=request, template_name='virtual-help.html', context={'show_chatbot': True})


def electronic_document_delivery(request):
    return render(request=request, template_name='electronic-document-delivery.html', context={'show_chatbot': True})
