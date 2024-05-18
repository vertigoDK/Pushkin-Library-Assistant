from django.shortcuts import render, get_object_or_404
from .models import News



def soon(request):
    return render(request=request, template_name='news_app/soon.html', context={'show_chatbot': True})


def news_list(request):
    news = News.objects.all().order_by('-pub_date')
    return render(request, 'news_app/news_list.html', {'news': news, 'show_chatbot': True})


def news_detail(request, slug):
    news_item = get_object_or_404(News, slug=slug)
    return render(request, 'news_app/news_detail.html', {'news_item': news_item, 'show_chatbot': True})
