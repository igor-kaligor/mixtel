#from django.shortcuts import render
from rest_framework import viewsets
from .models import Produto
from .serializers import ProdutoSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter


class ProdutoViewSet(viewsets.ModelViewSet):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer
    filter_backends = [DjangoFilterBackend,SearchFilter]
    filterset_fields = ['categoria','sub_categoria','marca']
    search_fields = ['descricao','categoria','sub_categoria','marca','modelo']
    