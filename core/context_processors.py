from datetime import datetime

from django.conf import settings


def settings_context(request):
    return {
        'CHATFLOW_ID': settings.FLOWISE_CHATFLOW,
        'API_HOST': settings.FLOWISE_HOST,
    }


def current_year(request):
    """Возвращает текущий год для использования во всех шаблонах"""
    return {
        'current_year': datetime.now().year
    }
