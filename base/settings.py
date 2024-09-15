from django.forms import CharField
from django.utils.translation import gettext_lazy as _
from pathlib import Path
import environ
import os
import copy
from django.conf import global_settings


# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/
# env
env = environ.Env(
    # set casting, default value
    DEBUG=(bool, False)
)

environ.Env.read_env(os.path.join(BASE_DIR, '.env'))

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = env('DEBUG')


ALLOWED_HOSTS = [
    '*',
    '192.168.1.109',
    '127.0.0.1',
    '127.0.0.1:8080',
    'localhost:3000',
]

UNFOLD = {

    "SITE_TITLE": "Admin",
    "SITE_HEADER": "AD",
}

# Application definition
INSTALLED_APPS = [
    # Для админки тема красивая
    "unfold",
    "unfold.contrib.filters",
    "unfold.contrib.forms",
    "unfold.contrib.guardian",
    "unfold.contrib.simple_history",

    "django.contrib.admin",
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'autoslug',
    "compressor",

    'rest_framework',
    'corsheaders',

    'core',

    'app.api',
    'app.chatbot_app.apps.ChatbotAppConfig',
    'app.courses_app.apps.CoursesAppConfig',
    'app.events_app.apps.EventsAppConfig',
    'app.news_app.apps.NewsAppConfig',
    'app.time_app.apps.TimeAppConfig',
    'app.new_book_app.apps.NewBookAppConfig',

]
CORS_ALLOW_ALL_ORIGINS = True
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://194.67.82.220:3000",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:8000",
    "http://127.0.0.1:8000"
]
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    # white noise
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
]

ROOT_URLCONF = 'base.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, "templates/")]
        ,
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'core.context_processors.settings_context',
                'django.template.context_processors.i18n'
            ],
        },
    },
]

WSGI_APPLICATION = 'base.wsgi.application'

# Database
# https://docs.djangoproject.com/en/5.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / env('DATABASE_NAME'),
    }
}

# Password validation
# https://docs.djangoproject.com/en/5.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/5.0/topics/i18n/

LANGUAGE_CODE = 'ru-ru'

TIME_ZONE = 'Etc/GMT+5'

USE_I18N = True
USE_L10N = True
USE_TZ = True

LOCALE_PATHS = (
    os.path.join(BASE_DIR, 'conf/locale'),
)

LANGUAGES = [
    ('en', 'Eng'),
    ('ru', 'Рус'),
    ('kk', 'Қаз'),
]

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/


STATIC_URL = 'static/'
STATICFILES_DIRS = [
    BASE_DIR / "static",
]
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

STORAGES = copy.deepcopy(global_settings.STORAGES)

STORAGES.update(
    {
        "staticfiles": {
            "BACKEND": "whitenoise.storage.CompressedStaticFilesStorage",
        },
    }
)

#
# COMPRESS_ENABLED = True
# COMPRESS_URL = STATIC_URL
# COMPRESS_ROOT = STATIC_ROOT

# Default primary key field type
# https://docs.djangoproject.com/en/5.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

FLOWISE_CHATFLOW = env('FLOWISE_CHATFLOW')
FLOWISE_HOST = env('FLOWISE_HOST')

DEFAULT_BOOKS_PATH = BASE_DIR / 'database/region-passport.txt'

SECURE_HSTS_SECONDS = 31536000  # 1 год (в секундах)
SECURE_HSTS_INCLUDE_SUBDOMAINS = True  # Если хотите включить HSTS для поддоменов
SECURE_HSTS_PRELOAD = True  # Включить поддержку HSTS preload

# SECURE_SSL_REDIRECT = True

SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
