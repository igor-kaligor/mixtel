from django.db import models

class Produto(models.Model):
    descricao = models.CharField(max_length=50)
    categoria = models.CharField(max_length=50)
    sub_categoria= models.CharField(max_length=50)
    marca = models.CharField(max_length=50)
    modelo = models.CharField(max_length=50)
    fabricante = models.CharField(max_length=50)
    sku = models.IntegerField()
    custo= models.DecimalField(max_digits=10,decimal_places=2)
    valor_venda=models.DecimalField(max_digits=10,decimal_places=2)
    
    def __str__(self):
        return self.descricao

