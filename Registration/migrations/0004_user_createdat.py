# Generated by Django 3.0.7 on 2020-07-16 09:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Registration', '0003_auto_20200716_0951'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='createdAt',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]
