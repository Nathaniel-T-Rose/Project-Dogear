from django.urls import path
from .views import *

urlpatterns = [
    path('books',TitlesView.as_view(),name='titles'),
    path('book',BookView.as_view(),name='book')
]

