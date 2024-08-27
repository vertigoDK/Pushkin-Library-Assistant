from django.apps import AppConfig


class TimeAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'app.time_app'
    verbose_name = 'Приложение для Изменения Времени Работ'
