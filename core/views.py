from django.shortcuts import render
from django.http import HttpResponse
from django.utils.timezone import now

from app.news_app.models import News


def index(request):
    news = News.objects.all().order_by('-pub_date')
    return render(request=request, template_name='core.html',
                  context={'show_chatbot': True, 'news': news, 'server_time': now(), })
