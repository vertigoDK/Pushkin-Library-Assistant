from django.shortcuts import render


def index(request):
    return render(request=request, template_name='chat.html', context={'show_chatbot': False})


def chat_page(request):
    return render(request=request, template_name='chat_page.html', context={'show_chatbot': False, 'hide_footer': True})
