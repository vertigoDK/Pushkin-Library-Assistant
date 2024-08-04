# Generated by Django 5.0.6 on 2024-07-16 17:59

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('time_app', '0004_alter_timemodel_options'),
    ]

    operations = [
        migrations.AlterField(
            model_name='timemodel',
            name='custom_time_start',
            field=models.TimeField(blank=True, default=datetime.time(8, 0), verbose_name='Измененное время начала работы'),
        ),
    ]