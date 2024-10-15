from datetime import datetime

from django.utils import timezone
from django.views.generic import ListView, DetailView

from .models import News, NewsImage


class NewsListView(ListView):
    model = News
    template_name = 'news_list.html'
    paginate_by = 30
    context_object_name = 'news'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["now"] = timezone.now()
        context["show_chatbot"] = True
        return context

    def get_queryset(self):
        # Добавляем сортировку по полю, например по id
        return News.objects.all().order_by('-pub_date')


class NewsDetailView(DetailView):
    model = News
    template_name = 'news_detail.html'
    context_object_name = 'news_item'
    slug_field = 'slug'

    def get_context_data(self, **kwargs):
        # Get the default context from the parent class
        context = super().get_context_data(**kwargs)

        # Get the news item using the current object
        news_item = self.get_object()

        # Fetch related news images
        news_images = NewsImage.objects.filter(news=news_item)

        # Add extra context
        context['news_images'] = news_images
        context['show_chatbot'] = True
        context['current_year'] = datetime.now().year
        context['now'] = timezone.now()

        return context
