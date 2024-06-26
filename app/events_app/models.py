from django.db import models


class Event(models.Model):
    title_event_ru = models.CharField(max_length=100, verbose_name='Заголовок на русском языке')
    title_event_kz = models.CharField(max_length=100, verbose_name='Заголовок на казахском языке')
    title_event_en = models.CharField(max_length=100, verbose_name='Заголовок на английском языке')

    content_event_ru = models.TextField(verbose_name='Контент на русском языке')
    content_event_kz = models.TextField(verbose_name='Контент на казахском языке')
    content_event_en = models.TextField(verbose_name='Контент на английском языке')

    location = models.CharField(max_length=200, verbose_name='Место проведения')
    date = models.DateField(verbose_name='Дата проведения')
    start_time = models.TimeField(verbose_name='Время начала')
    end_time = models.TimeField(verbose_name='Время окончания')
    image = models.ImageField(upload_to='event_images/', verbose_name='Изображение события', blank=True, null=True)

    def __str__(self):
        return self.title_event_ru

    class Meta:
        verbose_name = 'Событие'
        verbose_name_plural = 'События'
