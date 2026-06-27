# Template Análise por Endpoint

# QA REST API Test Designer

**Versão:** 1.0

---

# Análise por Endpoint

## Informações Gerais

| Campo                    | Valor |
| ------------------------ | ----- |
| Endpoint                 |       |
| Método HTTP              |       |
| Recurso                  |       |
| Categoria                |       |
| Autenticação             |       |
| Responsável pela análise |       |
| Data                     |       |

---

# 1. Objetivo do Endpoint

Descrever o propósito do endpoint dentro da API.

Exemplo:

> Responsável pelo cadastro de novos usuários no sistema.

---

# 2. Descrição Técnica

## URI

```text
/endpoint
```

### Método HTTP

```
GET | POST | PUT | PATCH | DELETE
```

### Headers Esperados

| Header        | Obrigatório | Observação       |
| ------------- | ----------- | ---------------- |
| Authorization | Sim         | JWT Bearer       |
| Content-Type  | Sim         | application/json |
| Accept        | Sim         | application/json |

---

### Parâmetros

#### Path Parameters

| Nome | Tipo | Obrigatório | Descrição |
| ---- | ---- | ----------- | --------- |
|      |      |             |           |

---

#### Query Parameters

| Nome | Tipo | Obrigatório | Descrição |
| ---- | ---- | ----------- | --------- |
|      |      |             |           |

---

#### Body (Payload)

```json
{
  "campo": "valor"
}
```

---

# 3. Respostas Esperadas

| HTTP | Descrição |
| ---- | --------- |
| 200  |           |
| 201  |           |
| 400  |           |
| 401  |           |
| 403  |           |
| 404  |           |
| 409  |           |
| 500  |           |

---

# 4. Regras Identificadas

## Regras Explícitas

| ID     | Regra | Evidência |
| ------ | ----- | --------- |
| RE-001 |       |           |

---

## Regras Implícitas

| ID     | Regra | Evidência | Justificativa |
| ------ | ----- | --------- | ------------- |
| RI-001 |       |           |               |

---

## Regras de Negócio

| ID     | Regra | Criticidade |
| ------ | ----- | ----------- |
| RN-001 |       |             |

---

# 5. Análise de Riscos

## Riscos Funcionais

| ID     | Descrição | Severidade | Probabilidade | Prioridade |
| ------ | --------- | ---------- | ------------- | ---------- |
| RF-001 |           | Alta       | Média         | Alta       |

---

## Riscos Não Funcionais

| ID      | Categoria | Impacto |
| ------- | --------- | ------- |
| RNF-001 |           |         |

---

## Riscos de Segurança

| ID     | Vulnerabilidade | OWASP API Top 10 | Severidade |
| ------ | --------------- | ---------------- | ---------- |
| RS-001 |                 |                  |            |

---

# 6. Cobertura Existente

## Cenários Encontrados na Collection

| ID     | Descrição |
| ------ | --------- |
| CT-001 |           |

---

## Avaliação

Descrever a cobertura atualmente existente.

---

# 7. Lacunas Identificadas

Relacionar os testes ausentes.

| ID     | Categoria | Descrição | Impacto |
| ------ | --------- | --------- | ------- |
| LG-001 | Funcional |           |         |

---

# 8. Cenários Propostos

## 8.1 Funcionais

### Cenário

| Campo                 | Valor     |
| --------------------- | --------- |
| ID                    | F-001     |
| Categoria             | Funcional |
| Prioridade            | Alta      |
| Risco                 |           |
| Objetivo              |           |
| Pré-condições         |           |
| Dados de Entrada      |           |
| Headers               |           |
| Payload               |           |
| Resultado Esperado    |           |
| HTTP Esperado         |           |
| Justificativa Técnica |           |
| Risco Mitigado        |           |

### Gherkin

```gherkin
Feature: <Nome da Funcionalidade>

Scenario: <Descrição do Cenário>

Given ...

When ...

Then ...
```

---

## 8.2 Cenários Negativos

Mesmo modelo anterior.

```gherkin
Feature:

Scenario:

Given

When

Then
```

---

## 8.3 Cenários Não Funcionais

Mesmo modelo.

Exemplos:

* Performance
* Carga
* Stress
* Concorrência
* Timeout
* Retry
* Rate Limit

---

## 8.4 Cenários de Segurança

Mesmo modelo.

Relacionar sempre à vulnerabilidade correspondente da OWASP API Security Top 10.

---

# 9. Priorização dos Cenários

| ID    | Categoria | Prioridade | Justificativa |
| ----- | --------- | ---------- | ------------- |
| F-001 | Funcional | Alta       |               |

---

# 10. Rastreabilidade

| Regra  | Risco  | Cenário |
| ------ | ------ | ------- |
| RN-001 | RF-001 | F-001   |

---

# 11. Premissas

Documentar todas as hipóteses adotadas.

Exemplo:

* O endpoint utiliza autenticação JWT.
* A documentação não informa limite máximo para determinado campo.
* O comportamento foi inferido a partir da Collection.

---

# 12. Limitações

Registrar fatores que possam impactar a análise.

Exemplos:

* Documentação incompleta.
* Payload sem exemplos.
* Respostas HTTP não documentadas.
* Ausência de regras de negócio.

---

# 13. Recomendações Técnicas

## Curto Prazo

* Implementar cenários críticos.
* Revisar autenticação.
* Validar regras implícitas.

---

## Médio Prazo

* Automatizar os cenários prioritários.
* Expandir testes negativos.
* Adicionar testes de concorrência.

---

## Longo Prazo

* Integrar ao pipeline CI/CD.
* Revisar cobertura periodicamente.
* Monitorar indicadores de qualidade.

---

# 14. Resumo do Endpoint

| Indicador                 | Valor |
| ------------------------- | ----- |
| Regras identificadas      |       |
| Riscos identificados      |       |
| Lacunas encontradas       |       |
| Cenários funcionais       |       |
| Cenários negativos        |       |
| Cenários não funcionais   |       |
| Cenários de segurança     |       |
| Total de cenários gerados |       |

---

# 15. Checklist de Validação

Antes de finalizar a análise deste endpoint, verificar:

* [ ] Objetivo do endpoint identificado.
* [ ] Método HTTP analisado.
* [ ] URI validada.
* [ ] Headers analisados.
* [ ] Payload analisado.
* [ ] Regras explícitas documentadas.
* [ ] Regras implícitas justificadas.
* [ ] Riscos classificados.
* [ ] Lacunas identificadas.
* [ ] Cenários existentes revisados.
* [ ] Cenários novos gerados.
* [ ] Gherkin válido.
* [ ] Justificativas técnicas registradas.
* [ ] Premissas documentadas.
* [ ] Limitações registradas.
* [ ] Matriz de rastreabilidade atualizada.

---

# Critério de Conclusão

A análise deste endpoint somente será considerada concluída quando:

* todos os riscos forem classificados;
* todas as lacunas forem registradas;
* todos os cenários forem escritos em Gherkin válido;
* cada cenário possuir justificativa técnica;
* nenhuma duplicação de testes existentes for identificada;
* a rastreabilidade entre regras, riscos e cenários estiver completa.

