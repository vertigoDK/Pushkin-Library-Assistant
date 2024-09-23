from unfold.admin import ModelAdmin
from django.contrib.admin import register

from .models import Course


@register(Course)
class EventsAdmin(ModelAdmin):
    pass
