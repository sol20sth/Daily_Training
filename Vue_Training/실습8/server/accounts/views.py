from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer

from .models import User
from django.contrib.auth.hashers import make_password


@api_view(['POST', 'GET'])
def signup(request):
    serializer = UserSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)  # raise_exception=True로 설정하여 유효성 검사 예외 발생
    
    password = serializer.validated_data['password']  # validated_data를 사용하여 유효한 데이터 가져오기
    confirm_password = serializer.validated_data['confirm_password']
    
    if password != confirm_password:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
    user = User(
        username=serializer.validated_data['username'],
        password=make_password(password),
    )
    user.save()
    
    return Response(serializer.data, status=status.HTTP_201_CREATED)
