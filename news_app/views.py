from django.shortcuts import render, get_object_or_404
from .models import News


def index(request):
    return render(request=request, template_name='news_app/index.html')


def soon(request):
    return render(request=request, template_name='news_app/soon.html')


def news_list(request):
    news = News.objects.all().order_by('-pub_date')
    return render(request, 'news_app/news_list.html', {'news': news})


def news_detail(request, slug):
    news_item = get_object_or_404(News, slug=slug)
    return render(request, 'news_app/news_detail.html', {'news_item': news_item})