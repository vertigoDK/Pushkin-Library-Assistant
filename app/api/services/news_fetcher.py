import typing as t
from django.db.models.query import QuerySet
from app.news_app.models import News

class NewsFetcher:
    """
    Класс, благодаря которому чат-бот может рассказать о последних 1-5 новостях.
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
    
    def _get_latest_news(self) -> t.List[t.List[t.Any]]:
        """
        Получает последние новости в количестве, заданном при инициализации.

        Returns:
            QuerySet[News]: QuerySet с последними новостями.
        """
        latest_news: QuerySet[News] = News.objects.order_by('-pub_date')[:self._news_count]
        result: t.List[t.List[t.Any]] = []
        for news in latest_news:
            temp_result: t.List[t.Any] = []
            temp_result.append(news.title_en)
            temp_result.append(news.content_eng)
            temp_result.append(news.pub_date)
            temp_result.append(news.slug)

            result.append(temp_result)
        
        return result
