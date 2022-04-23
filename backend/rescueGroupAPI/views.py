from django.shortcuts import render
from rest_framework import viewsets
from django.http import HttpResponse
import json
import requests

rescueGroupURL = 'http://api.rescuegroups.org/v5'
rescueGroupApiKey = 'iabkil4W'

def petlistCall(request):
    headers_dict = {
        'Authorization': rescueGroupApiKey
    }
    response = requests.get(f'{rescueGroupURL}/public/animals/search/available/dogs/', headers=headers_dict)
    data = response.json()
    return HttpResponse(json.dumps(data))


