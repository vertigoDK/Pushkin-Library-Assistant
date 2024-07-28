from django.db import models


# Create your models here.


class NewBook(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    description = models.TextField()
    cover = models.ImageField(upload_to='cover')

    class Meta:
        verbose_name = 'New Book'
        verbose_name_plural = 'New Books'

    def __str__(self):
        return f'{self.title} - {self.author}'
