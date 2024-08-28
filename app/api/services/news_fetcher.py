import typing as t
from django.db.models.query import QuerySet
from app.news_app.models import News

class NewsFetcher:
    """
    Класс, благодаря которому чат-бот может рассказать о последних 1-15 новостях.
    """
    
    def __init__(self, news_count: int):
        """
        Args:
            news_count (int): Количество последних новостей, о которых будет знать нейросеть.
        Returns:
            None
        """
        if 0 < news_count <= 15:
            self._news_count = news_count
        else:
            self._news_count = 5
    
    def get_latest_news(self) -> t.List[dict]:
        """
        Получает последние новости в количестве, заданном при инициализации.

        Returns:
             t.List[dict] с последними новостями.
        """
        latest_news = News.objects.order_by('-pub_date').values(
            'title_en',
            'content_eng',
            'pub_date',
            'slug'
        )[:self._news_count]
        
        result: t.List[dict] = list(latest_news)
        
        return result
