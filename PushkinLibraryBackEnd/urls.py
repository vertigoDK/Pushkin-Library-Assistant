from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('news_app.urls')),
    path('dosai/', include('chatbot_app.urls')),
    path('events/', include('events_app.urls')),
    path('courses/', include('courses_app.urls')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
