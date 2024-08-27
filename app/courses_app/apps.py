from django.apps import AppConfig


class CoursesAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'app.courses_app'

    verbose_name = "Приложение для Курсов"
