from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from . import models
from . import serializers

# Create your views here.
@api_view(['POST'])
def Cadastrar(request):
    serializer = serializers.PacienteSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['GET'])
def TodosPacientes(request):
    pacientes = models.Paciente.objects.all()

    serializer = serializers.PacienteSerializer(pacientes, many=True)


    return Response(serializer.data)

@api_view(['GET'])
def Login(request, pk):
    paciente = models.Paciente.objects.get(email=pk)

    serializer = serializers.PacienteSerializer(paciente, many=False)

    return Response(serializer.data)

@api_view(['POST'])
def Consulta(request):
    serializer = serializers.ConsultaSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['GET'])
def TodasConsultas(request):
    consultas = models.Consulta.objects.all()

    serializer = serializers.PacienteSerializer(consultas, many=True)

    return Response(serializer.data)

@api_view(['GET'])
def Medicos(request):
    medicos = models.Medico.objects.all()
    serializer = serializers.MedicoSerializer(medicos, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getMedico(request, pk):
    medico = models.Medico.objects.get(id=pk)
    serializer = serializers.MedicoSerializer(medico, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def Enfermeiros(request):
    enfermeiros = models.Enfermeiro.objects.all()
    serializer = serializers.EnfermeiroSerializer(enfermeiros, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getEnfermeiro(request, pk):
    enfermeiro = models.Enfermeiro.objects.get(id=pk)
    serializer = serializers.EnfermeiroSerializer(enfermeiro, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def todasConsultas(request):
    consultas = models.Consulta.objects.all()

    serializer = serializers.ConsultaSerializer(consultas, many=True)

    return Response(serializer.data)

@api_view(['GET'])
def getConsulta(request, pk):
    consultas = models.Consulta.objects.filter(paciente=pk)

    serializer = serializers.ConsultaSerializer(consultas, many=True)

    return Response(serializer.data)

def home(request):
    return render(request, 'index.html')
