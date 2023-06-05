from django.shortcuts import render

# Create your views here.
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import News
from .serializers import NewsSerializer

class NewsList(generics.ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    permission_classes = [AllowAny]

class NewsDetail(generics.RetrieveAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    permission_classes = [AllowAny]

class NewsCreate(generics.CreateAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

# class NewsCreate(generics.CreateAPIView):
#     queryset = News.objects.all()
#     serializer_class = NewsSerializer
#     permission_classes = [AllowAny]
#     print('NewsCreate')

    
#     def perform_create(self, serializer):

#         image_file = self.request.FILES.get('image')
#         if image_file:
#             print('Image file found:', image_file.name)
#             file_path = default_storage.save('images/' + image_file.name, ContentFile(image_file.read()))
#             image_url = default_storage.url(file_path)
#             print('Image saved to:', image_url)
#             serializer.save(image=image_url)
#         else:
#             print('No image file found')
#             serializer.save()


class NewsUpdate(generics.UpdateAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

    def get_permissions(self):
        if self.request.method == 'PATCH':
            self.permission_classes = [IsAuthenticated]
        return super().get_permissions()

class NewsDelete(generics.DestroyAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer


    
