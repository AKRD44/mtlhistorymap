# Generated by Django 3.0 on 2019-12-23 14:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('memories', '0003_memory_zoom'),
    ]

    operations = [
        migrations.AlterField(
            model_name='memory',
            name='heading',
            field=models.FloatField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='memory',
            name='latitude',
            field=models.FloatField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='memory',
            name='longitude',
            field=models.FloatField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='memory',
            name='pitch',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='memory',
            name='zoom',
            field=models.FloatField(blank=True, default=None, null=True),
        ),
    ]
