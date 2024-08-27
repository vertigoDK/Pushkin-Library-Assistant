from django.apps import AppConfig


class EventsAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'app.events_app'

    verbose_name = "Приложение для Событий"
