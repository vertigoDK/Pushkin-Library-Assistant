from datetime import timedelta

from django.db import models
import datetime


def get_future_date():
    return datetime.date.today() + timedelta(days=1)


# Create your models here.
class TimeModel(models.Model):
    date_change = models.DateField(auto_now_add=True, verbose_name='Дата', default=get_future_date)
    time_start = models.TimeField(verbose_name='Время начало работы библиотеки', default=datetime.time(9, 0))
    time_end = models.TimeField(verbose_name='Время окончания работы библиотеки', default=datetime.time(19, 0))
