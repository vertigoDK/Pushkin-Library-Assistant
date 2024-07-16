from django.contrib.admin import register
from unfold.admin import ModelAdmin

from app.new_book_app.models import NewBook


# Register your models here.


@register(NewBook)
class NewBookAdmin(ModelAdmin):
    pass
