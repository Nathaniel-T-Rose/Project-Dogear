from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Books
from .serializers import BooksSerializer

class TitlesView(APIView):
    def get(self,request):
        author = request.data['author']
        title = request.data['title']
        genres=request.data['genres']
        titles=Books.objects.filter(author_icontains=author,title_icontains=title, genres_contains=genres)
        return Response(
            {'success':True},
            data=titles,
            status=200
        )
    

class RecommendationsView(APIView):
    def post(self,request):
        return Response()
    
class CartView(APIView):
    def post(self,request):
        return Response()
# Create your views here.
