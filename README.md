# OnlyNumber Plugin
Um simples plugin em JQuery para restrição de cmapo apenas para numero. [Demo](guidiego.github.io/jq-onlynumber-plugin)

# Instalando
Importe o arquivo **jquery.onlynumbers.1-0.min.js** para sua aplicação.

# Documentação
O plugin é muito simples e direto, existem 2 ações posiveis, atribuir restrição e retirar a mesma.

```javascript
  //Para iniciar o plugin basta usar o .onlynumber();
  $("meuSeletor").onlynumber();

  //Para retirar o plugin
  $("meuSeletor").onlynumber("destroy");
```

#Configurações
Existem algumas configurações que podem ser passadas ao iniciar o plugin:

```javascript
  $("meuSeletor").onlynumber({
    //Min é o valor minimo de um numero, de 1 - 9
    min : 2,

    //Max é o valor maximo permitido no campo, de 1 - 9
    max : 8
  })
```
