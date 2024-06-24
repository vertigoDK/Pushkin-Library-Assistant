from django.db import models
from autoslug import AutoSlugField
from django.utils.translation import gettext as _


class News(models.Model):
    title = models.CharField(max_length=255, verbose_name=_('title'))
    slug = AutoSlugField(populate_from='title', unique=True)
    content_ru = models.TextField(verbose_name='Содержание (рус)', blank=True, null=True)
    content_kz = models.TextField(verbose_name='Содержание (каз)', blank=True, null=True)
    content_eng = models.TextField(verbose_name='Содержание (анг)', blank=True, null=True)
    pub_date = models.DateTimeField(auto_now_add=True, verbose_name='Дата публикации')
    main_image = models.ImageField(upload_to='news_images/', blank=True, null=True, verbose_name='Основное изображение')
    contact_info = models.CharField(max_length=100, blank=True, null=True, verbose_name='Контактная информация')

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'
        ordering = ['-pub_date']

    def __str__(self):
        return self.title


class NewsImage(models.Model):
    news = models.ForeignKey(News, related_name='additional_images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='news_images/', verbose_name='Дополнительное изображение')

    class Meta:
        verbose_name = 'Дополнительное изображение'
        verbose_name_plural = 'Дополнительные изображения'

    def __str__(self):
        return f"{self.news.title} - Изображение"
