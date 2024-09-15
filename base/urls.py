from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.shortcuts import render
from django.urls import path, include
from django.conf.urls import handler404, handler403, handler500

urlpatterns = [
    path('admin/', admin.site.urls),
    path('news/', include('app.news_app.urls')),
    path('dosai/', include('app.chatbot_app.urls')),
    path('events/', include('app.events_app.urls')),
    path('courses/', include('app.courses_app.urls')),
    path('api/', include('app.api.urls')),
    # path('search_books/', include("app.book_search_app.urls")),
    path('i18n/', include('django.conf.urls.i18n')),
    path('', include('core.urls')),


]

handler404 = "core.views.handler404"
handler403 = "core.views.handler403"
handler500 = "core.views.handler500"

if settings.DEBUG:
    urlpatterns.append(*static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT))
