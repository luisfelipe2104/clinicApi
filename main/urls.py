from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("create-user/", views.Cadastrar, name="Cadastrar"),
    path("todos-pacientes/", views.TodosPacientes, name="Pacientes"),
    path("login/<str:pk>", views.Login, name="login"),
    path("medicos/", views.Medicos, name="medicos"),
    path("get-medico/<str:pk>", views.getMedico, name="get medico"),
    path("enfermeiros/", views.Enfermeiros, name="enfermeiros"),
    path("get-enfermeiro/<str:pk>", views.getEnfermeiro, name="get enfermeiro"),
    path("marcar-consulta/", views.Consulta, name="consulta"),
    path("todas-consultas/", views.todasConsultas, name="todas consultas"),
    path("minhas-consultas/<str:pk>", views.getConsulta, name="minhas consultas"),
]
