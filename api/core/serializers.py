from rest_framework import serializers
from .models import Produto
class ProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produto
        fields = ('id','descricao','categoria','sub_categoria','marca','modelo','fabricante','sku','custo','valor_venda')