from .serializers import *
from .view_auth import *
from rest_framework.viewsets import ModelViewSet
from django.http import HttpResponse
import json
import requests

class BookmarkView(ModelViewSet):
    queryset = Bookmark.objects.all()
    serializer_class = BookmarkSerializer

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

rescueGroupURL = 'https://api.rescuegroups.org/v5'
rescueGroupApiKey = 'iabkil4W'
headers_dict = {
        'Authorization': rescueGroupApiKey
    }

def userCall(request, user_name):
    return User.objects.get(username=user_name)

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
        }
    }
    if postal_code != 0:
        json_dict["data"]["filterRadius"] = {
            "miles": 50,
            "postalcode": int(postal_code)
        }
    print(json_dict)
    response = requests.post(f'{rescueGroupURL}/public/animals/search/available/{species}/haspic?sort=animals.id&limit={limit}', headers=headers_dict, json=json_dict)
    data = response.json()
    return HttpResponse(json.dumps(data))

def callOrg(request, org_id):
    response = requests.get(f'{rescueGroupURL}/public/orgs/{org_id}', headers=headers_dict)
    data = response.json()
    return HttpResponse(json.dumps(data))

def animalListCall(request):
    response = requests.get(f'{rescueGroupURL}/public/animals/species?limit=41', headers=headers_dict)
    data = response.json()
    return HttpResponse(json.dumps(data))

def callTest(request):
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
                    "criteria": "Dog"
                }            
            ],
            "filterRadius":
                {
                    "miles": 25,
                    "postalcode": 60532
                }
        }
    }
    response = requests.post(f'{rescueGroupURL}/public/animals/search/available/haspic', headers=headers_dict, json=json_dict)
    data = response.json()
    return HttpResponse(json.dumps(data))

def callBookmarks(request, user_name):
    print('this is bookmarks call')
    user_data = User.objects.get(username=user_name)
    print(user_data)
    bookmark_data = user_data.bookmarks
    print(bookmark_data)
    return HttpResponse(bookmark_data)