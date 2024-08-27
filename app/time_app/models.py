from datetime import timedelta

from django.db import models
import datetime
from django.utils.formats import date_format


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
        ordering = ('date_change',)

    def __str__(self):
        # Используем встроенную функцию date_format для форматирования даты в соответствии с локалью
        date_str = date_format(self.date_change, format='D, j b y', use_l10n=True)
        time_format = '%H:%M'  # Формат времени в 24-часовом формате (часы:минуты)

        if self.is_holiday:
            # Если это выходной день
            return f"{date_str} - Выходной"
        else:
            # Если это рабочий день, форматируем время начала и конца
            custom_time_start_str = self.custom_time_start.strftime(
                time_format) if self.custom_time_start else "Не указано"
            custom_time_end_str = self.custom_time_end.strftime(time_format) if self.custom_time_end else "Не указано"

            return f"{date_str} {custom_time_start_str} - {custom_time_end_str}"