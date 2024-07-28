# admin.py


from django.contrib.admin import register
from unfold.admin import ModelAdmin, TabularInline

from .models import News, NewsImage


class NewsImageInline(TabularInline):
    model = NewsImage
    extra = 1  # Количество пустых форм для добавления новых изображений
    fields = ['image']  # Поля, которые будут отображаться в inline форме


@register(News)
class NewsAdmin(ModelAdmin):
    list_display = ('title_ru', 'pub_date', 'contact_info')
    search_fields = ('title_ru', 'content_ru')
    inlines = [NewsImageInline]  # Подключаем inline-модель для дополнительных изображений
