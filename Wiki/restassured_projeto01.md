# ☕ REST Assured — Projeto 01

Projeto de automação de testes de APIs REST utilizando Java e REST Assured.

---

# 🎯 Objetivo

Demonstrar uma estrutura organizada de automação capaz de:

* Executar requests
* Validar responses
* Trabalhar com diferentes métodos HTTP
* Utilizar dados externos
* Executar testes parametrizados
* Centralizar configurações
* Separar responsabilidades

---

# 🛠️ Tecnologias

| Tecnologia     | Utilização        |
| -------------- | ----------------- |
| Java 17        | Linguagem         |
| REST Assured   | Automação de APIs |
| JUnit          | Testes            |
| Maven          | Build             |
| Jackson        | JSON              |
| JSONPath       | Navegação JSON    |
| Commons CSV    | Test Data         |
| GitHub Actions | CI/CD             |

---

# 🧱 Arquitetura

```text
src
│
├── main
│   └── Client
│
└── test
    ├── Config
    ├── DTO
    ├── Tests
    ├── Utils
    └── Validator
```

---

# 🧪 Operações

Os testes contemplam operações como:

```text
POST
GET
PUT
DELETE
```

Também são utilizados:

* Path Parameters
* Query Parameters
* Response Validation
* Test Data

---

# 📊 Data Driven Testing

Os dados de teste podem ser separados do código através de arquivos CSV.

Fluxo:

```text
CSV
 ↓
TestDataReader
 ↓
Parameterized Test
 ↓
API Request
 ↓
Validation
```

---

# 🔄 Fluxo de execução

```text
Maven
  ↓
JUnit
  ↓
Base Test
  ↓
Configuration
  ↓
API Client
  ↓
REST Assured
  ↓
API
  ↓
Assertions
```

---

# 🚀 CI/CD

O projeto possui integração com GitHub Actions para execução automatizada dos testes.

A evolução planejada contempla:

* Reports
* Quality Gates
* Artifacts
* Test Results
* Observability

---

# 📚 Próximos estudos

* JSON Schema
* Contract Testing
* Allure
* Docker
* Performance Testing
* Advanced REST Assured
* Design Patterns

