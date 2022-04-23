from rest_framework import routers
from django.urls import path, include
from .views import *

r = routers.DefaultRouter()
# r.register('petlist', petlistCall, basename='petlist')

urlpatterns = [
    path('', include(r.urls)),
    path('petlist/', petlistCall)
]