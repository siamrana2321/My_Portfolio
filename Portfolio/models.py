from django.db import models

# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=254)
    message = models.CharField(max_length=1000)

    def __str__(self):
        return self.name

class Certificates(models.Model):
    Certificates_name = models.CharField(max_length=100)
    Certificates_image = models.ImageField(upload_to="Portfolio/images/Certificates", default="")

    def __str__(self):
        return self.Certificates_name
        
class Works(models.Model):
    Works_name = models.CharField(max_length=100)
    Works_image = models.ImageField(upload_to="Portfolio/images/Works", default="")
    Works_visit_url = models.URLField(blank=True)
    Works_source_url = models.URLField(blank=True)

    def __str__(self):
        return self.Works_name
