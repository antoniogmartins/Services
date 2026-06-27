# Glossário

# QA REST API Test Designer

**Versão:** 1.0

---

# Objetivo

Este documento reúne os principais termos utilizados pelo framework **QA REST API Test Designer**, estabelecendo uma linguagem comum para todos os usuários do Skill.

O objetivo é padronizar conceitos e evitar ambiguidades durante a utilização da IA Generativa.

---

# A

## API

Interface de Programação de Aplicações (Application Programming Interface), responsável por permitir a comunicação entre sistemas.

---

## API REST

Arquitetura baseada em recursos acessados por meio do protocolo HTTP utilizando métodos como GET, POST, PUT, PATCH e DELETE.

---

## Autenticação

Processo responsável por verificar a identidade do cliente que realiza uma requisição.

Exemplos:

* JWT
* OAuth2
* Basic Authentication

---

## Autorização

Processo responsável por verificar se um usuário autenticado possui permissão para executar determinada operação.

---

# B

## BDD

Behavior Driven Development.

Abordagem para especificação de requisitos utilizando linguagem natural estruturada através do Gherkin.

---

## Broken Authentication

Vulnerabilidade relacionada à autenticação inadequada que permite acesso não autorizado.

---

## Broken Object Level Authorization (BOLA)

Falha de autorização em nível de objeto, permitindo acesso a recursos pertencentes a outros usuários.

É uma das principais vulnerabilidades da OWASP API Security Top 10.

---

# C

## Cenário

Descrição de um comportamento esperado do sistema.

Normalmente escrito em Gherkin.

---

## Collection

Arquivo do Postman contendo endpoints, requisições, variáveis e exemplos utilizados para consumir uma API.

---

## Cobertura de Testes

Percentual ou conjunto de funcionalidades validadas pelos testes.

Pode ser:

* funcional;
* negativa;
* não funcional;
* segurança.

---

## Concorrência

Execução simultânea de múltiplas requisições à API.

Utilizada em testes de desempenho.

---

## CRUD

Conjunto das operações básicas de persistência:

* Create
* Read
* Update
* Delete

---

# D

## Dados Inválidos

Entradas que não atendem às regras definidas pela API.

---

## Dados Válidos

Entradas compatíveis com as regras de negócio.

---

## Documentação

Conjunto de documentos que descrevem o funcionamento da API.

---

# E

## Endpoint

Recurso disponibilizado pela API.

Exemplo:

```text id="25ylm6"
/usuarios
```

---

## Escalabilidade

Capacidade da API de suportar aumento de carga sem perda significativa de desempenho.

---

# F

## Feature

Representa uma funcionalidade em Gherkin.

Exemplo:

```gherkin id="kwhzvv"
Feature: Cadastro de Usuários
```

---

## Fluxo Feliz (Happy Path)

Execução utilizando dados válidos, esperando sucesso da operação.

---

# G

## Gherkin

Linguagem utilizada para escrever cenários BDD.

Palavras-chave:

* Feature
* Scenario
* Given
* When
* Then
* And
* But

---

## Given

Estado inicial do cenário.

---

# H

## Header

Informações enviadas no cabeçalho da requisição HTTP.

Exemplos:

* Authorization
* Content-Type
* Accept

---

## HTTP

Protocolo utilizado para comunicação entre cliente e servidor.

---

# I

## Idempotência

Propriedade em que múltiplas execuções da mesma operação produzem o mesmo resultado.

Exemplo:

PUT.

---

## Injection

Categoria de vulnerabilidades que envolve inserção de comandos maliciosos em entradas da aplicação.

Inclui:

* SQL Injection
* NoSQL Injection

---

# J

## JWT

JSON Web Token.

Token utilizado para autenticação.

---

# L

## Lacuna

Área da cobertura de testes ainda não contemplada pelos cenários existentes.

---

# M

## Mass Assignment

Vulnerabilidade em que atributos internos podem ser modificados indevidamente através do payload enviado à API.

---

## Método HTTP

Operação executada sobre um recurso.

Principais métodos:

* GET
* POST
* PUT
* PATCH
* DELETE

---

# N

## Não Funcional

Categoria de testes relacionada ao comportamento da aplicação.

Exemplos:

* Performance
* Carga
* Stress
* Escalabilidade

---

# O

## OWASP API Security Top 10

Conjunto das principais vulnerabilidades de segurança para APIs publicado pela OWASP.

O framework utiliza essa referência como base para geração dos cenários de segurança.

---

# P

## Payload

Corpo da requisição HTTP.

Normalmente enviado em JSON.

---

## Performance

Capacidade da API de responder dentro dos tempos esperados.

---

## Postman

Ferramenta utilizada para criação, organização e execução de requisições HTTP.

---

## Premissa

Hipótese adotada quando determinada informação não está disponível na documentação.

Toda premissa deve ser explicitamente informada pelo Skill.

---

# Q

## QA

Quality Assurance.

Área responsável por garantir a qualidade do software.

---

# R

## Rate Limit

Limite de requisições permitido para um cliente em determinado intervalo de tempo.

---

## Regras de Negócio

Conjunto de restrições e comportamentos definidos pelo domínio da aplicação.

---

## Regras Implícitas

Regras não documentadas explicitamente, mas inferidas a partir da Collection, documentação ou comportamento esperado.

Toda regra implícita deve ser acompanhada da evidência utilizada para sua identificação.

---

## Regras Explícitas

Regras claramente descritas na documentação ou na Collection.

---

## Requisição

Mensagem enviada pelo cliente para consumir um endpoint da API.

---

## Resposta HTTP

Mensagem retornada pela API após o processamento da requisição.

---

## Retry

Nova tentativa automática de execução de uma requisição após falha temporária.

---

## Risk-Based Testing

Abordagem de testes baseada na identificação e priorização de riscos.

É a metodologia principal utilizada por este Skill.

---

# S

## Scenario

Representa um caso de teste em Gherkin.

---

## Segurança

Categoria de testes destinada a identificar vulnerabilidades na API.

---

## Skill

Conjunto estruturado de instruções, regras, metodologia e templates utilizados pela IA para executar uma tarefa especializada.

---

## Swagger / OpenAPI

Especificação padronizada utilizada para documentar APIs REST.

---

# T

## Template

Modelo reutilizável utilizado para padronizar documentos e saídas do framework.

---

## Teste Funcional

Valida se a API atende aos requisitos funcionais.

---

## Teste Negativo

Valida o comportamento da API diante de entradas inválidas ou condições inesperadas.

---

## Teste Não Funcional

Avalia atributos de qualidade como desempenho, disponibilidade e escalabilidade.

---

## Teste de Segurança

Avalia vulnerabilidades relacionadas à autenticação, autorização, validação de entrada e proteção de dados.

---

## Timeout

Tempo máximo permitido para resposta de uma requisição.

---

# V

## Vulnerabilidade

Falha que pode comprometer a segurança, integridade ou disponibilidade da API.

---

# Convenções Utilizadas pelo Framework

* Todos os cenários são escritos em Gherkin.
* Todos os riscos possuem classificação de severidade e prioridade.
* Toda regra implícita deve possuir evidência.
* Toda premissa deve ser explicitamente documentada.
* Toda saída deve seguir os templates oficiais do framework.

---

# Referências Conceituais

Este framework utiliza como principais referências:

* Behavior Driven Development (BDD)
* Risk-Based Testing (RBT)
* OWASP API Security Top 10
* OpenAPI Specification
* Postman Collections
* Engenharia de Qualidade
* Testes Funcionais
* Testes Não Funcionais
* Testes Exploratórios
* Engenharia de Prompt aplicada à IA Generativa

---

# Observações

Este glossário deve ser atualizado sempre que novos conceitos forem incorporados ao framework.

A adoção de uma terminologia padronizada contribui para a consistência das análises, facilita a comunicação entre equipes multidisciplinares e reduz ambiguidades durante a utilização do Skill.

