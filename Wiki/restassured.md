# 🚀 API Automation Testing — Java + REST Assured

Repositório dedicado ao desenvolvimento de **automação de testes de APIs REST**, utilizando **Java + REST Assured + JUnit 5 + Maven**, com evolução progressiva de conceitos fundamentais de API Testing para uma arquitetura de automação mais estruturada.

Este módulo faz parte do meu laboratório prático de **QA Automation / SDET**, reunindo dois projetos que representam diferentes etapas de evolução no desenvolvimento de testes automatizados de APIs.

---

# 📚 Projetos

# 🧪 Projeto 01 — API Automation Framework

**Localização:**

`RestAssured/projeto01/restassured01`

Projeto focado na construção de uma estrutura de automação de APIs com maior separação de responsabilidades e aplicação de boas práticas de engenharia de testes.

Principais conceitos implementados:

* Java 17
* REST Assured
* JUnit 5
* Maven
* API Testing
* CRUD
* API Clients
* Request DTOs
* Response DTOs
* JSON / JSONPath
* Serialization / Deserialization
* Data Driven Testing
* CSV para massa de testes
* Parameterized Tests
* Centralização da configuração das requisições
* Validators
* Test Data Reader
* GitHub Actions
* Preparação para testes de performance com K6
* Estrutura preparada para evolução para Contract Testing
* Reporting e Quality Gates

### 🔗 Acessar Projeto 01

[📂 Projeto 01 — RestAssured01](https://github.com/antoniogmartins/Services/blob/main/Wiki/restassured_projeto01.md)

---

# 🔐 Projeto 02 — API Automation com Autenticação

**Localização:**

`RestAssured/projeto02/restassured02`

Projeto focado na automação de APIs REST envolvendo **autenticação, usuários e produtos**, utilizando dados estáticos e geração dinâmica de massa de testes.

Principais conceitos implementados:

* Java 17
* REST Assured 6.0.1
* JUnit 5
* Maven
* JavaFaker
* GET
* POST
* PUT
* DELETE
* HTTP Status Codes
* Headers
* Request Body
* Response Body
* JSON
* JSONPath
* Autenticação por token
* Extração de Access Token
* API protegida
* Massa de dados dinâmica
* Massa de dados estática
* Assertions
* Reutilização de código

### 🔗 Acessar Projeto 02

[📂 Projeto 02 — RestAssured02](https://github.com/antoniogmartins/Services/blob/main/Wiki/restassured_projeto02.md)

---

# 🏗️ Evolução dos Projetos

Os dois projetos representam uma evolução prática na construção de uma solução de automação de APIs.

```text
                  API AUTOMATION
                       │
                       ▼
              ┌──────────────────┐
              │    Projeto 01    │
              │                  │
              │ CRUD             │
              │ DTOs             │
              │ API Clients      │
              │ Data Driven      │
              │ Parameterized    │
              │ Validators       │
              │ CI/CD            │
              └────────┬─────────┘
                       │
                       ▼
              ┌──────────────────┐
              │    Projeto 02    │
              │                  │
              │ Authentication   │
              │ Access Token     │
              │ Users            │
              │ Products         │
              │ Dynamic Data     │
              │ JavaFaker        │
              └──────────────────┘
                       │
                       ▼
             QA AUTOMATION / SDET
```

---

# 🧩 Tecnologias

| Tecnologia        | Utilização                            |
| ----------------- | ------------------------------------- |
| ☕ Java 17         | Linguagem de programação              |
| 🧪 REST Assured   | Automação de APIs REST                |
| ✅ JUnit 5         | Execução e organização dos testes     |
| 📦 Maven          | Build e gerenciamento de dependências |
| 🎲 JavaFaker      | Geração de dados de teste             |
| 🔎 JSONPath       | Extração e validação de dados         |
| 🔀 Git            | Controle de versão                    |
| 🐙 GitHub         | Hospedagem do código                  |
| ⚙️ GitHub Actions | Automação de CI/CD                    |
| 📈 K6             | Testes de performance                 |

---

# 🎯 Objetivos de Aprendizado

Os projetos foram desenvolvidos com o objetivo de praticar e demonstrar conhecimentos em:

### API Testing

* REST API
* HTTP
* HTTP Methods
* Status Codes
* Headers
* Request / Response
* JSON
* JSONPath
* Query Parameters
* Path Parameters
* Authentication

### Automation

* REST Assured
* Java
* JUnit
* Maven
* Assertions
* Reutilização de código
* Organização de testes
* Massa de dados

### Framework Design

* API Clients
* DTOs
* Configuration
* Validators
* Test Data
* Data Driven Testing
* Parameterized Tests
* Serialization / Deserialization

### DevOps / Quality Engineering

* Git
* GitHub
* GitHub Actions
* CI/CD
* Performance Testing
* Reporting
* Contract Testing
* Quality Gates

---

# 📊 Comparativo dos Projetos

| Característica      | Projeto 01 | Projeto 02 |
| ------------------- | :--------: | :--------: |
| Java                |      ✅     |      ✅     |
| REST Assured        |      ✅     |      ✅     |
| JUnit 5             |      ✅     |      ✅     |
| Maven               |      ✅     |      ✅     |
| GET                 |      ✅     |      ✅     |
| POST                |      ✅     |      ✅     |
| PUT                 |      ✅     |      ✅     |
| DELETE              |      ✅     |      ✅     |
| CRUD                |      ✅     |      ✅     |
| JSONPath            |      ✅     |      ✅     |
| DTO                 |      ✅     |      —     |
| API Client          |      ✅     |      —     |
| Data Driven         |      ✅     |      —     |
| Parameterized Tests |      ✅     |      —     |
| CSV Test Data       |      ✅     |      —     |
| Authentication      |      —     |      ✅     |
| Access Token        |      —     |      ✅     |
| Users API           |      —     |      ✅     |
| Products API        |      —     |      ✅     |
| JavaFaker           |      —     |      ✅     |
| GitHub Actions      |      ✅     |      —     |
| K6                  |      ✅     |      —     |

---

# 🗂️ Estrutura

```text
RestAssured/
│
├── README.md
│
├── projeto01/
│   └── restassured01/
│       ├── pom.xml
│       ├── src/
│       ├── k6/
│       ├── dashboards/
│       └── .github/
│
└── projeto02/
    └── restassured02/
        ├── pom.xml
        ├── src/
        ├── .gitignore
        └── README.md
```

---

# ▶️ Como executar

## Pré-requisitos

* Java JDK 17+
* Maven 3.8+
* Git
* IDE de sua preferência

Verifique as instalações:

```bash
java -version
mvn -version
git --version
```

## Clonar o repositório

```bash
git clone https://github.com/antoniogmartins/Services.git
```

---

## Executar o Projeto 01

```bash
cd Services/RestAssured/projeto01/restassured01
```

Executar os testes:

```bash
mvn clean test
```

---

## Executar o Projeto 02

```bash
cd Services/RestAssured/projeto02/restassured02
```

Executar os testes:

```bash
mvn clean test
```

---

# 🧭 Roadmap de Evolução

A proposta deste laboratório é evoluir progressivamente a automação:

```text
API Testing
     ↓
REST Assured
     ↓
Java
     ↓
JUnit
     ↓
API Clients
     ↓
DTOs
     ↓
Data Driven Testing
     ↓
Parameterized Tests
     ↓
Authentication
     ↓
Contract Testing
     ↓
Performance Testing
     ↓
Reporting
     ↓
CI/CD
     ↓
Quality Gates
     ↓
Quality Engineering
```

---

# 📖 Documentação

Os detalhes de implementação de cada projeto estão disponíveis em seus respectivos diretórios.

### Projeto 01

[📂 Documentação do Projeto 01]((https://github.com/antoniogmartins/Services/blob/main/Wiki/restassured_projeto01.md)

### Projeto 02

[📂 Documentação do Projeto 02](https://github.com/antoniogmartins/Services/blob/main/Wiki/restassured_projeto02.md)

---

# 👨‍💻 Autor

**Antonio Gonçalves Martins**

QA Automation | Quality Assurance | API Testing | SDET

Experiência e estudos em:

* API Testing
* REST Assured
* Java
* Selenium
* Cypress
* Playwright
* Robot Framework
* JMeter
* K6
* Postman
* CI/CD
* GitHub Actions

---

## ⭐ Objetivo

Este laboratório demonstra uma jornada prática de evolução em **QA Automation**, partindo de testes de APIs REST e avançando para conceitos de arquitetura de frameworks, automação, dados de teste, autenticação, CI/CD, performance e Quality Engineering.

⭐ Se este projeto foi útil, considere deixar uma estrela no repositório.

