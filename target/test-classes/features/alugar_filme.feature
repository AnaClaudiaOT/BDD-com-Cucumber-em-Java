@unitarios
Feature: Alugar Filme
Como um usuário
Eu quero cadastrar alugueis de filmes
Para controlar preços e datas de entrega

Scenario: Deve alugar um filme com sucesso
Given um filme
	| estoque | 	2   |
	| preco   | 	3		|
	|	tipo    | comum |
#Given um filme com estoque de 2 unidades
#And que o preco do aluguel seja de R$ 3
When alugar
Then o preco do aluguel sera de R$ 3
And a data de entrega sera em 1 dia
And o estoque do filme sera 1 unidade

Scenario: Não deve alugar filme sem estoque
Given um filme com estoque de 0 unidades
When alugar
Then nao sera possivel por falta de estoque
And o estoque do filme sera 0 unidade

Scenario: Deve dar condicoes especiais para categoria extendida
Given um filme com estoque de 2 unidades
And que o preco do aluguel seja de R$ 4
And que o tipo do aluguel seja extendido
When alugar
Then o preco do aluguel sera de R$ 8
And a data de entrega sera em 3 dias
And a pontuacao sera de 2 pontos

Scenario Outline: Deve dar condicoes conforme tipo de aluguel
Given um filme com estoque de 2 unidades
And que o preco do aluguel seja de R$ <preco>
And que o tipo do aluguel seja <tipo>
When alugar
Then o preco do aluguel sera de R$ <valor>
And a data de entrega sera em <qtdDias> dia
And a pontuacao sera de <pontuacao> pontos

Examples:
| preco | tipo 		| valor | qtdDias | pontuacao |
|   4  	|extendido|  8    |    3		| 		2			|
|   4  	|comum		|  4    |    1		| 		1			|
|   5  	|semanal  |  15   |    7		| 		3			|

Scenario: Deve alugar para categoria comum
Given um filme com estoque de 2 unidades
And que o preco do aluguel seja de R$ 4
And que o tipo do aluguel seja comum
When alugar
Then o preco do aluguel sera de R$ 4
And a data de entrega sera em 1 dia
And a pontuacao sera de 1 pontos