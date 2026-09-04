# Services — QA, API Testing & Automation

> Documentação técnica, estudos práticos e projetos relacionados a **Quality Assurance, API Testing, API Automation, API Development, Performance Testing e AI/LLM**.

---

## 📚 Sobre esta documentação

Esta Wiki reúne conhecimentos, práticas, exemplos e projetos relacionados ao desenvolvimento e à qualidade de **APIs e serviços**, com foco em automação de testes e engenharia de qualidade.

O conteúdo foi organizado para servir tanto como **material de estudo** quanto como **referência técnica e portfólio profissional**.

A documentação aborda diferentes etapas do ciclo de qualidade de uma API:

```text
API Testing
     │
     ├── Testes manuais
     │
     ├── API Automation
     │       ├── REST Assured
     │       ├── Robot Framework
     │       └── Python
     │
     ├── API Development
     │
     ├── API Performance
     │
     ├── API Engineering
     │
     └── AI / LLM / Agents
```

---

# 🧪 API Testing

Fundamentos e práticas para validação de APIs REST.

### Conteúdos

* [API Testing](./apitesting.md)
* [Postman](./postman.md)

### Principais conceitos

* APIs REST
* HTTP Methods
* Request e Response
* Headers
* Status Codes
* Query Parameters
* Path Parameters
* Request Body
* Response Body
* JSON
* Validações
* Testes positivos e negativos
* Cenários de erro

---

# 🤖 API Automation

Automação de testes de APIs utilizando diferentes tecnologias e abordagens.

* [API Automation](./apiautomation.md)
* [REST Assured](./restassured.md)
* [REST Assured — Projeto 01](./restassured_projeto01.md)
* [REST Assured — Projeto 02](./restassured_projeto02.md)
* [Robot Framework — API Testing](./robot_framework_api.md)
* [Python — API Testing](./python_api_testing.md)

### Objetivo

A automação busca transformar cenários de teste em uma suíte reutilizável, confiável e integrada ao processo de desenvolvimento.

```text
Test Case
   ↓
Automation
   ↓
Execution
   ↓
Validation
   ↓
Report
   ↓
Feedback
```

---

# ☕ REST Assured

O **REST Assured** é utilizado nesta documentação como uma das principais ferramentas para automação de testes de APIs utilizando Java.

A documentação aborda desde os fundamentos até projetos práticos.

### Conteúdos

**Fundamentos**

[REST Assured](./restassured.md)

**Projeto 01**

[REST Assured — Projeto 01](./restassured_projeto01.md)

**Projeto 02**

[REST Assured — Projeto 02](./restassured_projeto02.md)

### Conceitos trabalhados

* GET
* POST
* PUT
* DELETE
* Path Parameters
* Query Parameters
* Headers
* Request Body
* Response Body
* Status Code
* Assertions
* JSON
* Organização de testes
* Reutilização de código
* Configuração de ambientes
* Dados de teste
* Execução automatizada

---

# 🧰 Ferramentas e Tecnologias

A documentação utiliza diferentes ferramentas para demonstrar abordagens de teste, automação e desenvolvimento de APIs.

| Área            | Tecnologias         |
| --------------- | ------------------- |
| API Testing     | REST / HTTP / JSON  |
| API Automation  | REST Assured        |
| Java            | Java                |
| API Testing     | Postman             |
| Automation      | Robot Framework     |
| Automation      | Python              |
| API Development | API / Services      |
| Performance     | Performance Testing |
| Engineering     | API Engineering     |
| AI              | LLM / AI Agents     |

---

# 🏗️ API Development

Conteúdos relacionados ao desenvolvimento e à construção de APIs e serviços.

* [API Development](./apidevelopment.md)

### Objetivos

* Compreender a estrutura de uma API
* Entender endpoints e recursos
* Trabalhar com requisições e respostas
* Compreender contratos de API
* Facilitar a integração entre desenvolvimento e QA
* Criar APIs que possam ser utilizadas como alvo de testes automatizados

---

# ⚡ API Performance

Testes relacionados ao comportamento de APIs sob diferentes condições de carga.

* [API Performance](./apiperformance.md)

### Principais objetivos

```text
Performance Testing
       │
       ├── Response Time
       ├── Throughput
       ├── Concurrent Users
       ├── Load
       ├── Stress
       └── Stability
```

A análise de performance complementa os testes funcionais, permitindo avaliar não apenas se a API funciona corretamente, mas também **como ela se comporta sob carga**.

---

# 🔧 API Engineering

Conteúdos relacionados à visão mais ampla de engenharia aplicada a APIs.

* [API Engineering](./apiengineering.md)

A proposta é conectar:

```text
Development
     +
Testing
     +
Automation
     +
Performance
     +
Quality
     +
CI/CD
```

O objetivo é aproximar a atividade de QA de uma visão de **Quality Engineering**, indo além da execução de casos de teste.

---

# 🧠 AI / LLM / Agents

Conteúdos relacionados à aplicação de Inteligência Artificial, Large Language Models e Agents em contextos de engenharia e qualidade de software.

* [AI / LLM / Agents](./ai_llm_agents.md)

### Possíveis aplicações

```text
LLM / AI
   │
   ├── Geração de cenários
   ├── Análise de requisitos
   ├── Geração de testes
   ├── Análise de respostas
   ├── Automação
   ├── Agents
   └── Tools
```

A proposta é explorar como IA pode apoiar atividades de **QA, automação e engenharia de software**.

---

# 🗺️ Learning Path

Para quem está começando com testes de API e deseja evoluir para automação, uma sequência recomendada é:

### 01 — Fundamentos

[API Testing](./apitesting.md)

↓

### 02 — Testes manuais de API

[Postman](./postman.md)

↓

### 03 — Automação

[API Automation](./apiautomation.md)

↓

### 04 — REST Assured

[REST Assured](./restassured.md)

↓

### 05 — Projeto prático

[REST Assured — Projeto 01](./restassured_projeto01.md)

↓

### 06 — Evolução do framework

[REST Assured — Projeto 02](./restassured_projeto02.md)

↓

### 07 — Outras abordagens

[Robot Framework](./robot_framework_api.md)

[Python API Testing](./python_api_testing.md)

↓

### 08 — Performance

[API Performance](./apiperformance.md)

↓

### 09 — Engineering

[API Engineering](./apiengineering.md)

↓

### 10 — AI / LLM

[AI / LLM / Agents](./ai_llm_agents.md)

---

# 📂 Estrutura da Wiki

```text
Wiki/
│
├── _Slidebar.md
│
├── readme.md
│
├── apitesting.md
├── postman.md
│
├── apiautomation.md
├── restassured.md
├── restassured_projeto01.md
├── restassured_projeto02.md
├── robot_framework_api.md
├── python_api_testing.md
│
├── apidevelopment.md
├── apiperformance.md
├── apiengineering.md
│
└── ai_llm_agents.md
```

---

# 🎯 Objetivo

Esta documentação está em evolução contínua e tem como objetivo registrar conhecimento prático sobre:

**Quality Assurance → API Testing → Automation → Engineering → Performance → AI**

Mais do que apresentar ferramentas isoladamente, a proposta é demonstrar como essas tecnologias podem ser combinadas para construir uma abordagem moderna de **Quality Engineering**.

---

## 🔗 Repositório

Este conteúdo faz parte do repositório:

**Services**

https://github.com/antoniogmartins/Services

---

## 👨‍💻 Sobre

Documentação desenvolvida como parte de uma jornada prática de estudos, experimentação e construção de soluções relacionadas a:

* Quality Assurance
* Software Testing
* API Testing
* API Automation
* Java
* REST Assured
* Python
* Robot Framework
* Performance Testing
* API Engineering
* AI / LLM / Agents

---

> **Quality is not just about finding defects.
> It is about building software that can be trusted.**

