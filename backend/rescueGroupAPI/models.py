from django.db import models
from django.contrib.auth.models import User

class Bookmark(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='bookmarks')
    bookmarks = models.IntegerField(null=True, blank=True)