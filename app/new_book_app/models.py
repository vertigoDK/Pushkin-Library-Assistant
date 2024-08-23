from django.db import models


# Create your models here.


class NewBook(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    description = models.TextField()
    link_to_read = models.URLField(max_length=200, blank=True, null=True)
    cover = models.ImageField(upload_to='cover')

    def __str__(self):
        return f'{self.title} - {self.author}'

    class Meta:
        verbose_name = 'Новая Книга'
        verbose_name_plural = 'Новые Книги'
