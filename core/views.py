from django.shortcuts import render
from django.utils.timezone import now, timedelta

from app.courses_app.models import Course
from app.events_app.models import Event
from app.new_book_app.models import NewBook
from app.news_app.models import News
from app.time_app.models import TimeModel
from base.settings import FLOWISE_CHATFLOW, FLOWISE_HOST
from .link import EXTERNAL_LINKS


def get_next_working_day(date, weekend_days):
    next_day = date + timedelta(days=1)

    while True:
        # Проверяем, есть ли запись для следующего дня
        try:
            time_model = TimeModel.objects.get(date_change=next_day)

            # Если день не является выходным, возвращаем его
            if next_day.weekday() not in weekend_days and not time_model.is_holiday:
                return next_day
        except TimeModel.DoesNotExist:
            # Если записи нет, проверяем только по выходным
            if next_day.weekday() not in weekend_days:
                return next_day

        # Если текущий день не подходит, проверяем следующий
        next_day += timedelta(days=1)


def index(request):
    current_date = now().date()
    weekend_days = [6, 0]  # 0 - воскресенье, 1 - понедельник
    current_day_of_week = current_date.weekday()

    news = News.objects.all().order_by('-pub_date')
    courses = Course.objects.all()
    events = Event.objects.filter(date_change__gte=current_date).order_by("-date_change")
    new_books = NewBook.objects.all()

    try:
        time_model_today = TimeModel.objects.get(date_change=current_date)
    except TimeModel.DoesNotExist:
        # Если на сегодня нет записи, создаем модель с текущей датой и статусом выходного дня
        time_model_today = TimeModel(date_change=current_date, is_holiday=current_day_of_week in weekend_days)

    #
    next_working_day = get_next_working_day(current_date, weekend_days)

    try:
        time_model_next = TimeModel.objects.get(date_change=next_working_day)
    except TimeModel.DoesNotExist:
        # Если на следующий рабочий день нет записи, создаем модель с этим днем
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
        'new_books': new_books,
        'weekend_days': weekend_days,
        'FLOWISE_CHATFLOW': FLOWISE_CHATFLOW,
        'FLOWISE_HOST': FLOWISE_HOST
    }
    return render(request=request, template_name='core.html', context=context)


def handler404(request, exception=None):
    return render(request, '404.html')


def handler403(request, exception=None):
    return render(request, '403.html')


def handler500(request, exception=None):
    return render(request, '500.html')
