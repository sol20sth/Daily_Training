from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer
# from rest_framework.decorators import permissions
# from rest_framework.permissions import IsAuthenticated
from .models import User
from django.contrib.auth.hashers import make_password


@api_view(['POST', 'GET'])
# @permissions([IsAuthenticated])
def signup(request):
    if request.data['password1'] == request.data['password2']:
        username =  request.data['username']
        password = request.data['password1']
        data2 = {'username': username, 'password': password}
        serializer = UserSerializer(data=data2)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            print(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
