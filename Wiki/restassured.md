# ☕ REST Assured

O **REST Assured** é utilizado no Services como principal framework para automação de testes de APIs REST utilizando Java.

---

# 🎯 Objetivos

Os projetos buscam desenvolver conhecimento em:

* HTTP
* REST
* Request
* Response
* Headers
* Parameters
* Authentication
* JSON
* JSONPath
* Serialization
* Deserialization
* Assertions
* Test Data
* Data Driven Testing
* CI/CD

---

# 🛠️ Stack

```text
Java 17
REST Assured
JUnit
Maven
Jackson
JSONPath
Apache Commons CSV
GitHub Actions
```

---

# 📁 Projetos

```text
RestAssured
│
├── projeto01
│   └── restassured01
│
└── projeto02
    └── restassured02
```

---

# 🧪 Projeto 01

Foco em arquitetura e organização de um framework de automação.

Principais conceitos:

* API Client
* Base Test
* Configuration
* DTO
* Validators
* Test Data
* CSV
* Parameterized Tests
* MethodSource
* Response Validation

[Ver Projeto 01](REST-Assured-Projeto-01)

---

# 🔐 Projeto 02

Foco em autenticação e manipulação de recursos.

Fluxo principal:

```text
Login
  ↓
Token
  ↓
Usuário
  ↓
Produto
  ↓
API
```

[Ver Projeto 02](REST-Assured-Projeto-02)

---

# 🏗️ Arquitetura desejada

```text
Tests
  ↓
Client
  ↓
Configuration
  ↓
REST Assured
  ↓
API
  ↓
Response
  ↓
Validator
```

Essa separação permite reduzir duplicação e facilitar manutenção.

---

# 🚀 Evolução

Próximas evoluções:

* Fluent API Clients
* Specification Pattern
* Advanced DTOs
* JSON Schema
* Contract Testing
* Allure
* Docker
* CI/CD Quality Gates
* Performance Testing

