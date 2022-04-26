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

def animalCall(request, species, limit, postal_code):
    print(species, limit, postal_code)
    json_dict = {
        "data": {
            "filters": [
                {
                    "fieldName": "statuses.name",
                    "operation": "equals",
                    "criteria": "Available"
                },
                {
                    "fieldName": "species.singular",
                    "operation": "equals",
                    "criteria": "Cat"
                }            
            ]
        }
    }
    if postal_code != 0:
        json_dict["data"]["filterRadius"] = {
            "miles": 50,
            "postalcode": int(postal_code)
        }
    print(json_dict)
    response = requests.post(f'{rescueGroupURL}/public/animals/search/haspic?sort=random&limit={limit}', headers=headers_dict, json=json_dict)
    data = response.json()
    return HttpResponse(json.dumps(data))