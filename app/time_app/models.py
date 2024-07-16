from datetime import timedelta

from django.db import models
import datetime


def get_future_date():
    return datetime.date.today() + timedelta(days=1)


# Create your models here.
class TimeModel(models.Model):
    date_change = models.DateField(verbose_name='Дата', default=get_future_date)
    is_holiday = models.BooleanField(default=False, verbose_name='Выходной')
    custom_time_start = models.TimeField(verbose_name='Измененное время начала работы', blank=True,
                                         default=datetime.time(8, 0))
    custom_time_end = models.TimeField(verbose_name='Измененное время окончания работы', blank=True,
                                       default=datetime.time(19, 0))

    class Meta:
        verbose_name = "Изменение Времени"
        verbose_name_plural = "Список Изменений Времени"

    def __str__(self):
        f = 'HH:MM'
        return f"{self.date_change} {'- Выходной' if self.is_holiday else f'{self.custom_time_start.strftime(f)} - {self.custom_time_end.strftime(f)}'}"
