"""
Этот модуль предоставляет функциональность для получения последних событий.
"""

import typing as t
from django.db.models.query import QuerySet
from app.events_app.models import Event

def get_events() -> t.List[dict]:
    """
    Возвращает список последних событий.

    События сортируются по дате изменения (по убыванию) и возвращаются в виде списка словарей,
    содержащих основные данные о событии.

    Returns:
        t.List[dict]: Список словарей, содержащих информацию о событиях.
    """
    # Получаем последние события из базы данных, отсортированные по дате изменения
    events: QuerySet = Event.objects.order_by('-date_change').values_list(
        'title_event_en',
        'content_event_en',
        'location',
        'date_change',
        'start_time',
        'end_time',
    )

    # Преобразуем результат в список словарей
    result_events: t.List[dict] = [
        {
            "title_event_en": event[0],
            "content_event_en": event[1],
            "location": event[2],
            "date": event[3],
            "start_time": event[4],
            "end_time": event[5],
        }
        for event in events
    ]
    
    return result_events
