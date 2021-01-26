# encoding: iso-8859-1
@funcionais
Feature: Cadastro de contas
Como um usuário 
Gostaria de cadastrar contas
Para que eu possa distribuir meu dinheiro de uma forma mais organizada

Background:
Given que estou acessando a aplicacao
When informo o usuario "aadv@aadv.com"
And a senha "015987"
And seleciono entrar
Then visualizo a pagina inicial
When seleciono Contas
And seleciono Adicionar

Scenario Outline: Deve validar regras cadastro contas
When informo a conta "<conta>"
And seleciono Salvar
Then recebo a mensagem "<mensagem>"

Examples:
| conta								| mensagem 													 |
| Conta de Teste 			| Conta adicionada com sucesso!  		 |
| 										| Informe o nome da conta 					 |
| Conta mesmo nome 		| Já existe uma conta com esse nome! |


# Criado esquema de cenário para substituir esses passos:
#
#Scenario: Deve inserir uma conta com sucesso
#And informo a conta "Conta de Teste"
#And seleciono Salvar
#Then a conta e inserida com sucesso
#
#
#Scenario: Não deve inserir uma conta sem nome
#And seleciono Salvar
#Then sou notificado que o nome da conta e obrigatorio
#
#
#Scenario: Não deve inserir uma conta com nome já existente
#And informo a conta "Conta mesmo nome"
#And seleciono Salvar
#Then sou notificado que ja existe uma conta com esse nome