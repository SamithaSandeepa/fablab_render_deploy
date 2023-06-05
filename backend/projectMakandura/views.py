from django.shortcuts import render
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from .models import projectMakandura
from .serializers import projectMakanduraSerializer

class projectMakanduraList(generics.ListAPIView):
    queryset = projectMakandura.objects.all()
    serializer_class = projectMakanduraSerializer
    permission_classes = [AllowAny]

class projectMakanduraDetail(generics.RetrieveAPIView):
    queryset = projectMakandura.objects.all()
    serializer_class = projectMakanduraSerializer
    permission_classes = [AllowAny]

class projectMakanduraCreate(generics.CreateAPIView):
    queryset = projectMakandura.objects.all()
    serializer_class = projectMakanduraSerializer

class projectMakanduraUpdate(generics.UpdateAPIView):
    queryset = projectMakandura.objects.all()
    serializer_class = projectMakanduraSerializer
    def get_permissions(self):
        if self.request.method == 'PATCH':
            self.permission_classes = [IsAuthenticated]
        return super().get_permissions()

class projectMakanduraDelete(generics.DestroyAPIView):
    queryset = projectMakandura.objects.all()
    serializer_class = projectMakanduraSerializer

