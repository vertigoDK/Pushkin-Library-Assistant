from django.shortcuts import render


# Create your views here.

def index(request):
    return render(request=request, template_name='readers.html', context={'show_chatbot': True})


def renew_your_book(request):
    return render(request=request, template_name='renew-your-book.html', context={'show_chatbot': True})
