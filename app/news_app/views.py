from gc import get_objects

from django.shortcuts import render, get_object_or_404

from .models import News, NewsImage
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger


def soon(request):
    return render(request=request, template_name='soon.html', context={'show_chatbot': True})


def news_list(request):
    news_list = News.objects.all().order_by('-pub_date')
    paginator = Paginator(news_list, 12)

    page = request.GET.get('page')
    try:
        news = paginator.page(page)
    except PageNotAnInteger:
        news = paginator.page(1)
    except EmptyPage:
        news = paginator.page(paginator.num_pages)

    return render(request, 'news_list.html', {'news': news, 'show_chatbot': True})


def news_detail(request, slug):
    news_item = get_object_or_404(News, slug=slug)
    news_images = NewsImage.objects.filter(news=news_item)
    return render(request, 'news_detail.html',
                  {'news_item': news_item, 'news_images': news_images, 'show_chatbot': True})



