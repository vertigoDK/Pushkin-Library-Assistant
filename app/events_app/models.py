from django.db import models
from django.utils.formats import date_format


class Event(models.Model):
    title_event_ru = models.CharField(max_length=100, verbose_name='Заголовок на русском языке')
    title_event_kz = models.CharField(max_length=100, verbose_name='Заголовок на казахском языке')
    title_event_en = models.CharField(max_length=100, verbose_name='Заголовок на английском языке')

    content_event_ru = models.TextField(verbose_name='Контент на русском языке')
    content_event_kz = models.TextField(verbose_name='Контент на казахском языке')
    content_event_en = models.TextField(verbose_name='Контент на английском языке')

    location = models.CharField(max_length=200, verbose_name='Место проведения')
    date_change = models.DateField(verbose_name='Дата проведения')
    start_time = models.TimeField(verbose_name='Время начала')
    end_time = models.TimeField(verbose_name='Время окончания')
    image = models.ImageField(upload_to='event_images/', verbose_name='Изображение события', blank=True, null=True)

    class Meta:
        verbose_name = 'Событие'
        verbose_name_plural = 'Все События'
        ordering = ('date_change', 'start_time')

    def __str__(self):
        # Используем встроенную функцию date_format для форматирования даты в соответствии с локалью
        date_str = date_format(self.date_change, format='j b ', use_l10n=True)
        time_format = '%H:%M'  # Формат времени в 24-часовом формате (часы:минуты)

        start_time = self.start_time.strftime(time_format)
        end_time = self.end_time.strftime(time_format)

        return f"{self.title_event_ru} | {date_str} | {start_time} - {end_time}"
