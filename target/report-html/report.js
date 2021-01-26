$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("inserir_conta.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# encoding: iso-8859-1"
    }
  ],
  "line": 3,
  "name": "Cadastro de contas",
  "description": "Como um usuário \r\nGostaria de cadastrar contas\r\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "id": "cadastro-de-contas",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@funcionais"
    }
  ]
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "informo a conta \"\u003cconta\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "seleciono Salvar",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "recebo a mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;",
  "rows": [
    {
      "cells": [
        "conta",
        "mensagem"
      ],
      "line": 23,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;1"
    },
    {
      "cells": [
        "Conta de Teste",
        "Conta adicionada com sucesso!"
      ],
      "line": 24,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;2"
    },
    {
      "cells": [
        "",
        "Informe o nome da conta"
      ],
      "line": 25,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;3"
    },
    {
      "cells": [
        "Conta mesmo nome",
        "Já existe uma conta com esse nome!"
      ],
      "line": 26,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 345200,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "que estou acessando a aplicacao",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "informo o usuario \"aadv@aadv.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "a senha \"015987\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "seleciono entrar",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "visualizo a pagina inicial",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "seleciono Contas",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "seleciono Adicionar",
  "keyword": "And "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicacao()"
});
formatter.result({
  "duration": 3459762700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aadv@aadv.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuario(String)"
});
formatter.result({
  "duration": 107124000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "015987",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 122194900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 2245959800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPGinaInicial()"
});
formatter.result({
  "duration": 36282400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 64810800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 286680400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "informo a conta \"Conta de Teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "seleciono Salvar",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "recebo a mensagem \"Conta adicionada com sucesso!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta de Teste",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 120334700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 606750900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta adicionada com sucesso!",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.recebo_a_mensagem(String)"
});
formatter.result({
  "duration": 35517000,
  "status": "passed"
});
formatter.after({
  "duration": 342446300,
  "status": "passed"
});
formatter.after({
  "duration": 908633300,
  "status": "passed"
});
formatter.before({
  "duration": 324400,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "que estou acessando a aplicacao",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "informo o usuario \"aadv@aadv.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "a senha \"015987\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "seleciono entrar",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "visualizo a pagina inicial",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "seleciono Contas",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "seleciono Adicionar",
  "keyword": "And "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicacao()"
});
formatter.result({
  "duration": 2841330900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aadv@aadv.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuario(String)"
});
formatter.result({
  "duration": 120154800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "015987",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 79841300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 1134720900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPGinaInicial()"
});
formatter.result({
  "duration": 31402600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 68564500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 442322000,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "informo a conta \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "seleciono Salvar",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "recebo a mensagem \"Informe o nome da conta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 66770700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 346519300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Informe o nome da conta",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.recebo_a_mensagem(String)"
});
formatter.result({
  "duration": 38130900,
  "status": "passed"
});
formatter.after({
  "duration": 333786400,
  "status": "passed"
});
formatter.after({
  "duration": 903216300,
  "status": "passed"
});
formatter.before({
  "duration": 182200,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "que estou acessando a aplicacao",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "informo o usuario \"aadv@aadv.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "a senha \"015987\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "seleciono entrar",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "visualizo a pagina inicial",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "seleciono Contas",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "seleciono Adicionar",
  "keyword": "And "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicacao()"
});
formatter.result({
  "duration": 3180920200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aadv@aadv.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuario(String)"
});
formatter.result({
  "duration": 99935000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "015987",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 126674800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 975773200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPGinaInicial()"
});
formatter.result({
  "duration": 31002200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 64059500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 285656900,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "informo a conta \"Conta mesmo nome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "seleciono Salvar",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "recebo a mensagem \"Já existe uma conta com esse nome!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta mesmo nome",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 90357900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 350366000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Já existe uma conta com esse nome!",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.recebo_a_mensagem(String)"
});
formatter.result({
  "duration": 32954900,
  "status": "passed"
});
formatter.after({
  "duration": 302501100,
  "status": "passed"
});
formatter.after({
  "duration": 1087017700,
  "status": "passed"
});
});