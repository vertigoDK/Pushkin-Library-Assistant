from django.db import models
from autoslug import AutoSlugField
from django.utils.translation import gettext as _


class News(models.Model):
    title_ru = models.CharField(max_length=255, verbose_name=_('titleRu'), default='')
    title_kz = models.CharField(max_length=255, verbose_name=_('titleKz'), default='')
    title_en = models.CharField(max_length=255, verbose_name=_('titleEn'), default='')
    slug = AutoSlugField(populate_from='title_ru', unique=True, default=None)
    content_ru = models.TextField(verbose_name='Содержание (рус)', blank=True, null=True, default='')
    content_kz = models.TextField(verbose_name='Содержание (каз)', blank=True, null=True, default='')
    content_eng = models.TextField(verbose_name='Содержание (анг)', blank=True, null=True, default='')
    pub_date = models.DateTimeField(auto_now_add=True, verbose_name='Дата публикации')
    main_image = models.ImageField(upload_to='news_images/', blank=True, null=True, verbose_name='Основное изображение', default='')
    contact_info = models.CharField(max_length=100, blank=True, null=True, verbose_name='Контактная информация', default='')
    is_archive = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'
        ordering = ['-pub_date']

    def __str__(self):
        return self.title_ru


class NewsImage(models.Model):
    news = models.ForeignKey(News, related_name='additional_images', on_delete=models.CASCADE, default='')
    image = models.ImageField(upload_to='news_images/', verbose_name='Дополнительное изображение', default=None)

    class Meta:
        verbose_name = 'Дополнительное изображение'
        verbose_name_plural = 'Дополнительные изображения'

    def __str__(self):
        return f"{self.news.title_ru} - Изображение"
