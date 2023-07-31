# Generated by Django 3.2.11 on 2023-05-11 17:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ProjectMedia',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tag', models.CharField(max_length=300)),
                ('image', models.ImageField(blank=True, null=True, upload_to='projectmedia')),
            ],
        ),
    ]
