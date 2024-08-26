from django.shortcuts import render
from django.utils.timezone import now, timedelta

from app.new_book_app.models import NewBook
from app.news_app.models import News
from app.events_app.models import Event
from app.courses_app.models import Course
from app.time_app.models import TimeModel
from .link import EXTERNAL_LINKS


def get_next_working_day(date, weekend_days):
    next_day = date
    while next_day.weekday() in weekend_days or TimeModel.objects.filter(date_change=next_day,
                                                                         is_holiday=False).exists():

        next_day += timedelta(days=1)
    return next_day


def index(request):
    news = News.objects.all().order_by('-pub_date')
    courses = Course.objects.all()
    events = Event.objects.all()
    new_books = NewBook.objects.all()

    current_date = now().date()
    weekend_days = [0, 1]  # 0 - воскресенье, 1 - понедельник
    current_day_of_week = current_date.weekday()
    try:
        time_model_today = TimeModel.objects.get(date_change=current_date)
    except TimeModel.DoesNotExist:
        time_model_today = TimeModel(date_change=current_date, is_holiday=current_day_of_week in weekend_days)

    next_working_day = get_next_working_day(current_date, weekend_days)

    try:
        time_model_next = TimeModel.objects.get(date_change=next_working_day)
    except TimeModel.DoesNotExist:
        time_model_next = TimeModel(date_change=next_working_day)

    print(time_model_today)
    print(time_model_next)

    context = {
        'show_chatbot': True,
        'news': news,
        'server_time': now(),
        'exl': EXTERNAL_LINKS,
        'courses': courses,
        'events': events,
        'time_model_today': time_model_today,
        'time_model_next': time_model_next,
        'new_books': new_books,
        'weekend_days': weekend_days,
    }
    return render(request=request, template_name='core.html', context=context)
