# Exemplo de Entrada

# QA REST API Test Designer

**Versão:** 1.0

---

# Objetivo

Este documento apresenta exemplos de utilização do Skill **QA REST API Test Designer**, demonstrando como fornecer as entradas necessárias para que a IA realize a análise de uma API REST.

---

# Entradas Obrigatórias

O Skill requer, no mínimo, uma Collection Postman em formato JSON.

Exemplo:

```
Collection Postman
└── ServeRest.postman_collection.json
```

---

# Entradas Opcionais

Para aumentar a qualidade da análise, recomenda-se fornecer também:

- Documentação funcional da API
- Swagger/OpenAPI
- Requisitos de negócio
- Critérios de aceitação
- Casos de testes existentes

Exemplo:

```
Documentação.pdf

Swagger.json

Requisitos.md

CasosDeTeste.xlsx
```

---

# Exemplo 1

## Entrada mínima

### Arquivos

```
ServeRest.postman_collection.json
```

### Prompt

Analise a Collection Postman anexada utilizando o Skill QA REST API Test Designer.

Identifique lacunas de cobertura.

Gere novos cenários em Gherkin.

Siga integralmente o Prompt Mestre.

---

Resultado esperado

- análise completa
- riscos
- lacunas
- cenários
- matriz de rastreabilidade

---

# Exemplo 2

## Collection + Swagger

Arquivos

```
ServeRest.postman_collection.json

swagger.json
```

Prompt

Analise a Collection utilizando também o Swagger.

Compare os endpoints.

Identifique inconsistências.

Amplie a cobertura de testes.

Produza todos os cenários em Gherkin.

---

Resultado esperado

- comparação Collection x Swagger
- regras identificadas
- riscos
- cenários adicionais

---

# Exemplo 3

## Collection + Documentação

Arquivos

```
Collection.json

DocumentacaoAPI.pdf
```

Prompt

Utilize a Collection e a documentação funcional.

Identifique regras explícitas e implícitas.

Gere cenários completos.

Priorize riscos críticos.

---

Resultado esperado

- análise funcional
- regras
- riscos
- cenários
- recomendações

---

# Exemplo 4

## Projeto completo

Arquivos

```
Collection.json

Swagger.json

Requisitos.pdf

CasosDeTeste.xlsx
```

Prompt

Utilize todos os documentos anexados.

Compare os testes existentes.

Não reproduza cenários já existentes.

Amplie significativamente a cobertura.

Produza o relatório completo.

---

Resultado esperado

- análise por endpoint
- riscos
- lacunas
- cenários
- matriz
- relatório executivo

---

# Estrutura Recomendada

```
Projeto

├── Collection.postman_collection.json
├── swagger.json
├── requisitos.pdf
├── casos_existentes.xlsx
└── criterios_aceitacao.md
```

---

# Fluxo Esperado

```
Entradas

↓

Leitura da Collection

↓

Leitura da documentação

↓

Identificação das regras

↓

Identificação dos riscos

↓

Comparação com testes existentes

↓

Identificação das lacunas

↓

Priorização

↓

Geração dos cenários

↓

Matriz de riscos

↓

Relatório executivo
```

---

# Checklist da Entrada

Antes de executar o Skill, verificar:

| Item | Obrigatório         | Status  |
|------|---------------------|---------|
| Collection Postman         | Sim | ☐ |
| Swagger/OpenAPI            | Não | ☐ |
| Documentação funcional     | Não | ☐ |
| Requisitos de negócio      | Não | ☐ |
| Critérios de aceitação     | Não | ☐ |
| Casos de testes existentes | Não | ☐ |

---

# Boas Práticas

Recomenda-se:

- utilizar a versão mais recente da Collection;
- fornecer Swagger atualizado;
- anexar documentação funcional sempre que possível;
- incluir casos de testes existentes para evitar duplicidade;
- informar requisitos de negócio quando disponíveis.

---

# Restrições

O Skill não executa chamadas à API.

A análise é baseada exclusivamente nos artefatos fornecidos pelo usuário.

Caso haja ausência de documentação ou informações conflitantes, a IA deverá registrar explicitamente as premissas adotadas e as limitações da análise.

---

# Resultado Esperado

Ao final da execução, espera-se a geração dos seguintes artefatos:

- Relatório Executivo
- Análise por Endpoint
- Cenários Funcionais
- Cenários Negativos
- Cenários Não Funcionais
- Cenários de Segurança
- Matriz de Rastreabilidade
- Matriz de Riscos
- Recomendações Técnicas
- Resumo Executivo

---

# Observações

Este documento tem caráter ilustrativo e serve como referência para orientar os usuários na preparação das entradas do Skill.

A qualidade dos resultados gerados está diretamente relacionada à qualidade e à completude dos artefatos fornecidos.
