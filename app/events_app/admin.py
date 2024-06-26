from unfold.admin import ModelAdmin, TabularInline
from django.contrib.admin import register

from app.events_app.models import Event


@register(Event)
class EventsAdmin(ModelAdmin):
    pass