# Generated by Django 4.1.7 on 2023-04-06 06:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projectMakandura', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='projectmakandura',
            name='content_project_m',
        ),
        migrations.RemoveField(
            model_name='projectmakandura',
            name='image_project_m',
        ),
        migrations.AlterField(
            model_name='projectmakandura',
            name='summery_project_m',
            field=models.CharField(max_length=200),
        ),
    ]
