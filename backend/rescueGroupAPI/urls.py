from rest_framework import routers
from django.urls import path, include
from .views import *

r = routers.DefaultRouter()
r.register('users', UserViewSet, basename='user')
r.register('bookmarks', BookmarkView, basename='bookmark')

urlpatterns = [
    path('', include(r.urls)),
    path('login/', handle_login),
    path('logout/', handle_logout),
    path('adoptees/', adopteesCall),
    path('doggo/<int:doggo_id>/', doggoCall),
    path('animal/<str:species>/<int:limit>/<int:postal_code>/', animalCall),
    path('test/', callTest),
    path('orgs/<int:org_id>/', callOrg),
    path('animal_list/', animalListCall),
    path('user_data/<str:user_name>/', userCall),
    path('bookmark_data/<str:user_name>/', callBookmarks),
]