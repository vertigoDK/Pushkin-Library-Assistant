# Generated by Django 5.0.6 on 2024-08-18 04:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('new_book_app', '0002_newbook_slug'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='newbook',
            name='slug',
        ),
    ]
