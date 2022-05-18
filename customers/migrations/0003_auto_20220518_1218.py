# Generated by Django 3.1.14 on 2022-05-18 12:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customers', '0002_customers'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='chief',
            field=models.CharField(max_length=255, null=True, verbose_name='Chief'),
        ),
        migrations.AddField(
            model_name='customer',
            name='company',
            field=models.CharField(max_length=255, null=True, verbose_name='Company'),
        ),

        migrations.AlterField(
            model_name='customer',
            name='inn_company',
            field=models.CharField(max_length=20, null=True),
        ),

        migrations.AddField(
            model_name='customer',
            name='phone_company',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='customer',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]