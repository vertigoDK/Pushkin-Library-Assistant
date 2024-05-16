from django.shortcuts import render
from django.http import HttpResponse
from .models import News


def index(request):
    return render(request=request, template_name='core/index.html')


def soon(request):
    return render(request=request, template_name='core/soon.html')


def news_list(request):
    news = News.objects.all().order_by('-pub_date')
    return render(request, 'core/news_list.html', {'news': news})