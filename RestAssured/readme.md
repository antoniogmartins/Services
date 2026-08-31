# 🔮 Roadmap

## ✅ Implementado

* Java 17
* REST Assured 6.0.1
* JUnit 6
* Maven
* JSONPath
* Data Driven Testing
* Parameterized Tests
* CSV Test Data Management
* Centralized Test Data Reader
* Environment Configuration
* Multiple API Environment Support
* Request DTOs
* Response DTOs
* Object Serialization / Deserialization
* Centralized Validators
* REST API CRUD Testing
* GET, POST, PUT and DELETE automation
* Path Parameters
* Query Parameters
* Request Body using DTOs
* Response validation using DTOs
* API status code validation
* Response data validation
* Git / GitHub
* Base Test configuration

### 📋 Automated API Scenarios

The framework currently contains automated tests for:

1. `buscarRecursoTest`
2. `listarTodosRecursosTest`
3. `filtrarRecursosTest`
4. `listarHierarquiaRecursosTest`
5. `criarRecursoTest`
6. `atualizarRecursoTest`
7. `deletarRecursoTest`

All seven test classes use JUnit parameterization and CSV-based test data.

---

## 🚧 Em evolução

* Refactoring of Client classes
* Reduction of duplicated REST Assured configuration
* Standardization of Request DTOs
* Standardization of Response DTOs
* Improved test data mapping
* Advanced response validations
* JSON Schema Validation
* Contract Testing
* Authentication / JWT
* Advanced environment management

---

## 🚀 Próximas evoluções

* GitHub Actions
* Automated CI execution
* Maven Surefire Reports
* Allure Reports
* Parallel Test Execution
* Docker Execution
* API Performance Testing
* K6 Integration
* Quality Gates
* Branch Protection
* Test Dashboard
* API Contract Testing
* Advanced logging
* Test execution configuration by environment

---

## 🏗️ Current Architecture

```text
                    ┌─────────────────────┐
                    │        CSV          │
                    │    Test Data        │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   TestDataReader    │
                    │   Data Conversion   │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      Test Class     │
                    │  ParameterizedTest  │
                    └──────────┬──────────┘
                               │
                     Request DTO
                               │
                               ▼
                    ┌─────────────────────┐
                    │       Client        │
                    │    REST Assured     │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │       REST API      │
                    └──────────┬──────────┘
                               │
                            Response
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Response DTO      │
                    │ Deserialization     │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │     Validator       │
                    │  Business Rules     │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      JUnit          │
                    │    Assertions       │
                    └─────────────────────┘
```

---

## 🎯 Project Objective

The objective of this project is to demonstrate a maintainable and scalable API automation framework using Java and REST Assured.

The framework is being evolved progressively from simple API tests into a structured automation architecture, applying concepts such as:

* Separation of responsibilities
* Data Driven Testing
* Parameterized Tests
* DTO Pattern
* Serialization and Deserialization
* Environment Configuration
* Centralized Validation
* API Client abstraction
* Continuous Integration
* Reporting and observability

The goal is not simply to automate API requests, but to build an automation framework that can be **maintained, extended, executed in CI/CD and evolved according to real-world QA Engineering practices**.

