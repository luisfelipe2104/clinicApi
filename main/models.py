from django.db import models
from django.contrib.auth import get_user_model
import uuid
from datetime import datetime

# User = get_user_model()

# Create your models here.

class Paciente(models.Model):
    # usuario = models.CharField(max_length=30, null=False)
    email = models.EmailField(max_length=254, null=False, unique=True)
    senha = models.CharField(max_length=30, null=False)
    nome = models.CharField(max_length=100, null=False)
    cpf = models.CharField(max_length=11, null=False)
    telefone = models.CharField(max_length=20)

    def __str__(self):
        return self.nome

class Hospital(models.Model):
    nome = models.CharField(max_length=50, null=False)
    cnpj = models.IntegerField(null=False)
    endereco = models.CharField(max_length=50, null=False)

class Medico(models.Model):
    # usuario = models.CharField(max_length=30, null=False)
    email = models.EmailField(max_length=254, null=False)
    senha = models.CharField(max_length=30, null=False)
    nome = models.CharField(max_length=100, null=False)
    crm = models.CharField(max_length=11, null=False)
    telefone = models.CharField(max_length=20)
    hospital = models.ForeignKey(Hospital, on_delete=models.CASCADE, null=False)

    def __str__(self):
        return self.nome

class Enfermeiro(models.Model):
    # usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    # usuario = models.CharField(max_length=30, null=False)
    email = models.EmailField(max_length=254, null=False)
    senha = models.CharField(max_length=30, null=False)
    nome = models.CharField(max_length=100, null=False)
    coren = models.CharField(max_length=11, null=False)
    telefone = models.CharField(max_length=20)
    hospital = models.ForeignKey(Hospital, on_delete=models.CASCADE, null=False)

    def __str__(self):
        return self.nome

class Consulta(models.Model):
    relatorio = models.TextField(null=False)
    horario_consulta = models.CharField(max_length=30, null=False)
    endereco = models.CharField(max_length=50, null=False)
    sala = models.IntegerField(null=False)
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE, null=False)
    medico = models.ForeignKey(Medico, on_delete=models.CASCADE, null=False)
    enfermeiro = models.ForeignKey(Enfermeiro, on_delete=models.CASCADE)

    def __str__(self):
        return self.relatorio

class Medicamento(models.Model):
    precricaoMedica = models.TextField(null=False)
    consultaMedicamento = models.ForeignKey(Consulta, on_delete=models.CASCADE)

class Sala(models.Model):
    tipoSala = models.CharField(max_length=30, null=False)
    consulta_sala = models.ForeignKey(Consulta, related_name="consultaSala", on_delete=models.CASCADE)
