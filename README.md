# 🚀 Services — API Quality Engineering & Automation

![API](https://img.shields.io/badge/API-Quality%20Engineering-blue)
![API Testing](https://img.shields.io/badge/API-Testing-orange)
![API Automation](https://img.shields.io/badge/API-Automation-green)
![Java](https://img.shields.io/badge/Java-17-orange)
![REST Assured](https://img.shields.io/badge/REST%20Assured-6.x-red)
![Postman](https://img.shields.io/badge/Postman-API%20Testing-orange)
![Robot Framework](https://img.shields.io/badge/Robot%20Framework-API%20Automation-00c8a0)
![Python](https://img.shields.io/badge/Python-API%20Testing-blue)
![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-black)

> **Services** é um laboratório prático dedicado a **API Quality Engineering**, reunindo estudos, experimentos e projetos relacionados a testes, automação, engenharia de APIs e aplicação de Inteligência Artificial à qualidade de software.

---

# 🎯 Sobre o projeto

O **Services** foi criado para centralizar projetos práticos relacionados ao ciclo de qualidade de APIs.

O objetivo é demonstrar diferentes abordagens para validar, automatizar, analisar e evoluir APIs utilizando diferentes linguagens, ferramentas e estratégias de Quality Engineering.

A arquitetura conceitual do laboratório está organizada em cinco pilares:

```text
                          SERVICES
                             │
                  API QUALITY ENGINEERING
                             │
       ┌──────────┬─────────┼─────────┬──────────┐
       ▼          ▼         ▼         ▼          ▼
 API TESTING  API AUTOMATION  API DEVELOPMENT  API PERFORMANCE  API ENGINEERING
```

A aplicação de **AI / LLM / Agents** é tratada como uma capacidade transversal, podendo apoiar diferentes etapas do ciclo de qualidade.

---

# 🏗️ Arquitetura do ecossistema

## 1️⃣ API Testing

Validação funcional e exploratória de APIs utilizando ferramentas de teste e collections.

### Tecnologias e recursos atuais

* Postman
* Postman Collections
* Postman Environments
* HTTP
* REST APIs
* JSON
* Assertions
* Scripts
* Smoke Testing
* Testes positivos e negativos
* Validação de Status Code
* Validação de respostas
* Monitoramento de testes

### APIs utilizadas nos estudos

* Contact List API
* DummyJSON
* FakeStore API
* JSONPlaceholder
* Restful Booker

📂 Diretórios:

```text
Postman/
Collections/
```

---

# 2️⃣ API Automation

Automação de testes funcionais de APIs utilizando diferentes linguagens e frameworks.

## ☕ Java + REST Assured

Principal stack de automação do laboratório.

### Tecnologias utilizadas

* Java 17
* REST Assured
* JUnit
* Maven
* JSONPath
* Apache Commons CSV
* DTO
* Data Driven Testing
* Parameterized Tests
* MethodSource
* Response Validation
* Test Data
* GitHub Actions

### Projetos atuais

```text
RestAssured/
│
├── projeto01/
│   └── restassured01/
│
└── projeto02/
    └── restassured02/
```

### Projeto 01

Framework de automação de APIs com foco em:

* GET
* PUT
* DELETE
* CRUD
* Data Driven Testing
* CSV
* Parameterized Tests
* DTO
* JSONPath
* Response Validation
* Reusable Components
* CI/CD

📁 `RestAssured/projeto01/restassured01`

### Projeto 02

Automação de APIs com foco em:

* Autenticação
* CRUD
* Usuários
* Produtos
* Token
* Dynamic Test Data
* JavaFaker
* JSON
* JSONPath

📁 `RestAssured/projeto02/restassured02`

---

## 🤖 Robot Framework + Python

Automação de APIs utilizando Robot Framework.

### Recursos atuais

* Robot Framework
* Python
* API Testing
* HTTP
* JSON
* Keywords
* Test Cases
* API Validation
* Test Reports
* Execution Logs

📂 Diretório:

```text
Robotframework/
└── Projeto1/
```

O projeto contém arquivos `.robot` para validação de APIs e artefatos de execução, incluindo `log.html`, `report.html` e `output.xml`.

---

## 🐍 Python API Testing

O repositório também possui um projeto dedicado a testes de APIs utilizando Python.

📂 Diretório:

```text
Python/
└── projeto1/
```

### Projeto atual

O projeto utiliza Python para validação de uma REST API, contemplando cenários de cadastro, consulta, atualização, exclusão e validações de respostas.

---

# 3️⃣ API Development

Este pilar representa a evolução planejada do laboratório para o desenvolvimento de APIs próprias.

O objetivo é compreender também o lado de **API Development**, permitindo criar serviços que posteriormente poderão ser utilizados pelos próprios frameworks de testes.

### Tecnologias planejadas

```text
API Development
│
├── Spring Boot
├── Node.js / Express
└── Python / FastAPI
```

### Status

🔄 **Roadmap**

Ainda não representa projetos implementados no repositório.

---

# 4️⃣ API Performance

Área destinada à avaliação de desempenho das APIs.

### Tecnologias planejadas

* K6
* Apache JMeter

### Conceitos planejados

* Load Testing
* Stress Testing
* Performance Testing
* Response Time
* Throughput
* Concurrent Users
* Performance Baseline
* Thresholds
* Performance Reports

Arquitetura planejada:

```text
API Performance
│
├── K6
└── JMeter
```

### Status

🔄 **Roadmap**

---

# 5️⃣ API Engineering

Área destinada às práticas que complementam o desenvolvimento e a qualidade das APIs.

### Áreas

```text
API Engineering
│
├── Swagger / OpenAPI
├── JSON Schema
├── Contract Testing
├── CI/CD
├── Docker
├── Observability
└── Quality Gates
```

### Tecnologias planejadas ou em evolução

* Swagger
* OpenAPI
* JSON Schema
* Pact
* Git
* GitHub
* GitHub Actions
* Docker
* Contract Testing
* API Documentation
* Observability
* Quality Gates

### Status

🔄 **Em evolução**

Alguns conceitos já aparecem nos projetos existentes, enquanto outros serão implementados como projetos específicos ao longo do roadmap.

---

# 🤖 AI / LLM / Agents

A área de Inteligência Artificial representa uma frente experimental do laboratório.

O objetivo é investigar como **IA, LLMs e Agents podem apoiar atividades de Quality Engineering e API Automation**.

### Áreas de estudo

* LLM
* Prompt Engineering
* AI Agents
* Tools
* API Integration
* Requirements Analysis
* Test Case Generation
* Test Analysis
* Automated Test Generation
* QA Automation with AI

📂 Diretório:

```text
IA/
│
├── projeto1/
├── projeto2/
├── projeto3/
└── README.md
```

O Projeto 1 possui integração conceitual com REST Assured através do diretório `iarestassured`.

### Status

🔄 **Em desenvolvimento**

---

# 📂 Estrutura atual

```text
Services/
│
├── .github/
│   └── workflows/
│
├── Collections/
│
├── IA/
│   ├── projeto1/
│   ├── projeto2/
│   ├── projeto3/
│   └── README.md
│
├── Postman/
│   ├── collections/
│   ├── images/
│   └── readme.md
│
├── Python/
│   └── projeto1/
│
├── RestAssured/
│   ├── projeto01/
│   │   └── restassured01/
│   │
│   ├── projeto02/
│   │   └── restassured02/
│   │
│   └── readme.md
│
├── Robotframework/
│   └── Projeto1/
│
├── Wiki/
│
└── README.md
```

> A estrutura física é organizada principalmente por tecnologia e projeto. A organização conceitual por pilares é apresentada neste README e está documentada em [`Wiki/`](Wiki/).

---

# 🧪 Estratégia de Quality Engineering

O laboratório busca evoluir de uma abordagem focada apenas na execução de testes para uma visão mais ampla de **Quality Engineering**.

```text
Requirements
     │
     ▼
API Design
     │
     ▼
API Development
     │
     ▼
API Testing
     │
     ▼
API Automation
     │
     ▼
Contract Validation
     │
     ▼
Performance Testing
     │
     ▼
CI/CD
     │
     ▼
Observability
     │
     ▼
Quality Decision
```

Nem todas as etapas estão implementadas atualmente. O diagrama representa a **visão de evolução do laboratório**.

---

# 🔄 Evolução do laboratório

```text
API Testing
     │
     ▼
API Automation
     │
     ▼
API Development
     │
     ▼
API Performance
     │
     ▼
API Engineering
     │
     ▼
AI / LLM / Agents
```

Cada etapa será evoluída por meio de projetos práticos.

---

# 🛠️ Technology Stack

| Área              | Tecnologia        | Status                |
| ----------------- | ----------------- | --------------------- |
| API Testing       | Postman           | ✅                     |
| API Testing       | Collections       | ✅                     |
| API Automation    | REST Assured      | ✅                     |
| API Automation    | Robot Framework   | ✅                     |
| API Testing       | Python            | ✅                     |
| Programming       | Java 17           | ✅                     |
| Programming       | Python            | ✅                     |
| Build             | Maven             | ✅                     |
| Test Framework    | JUnit             | ✅                     |
| CI/CD             | GitHub Actions    | ✅                     |
| API Development   | Spring Boot       | 🔄 Roadmap            |
| API Development   | Node.js / Express | 🔄 Roadmap            |
| API Development   | FastAPI           | 🔄 Roadmap            |
| Performance       | K6                | 🔄 Roadmap            |
| Performance       | JMeter            | 🔄 Roadmap            |
| Documentation     | Swagger / OpenAPI | 🔄 Evolução           |
| Schema Validation | JSON Schema       | 🔄 Evolução           |
| Contract Testing  | Pact              | 🔄 Roadmap            |
| Containers        | Docker            | 🔄 Roadmap            |
| AI                | LLM / Agents      | 🔄 Em desenvolvimento |

---

# 📚 Projetos atuais

## REST Assured

Projetos de automação de APIs utilizando Java + REST Assured.

```text
RestAssured/
├── projeto01/
│   └── restassured01/
│
└── projeto02/
    └── restassured02/
```

---

## Postman

Projeto de API Testing utilizando collections, cenários funcionais, smoke tests e execução automatizada.

```text
Postman/
├── collections/
├── images/
└── readme.md
```

---

## Collections

Coleção de ambientes e collections utilizadas nos estudos de API Testing.

```text
Collections/
├── DummyJson
├── FakeStoreAPI
├── JsonPlaceHolder
└── RestfulBooker
```

---

## Robot Framework

Projeto de automação de APIs utilizando Robot Framework.

```text
Robotframework/
└── Projeto1/
```

---

## Python

Projeto de testes de REST API utilizando Python.

```text
Python/
└── projeto1/
```

---

## AI / LLM

Projetos experimentais de Inteligência Artificial aplicada à qualidade e automação.

```text
IA/
├── projeto1/
├── projeto2/
└── projeto3/
```

---

# 📖 Documentação

A documentação conceitual e técnica do projeto está organizada no diretório **`Wiki/`**, utilizando arquivos Markdown versionados junto ao código.

📚 **[Acessar a documentação do Services](Wiki/README.md)**

A documentação acompanha a evolução do laboratório e está organizada de acordo com os principais pilares do projeto:

```text
Services Documentation
│
├── 🏠 Home
│
├── 1️⃣ API Testing
│   ├── Postman
│   └── Collections
│
├── 2️⃣ API Automation
│   ├── REST Assured
│   │   ├── Projeto 01
│   │   └── Projeto 02
│   │
│   ├── Robot Framework
│   └── Python
│
├── 3️⃣ API Development
│   ├── Spring Boot
│   ├── Node.js / Express
│   └── Python / FastAPI
│
├── 4️⃣ API Performance
│   ├── K6
│   └── JMeter
│
└── 5️⃣ API Engineering
    ├── Swagger / OpenAPI
    ├── JSON Schema
    ├── Contract Testing
    ├── CI/CD
    ├── Docker
    └── Observability
```

> A documentação será evoluída juntamente com os projetos, mantendo o conhecimento técnico versionado dentro do próprio repositório.

---

# 🎯 Objetivos

* Desenvolver conhecimento prático em API Testing
* Construir frameworks de API Automation
* Aprofundar Java e REST Assured
* Trabalhar com Robot Framework e Python
* Explorar diferentes estratégias de validação de APIs
* Desenvolver APIs para utilização nos testes
* Aprender Performance Testing
* Implementar Contract Testing
* Evoluir CI/CD
* Explorar AI / LLM aplicada à qualidade
* Desenvolver Agents e Tools para automação
* Construir uma arquitetura de API Quality Engineering

---

# 📈 Roadmap

```text
✅ API Testing
      │
      ▼
✅ API Automation
      │
      ▼
🔄 API Development
      │
      ▼
🔄 API Performance
      │
      ▼
🔄 API Engineering
      │
      ▼
🔄 AI / LLM / Agents
```

### Legenda

```text
✅ Implementado / existente
🔄 Em desenvolvimento ou roadmap
```

---

# 👨‍💻 Sobre

Este repositório faz parte do meu laboratório prático de **API Testing, API Automation e Quality Engineering**, com foco no desenvolvimento contínuo de competências técnicas através de projetos práticos.

A proposta é transformar conhecimento teórico em implementações reais, evoluindo progressivamente de testes de APIs para automação, desenvolvimento, performance, engenharia de APIs e aplicação de Inteligência Artificial.

---

## ⭐ Tecnologias em destaque

**API Testing · API Automation · Java · REST Assured · JUnit · Maven · Robot Framework · Python · Postman · JSON · JSONPath · GitHub Actions · API Engineering · AI · LLM · Agents**

---

> **Quality Engineering is not only about finding defects.
> It is about building confidence in software.**

