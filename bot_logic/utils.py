import uuid
from django.http import HttpRequest
def get_user_uuid(request: HttpRequest) -> str:
    if 'user_uuid' not in request.session:
        user_uuid = str(uuid.uuid4())
        request.session['user_uuid'] = user_uuid
        request.session.save()  # Явно сохраняем сессию
        print(f'Новый UUID создан и сохранён: {user_uuid}')
    else:
        print(f'UUID найден в сессии: {request.session["user_uuid"]}')
    return request.session['user_uuid']
