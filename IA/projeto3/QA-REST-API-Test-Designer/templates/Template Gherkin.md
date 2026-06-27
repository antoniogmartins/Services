# Template Gherkin

# QA REST API Test Designer

**Versão:** 1.0

---

# Objetivo

Este documento define o padrão de escrita dos cenários em Gherkin utilizados pelo Skill **QA REST API Test Designer**.

Todos os cenários gerados deverão seguir rigorosamente este modelo.

---

# Estrutura Obrigatória

Cada cenário deverá conter obrigatoriamente:

* Feature
* Scenario
* Given
* When
* Then

Opcionalmente poderão ser utilizados:

* And
* But
* Background
* Scenario Outline
* Examples

---

# Modelo Padrão

```gherkin
Feature: <Nome da funcionalidade>

  Scenario: <Nome do cenário>

    Given <pré-condição>

    And <pré-condição adicional>

    When <ação executada>

    And <ação complementar>

    Then <resultado esperado>

    And <validação complementar>
```

---

# Template Completo

## Informações do Cenário

| Campo       | Valor |
| ----------- | ----- |
| ID          |       |
| Categoria   |       |
| Tipo        |       |
| Prioridade  |       |
| Risco       |       |
| Endpoint    |       |
| Método HTTP |       |

---

## Objetivo

> Descrever claramente o objetivo do cenário.

---

## Pré-condições

* Usuário autenticado
* Dados previamente cadastrados
* Ambiente disponível

*(Ajustar conforme o cenário.)*

---

## Headers

```text
Authorization: Bearer <token>

Content-Type: application/json

Accept: application/json
```

---

## Payload

```json
{
}
```

---

## Cenário em Gherkin

```gherkin
Feature: <Nome da funcionalidade>

  Scenario: <Nome do cenário>

    Given <estado inicial>

    And <pré-condições>

    When <requisição realizada>

    Then <resultado esperado>

    And <validações adicionais>
```

---

## Resultado Esperado

*

---

## Código HTTP Esperado

```text
200
```

---

## Justificativa Técnica

Explicar:

* qual risco está sendo coberto;
* por que o cenário foi criado;
* qual regra de negócio está sendo validada.

---

## Risco Mitigado

*

---

# Convenções de Escrita

## Feature

Representa a funcionalidade analisada.

Exemplo:

```gherkin
Feature: Cadastro de Usuários
```

---

## Scenario

Representa um único comportamento esperado.

Exemplo:

```gherkin
Scenario: Cadastrar usuário com dados válidos
```

---

## Given

Descreve o estado inicial.

Exemplos:

```gherkin
Given existe um usuário administrador autenticado
```

```gherkin
Given o produto está previamente cadastrado
```

---

## When

Descreve a ação executada.

Exemplos:

```gherkin
When realizar uma requisição POST para "/usuarios"
```

```gherkin
When enviar um payload inválido
```

---

## Then

Descreve o comportamento esperado.

Exemplos:

```gherkin
Then a API deverá retornar HTTP 201
```

```gherkin
Then o usuário deverá ser persistido
```

---

## And

Utilizar apenas para complementar Given, When ou Then.

Exemplo:

```gherkin
Then a resposta deverá conter o identificador

And o campo "_id" não deverá ser nulo
```

---

# Boas Práticas

Sempre:

* escrever cenários independentes;
* utilizar linguagem objetiva;
* validar apenas um comportamento principal por cenário;
* utilizar nomes claros;
* utilizar verbos de ação;
* manter consistência na nomenclatura.

Evitar:

* múltiplos comportamentos no mesmo cenário;
* linguagem ambígua;
* detalhes de implementação;
* dependência entre cenários.

---

# Convenção de Nomenclatura

## Feature

```text
<Recurso da API>
```

Exemplos:

* Cadastro de Usuários
* Login
* Produtos
* Carrinhos

---

## Scenario

Utilizar sempre verbos no infinitivo.

Exemplos:

* Cadastrar usuário com sucesso
* Atualizar usuário inexistente
* Excluir produto autenticado
* Bloquear acesso sem autenticação

---

# Scenario Outline

Quando houver múltiplas combinações de entrada, utilizar:

```gherkin
Feature: Cadastro de Usuários

Scenario Outline: Validar cadastro

Given exista um usuário administrador

When enviar "<nome>" e "<email>"

Then deverá retornar "<status>"

Examples:

| nome | email | status |
|------|-------|--------|
| João | joao@email.com | 201 |
| Maria | maria@email.com | 201 |
```

---

# Critérios de Qualidade

Todos os cenários devem:

* possuir apenas um objetivo principal;
* estar sintaticamente válidos;
* representar comportamento observável;
* possuir Given, When e Then;
* possuir justificativa técnica;
* estar associados a um risco identificado.

---

# Checklist de Validação

Antes de considerar um cenário concluído, verificar:

| Verificação                    | Status |
| ------------------------------ | ------ |
| Feature definida               | ☐      |
| Scenario definido              | ☐      |
| Given presente                 | ☐      |
| When presente                  | ☐      |
| Then presente                  | ☐      |
| Gherkin válido                 | ☐      |
| Objetivo claro                 | ☐      |
| Justificativa técnica          | ☐      |
| Risco identificado             | ☐      |
| Código HTTP esperado informado | ☐      |

---

# Exemplo Completo

```gherkin
Feature: Cadastro de Usuários

Scenario: Cadastrar usuário com dados válidos

Given exista um usuário administrador autenticado

When realizar uma requisição POST para "/usuarios"
And enviar um payload válido

Then a API deverá retornar HTTP 201
And o usuário deverá ser persistido
And o identificador do usuário deverá ser retornado
```

---

# Observações

* Todos os cenários produzidos pelo Skill deverão seguir este padrão.
* Qualquer desvio deverá ser tratado como não conformidade.
* O objetivo deste template é garantir padronização, rastreabilidade e legibilidade dos cenários BDD produzidos pela IA.

