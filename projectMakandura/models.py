from django.db import models

# Create your models here.
class projectMakandura(models.Model):
    title_project_m = models.CharField(max_length=200)
    summery_project_m = models.TextField()
    content_project_m = models.JSONField()
    image_project_m = models.CharField(max_length=200, null=True)
    status = models.BooleanField(default=True)
    videos = models.JSONField(null=True, blank=True)

    def __str__(self):
        return self.title_project_m
