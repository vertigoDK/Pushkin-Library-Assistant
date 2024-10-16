# Generated by Django 5.0.6 on 2024-08-09 11:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='NewBook',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('author', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('link_to_read', models.URLField(blank=True, null=True)),
                ('cover', models.ImageField(upload_to='cover')),
            ],
            options={
                'verbose_name': 'New Book',
                'verbose_name_plural': 'New Books',
            },
        ),
    ]
