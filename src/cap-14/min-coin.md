### 1 makeChange(value)

se eu tiver essas moedas dísponives **[1, 3, 4]** e preciso encontrar o troco
mínimo para o value **2**

- Quebrar o algoritimo em partes menores (programação dinamica)

Se eu tenho 2 centavos, entao vou primeiro subtrair 2 - 1, resultando no valor 1, caso esse valor for maior igual a zero, eu chamo a funcao recursivamente.

faço isso até chegar em zero e retorno um array vazio, pois se o value for 0 (ou seja, se já chegamos a zero durante a subtração), significa que encontramos uma combinação que funciona. Então, retornamos um array vazio porque não precisamos de mais moedas.

**Condição detalhada**

_newAmount >= 0:_</br>
Verifica se newAmount (o valor restante depois de subtrair a moeda atual) é não negativo. Isso garante que o valor atual (value) pode ser representado usando a moeda coin.

_(newMin.length < min.length - 1 || !min.length):_</br>
Esta condição verifica se a combinação newMin tem menos moedas do que a combinação atual armazenada em min.

_newMin.length < min.length - 1:_</br>
Verifica se a combinação newMin tem um número de moedas menor do que a combinação armazenada em min (descontando uma moeda, que será a moeda coin atual).

_!min.length:_</br>
Verifica se min ainda não foi definida (ou seja, se min é uma lista vazia). Isso significa que ainda não há uma combinação válida armazenada.

_(newMin.length || !newAmount):_</br>

_newMin.length:_</br>
válida de moedas que resulta em newAmount.

_!newAmount:_</br>
Verifica se newAmount é exatamente 0, o que significa que a moeda coin que foi subtraída completou o valor value sem deixar troco.

<h3 style="color: yellow"> Explicacao (min) </h3>

A operação min = [coin].concat(newMin) no algoritmo minCoinChange serve para construir a combinação mínima de moedas que soma ao valor desejado (amount). Vamos entender o raciocínio por trás dessa concatenação.

Contexto:
coin: Representa a moeda atual que está sendo considerada na iteração.
newMin: É a combinação mínima de moedas que soma ao valor newAmount (que é o valor restante depois de subtrair a moeda coin de value).
min: É a lista atual que armazena a melhor (menor) combinação de moedas encontrada até o momento para o valor value.
Por que concatenar a moeda (coin) com newMin?
Construção da Solução Parcial:

Imagine que você tem um valor value e subtrai uma moeda coin dele, restando um valor newAmount.

<p style="color:red">newMin já é a combinação mínima de moedas que pode somar até newAmount. </p>
Para resolver o problema para value, você só precisa adicionar a moeda coin a essa combinação mínima (newMin) para completar o valor value.
Formação da Combinação Ótima:

Ao concatenar coin com newMin, você está criando uma nova combinação que soma exatamente ao valor value.
Essa combinação é uma candidata para ser a solução mínima (em termos de quantidade de moedas) para value.
Comparação e Atualização:

O algoritmo compara essa nova combinação com a atual melhor combinação armazenada em min.
Se a nova combinação for melhor (ou seja, se usar menos moedas), min é atualizado para essa nova combinação.
Exemplo Prático:
Suponha que você tenha as moedas [1, 3, 4] e quer fazer value = 5.

Digamos que o algoritmo esteja tentando a moeda coin = 1.
Então, ele calcula newAmount = 5 - 1 = 4.
Ele chama recursivamente makeChange(4) para encontrar a combinação mínima para 4. Suponha que a melhor combinação para 4 seja [4].
Agora, o algoritmo precisa construir a combinação para value = 5. Para isso, ele pega a moeda 1 (que subtraiu antes) e concatena com a combinação mínima para 4.
Resultado: min = [1].concat([4]) = [1, 4], que é uma combinação válida para 5.
Conclusão:
A operação min = [coin].concat(newMin) permite ao algoritmo construir de maneira incremental a melhor (ou mínima) combinação de moedas para qualquer valor, usando soluções parciais que já foram calculadas para valores menores. Isso é fundamental para o funcionamento eficiente do algoritmo, pois aproveita os resultados dos subproblemas para resolver o problema maior.

<h3 style="color: yellow"> Explicando o ultimo item do if (newMin.length || !newAmount) </h3>
newAmount: É o valor restante após subtrair a moeda atual (coin) do valor original (value).
newMin: É a lista de moedas que representa a combinação mínima encontrada para newAmount.
Análise da Condição (newMin.length || !newAmount):
newMin.length:

O que representa?: newMin.length é o comprimento da lista de moedas retornada pela chamada recursiva para makeChange(newAmount). Ele indica quantas moedas estão sendo usadas na combinação mínima para o valor newAmount.
Comportamento no if: Se newMin.length for maior que 0 (ou seja, há uma combinação de moedas que soma newAmount), a condição é avaliada como true.
!newAmount:

O que representa?: !newAmount é uma negação do valor de newAmount. Se newAmount for 0, a negação !newAmount será true.
Comportamento no if: Isso verifica se newAmount é exatamente 0. Se for 0, significa que a moeda atual (coin) subtraída de value resultou em um valor que não requer mais moedas adicionais (ou seja, a combinação está completa).
Combinação newMin.length || !newAmount:

Lógica Completa:
A condição completa (newMin.length || !newAmount) verifica se pelo menos uma dessas duas situações é verdadeira:
newMin.length é verdadeiro: Há uma combinação válida de moedas que soma newAmount.
!newAmount é verdadeiro: newAmount é 0, indicando que a moeda atual (coin) foi a última necessária para completar o valor value.
Por que isso é importante?:
Se uma dessas condições for verdadeira, então a combinação atual ([coin].concat(newMin)) é considerada válida para o valor value.
Isso é especialmente importante para garantir que o algoritmo não tente usar combinações inválidas ou incompletas (como uma newMin vazia sem newAmount igual a 0).
Exemplo para Esclarecer:
Imagine que você está tentando fazer uma combinação para value = 3 com as moedas [1, 3, 4].

Quando coin = 3:

newAmount = 3 - 3 = 0
newMin seria [] porque newAmount é 0.
A condição !newAmount seria true, porque newAmount é 0.
Assim, a condição (newMin.length || !newAmount) avalia para true, validando essa combinação.
Quando coin = 1:

newAmount = 3 - 1 = 2
Suponha que a melhor combinação para newAmount = 2 seja [1, 1], então newMin = [1, 1].
newMin.length seria 2, então a condição newMin.length seria true, validando essa combinação também.
Conclusão:
A condição (newMin.length || !newAmount) serve para garantir que a combinação de moedas atual seja considerada válida apenas se newAmount foi completamente resolvido (ou seja, é 0) ou se newMin contém uma combinação válida para o valor restante (newAmount). Ela protege o algoritmo contra a utilização de combinações incompletas ou inválidas, assegurando que a solução final seja correta.
