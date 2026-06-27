# Template Matriz de Riscos

# QA REST API Test Designer

**Versão:** 1.0

---

# Objetivo

Este documento define o padrão para a Matriz de Riscos utilizada pelo Skill **QA REST API Test Designer**.

A matriz tem como finalidade garantir a rastreabilidade entre requisitos, regras de negócio, riscos identificados e cenários de testes gerados.

---

# Informações Gerais

| Campo           | Valor                     |
| --------------- | ------------------------- |
| API             |                           |
| Collection      |                           |
| Data da análise |                           |
| Analista (IA)   | QA REST API Test Designer |
| Versão do Skill |                           |

---

# Escala de Classificação

## Severidade

| Valor   | Descrição                                                            |
| ------- | -------------------------------------------------------------------- |
| Crítica | Pode comprometer a segurança, integridade ou disponibilidade da API. |
| Alta    | Alto impacto funcional ou de negócio.                                |
| Média   | Impacto moderado, com alternativas de mitigação.                     |
| Baixa   | Baixo impacto ou ocorrência pouco provável.                          |

---

## Probabilidade

| Valor | Descrição                                      |
| ----- | ---------------------------------------------- |
| Alta  | O risco tem grande chance de ocorrer.          |
| Média | O risco pode ocorrer em condições específicas. |
| Baixa | O risco é pouco provável.                      |

---

## Prioridade

A prioridade deverá considerar a combinação entre impacto e probabilidade.

| Impacto | Probabilidade | Prioridade |
| ------- | ------------- | ---------- |
| Alta    | Alta          | Crítica    |
| Alta    | Média         | Alta       |
| Média   | Alta          | Alta       |
| Média   | Média         | Média      |
| Baixa   | Alta          | Média      |
| Baixa   | Baixa         | Baixa      |

---

# Matriz de Rastreabilidade

| ID   | Endpoint | Método | Regra de Negócio | Categoria | Risco | Severidade | Probabilidade | Prioridade | Cenário | Status |
| ---- | -------- | ------ | ---------------- | --------- | ----- | ---------- | ------------- | ---------- | ------- | ------ |
| R001 |          |        |                  | Funcional |       |            |               |            |         |        |

---

# Detalhamento dos Riscos

## Risco

### Identificação

| Campo       | Valor |
| ----------- | ----- |
| ID          |       |
| Endpoint    |       |
| Método HTTP |       |
| Categoria   |       |
| Tipo        |       |

---

### Descrição

> Descrever claramente o risco identificado.

---

### Evidência

Informar a evidência que levou à identificação do risco.

Exemplos:

* Regra encontrada na Collection.
* Swagger/OpenAPI.
* Documentação funcional.
* Regra implícita.
* Ausência de validação.

---

### Impacto

Descrever:

* impacto funcional;
* impacto técnico;
* impacto no negócio;
* impacto na segurança.

---

### Probabilidade

Indicar:

* Alta
* Média
* Baixa

Justificar a classificação.

---

### Severidade

Indicar:

* Crítica
* Alta
* Média
* Baixa

Justificar a classificação.

---

### Cenários Relacionados

| ID do Cenário | Categoria | Prioridade |
| ------------- | --------- | ---------- |
|               |           |            |

---

### Estratégia de Mitigação

Descrever como o conjunto de cenários reduz o risco identificado.

---

### Critério de Aceitação

Informar quando o risco poderá ser considerado mitigado.

---

# Classificação por Categoria

## Funcionais

| ID | Endpoint | Risco | Prioridade |
| -- | -------- | ----- | ---------- |
|    |          |       |            |

---

## Negativos

| ID | Endpoint | Risco | Prioridade |
| -- | -------- | ----- | ---------- |
|    |          |       |            |

---

## Não Funcionais

| ID | Endpoint | Risco | Prioridade |
| -- | -------- | ----- | ---------- |
|    |          |       |            |

---

## Segurança

| ID | Endpoint | Categoria OWASP | Prioridade |
| -- | -------- | --------------- | ---------- |
|    |          |                 |            |

---

# Mapa de Prioridades

## Prioridade Crítica

*

---

## Prioridade Alta

*

---

## Prioridade Média

*

---

## Prioridade Baixa

*

---

# Cobertura dos Riscos

| Categoria      | Quantidade de Riscos | Quantidade de Cenários | Cobertura |
| -------------- | -------------------: | ---------------------: | --------- |
| Funcionais     |                      |                        |           |
| Negativos      |                      |                        |           |
| Não Funcionais |                      |                        |           |
| Segurança      |                      |                        |           |

---

# Indicadores

| Indicador                     | Valor |
| ----------------------------- | ----: |
| Total de riscos identificados |       |
| Riscos críticos               |       |
| Riscos altos                  |       |
| Riscos médios                 |       |
| Riscos baixos                 |       |
| Cenários gerados              |       |
| Cobertura estimada            |       |

---

# Recomendações

## Curto Prazo

*

---

## Médio Prazo

*

---

## Longo Prazo

*

---

# Checklist de Validação

Antes da entrega, verificar:

| Item                                         | Status |
| -------------------------------------------- | ------ |
| Todos os endpoints possuem riscos associados | ☐      |
| Todos os riscos possuem severidade           | ☐      |
| Todos os riscos possuem probabilidade        | ☐      |
| Todos possuem prioridade                     | ☐      |
| Todos possuem cenários associados            | ☐      |
| Todos possuem estratégia de mitigação        | ☐      |
| Todos possuem critério de aceitação          | ☐      |

---

# Observações

* Todo risco identificado deve estar associado a pelo menos um cenário de teste.
* Todo cenário de teste deve estar vinculado a um risco identificado.
* A classificação de prioridade deve considerar impacto no negócio, probabilidade de ocorrência e criticidade para a segurança da API.
* Sempre que possível, relacionar riscos às categorias da OWASP API Security Top 10 e às regras de negócio identificadas.

