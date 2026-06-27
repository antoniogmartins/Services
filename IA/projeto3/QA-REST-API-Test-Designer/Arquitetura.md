# Arquitetura

# QA REST API Test Designer

**Versão:** 1.0

---

# Objetivo

Este documento descreve a arquitetura do framework **QA REST API Test Designer**, apresentando seus componentes, responsabilidades, fluxo de execução e relacionamento entre os artefatos.

O objetivo é garantir padronização, reutilização, escalabilidade e facilidade de manutenção do Skill.

---

# Visão Geral da Arquitetura

O framework é composto por documentos especializados que trabalham em conjunto para orientar a IA durante todo o processo de análise de APIs REST.

Cada documento possui uma responsabilidade específica, evitando duplicidade de informações e facilitando sua evolução.

---

# Arquitetura Lógica

```text
                         Usuário

                            │

                            ▼

                  Collection Postman

                  Swagger / OpenAPI

                  Documentação

                            │

                            ▼

                  Prompt Mestre

                            │

                            ▼

                 QA REST API Test Designer
                  (Motor de Análise)

                            │

        ┌───────────────────┼───────────────────┐

        ▼                   ▼                   ▼

   Identificação       Análise de        Identificação

    de Regras            Riscos           de Lacunas

        │                   │                   │

        └───────────────────┼───────────────────┘

                            ▼

                 Geração dos Cenários

                            │

                            ▼

                Validação / Autoavaliação

                            │

                            ▼

                 Artefatos Gerados
```

---

# Arquitetura Física

```text
QA REST API Test Designer/
│
├── README.md
├── Arquitetura.md
├── Glossário.md
├── CHANGELOG.md
├── ROADMAP.md
├── 01 - Skill.md
├── 02 - Guia de Utilização.md
├── 03 - Prompt Mestre.md
├── 04 - Templates
│   ├── Template de Saída.md
│   ├── Template Gherkin.md
│   ├── Template Matriz de Riscos.md
│   ├── Template Relatório Executivo.md
│   └── Template Análise por Endpoint.md
├── 05 - Configuração.md
├── 06 - Exemplos
│   ├── Exemplo de Entrada.md
│   └── Exemplo de Saída.md
└── docs
    ├── FAQ.md
    ├── Boas Práticas.md
    └── Guia de Evolução.md

```

---

# Componentes do Framework

## 1. Skill

Responsável por definir:

* Persona
* Objetivos
* Escopo
* Metodologia
* Regras
* Critérios
* Fluxo operacional

É o documento central do framework.

---

## 2. Guia de Utilização

Responsável por orientar os usuários sobre:

* como utilizar o Skill;
* quais entradas fornecer;
* boas práticas;
* limitações;
* recomendações.

---

## 3. Prompt Mestre

Representa a interface operacional entre o usuário e a IA.

Define exatamente como a IA deve executar o Skill.

---

## 4. Templates

Responsáveis por padronizar todas as saídas.

Incluem:

* Template de Relatório;
* Template Gherkin;
* Template Matriz de Riscos.

---

## 5. Configuração

Contém os parâmetros operacionais do framework.

Exemplos:

* idioma;
* temperatura;
* formato;
* premissas;
* critérios de parada.

---

## 6. Exemplos

Documentam exemplos reais de utilização.

Facilitam treinamento e onboarding.

---

## 7. Arquitetura

Documenta toda a estrutura do framework.

Serve como referência para manutenção e evolução.

---

# Fluxo de Execução

```text
Entrada

↓

Collection

↓

Leitura da documentação

↓

Identificação dos Endpoints

↓

Análise das Regras

↓

Identificação dos Riscos

↓

Comparação com testes existentes

↓

Identificação das Lacunas

↓

Priorização

↓

Geração dos Cenários

↓

Validação

↓

Autoavaliação

↓

Entrega
```

---

# Fluxo de Dados

```text
Collection

        │

        ▼

Endpoints

        │

        ▼

Regras

        │

        ▼

Riscos

        │

        ▼

Lacunas

        │

        ▼

Cenários

        │

        ▼

Relatório
```

---

# Dependências

## Obrigatórias

* Collection Postman

## Opcionais

* Swagger/OpenAPI
* Documentação Funcional
* Requisitos
* Critérios de Aceitação
* Casos de Testes Existentes

---

# Artefatos Produzidos

Ao final da execução o framework deverá produzir:

* Relatório Executivo
* Análise por Endpoint
* Cenários Funcionais
* Cenários Negativos
* Cenários Não Funcionais
* Cenários de Segurança
* Matriz de Rastreabilidade
* Matriz de Riscos
* Recomendações Técnicas
* Resumo Executivo

---

# Princípios Arquiteturais

O framework segue os seguintes princípios:

## Modularidade

Cada documento possui uma única responsabilidade.

---

## Reutilização

Os templates podem ser utilizados em diferentes projetos.

---

## Escalabilidade

Novos templates podem ser adicionados sem alterar os componentes existentes.

---

## Baixo Acoplamento

O Prompt Mestre referencia os templates sem duplicar seu conteúdo.

---

## Alta Coesão

Cada documento trata exclusivamente de seu domínio de responsabilidade.

---

## Padronização

Todas as saídas seguem modelos previamente definidos.

---

# Integração entre os Componentes

```text
                Skill

                   │

      ┌────────────┼────────────┐

      ▼            ▼            ▼

 Guia        Prompt Mestre   Configuração

      │            │            │

      └────────────┼────────────┘

                   ▼

               Templates

                   │

                   ▼

              Artefatos

                   │

                   ▼

              Exemplos
```

---

# Evolução do Framework

O framework foi concebido para permitir evolução incremental.

Novos componentes podem ser adicionados sem impactar os existentes.

Exemplos:

* Template de Relatório Executivo;
* Template de Análise por Endpoint;
* Template de Plano de Testes;
* Template de Casos de Teste;
* Template de Automação;
* Template de Evidências.

---

# Governança

A manutenção do framework deverá considerar:

* controle de versões;
* revisão técnica;
* validação dos templates;
* atualização da metodologia;
* alinhamento com a OWASP API Security Top 10;
* compatibilidade com novas versões de IA Generativa.

---

# Diagrama de Responsabilidades

| Documento             | Responsabilidade             |
| --------------------- | ---------------------------- |
| Skill.md              | Define o comportamento da IA |
| Guia de Utilização.md | Orienta os usuários          |
| Prompt Mestre.md      | Controla a execução          |
| Templates             | Padronizam as saídas         |
| Configuração.md       | Define parâmetros            |
| Exemplos              | Demonstram o uso             |
| Arquitetura.md        | Documenta o framework        |

---

# Considerações Finais

A arquitetura do **QA REST API Test Designer** foi projetada para garantir consistência, reprodutibilidade e escalabilidade na utilização de IA Generativa aplicada à Engenharia de Qualidade.

A separação entre definição do Skill, execução, configuração, templates e exemplos reduz o acoplamento entre os componentes e facilita a evolução contínua do framework, permitindo sua adoção em diferentes projetos, equipes e domínios de APIs REST.

