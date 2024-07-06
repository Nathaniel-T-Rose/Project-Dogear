from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Books
from django.http import JsonResponse
from .serializers import BooksSerializer

class TitlesView(APIView):
    def post(self,request):
        print(request.data)
        author = request.data['author']
        title = request.data['title']
        genres=request.data['genres']
        #idMax=request.data['numMax']
        results=Books.objects.filter(author__icontains=author,title__icontains=title,genres__contains=genres).values()
        return JsonResponse(data=list(results),safe=False)
    

class RecommendationsView(APIView):
    def post(self,request):
        return Response()
    
class CartView(APIView):
    def post(self,request):
        return Response()
# Create your views here.
