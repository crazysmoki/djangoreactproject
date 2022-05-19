from rest_framework import serializers
from .models import Company

class CompanySerializer(serializers.ModelSerializer):

    class Meta:
        model = Company
        fields = ('pk', 'company_name', 'inn_company', 'chief', 'phone_company')
