
from django.contrib import admin
from .models import News, NewsImage

class NewsImageInline(admin.TabularInline):
    model = NewsImage
    extra = 1  # Количество пустых форм для добавления новых изображений
    fields = ['image']  # Поля, которые будут отображаться в inline форме

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'pub_date', 'contact_info')
    search_fields = ('title', 'content')
    inlines = [NewsImageInline]  # Подключаем inline-модель для дополнительных изображений

