from django.shortcuts import render

from settings import FLOWISE_CHATFLOW, FLOWISE_HOST


def chat_page(request):
    return render(request=request, template_name='chat_page.html', context={'show_chatbot': False, 'hide_footer': True,
                                                                            'FLOWISE_CHATFLOW': FLOWISE_CHATFLOW,
                                                                            'FLOWISE_HOST': FLOWISE_HOST})
