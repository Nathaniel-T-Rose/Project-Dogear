from django.db import models
from django.contrib.postgres.fields import ArrayField
# Create your models here.
class Books(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.TextField()
    author = models.TextField()
    description = models.TextField()
    genres = ArrayField(models.TextField())
    avg_rating = models.FloatField()
    num_ratings = models.TextField()
    url = models.TextField()
    image = models.TextField()
    price = models.FloatField()
    stock = models.IntegerField()

