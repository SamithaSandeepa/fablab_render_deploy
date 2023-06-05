from rest_framework import serializers
from .models import projectMakandura

class projectMakanduraSerializer(serializers.ModelSerializer):
    class Meta:
        model = projectMakandura
        fields = '__all__'