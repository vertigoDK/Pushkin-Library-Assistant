# Generated by Django 5.0.6 on 2024-09-05 16:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('events_app', '0004_rename_date_event_date_change'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='event',
            options={'ordering': ('date_change', 'start_time'), 'verbose_name': 'Событие', 'verbose_name_plural': 'Все События'},
        ),
    ]
