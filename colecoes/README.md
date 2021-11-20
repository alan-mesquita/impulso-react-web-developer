# Coleções Chaveadas

## Aula 1: Map

### **Etapa 1 - Estrutura**

```js
const myMap = new Map()
```


**Características:**
* Uma coleção de arrays no formato [chave, valor];

* Pode ser iterado por um loop for..of

<br>

### **Etapa 2 - Métodos**

Adicionar, ler e deletar

```js
const myMap = new Map()

myMap.set('apple', 'fruit');
// Map(1) {"apple" => "fruit"}

myMap.get("apple");
// "fruit"

myMap.delete("apple");
// true

myMap.get("apple");
// undefined
```
<br>

### **Etapa 3 - Map vs Objeto**

* Maps podem ter chaves de qualquer tipo;

* Maps possuem a propridade length;

* Maps são mais fáceis de iterar;

* Utilizado quando o valor das chaves é desconhecido;

* Os valores tem o mesmo tipo.

<br>

## Aula 2: Set

### Etapa 1 - Estrutura

```js
const myArray = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 2, 1];

const mySet = new Set(myArray);
```

* Sets são estruturas qu armazenam apenas valores únicos.

### **Etapa 2 - Métodos**

Adicionar, ler e deletar

```js
const mySet = new Set()

mySet.add(1);
mySet.add(5);

mySet.has(1);
// true

mySet.has(3);
// false

mySet.delete(5);
```

<br>

### **Etapa 3 - Set vs Array**

* Possui valores únicos;

* Em vez da propriedade length, consulta-se o número de registro pela propriedade size;

* Não possui os métodos map, filter, reduce etc.
