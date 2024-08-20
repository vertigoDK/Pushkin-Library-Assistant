# Generated by Django 5.0.6 on 2024-08-18 04:46

import autoslug.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('news_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='slug',
            field=autoslug.fields.AutoSlugField(editable=False, populate_from='title_ru', unique=True),
        ),
    ]
