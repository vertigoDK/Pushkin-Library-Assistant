"""
Модуль содержит модель данных для курса.

Модель `Course` представляет курс и включает следующие поля:
- `course_title_ru`: Название курса на русском языке.
- `course_title_kz`: Название курса на казахском языке.
- `course_title_en`: Название курса на английском языке.
- `image`: Изображение курса.
- `url`: URL-адрес курса.
- `start_date`: Дата начала курса.

Класс `Course` также переопределяет метод `__str__`, чтобы возвращать название курса на русском языке.

Метаданные класса:
- `verbose_name`: Название модели в единственном числе.
- `verbose_name_plural`: Название модели во множественном числе.
- `ordering`: Порядок сортировки объектов модели (по убыванию даты начала курса).
"""

from django.db import models

class Course(models.Model):
    course_title_ru = models.CharField(max_length=100, verbose_name='Название на русском')
    course_title_kz = models.CharField(max_length=100, verbose_name='Название на казахском')
    course_title_en = models.CharField(max_length=100, verbose_name='Название на английском')
    image = models.ImageField(upload_to='course_images/', verbose_name='Изображение курса', blank=True, null=True)
    url = models.URLField(max_length=200, blank=True, null=True, verbose_name='URL')
    start_date = models.DateField(auto_now_add=True, verbose_name='Дата начала')

    def __str__(self) -> str:
        """
        Возвращает название курса на русском языке.

        Возвращает:
            str: Название курса на русском языке.
        """
        return self.course_title_ru

    class Meta:
        verbose_name = 'Курс'
        verbose_name_plural = 'Курсы'
        ordering = ['-start_date']
