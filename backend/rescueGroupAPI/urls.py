from rest_framework import routers
from django.urls import path, include
from .views import *

r = routers.DefaultRouter()
r.register('users', UserViewSet, basename='user')

urlpatterns = [
    path('', include(r.urls)),
    path('login/', handle_login),
    path('logout/', handle_logout),
    path('adoptees/', adopteesCall),
    path('doggo/<int:doggo_id>/', doggoCall),
]