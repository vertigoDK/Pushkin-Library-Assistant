from django.conf import settings

def settings_context(request):
    return {
        'CHATFLOW_ID': settings.FLOWISE_CHATFLOW,
        'API_HOST': settings.FLOWISE_HOST,
    }
