from django.shortcuts import render
from django.http import HttpResponse
from django.utils.timezone import now

from app.news_app.models import News
from app.events_app.models import Event
from app.courses_app.models import Course
from .link import EXTERNAL_LINKS


def index(request):
    news = News.objects.all().order_by('-pub_date')
    courses = Course.objects.all()
    events = Event.objects.all()
    context = {
        'show_chatbot': True,
        'news': news,
        'server_time': now(),
        'exl': EXTERNAL_LINKS,
        'courses': courses,
        'events': events,
    }
    return render(request=request, template_name='core.html', context=context)
