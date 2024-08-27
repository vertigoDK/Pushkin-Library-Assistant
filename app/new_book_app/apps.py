from django.apps import AppConfig


class NewBookAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'app.new_book_app'
    verbose_name = "Приложение для Новых Книг"


