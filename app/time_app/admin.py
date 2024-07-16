from django.contrib.admin import register
from unfold.admin import ModelAdmin
from .models import TimeModel


# Register your models here.


@register(TimeModel)
class Time(ModelAdmin):
    ...
