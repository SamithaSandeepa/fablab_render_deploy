from django.db import models

class Event(models.Model):
    title_pastevent = models.CharField(max_length=200)
    summery_pastevent = models.TextField()
    content_pastevent = models.JSONField()
    image_project_m = models.TextField()
    status = models.BooleanField(default=True)
    videos = models.JSONField(null=True, blank=True)

    def __str__(self):
        return self.title_pastevent
