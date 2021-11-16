# **Posicionando elementos com Flexbox em CSS**

## **Descrição do curso:**

>***Neste curso você irá aprender como criar um layout inteiramente responsivo sem necessitar de auxilio de framework, apenas utilizando CSS e sua propriedade Flexbox. Ao final deste curso vocês será capaz de criar interfaces sem a necessidade definição de valores fixos, apenas flutuando e posicionando elementos.***

***

# **Fundamentos do Flexbox - Parte 1 - flex container**

# **Estrutura básica do display: flex**

## display-flex

Torna a tag um elemento do tipo flex container, e assim automaticamente todos os seus filhos diretos desta tag, tornam-se em flex items.

***

# **Estrutura básica do flex direction**

## Objetivos

1. Entender o comportamento padrão de orientação horizontal de um flex container
2. Aprender a modificar a orientação horizontal

## flex-direction

É a propriedade que establece o eixo principal do container, definindo assim a direção que os flex items são colocados no flex container

### Os Eixos

* row ( padrão ): à direção do texto, esquerda para direita;

* row-reverse: sentindo oposto á direção do texto;

* column: ordenação de cima para baixo, em coluna unica;

* column-reverse: oredenação inversa, de baixo para cima;

***
# **Estrutura básica do flex wrap**

## flex-wrap

É a propriedade que define se os itens devem ou não quebrar a linha.

Por padrão eles não quebram linhas, isso faz com que os flex itens sejam compactados além do limite do conteúdo.

### Os Eixos

* nowrap: é o padrão, não permite a quebra de linha;

* wrap: permite a quebra de linha assim que um dos flex itens não puder mais ser compactado;

* wrap-reverse: permite a quebra de linha assim que um dos flex itens não puder mais ser compactado, porém na direção contrária da linha, acima.

***

# **Estrutura básica do flex flow**

## flex-flow

É um atalho para as propriedades **flex-direction** e **flex-wrap**.

Porém seu uso não é tão comum, visto que, quando mudamos o flex-direction para column, mantemos o padrão do flex-wrap que é nowrap.

***

# **Estrutura básica do justify-content**

## justify-content

Essa propriedade vai se encarregar de alinhar os itens dentro do container  de acordo com a direção pretendida e tratar da distribuição de espaçamento entre eles.

***OBS: caso seus itens esteja ocupando 100% de todo o container, ela não se aplica.***

## As variações

* flex-start: início do container;

* flex-end: final do container;

* center: ao centro do container;

* space-between: cria um espaçamento igual entre os elementos;

* space-around: os espaçamentos do meio são duas vezes maiores que o inicial e final.

***

# **Estrutura básica do Align items**

## align-items 

Trata do alinhamento dos flex itens de acordo com o eixo do container.

O alinhamento é diferente para quando os itens estão em colunas ou linhas.

Permite o alinhamento central no eixo vertical.

## Tipos de Alinhamento

* center: alinhamento dos itens ao centro;

* strech: padrão, e os flex itens cresçam igualmente;

* flex-start: alinhamento dos itens no início;

* flex-end: alinhamento dos itens no final;

* baseline: alinhamento de acordo com a linha base da tipografia dos itens;

***

# **Estrutura básica do Align items**

## align-content

É a propriedade responsável por tratar o alinhamento das linhas do container em relação ao eixo vertical do container.

Precisamos que:

* O container utilize quebra de linhas

* A altura do container seja maior que a soma das linhas do itens

## Tipos de alinhamento

* center: alinhamento dos itens ao centro;

* stretch: é o padrão e os flex itens crescem igualmente;

* flex-start: alinhamento dos itens no início;

* flex-end: alinhamento dos itens no final;

* space-between: cria um espaçamento igual entre os elementos;

* space-around: os espaçamentos do meio são duas vezes maiores que o inicial e final;

***

# **Fundamentos do Flexbox - Parte 2 - flex items**

## flex-grow

Define a proporcionalidade de crescimentos dos itens, respeitando o tamanho de seus conteúdos internos.

***OBS: não irá funcionar caso tenhamos adicionado justify-content ao nosso flex container.***

***

# **Estrutura básica do flex basis**

## flex-basis

É a propriedade que estabalece o tamanho inicial do item antes das distribuição de espaço restante dentro dele, usando como base o conteúdo interno disposto.

## Valores possíveis 

* auto: caso o item não tenha tamanho, este será proporcional ao conteúdo do item;

* px, %, em, ... : são valores exatos previamente definidos;

* 0 (zero): terá relação com a definição do flex-grow

***

# **Estrutura básica do flex shrink**

## flex-shrink

É a propriedade que estabelecer a capacidade de redução ou compressão do tamanho de um item.

***

# **Estrutura básica do flex**

## flex

Esta propriedade é um atalho ou abreviação de escrita para as proprieaddes: grow, shrink e basis.

***

# **Estrutura básica do Align self**

## align-self

É a propriedade que estabelece o alinhamento de modo individual sobre um determinado item.

## Valores possíveis

* auto: valor padrão, irá respeitar a definição de align-items do container

* flex-start: ao início do container

* flex-end: ao final do container

* center: trlativo ao centro de acordo com o eixo

* strech: ocupa todo os espço relativo

* baseline: utiliza a linha base da tipografia
