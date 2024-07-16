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
                                         default=datetime.time(9, 0))
    custom_time_end = models.TimeField(verbose_name='Измененное время окончания работы', blank=True,
                                       default=datetime.time(19, 0))

    class Meta:
        verbose_name = "Изменение Времени"
        verbose_name_plural = "Список Изменений Времени"

    def save(self, *args, **kwargs):
        if self.is_holiday:
            self.time_start = None
            self.time_end = None

        super().save(*args, **kwargs)

    def __str__(self):
        f = '%dsH:%M'
        return f"{self.date_change} {'- Выходной' if self.is_holiday else f'{self.time_start.strftime(f)} - {self.time_end.strftime(f)}'}"
