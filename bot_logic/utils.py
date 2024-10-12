import uuid
from django.http import HttpRequest

def get_user_uuid(request: HttpRequest) -> str:
    if 'user_uuid' not in request.session:
        request.session['user_uuid'] = str(uuid.uuid4())  # Генерация UUID и сохранение в сессии
    return request.session['user_uuid']