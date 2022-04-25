from .serializers import *
from .view_auth import *
from rest_framework.viewsets import ModelViewSet
from django.http import HttpResponse
import json
import requests

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

rescueGroupURL = 'http://api.rescuegroups.org/v5'
rescueGroupApiKey = 'iabkil4W'
headers_dict = {
        'Authorization': rescueGroupApiKey
    }

def adopteesCall(request):
    response = requests.get(f'{rescueGroupURL}/public/animals/search/available/dogs/?limit=250', headers=headers_dict)  
    data = response.json()
    return HttpResponse(json.dumps(data))

def doggoCall(request, doggo_id):
    response = requests.get(f'{rescueGroupURL}/public/animals/{doggo_id}/', headers=headers_dict)
    data = response.json()
    return HttpResponse(json.dumps(data))