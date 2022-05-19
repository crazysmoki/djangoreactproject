from django.db import models

class Company(models.Model):
	company_name = models.CharField("Company Name", max_length=255, null=True)
	inn_company = models.CharField(max_length=20, null=True)
	chief = models.CharField("Chief", max_length=255, null=True)
	phone_company = models.CharField(max_length=20, null=True)
	
	def __str__(self):
		return self.first_name
	
# Create your models here.
