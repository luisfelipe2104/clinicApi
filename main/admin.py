from django.contrib import admin
from . import models

# Register your models here.
admin.site.register(models.Medico)
admin.site.register(models.Enfermeiro)
admin.site.register(models.Hospital)
admin.site.register(models.Consulta)
