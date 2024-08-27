from django.apps import AppConfig


class NewsAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'app.news_app'
    verbose_name = "Приложение для Новостей"
