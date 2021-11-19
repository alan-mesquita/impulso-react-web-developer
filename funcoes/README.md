# **Objetivo do Curso**

1. Mostrar como declarar funções

2. Como manipular parâmetros

3. Apresentar loops e outras declarações

4. Apresentar o argumento "this"

***

## **Percuso**

**Aula 1** - Tipos de Funções

**Aula 2** - parâmetros

**Aula 3** - Loops

**Aula 4** - A palavra "this"

**Aula 5** - Arrow functions

**Aula 6** - Atividade prática

***

<br>

# Aula 1 - Tipos de Funções

## Etapa 1 - Estrutura

*Definição comum de uma função*

```js
    function nome(paramentros){
        // instruções
    }
```

*Variáveis criadas dentro de uma função apenas podem ser utilzadas dentro dela.*

```js
    function nome(paramentros){
        // instrunções
        return; // valor de retorno
    }
```
*Quando invocamos o "return", a função para de ser executada.*

<br>

## Etapa 2 - Função anônima

*Funções que representam expressões*

```js
    const soma = function (a, b){
        return a + b;
    }

    soma(1, 2) // 3
    soma(5, 4) // 9
```

*Uma variável pode armazenar uma função.*

<br>

## Etapa 3 - Função autoinvocável

*IIFE (Immediately Invoked Function Expression)*

```js
    (
        function (){
            let name = "Digital Innovation One"
            return name;
        }
    )();

    // Digital Innovation One
```

*Uma função anônima entre parênteses, seguida por outro par de parênteses, que representa sua chamada.*

```js
    (
        function (a, b){
            return a + b;
        }
    )(1, 2);

    // 3
```

```js
    const soma3 = (
        function (){
            return a + b;
        }
    )(1, 2);

    console.log(soma3) // 3
```

*Também pode ser utilizada com parâmetros ou armaznada em uma variável.*

<br>

## Etapa 4 - Calbacks

*Uma função passada como argumento para outra.*

```js
    const calc = function(operacao, num1, num2){
        return operacao(num1, num2);
    }

    const soma = function(num1, num2){
        return num1 + num2;
    }

    const sub = function(num1, num2){
        return num1 - num2;
    }

    const resultSoma = calc(soma, 1, 2);
    const resultSub = calc(sub, 1, 2);

    console.log(resultSub); // -1
    console.log(resultSoma); // 3
```

*Utilizando callbacks, você tem maior controle da ordem de chamadas.*

<br>

# Aula 2 - parâmetros

## Etapa 1 - Valores padrão

<br>

**Pré-ES2015:**

```js
    function exponencial(array, num){
        if (num === undefined) {
            num = 1;
        }
        const result = [];

        for(let i = 0; i < array.length; i++) {
            result.push(array[i] ** num);
        }

        return result;
    }

    exponencial([1, 2, 3, 4]) // [1, 2, 3, 4]
    exponencial([1, 2, 3, 4], 4) // [1, 8, 27, 64]
```

**Pós-ES2015:**

```js
    function exponencial(array, num = 1){
        const result = [];

        for(let i = 0; i < array.length; i++) {
            result.push(array[i] ** num);
        }

        return result;
    }

    exponencial([1, 2, 3, 4]) // [1, 2, 3, 4]
    exponencial([1, 2, 3, 4], 4) // [1, 8, 27, 64]
```

## Etapa 2 - Objeto "arguments"

<br>

```js
    function findMax() {
        let max = -Infinity;

        for (let - = 0; i < arguments.length; i++) {
            if (argumets[i] > max) {
                max = arguments[i];
            }
        }
        return max;

        findMax(1, 2, 4, 6, 90, 1) // 90
    }
```

*Um array com todos os parâmetros passados quando a função foi invocada.*

## Etapa 3 - Array e objetos

<br>

### **Arrays**

#### **Spred**

*Uma forma de lidar separadamente com elementos*

**Pré-ES2015:**

```js
    function sum(x, y, z){
        return x + y + z;
    }

    const numbers = [1, 2, 3];

    consle.log(sum(...numbers));
    
```

*O que era parte de um array se torna um elemento independente.*

#### **Rest**

*Combina os argumentos em um array*

```js
    function confereTamanho(...args){
        console.log(args.length)
    }

    confereTamanho(); // 0
    confereTamanho(1, 2); // 2
    confereTamanho(3, 4, 5); // 3
    
```

*O que era um elemento independente se torna parte de um array.*

### **Objeto**

#### **Object Desctructuring**

<br>

```js
    const user = {
        id: 42,
        displayName: 'jdoe',
        fullName: {
            firstName: 'John',
            lastName: 'Doe'
        }
    };

    function userId({id}) {
        return id;
    }

    function getFullName({fullName: {firstName: first, lastName: last}}) {
        return `${first} ${last}`;
    }

    userId(user)
```

*Entre chaves { } podemos filtrar apenas os dados que nos interessam em um objeto.*

<br>

# Aula 3 - Loops

## Etapa 1 - if else


* Condição = ( num < 0 )
* Declaração 1 (dentro de if): Ocorre caso a condição seja verdadeira
* Declaração 2 (dentro de else): Ocorre caso a condição seja falsa

```js 
    function numeroPositivo(num) {
        let resultado;

        if(num < 0) {
            resultado = false;
        } else {
            resultado = true;
        }

        numeroPositivo(2) // true
        numeroPositivo(-9) // false
    }
```

```js 
    function numeroPositivo(num) {
        let resultado;

        const ehNegativo = num < 0;

        if(ehNegativo) {
            resultado = false;
        } else {
            resultado = true;
        }

        return resultado;
    }
```

```js 
    function numeroPositivo(num) {
        const ehNegativo = num < 0;

        if(ehNegativo) {
            return false;
        }
        return true;
    }
```

```js 
    function numeroPositivo(num) {
        const ehNegativo = num < 0;
        const maiorQueDez = num > 10;

        if(ehNegativo) {
            return "Esse número é negativo!";
        } else if (!ehNegativo && maiorQueDez){
            return "Esse número é positivo e maior que 10!"
        }

        return "Esse número é positivo!";
    }

        numeroPositivo(2) // Esse número é positivo!
        numeroPositivo(-2) // Esse número é negativo!
        numeroPositivo(40) // Esse número é positivo e maior que 10!
```

*Javascript não tem elseif, as palavras sempre estão espaçadas!*

<br>

## Etapa 2 - switch

### **switch/case**

```js
    function getAniaml(id) {
        switch(id) {
            case 1:
                return "cão";
            case 2:
                return "gato";
            case 3:
                retrun "pássaro";
            default:
                return "peixe";
        }
    }

    getAnimal(1) // cão
    getAnimal(4) // peixe
    getAnimal("1") // peixe
```

* Equivalente a uma comparação de tipo e valor (===);

* Sempre precisa de um valor "default";

* Ideal para quando se precisa comparar muitos valores.

<br>

## Etapa 3 - for

*loop dentro de elementos iteráveis (arrays, strings).*

```js
    function multiplicarPorDois(arr) {
        let multiplicados = [];

        for(let i = 0; i < arr.length; i++) {
            multiplicados.push(arr[i] * 2);
        }

        return multiplicados;
    }

    const meusNumeros = [2, 33, 456, 356, 40];

    multiplicaPorDois(meusNumeros); // [4, 66, 912, 712, 80]
```

### **for...in**

*loop entre propriedades enumeráveis de um objeto*

```js

    function forInExemplo(obj) {
        for(prop in obj) {
            console.log(prop);
        }
    }

    const meuObjeto = {
        nome: "João",
        idade: "20",
        cidade: "Salvador"
    }

    forInExemplo(meuObjeto);
    // nome
    // idade
    // cidade
```

```js

    function forInExemplo(obj) {
        for(prop in obj) {
            console.log(obj[prop]);
        }
    }

    const meuObjeto = {
        nome: "João",
        idade: "20",
        cidade: "Salvador"
    }

    forInExemplo(meuObjeto);
    // nome
    // idade
    // cidade
```

<br>

### **for...of**

*loop entre estruturas iteráveis (array, string).*

```js
    function logLetras(palavra) {
        for (letra of palavra) {
            console.log(letra);
        }
    }

    const palavra = "abacaxi";

    logLetras(palavra)
    // a
    // b
    // a
    // c
    // a
    // x
    // i
```

```js
    function logNumeros(num) {
        for (num of nums) {
            console.log(num);
        }
    }

    const nums = [30, 20, 233, 2];

    logLetras(nums)
    // 30
    // 20
    // 233
    // 2
```
<br>

## Etapa 4 - while e do...while

### **While** 

*Executa instruções até que a condição se torne falsa*

```js
    function exemploWhile() {
        let num = 0;

        while(num <= 5){
            console.log(num);
            num++;
        }
    }

    exemploWhile()
    // 0
    // 1
    // 2
    // 3
    // 4
    // 5
```
<br>

### **Do...while**

*Executa instruções até que a condição se torne falsa.*

```js
    function exemploDoWhile() {
        let num = 6;

        do {
            console.log(num);
            num++;
        } while(num <= 5)
    }

    exmeploDoWhile()
    // 6
```

*Porém a primeria eecução sempre ocorre.*

<br>

# Aula 4 - This

## Etapa 1 - O que é?

*A palavra reservada **this** é uma referência de contexto.*

```js
    const pessoa  = {
        firstName: "André",
        lastName: "Soares",
        id: 1,
        fullName: function() {
            return this.firstName + " " + this.lastName;
        },
        getId: function() {
            return this.id;
        }
    };

    pessoa.fullName();
    // "André Soares"

    pessoa.getId();
    // 1
```

*No exemplo, this refere-se ao objeto pessoa.*

*Seu valor pode mudar de acordo com o lugar no código onde foi chamada.*

<table style= "border: 1px solid black;">
    <tr>
        <th>Contexto</th>
        <th>Referência</th>
    </tr>
    <tr>
        <td>Em um objeto (método)</td>
        <td>Próprio objeto dono do método</td>
    </tr>
    <tr>
        <td>Sozinha</td>
        <td>Objeto global (em navegadores, window)</td>
    </tr>
    <tr>
        <td>Função</td>
        <td>Objeto global</td>
    </tr>
    <tr>
        <td>Evento</td>
        <td>Elemento que recebeu o evento</td>
    </tr>
</table>

**Fora de função**
```js
    console.log(this);
```

**Dentro de uma função**
```js
    (function () {
       console.log(this);
    })();
```

**Dentro de um objeto (método)**
```js
    const pessoa = {
        firstName: 'Diego',
        lastName: 'Vieira',
        getFullName: function() {
            console.log(`${this.firstName} ${this.lastName}`)
        },
    };

    pessoa.getFullName();
```

**Em um evento no HTML**
```HTML
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <button id="my-btn" onclick="console.log(this)">click me!</button>
        </body>
    </html>
```

## Etapa 2 - Manipulando seu valor

### **Call**

```js
    const pessoa = {
        nome: 'Miguel',
    };

    const animal = {
        nome: 'Murphy',
    };

    function getSomething() {
        console.log(this.nome);
    }

    getSomething.call(pessoa)
```

```js
    const pessoa = {
        nome: 'Miguel',
    };

    const animal = {
        nome: 'Murphy',
    };

    function getSomething() {
        console.log(this.nome);
    }

    getSomething.call(animal)
```

```js
    const myObj = {
        num1: 2,
        num2: 4,
    };

    function soma(a, b) {
        console.log(this.num1 + this.num2 + a + b);
    }

    soma.call(myObj, 1, 5)
    // 12
```
*É possível passar parâmetros para essa função separando-os por vírgulas.*

### **Apply**

```js
    const pessoa = {
        nome: 'Miguel',
    };

    const animal = {
        nome: 'Godi',
    };

    function getSomething() {
        console.log(this.nome);
    }

    getSomething.apply(pessoa)
```


```js
    const pessoa = {
        nome: 'Miguel',
    };

    const animal = {
        nome: 'Godi',
    };

    function getSomething() {
        console.log(this.nome);
    }

    getSomething.apply(animal)
```

```js
    const myObj = {
        num1: 2,
        num2: 4,
    };

    function soma(a, b) {
        console.log(this.num1 + this.num2 + a + b);
    }

    soma.apply(myObj, [1, 5])
    // 12
```
*É possível passar parâmetros para essa função dentro de um array.*

### **Bind**

*Clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro.*

```js
    const retornaNomes = function() {
        return this.nome;
    };

    let bruno = retornaNomes.bind({ nome: 'Bruno'});

    bruno();
    // Bruno
```

<br>

# Aula 5 - Arrow functions

## Etapa 1 - Sintaxe

```js
    const helloWorld = function() {
        return "Hello World";
    }
```

```js
    const helloWorld = () => {
        return "Hello World";
    }
```

```js
    const helloWorld = () => "Hello World"
```

* Caso exista apenas uma linha, pode dispensar as chaves e o return.

* Caso exista apenas um parâmetro, pode dispensar os parênteses


```js
    const soma = (a, b) => a + b;

    soma(4, 6);
    // 10
```

```js
    const soma = a => a;
    soma(4);
    // 4
```

* **Arrow function Não faz hoisting!**

**Correto**
```js
    soma(2, 4);

    function soma(a, b) {
        return a + b;
    }
```
**Errado**
```js
    soma(2, 4)

    const soma = (a, b) => a + b;
```
<br>

## Etapa 2 - Outras restrições

* "this" sempre será o objeto global. Métodos para modificar seu valor não irão funcionar;

* Não existe o objeto "arguments";

* O construtur (ex: new MeuObjeto()) também não pode ser utilizado.