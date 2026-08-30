# 🧪 API Automation Framework — Java + REST Assured

[![Java](https://img.shields.io/badge/Java-17-orange?logo=openjdk)](https://www.oracle.com/java/)
[![REST Assured](https://img.shields.io/badge/REST%20Assured-6.0.1-green)](https://rest-assured.io/)
[![JUnit](https://img.shields.io/badge/JUnit-6.1.3-red?logo=junit5)](https://junit.org/)
[![Maven](https://img.shields.io/badge/Maven-Build-blue?logo=apachemaven)](https://maven.apache.org/)
[![JSON](https://img.shields.io/badge/JSON-Validation-lightgrey)](https://www.json.org/)
[![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-blue?logo=githubactions)](https://github.com/features/actions)

[![API Tests](https://github.com/antoniogmartins/Services/actions/workflows/api-tests.yml/badge.svg)](https://github.com/antoniogmartins/Services/actions/workflows/api-tests.yml)

> **API Automation Framework developed with Java and REST Assured, focused on functional API testing, data-driven testing, response validation, JSON processing, reusable components and continuous integration with GitHub Actions.**

---

# 🎯 Project Overview

This project is part of my **QA Automation portfolio** and demonstrates the implementation of an automated API testing framework using:

* Java 17
* REST Assured
* JUnit 6
* Maven
* JSONPath
* Apache Commons CSV
* Data-driven testing
* Parameterized Tests
* GitHub Actions

The main objective is to demonstrate how API automation can be structured using separation of responsibilities, externalized test data and reusable validation components.

The framework separates:

```text
API Communication
       ↓
Test Scenarios
       ↓
Test Data
       ↓
Response Extraction
       ↓
Validation
       ↓
Test Result
```

This approach improves:

* Maintainability
* Reusability
* Readability
* Scalability
* Test data management
* Validation consistency
* CI/CD integration

---

# 🏗️ Automation Architecture

The project follows a layered architecture:

```text
                         ┌─────────────────────────┐
                         │       TEST CASES        │
                         │                         │
                         │      JUnit Tests        │
                         └────────────┬────────────┘
                                      │
                                      ▼
                         ┌─────────────────────────┐
                         │       TEST DATA         │
                         │                         │
                         │       CSV Files         │
                         │                         │
                         │ Parameterized Tests     │
                         └────────────┬────────────┘
                                      │
                                      ▼
                         ┌─────────────────────────┐
                         │       API CLIENT        │
                         │                         │
                         │      REST Assured       │
                         │      HTTP Requests      │
                         └────────────┬────────────┘
                                      │
                                      ▼
                         ┌─────────────────────────┐
                         │          API            │
                         │                         │
                         │ GET / POST / PUT        │
                         │ PATCH / DELETE          │
                         └────────────┬────────────┘
                                      │
                                      ▼
                         ┌─────────────────────────┐
                         │        RESPONSE         │
                         │                         │
                         │ Status Code             │
                         │ Headers                 │
                         │ Body                    │
                         │ JSON                    │
                         └────────────┬────────────┘
                                      │
                                      ▼
                         ┌─────────────────────────┐
                         │       VALIDATOR         │
                         │                         │
                         │ Business Validations    │
                         │ Response Validation     │
                         │ Data Validation         │
                         └─────────────────────────┘
```

---

# 🧩 Architecture Principles

The framework avoids placing all automation logic directly inside test classes.

Each component has a specific responsibility:

```text
Client
   → API communication

Config
   → Test configuration

Tests
   → Test scenarios and assertions

Validator
   → Reusable validation rules

Utils
   → Test data reading and utilities

Impressao
   → Response/test output
```

This separation allows new endpoints and scenarios to be added without duplicating automation logic.

---

# 📁 Project Structure

```text
restassured/
│
├── src/
│   └── test/
│       ├── java/
│       │   └── com/
│       │       └── thecat/
│       │           │
│       │           ├── Client/
│       │           │   ├── buscarRecurso.java
│       │           │   ├── listartodosRecursos.java
│       │           │   ├── filtrarRecursos.java
│       │           │   ├── listarhierarquiaRecursos.java
│       │           │   ├── atualizarRecurso.java
│       │           │   └── deletarRecurso.java
│       │           │
│       │           ├── Config/
│       │           │   └── BaseTest.java
│       │           │
│       │           ├── Impressao/
│       │           │   └── Imprmir.java
│       │           │
│       │           ├── Tests/
│       │           │   ├── buscarRecursoTest.java
│       │           │   ├── listartodosRecursosTest.java
│       │           │   ├── fIltrarRecursosTest.java
│       │           │   ├── listarhierarquiaRecursosTest.java
│       │           │   ├── atualizarRecursoTest.java
│       │           │   └── deletarRecursoTest.java
│       │           │
│       │           ├── Utils/
│       │           │   └── TestDataReader.java
│       │           │
│       │           └── Validator/
│       │               └── validacoes.java
│       │
│       └── resources/
│           └── testdata/
│               ├── buscar_recurso.csv
│               ├── listar_todosrecursos.csv
│               ├── listar_filtrarecursos.csv
│               ├── listar_hierarquiarecursos.csv
│               ├── atualiza_recurso.csv
│               └── deletar_recurso.csv
│
├── .github/
│   └── workflows/
│       └── api-tests.yml
│
├── .gitignore
└── pom.xml
```

---

# 🧪 API Testing Strategy

The framework validates more than HTTP status codes.

The strategy considers multiple validation layers:

```text
API Request
     │
     ▼
HTTP Response
     │
     ├── Status Code
     │
     ├── Response Body
     │
     ├── JSON Fields
     │
     ├── JSONPath
     │
     └── Business Rules
```

The objective is to increase confidence in API behavior and returned data.

---

# 🔬 HTTP Layer Validation

The HTTP layer validates:

* HTTP method
* Status code
* Response behavior
* Content-Type
* Request configuration

Example:

```java
given()
    .contentType("application/json")
.when()
    .get("/posts/{id}", id)
.then()
    .statusCode(200);
```

---

# 📦 Response Body Validation

Response data is extracted using REST Assured and validated through reusable methods.

Example:

```java
String tituloAtual = resposta.jsonPath()
        .getString("title");

assertTrue(
        validator.validarTitulo(
                tituloEsperado,
                tituloAtual
        )
);
```

The framework validates:

* IDs
* Titles
* Bodies
* User IDs
* Quantities
* Relationships between resources
* Empty responses
* Expected response structures

---

# 🔎 JSONPath

JSONPath is used to extract information from API responses.

Example:

```java
Integer idResposta = resposta.jsonPath()
        .getInt("id");

String titulo = resposta.jsonPath()
        .getString("title");

String corpo = resposta.jsonPath()
        .getString("body");
```

Collections can also be queried:

```java
Integer quantidadeUserId = resposta.jsonPath()
        .getList(
                "findAll { it.userId == " + userId + " }"
        )
        .size();
```

This allows the tests to validate not only individual fields but also collections and relationships.

---

# 📊 Data-Driven Testing

The framework uses **CSV files as external test data**.

Example:

```csv
id,statusEsperado,tituloEsperado,corpoEsperado
1,200,"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
2,200,"qui est esse","est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
```

The test data is separated from the test implementation.

This allows new scenarios to be added by changing the data file instead of duplicating test methods.

---

# 🧰 TestDataReader

The `TestDataReader` is responsible for reading CSV files and converting the values into the types required by the tests.

The project uses **Apache Commons CSV** for CSV parsing.

Example:

```java
static Stream<Arguments> dadosBuscarRecurso() {

    return TestDataReader.lerCSV(
            "testdata/buscar_recurso.csv"
    );
}
```

The data is then provided to JUnit through:

```java
@ParameterizedTest
@MethodSource("dadosBuscarRecurso")
```

This creates a reusable data-driven testing mechanism.

---

# 🔄 Parameterized Tests

The framework uses JUnit parameterized tests to execute the same scenario with different datasets.

Example:

```java
@ParameterizedTest
@MethodSource("dadosBuscarRecurso")
public void getbuscarRecurso(
        int id,
        int statusEsperado,
        String tituloEsperado,
        String corpoEsperado) {
```

Conceptually:

```text
CSV
 │
 ├── Test Case 1
 │
 ├── Test Case 2
 │
 └── Test Case 3
       │
       ▼
Parameterized Test
       │
       ▼
Same automation logic
```

This reduces code duplication and improves scalability.

---

# 🛡️ Reusable Validation Layer

Validation logic is centralized in the `validacoes` class.

Example:

```java
public boolean validarId(int esperado, int atual) {
    return esperado == atual;
}

public boolean validarTitulo(
        String esperado,
        String atual) {

    return esperado.equals(atual);
}
```

For quantities:

```java
public boolean validarQuantidade(
        int quantidadeEsperada,
        int quantidadeAtual) {

    return quantidadeAtual == quantidadeEsperada;
}
```

This keeps test classes focused on test scenarios rather than implementation details.

---

# 🗑️ Empty Response Validation

The framework also validates APIs that return an empty JSON object.

Example API response:

```json
{}
```

The response is treated as a String:

```java
String resultadoAtual =
        resposta.asString().trim();
```

The expected value can be maintained in the CSV:

```csv
statusEsperado,resultadoEsperado
200,{}
```

And validated through the Validator:

```java
public boolean deletarecurso_id(
        String resultadoEsperado,
        String resultadoAtual) {

    return resultadoEsperado
            .trim()
            .equals(resultadoAtual.trim());
}
```

This keeps expected API behavior externalized in the test data.

---

# 🧪 Implemented API Scenarios

The framework currently contains automation for different API operations.

| Operation | Scenario                |
| --------- | ----------------------- |
| GET       | Search resource by ID   |
| GET       | List all resources      |
| GET       | Filter resources        |
| GET       | List resource hierarchy |
| PUT       | Update resource         |
| DELETE    | Delete resource         |

The scenarios validate both HTTP behavior and response data.

---

# 🔄 API Test Flow

```text
                     Test Data
                         │
                         ▼
                  Parameterized Test
                         │
                         ▼
                  Build HTTP Request
                         │
                         ▼
                  Execute API Call
                         │
                         ▼
                    Get Response
                         │
              ┌──────────┼──────────┐
              ▼          ▼          ▼
           Status       Body       JSON
              │          │          │
              └──────────┼──────────┘
                         ▼
                     Validator
                         │
                         ▼
                    Test Result
```

---

# 🧪 Positive and Negative Testing

The framework supports validation of successful and unsuccessful API scenarios.

## Positive scenarios

```text
✔ Valid resource
✔ Valid request
✔ Expected status code
✔ Expected response data
✔ Expected response structure
✔ Expected business rules
```

## Negative scenarios

```text
✔ Invalid resource
✔ Invalid parameters
✔ Missing information
✔ Error responses
✔ Unexpected API behavior
```

For negative scenarios, the framework can validate:

```text
HTTP Status
     +
Response Body
     +
Error Contract
```

---

# 📋 JSON Schema Validation

The project supports JSON Schema validation as an additional layer of API contract validation.

Schema validation can identify:

```text
❌ Missing required fields
❌ Incorrect data types
❌ Unexpected JSON structures
❌ Invalid response contracts
❌ Breaking response changes
```

This provides an additional level of confidence beyond status-code validation.

---

# ⚙️ CI/CD — GitHub Actions

The project is integrated with **GitHub Actions** for automated test execution.

The workflow can be triggered by:

* Push to `main`
* Pull Requests targeting `main`
* Manual workflow execution

## Pipeline

```text
                 Git Push / Pull Request
                           │
                           ▼
                    GitHub Actions
                           │
                           ▼
                       Checkout
                           │
                           ▼
                       Java 17
                           │
                           ▼
                    Maven Environment
                           │
                           ▼
                    Maven Validate
                           │
                           ▼
                     Test Compile
                           │
                           ▼
                  REST Assured Tests
                           │
                  ┌────────┴────────┐
                  ▼                 ▼
                PASS              FAIL
                  │                 │
                  ▼                 ▼
          Surefire Reports      Test Logs
                  │                 │
                  └────────┬────────┘
                           ▼
                         Artifact
```

Workflow:

```text
.github/workflows/api-tests.yml
```

---

# 📊 Test Execution

## Local Execution

Run the complete test suite:

```bash
mvn clean test
```

Expected result:

```text
Tests run: XX
Failures: 0
Errors: 0
Skipped: 0

BUILD SUCCESS
```

---

## Maven Validation

```bash
mvn validate
```

---

## Compile Tests

```bash
mvn test-compile
```

---

# 📎 Test Evidence

Test execution evidence can be stored in the repository or accessed through GitHub Actions artifacts.

Recommended structure:

```text
docs/
└── execution/
    ├── maven-test-success.png
    ├── github-actions-success.png
    └── api-response-validation.png
```

Evidence of successful execution is useful in a QA portfolio because it demonstrates that the automation is executable and integrated into CI.

---

# 🧰 Technology Stack

| Technology               | Purpose                         |
| ------------------------ | ------------------------------- |
| ☕ Java 17                | Programming language            |
| 🧪 REST Assured 6.0.1    | REST API automation             |
| 🔬 JUnit Jupiter 6.1.3   | Test framework                  |
| 📦 Maven                 | Build and dependency management |
| 📄 Apache Commons CSV    | Test data processing            |
| 🔎 JSONPath              | JSON extraction and validation  |
| 📋 JSON Schema Validator | API contract validation         |
| 🌱 Git                   | Version control                 |
| 🐙 GitHub                | Source code repository          |
| ⚙️ GitHub Actions        | Continuous Integration          |
| 📊 Maven Surefire        | Test execution and reports      |

---

# 📈 Quality Engineering Approach

The purpose of this project is not simply to automate HTTP requests.

The framework follows a **Quality Engineering mindset**:

```text
Requirements
     │
     ▼
Test Scenarios
     │
     ▼
Test Data
     │
     ▼
API Requests
     │
     ▼
Response Validation
     │
     ├── HTTP
     ├── JSON
     ├── JSONPath
     ├── Business Rules
     └── Contract
     │
     ▼
Test Evidence
     │
     ▼
Quality Decision
```

The goal is to provide fast, reliable and maintainable feedback about API quality throughout the software development lifecycle.

---

# 🚀 How to Run

## Prerequisites

Install:

```text
Java 17+
Maven 3.8+
Git
```

Verify Java:

```bash
java -version
```

Verify Maven:

```bash
mvn -version
```

---

## Clone Repository

```bash
git clone https://github.com/antoniogmartins/Services.git
```

Access the project:

```bash
cd Services/RestAssured/projeto01/restassured
```

---

## Run Tests

```bash
mvn clean test
```

---

# 📋 QA Automation Capabilities

## API Testing

```text
REST API Testing
Functional API Testing
Regression Testing
Positive Testing
Negative Testing
HTTP Validation
Request/Response Validation
JSON Validation
JSONPath
JSON Schema Validation
API Contract Validation
```

## Test Automation

```text
REST Assured
Java
JUnit
Maven
Assertions
Parameterized Tests
MethodSource
Data-Driven Testing
Apache Commons CSV
Reusable Components
Validation Layer
Maintainable Automation Architecture
```

## CI/CD

```text
GitHub Actions
Automated Test Execution
Maven CI Execution
Pull Request Validation
Test Artifacts
Continuous Integration
```

## Quality Engineering

```text
Test Strategy
Test Design
Shift-Left Testing
Regression Automation
API Contract Validation
Quality Gates Concepts
Continuous Feedback
Software Quality
```

---

# 🔑 ATS / Recruiter Keywords

```text
QA Automation
Quality Assurance
Software Testing
Test Automation
API Testing
REST API
REST Assured
Java
JUnit
Maven
JSON
JSONPath
JSON Schema
API Automation
Functional Testing
Regression Testing
Integration Testing
Positive Testing
Negative Testing
Data-Driven Testing
Parameterized Testing
API Contract Testing
CI/CD
Git
GitHub
GitHub Actions
Quality Engineering
Automated Testing
Test Strategy
Test Design
Assertions
API Validation
Continuous Integration
Apache Commons CSV
```

---

# 🧠 Senior QA Perspective

API automation is not limited to sending requests and checking status codes.

A robust automation solution should answer:

> **Does the API behave correctly, return the expected data, respect its contract and provide reliable feedback when something changes?**

Therefore, this framework considers multiple validation levels:

```text
HTTP
 │
 ├── Status Code
 ├── Headers
 └── Content-Type
       │
       ▼
Response
 │
 ├── JSON
 ├── Fields
 └── Business Data
       │
       ▼
Test Data
 │
 └── Expected Values
       │
       ▼
Validator
 │
 └── Reusable Rules
       │
       ▼
CI/CD
 │
 └── Automated Feedback
```

This approach reflects a **Quality Engineering mindset**, where automation is part of the overall software quality strategy.

---

# 🔮 Roadmap

The framework is continuously evolving. The next improvements planned are:

### 🔐 Authentication & Configuration

* ⬜ Authentication / JWT
* ⬜ Environment Configuration
* ⬜ Multiple API Environments
* ⬜ Environment Variables
* ⬜ Secure Configuration Management

### 🧪 Advanced Test Automation

* ⬜ Advanced Test Data Management
* ⬜ Advanced Contract Testing
* ⬜ Test Dependencies and Data Chaining
* ⬜ Request/Response Specifications
* ⬜ Reusable Request Builders
* ⬜ Advanced Negative Testing

### 📊 Reporting & Observability

* ⬜ Allure Reports
* ⬜ Advanced Logging
* ⬜ Enhanced Test Evidence
* ⬜ Test Execution Dashboard
* ⬜ Quality Metrics

### ⚡ Execution & Performance

* ⬜ Parallel Test Execution
* ⬜ Docker Execution
* ⬜ API Performance Testing
* ⬜ K6 Integration
* ⬜ Performance Results Integration

### 🚀 CI/CD & Quality Gates

* ⬜ Quality Gates
* ⬜ Branch Protection
* ⬜ Advanced GitHub Actions Pipelines
* ⬜ Automated Test Reports
* ⬜ Failure Notifications

### ☁️ Future Engineering Evolution

* ⬜ AWS Integration
* ⬜ Cloud-based Test Execution
* ⬜ Test Environment Provisioning
* ⬜ API Monitoring Integration

---

## ✅ Already Implemented

The following capabilities are already part of the framework:

* ✅ Java 17
* ✅ REST Assured
* ✅ JUnit
* ✅ Maven
* ✅ JSONPath
* ✅ JSON Schema Validation
* ✅ GitHub Actions
* ✅ Automated CI Execution
* ✅ Maven Surefire Reports
* ✅ Data-Driven Testing
* ✅ Parameterized Tests
* ✅ `@MethodSource`
* ✅ CSV Test Data
* ✅ Apache Commons CSV
* ✅ Automatic Test Data Type Conversion
* ✅ Reusable Validation Layer
* ✅ API Client Layer
* ✅ Separation of Test Data and Test Logic
* ✅ GET API Testing
* ✅ PUT API Testing
* ✅ DELETE API Testing
* ✅ Response Body Validation
* ✅ Collection Validation
* ✅ JSON Response Validation
* ✅ Empty JSON Response Validation

```

---

# 📚 Skills Demonstrated

This repository demonstrates practical knowledge of:

```text
✔ API Test Automation
✔ REST Assured
✔ Java 17
✔ JUnit
✔ Maven
✔ JSON / JSONPath
✔ Apache Commons CSV
✔ Data-Driven Testing
✔ Parameterized Tests
✔ Positive and Negative Testing
✔ API Contract Validation
✔ Response Validation
✔ Reusable Automation Components
✔ Separation of Responsibilities
✔ CI/CD with GitHub Actions
✔ Automated Test Execution
✔ Maven Surefire Reports
✔ Test Evidence
✔ Quality Engineering Practices
```

---

# 👨‍💻 About Me

## Antonio G. Martins

**QA Engineer | Quality Assurance | Test Automation | API Testing**

My technical background includes software quality, manual and automated testing, API testing, test automation and Quality Engineering.

### Technologies and Tools

```text
Java
REST Assured
Selenium
Cypress
Playwright
Robot Framework
Appium
Postman
JMeter
K6
SQL
Git
GitHub Actions
Jenkins
Docker
AWS
```

Focused on building reliable, maintainable and scalable automated testing solutions and contributing to software quality throughout the development lifecycle.

---

# 🔗 Repository

### GitHub

https://github.com/antoniogmartins/Services

### Project

https://github.com/antoniogmartins/Services/tree/main/RestAssured/projeto01/restassured

### GitHub Actions

https://github.com/antoniogmartins/Services/actions

---

# ⭐ Portfolio

This project is part of my **QA Automation portfolio** and demonstrates practical implementation of:

```text
API Automation
+
Data-Driven Testing
+
Response Validation
+
Reusable Architecture
+
CI/CD
+
Quality Engineering
```

Feel free to explore the repository and other QA automation projects.

---

# 📄 License

This project is intended for educational, technical demonstration and professional portfolio purposes.

