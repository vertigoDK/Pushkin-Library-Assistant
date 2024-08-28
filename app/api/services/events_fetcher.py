import typing as t
from app.events_app.models import Event
from django.db.models.query import QuerySet


def get_events() -> t.List[dict]:
    events = Event.objects.order_by('-date_change').values_list(
        'title_event_en',
        'content_event_en',
        'location',
        'date_change',
        'start_time',
        'end_time',
    )
    
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
