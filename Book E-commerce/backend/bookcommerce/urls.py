from django.urls import path
from .views import TitlesView

urlpatterns = [
    path('books',TitlesView.as_view(),name='titles')
]

