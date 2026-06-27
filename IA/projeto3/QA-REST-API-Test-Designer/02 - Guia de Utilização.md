# Guia de Utilização

# QA REST API Test Designer

**Versão:** 1.0

**Autor:** Antonio G. Martins

---

# 1. Objetivo

Este guia descreve como utilizar o **Skill QA REST API Test Designer** para apoiar a análise de APIs REST por meio de Inteligência Artificial Generativa.

O objetivo é garantir que diferentes colaboradores utilizem o Skill de forma padronizada, produzindo resultados consistentes, reproduzíveis e alinhados às boas práticas de Engenharia de Qualidade.

---

# 2. Público-Alvo

Este guia destina-se a:

* Analistas de Qualidade (QA)
* Engenheiros de Teste
* Testers
* Desenvolvedores
* Analistas de Sistemas
* Líderes Técnicos
* Arquitetos de Software
* Equipes DevOps
* Equipes de Engenharia de Plataforma

Não é necessário possuir experiência prévia em Engenharia de Prompt.

---

# 3. O que é este Skill?

O **QA REST API Test Designer** é um Skill especializado na análise de APIs REST.

Sua finalidade é identificar lacunas de cobertura de testes e gerar novos cenários em Gherkin a partir da análise de uma Collection Postman e, quando disponíveis, da documentação da API.

O Skill utiliza uma metodologia baseada em:

* Engenharia de Qualidade;
* Testes Baseados em Risco (Risk-Based Testing);
* BDD (Behavior Driven Development);
* OWASP API Security Top 10;
* Boas práticas de testes de APIs REST.

---

# 4. Quando utilizar

Utilize este Skill quando houver necessidade de:

* ampliar a cobertura de testes de uma API REST;
* identificar cenários não contemplados pela suíte existente;
* revisar uma Collection Postman;
* apoiar revisões técnicas de APIs;
* identificar riscos funcionais e de segurança;
* produzir cenários em Gherkin para automação futura;
* realizar análises exploratórias de APIs.

---

# 5. Quando não utilizar

Este Skill não deve ser utilizado para:

* executar chamadas reais à API;
* validar disponibilidade da aplicação;
* realizar testes automatizados;
* medir desempenho real da infraestrutura;
* substituir revisões humanas;
* gerar código de automação, salvo solicitação explícita.

---

# 6. Pré-requisitos

Antes de utilizar o Skill, recomenda-se possuir:

## Obrigatórios

* Collection Postman da API.

## Recomendados

* Swagger/OpenAPI;
* documentação funcional;
* documentação técnica;
* requisitos de negócio;
* critérios de aceitação;
* cenários de testes existentes.

Quanto maior a quantidade de informações disponíveis, maior será a qualidade da análise.

---

# 7. Fluxo de Utilização

O uso do Skill deverá seguir o fluxo abaixo.

```text
Preparar documentação

↓

Anexar Collection

↓

Anexar documentação (opcional)

↓

Executar o Skill

↓

Aguardar análise completa

↓

Revisar resultados

↓

Selecionar cenários

↓

Incorporar à suíte de testes
```

Não interrompa a execução antes da conclusão da análise de todos os endpoints.

---

# 8. Como Executar

## Passo 1

Anexe a Collection Postman.

Preferencialmente em formato JSON.

---

## Passo 2

Caso existam, anexe:

* Swagger;
* documentação funcional;
* requisitos;
* critérios de aceitação.

---

## Passo 3

Execute o Prompt Mestre do Skill.

Não altere sua estrutura.

---

## Passo 4

Aguarde a conclusão da análise.

O Skill deverá analisar todos os endpoints antes de produzir a resposta.

---

## Passo 5

Revise os artefatos gerados.

---

# 9. Entradas Aceitas

## Obrigatórias

* Collection Postman

## Opcionais

* Swagger/OpenAPI
* Documentação
* Requisitos
* Casos de uso
* Critérios de aceitação
* Cenários existentes

---

# 10. Saídas Produzidas

Ao final da execução, o Skill produzirá:

* Relatório Executivo;
* Resumo da análise;
* Análise por endpoint;
* Regras identificadas;
* Riscos identificados;
* Lacunas encontradas;
* Cenários Funcionais;
* Cenários Negativos;
* Cenários Não Funcionais;
* Cenários de Segurança;
* Matriz de Rastreabilidade;
* Recomendações Técnicas.

---

# 11. Estrutura dos Cenários

Cada cenário conterá:

* ID;
* Categoria;
* Tipo;
* Prioridade;
* Endpoint;
* Método HTTP;
* Objetivo;
* Pré-condições;
* Dados de entrada;
* Headers;
* Payload;
* Cenário em Gherkin;
* Resultado esperado;
* Código HTTP esperado;
* Justificativa técnica;
* Risco mitigado.

---

# 12. Boas Práticas

Durante a utilização do Skill recomenda-se:

* utilizar sempre a versão mais recente da Collection;
* anexar Swagger sempre que disponível;
* anexar documentação funcional;
* revisar manualmente os cenários gerados;
* validar regras implícitas com especialistas do negócio;
* manter histórico das análises realizadas.

---

# 13. Interpretação dos Resultados

Os cenários produzidos representam recomendações técnicas.

Cada cenário possui uma prioridade baseada em risco.

A equipe de QA deverá avaliar:

* aderência ao negócio;
* viabilidade técnica;
* prioridade de implementação;
* impacto na suíte de testes existente.

---

# 14. Limitações

Este Skill possui algumas limitações inerentes ao uso de IA Generativa.

Quando houver ausência de informações, o Skill poderá:

* registrar premissas;
* indicar limitações;
* solicitar documentação complementar.

O Skill nunca deverá inventar regras de negócio sem evidências.

---

# 15. Recomendações

Para obter melhores resultados:

* utilize Collections completas;
* mantenha Swagger atualizado;
* disponibilize documentação funcional;
* informe regras de negócio relevantes;
* execute análises periodicamente conforme a evolução da API.

---

# 16. Solução de Problemas

## O Skill gerou poucos cenários

Verifique se:

* a Collection está completa;
* o Swagger foi anexado;
* existem regras suficientes documentadas.

---

## O Skill repetiu cenários

Confirme se os cenários existentes foram fornecidos como entrada.

---

## O Skill gerou hipóteses

Verifique se existem regras de negócio ausentes na documentação.

---

## O Skill não analisou todos os endpoints

Confirme se a Collection contém todos os endpoints e se o Prompt Mestre foi utilizado integralmente.

---

# 17. Perguntas Frequentes (FAQ)

### Posso utilizar este Skill com outra API?

Sim. O Skill foi projetado para qualquer API REST documentada por Collection Postman.

### Posso utilizar apenas o Swagger?

Sim, porém recomenda-se também anexar a Collection.

### O Skill executa chamadas reais?

Não.

Ele realiza apenas análise estática dos artefatos fornecidos.

### O Skill gera automação?

Não.

A geração de scripts de automação depende de solicitação específica.

### Os cenários gerados substituem a revisão humana?

Não.

Todos os resultados devem ser revisados pela equipe de QA.

---

# 18. Fluxo Recomendado de Trabalho

```text
Collection

+

Swagger

+

Documentação

↓

Skill QA REST API Test Designer

↓

Análise

↓

Lacunas

↓

Novos Cenários

↓

Revisão Humana

↓

Suíte de Testes
```

---

# 19. Histórico de Versões

| Versão | Data      | Autor              | Alteração                             |
| ------ | --------- | ------------------ | ------------------------------------- |
| 1.0    | 27.06.26  | Antonio G. Martins | Criação inicial do Guia de Utilização |

