from rest_framework import serializers
from .models import Books

class BooksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Books
        fields = ['id','title','author','description','genres','avg_rating','num_ratings','url','image','price','stock']
