import math
from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Books
from django.http import JsonResponse
from django.forms.models import model_to_dict
from .serializers import BooksSerializer
from django.core.paginator import Paginator

from .recommender import *

BOOKS_PER_PAGE=16
class TitlesView(APIView):
    def post(self,request):
        page=request.data['page']
        author = request.data['author']
        title = request.data['title']
        genres=request.data['genres']
        order=request.data['order']

        results=Books.objects.filter(author__icontains=author,title__icontains=title,genres__contains=genres).order_by(order)
        paginator = Paginator(results,BOOKS_PER_PAGE)
        page_values=list(paginator.get_page(page).object_list.values())
        payload = {
            'page':{ 'pageMax':math.ceil(len(results)/BOOKS_PER_PAGE)
            },
            'data': list(page_values)
        }
        return JsonResponse(payload)

class BookView(APIView):
    def post(self,request):
        this_id = request.data['id']
        return JsonResponse(model_to_dict(Books.objects.get(id=this_id)))

class FeaturedView(APIView):
    def post(self,request):
        titles=request.data['titles']
        results = [model_to_dict(Books.objects.get(title=title)) for title in titles]
        return JsonResponse({'data':results})
class RecommendationsView(APIView):
    def post(self,request):
        print(request.data)
        
        results=getRecommendations(request.data)
        print(results)

        return JsonResponse(results)
    
class CartView(APIView):
    def post(self,request):
        return Response()
# Create your views here.
