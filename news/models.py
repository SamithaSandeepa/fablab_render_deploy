from django.db import models

class News(models.Model):
    title = models.CharField(max_length=200)
    summary = models.TextField()
    content = models.JSONField(blank=True, null=True)
    image = models.FileField(upload_to='media/')
    status = models.BooleanField(default=True)
    videos = models.JSONField(null=True, blank=True)

    def __str__(self):
        return self.title
