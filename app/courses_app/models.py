from django.db import models


class Course(models.Model):
    course_title_ru = models.CharField(max_length=100, verbose_name='Название на русском')
    course_title_kz = models.CharField(max_length=100, verbose_name='Название на казахском')
    course_title_en = models.CharField(max_length=100, verbose_name='Название на английском')
    image = models.ImageField(upload_to='course_images/', verbose_name='Изображение курса', blank=True, null=True)
    url = models.URLField(max_length=200, blank=True, null=True, verbose_name='URL')
    start_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.course_title_ru

    class Meta:
        verbose_name = 'Курс'
        verbose_name_plural = 'Курсы'
        ordering = ['-start_date']
