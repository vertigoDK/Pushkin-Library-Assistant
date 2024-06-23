from django.shortcuts import render


# Create your views here.

def index(request):
    return render(request=request, template_name='readers.html', context={'show_chatbot': True})



def renew_the_book(request):
    return render(request=request, template_name='renew-the-book.html', context={'show_chatbot': True})