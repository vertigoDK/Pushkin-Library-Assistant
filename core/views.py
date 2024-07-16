from django.shortcuts import render
from django.utils.timezone import now, timedelta
from app.news_app.models import News
from app.events_app.models import Event
from app.courses_app.models import Course
from app.time_app.models import TimeModel
from .link import EXTERNAL_LINKS


def get_next_working_day(date, weekend_days):
    next_day = date + timedelta(days=1)
    while next_day.weekday() in weekend_days or TimeModel.objects.filter(date_change=next_day,
                                                                         is_holiday=True).exists():

        next_day += timedelta(days=1)
    print(next_day)
    return next_day


def index(request):
    news = News.objects.all().order_by('-pub_date')
    courses = Course.objects.all()
    events = Event.objects.all()

    current_date = now().date()
    weekend_days = [0, 1]  # 0 - воскресенье, 1 - понедельник

    try:
        time_model_today = TimeModel.objects.get(date_change=current_date)
    except TimeModel.DoesNotExist:
        time_model_today = None

    next_working_day = get_next_working_day(current_date, weekend_days)

    try:
        time_model_next = TimeModel.objects.get(date_change=next_working_day)
    except TimeModel.DoesNotExist:
        time_model_next = TimeModel(date_change=next_working_day)

    context = {
        'show_chatbot': True,
        'news': news,
        'server_time': now(),
        'exl': EXTERNAL_LINKS,
        'courses': courses,
        'events': events,
        'time_model_today': time_model_today,
        'time_model_next': time_model_next,
        'weekend_days': weekend_days,
    }
    return render(request=request, template_name='core.html', context=context)
