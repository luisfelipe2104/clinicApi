from rest_framework import serializers
from . import models

class PacienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Paciente
        fields = '__all__'

class ConsultaSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Consulta
        fields = '__all__'

class MedicoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Medico
        fields = '__all__'

class EnfermeiroSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Enfermeiro
        fields = '__all__'

class HospitalSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Hospital
        fields = '__all__'
