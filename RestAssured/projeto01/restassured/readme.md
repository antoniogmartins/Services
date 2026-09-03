# 🚀 API Automation Tests

![Java](https://img.shields.io/badge/Java-17-orange?logo=openjdk)
![Rest Assured](https://img.shields.io/badge/Rest%20Assured-6.0.1-green)
![JUnit](https://img.shields.io/badge/JUnit-6-red?logo=junit5)
![Maven](https://img.shields.io/badge/Maven-Build-blue?logo=apachemaven)
![GitHub Actions](https://img.shields.io/github/actions/workflow/status/antoniogmartins/Services/api-tests.yml?label=API%20Tests\&logo=githubactions)
![K6](https://img.shields.io/badge/K6-Performance%20Testing-7D64FF?logo=k6)
![License](https://img.shields.io/badge/License-MIT-yellow)

> **API Automation Framework built with Java + REST Assured + JUnit, focused on maintainability, data-driven testing, DTO-based requests/responses, CI/CD and performance testing.**

---

# 📌 About the Project

This project is an API Automation Testing framework developed using **Java, REST Assured, JUnit and Maven**.

The framework was designed to evolve progressively from simple API tests into a more complete Quality Engineering solution, incorporating:

* Functional API Testing
* CRUD testing
* Data Driven Testing
* Parameterized Tests
* Request DTOs
* Response DTOs
* Centralized Request Configuration
* Environment Configuration
* Response Deserialization
* Custom Validators
* CSV-based test data
* CI/CD
* Performance Testing with K6
* Reporting
* Dashboards
* Contract Testing
* Observability
* Quality Gates

The API used in the current functional automation layer is based on **JSONPlaceholder**.

---

# 🎯 Project Goals

The main objective is to build a maintainable API automation framework following good software engineering and QA practices.

The project demonstrates how an API automation solution can evolve from:

```text
Simple API Test
      ↓
Reusable Client
      ↓
Request DTO
      ↓
Response DTO
      ↓
Data Driven Testing
      ↓
Centralized Configuration
      ↓
CI/CD
      ↓
Performance Testing
      ↓
Reporting & Dashboards
      ↓
Quality Engineering
```

---

# 🏗️ Current Architecture

The current functional automation architecture follows a separation of responsibilities:

```text
TestData / CSV
       │
       ▼
 TestDataReader
       │
       ▼
 Parameterized Tests
       │
       ▼
 Request DTO
       │
       ▼
    Client
       │
       ▼
 RequestConfig
       │
       ▼
 REST API
       │
       ▼
 Response
       │
       ▼
 Response DTO
       │
       ▼
 Validators / Assertions
```

This separation avoids placing HTTP communication, test data construction and validation logic directly inside the same class.

---

# 📁 Project Structure

```text
RestAssured/
│
├── pom.xml
│
├── README.md
│
├── src/
│   ├── main/
│   │   └── java/
│   │       └── com/
│   │           └── thecat/
│   │               │
│   │               ├── Client/
│   │               │   ├── atualizarRecurso.java
│   │               │   ├── buscarRecurso.java
│   │               │   ├── criarRecurso.java
│   │               │   ├── deletarRecurso.java
│   │               │   ├── filtrarRecursos.java
│   │               │   ├── listarhierarquiaRecursos.java
│   │               │   └── listartodosRecursos.java
│   │               │
│   │               ├── Config/
│   │               │   ├── BaseTest.java
│   │               │   ├── RequestConfig.java
│   │               │   ├── ConfigManager.java
│   │               │   └── RestAssuredConfig.java
│   │               │
│   │               ├── DTO/
│   │               │   ├── Request/
│   │               │   │   ├── CriarRecursoDTO.java
│   │               │   │   └── AtualizarRecursoDTO.java
│   │               │   │
│   │               │   └── Response/
│   │               │       ├── RecursoResponseDTO.java
│   │               │       └── ComentarioResponseDTO.java
│   │               │
│   │               ├── Validator/
│   │               │   └── validacoes.java
│   │               │
│   │               └── Utils/
│   │                   └── TestDataReader.java
│   │
│   └── test/
│       ├── java/
│       │   └── com/
│       │       └── thecat/
│       │           └── Tests/
│       │               ├── atualizarRecursoTest.java
│       │               ├── buscarRecursoTest.java
│       │               ├── criarRecursoTest.java
│       │               ├── deletarRecursoTest.java
│       │               ├── fIltrarRecursosTest.java
│       │               ├── listarhierarquiaRecursosTest.java
│       │               └── listartodosRecursosTest.java
│       │
│       └── resources/
│           └── testdata/
│               ├── criar_recurso.csv
│               ├── atualiza_recurso.csv
│               ├── buscar_recurso.csv
│               ├── deletar_recurso.csv
│               ├── listar_filtrarecursos.csv
│               ├── listar_hierarquiarecursos.csv
│               └── listar_todosrecursos.csv
│
├── k6/
│   └── performance/
│
├── dashboards/
│
└── .github/
    └── workflows/
        └── api-tests.yml
```

---

# 🧩 Technologies

| Technology         | Purpose                            |
| ------------------ | ---------------------------------- |
| Java 17            | Programming language               |
| REST Assured       | API automation                     |
| JUnit              | Test execution                     |
| Maven              | Build & dependency management      |
| Jackson            | JSON serialization/deserialization |
| JSONPath           | JSON response validation           |
| Apache Commons CSV | CSV test data                      |
| Git                | Version control                    |
| GitHub             | Source code repository             |
| GitHub Actions     | CI/CD                              |
| K6                 | Performance testing                |
| Allure             | Test reporting                     |
| Docker             | Containerization                   |
| Grafana            | Dashboards / visualization         |
| JSON Schema        | Contract validation                |

---

# 🔌 API Coverage

The current functional API automation covers the following operations:

| Operation        | HTTP   | Endpoint                   |
| ---------------- | ------ | -------------------------- |
| Create Resource  | POST   | `/posts`                   |
| Get Resource     | GET    | `/posts/{id}`              |
| List Resources   | GET    | `/posts`                   |
| Update Resource  | PUT    | `/posts/{id}`              |
| Delete Resource  | DELETE | `/posts/{id}`              |
| Filter Resources | GET    | `/posts?userId={userId}`   |
| List Comments    | GET    | `/posts/{postId}/comments` |

---

# 🧱 Client Layer

The Client layer is responsible for communicating with the API.

The current implementation contains seven clients:

```text
atualizarRecurso
buscarRecurso
criarRecurso
deletarRecurso
filtrarRecursos
listarhierarquiaRecursos
listartodosRecursos
```

Example:

```java
public Response atualizaRecurso(
        int id,
        AtualizarRecursoDTO request) {

    return RequestConfig.requestSpec()
            .body(request)
            .when()
            .put("/posts/{id}", id)
            .then()
            .extract()
            .response();
}
```

The test does not need to know how the HTTP request is constructed.

It simply calls:

```java
Response resposta =
        atualizarecurso.atualizaRecurso(id, request);
```

This keeps the test focused on **behavior and validation**.

---

# ⚙️ Centralized Request Configuration

The HTTP configuration was centralized in:

```text
RequestConfig.java
```

Current implementation:

```java
public class RequestConfig {

    public static RequestSpecification requestSpec() {

        return given()
                .contentType("application/json");
    }
}
```

Clients reuse this configuration:

```java
return RequestConfig.requestSpec()
        .body(request)
        .when()
        .post("/posts")
        .then()
        .extract()
        .response();
```

This avoids repeating:

```java
given()
    .contentType("application/json")
```

throughout every Client.

---

# 📦 Request DTOs

Request objects are represented by DTOs instead of manually building JSON strings.

### Create

```java
CriarRecursoDTO request =
        new CriarRecursoDTO(
                titulo,
                corpo,
                userId
        );
```

### Update

```java
AtualizarRecursoDTO request =
        new AtualizarRecursoDTO(
                titulo,
                corpo,
                userId
        );
```

Example payload:

```json
{
  "title": "New title",
  "body": "New body",
  "userId": 1
}
```

REST Assured serializes the DTO automatically:

```java
.body(request)
```

This provides stronger typing and cleaner test code than manually constructing JSON.

---

# 📥 Response DTOs

API responses are deserialized into Java objects.

Example:

```java
RecursoResponseDTO recurso =
        resposta.as(RecursoResponseDTO.class);
```

This allows the test to access fields through methods such as:

```java
recurso.getId();
recurso.getTitle();
recurso.getBody();
recurso.getUserId();
```

For comments:

```java
List<ComentarioResponseDTO> comentarios =
        resposta.jsonPath()
                .getList(
                        "",
                        ComentarioResponseDTO.class
                );
```

This is particularly important for endpoints that return JSON arrays.

---

# 🧪 Data Driven Testing

The framework uses CSV files to separate **test data from test logic**.

Example:

```text
testdata/
├── criar_recurso.csv
├── atualiza_recurso.csv
├── buscar_recurso.csv
├── deletar_recurso.csv
├── listar_filtrarecursos.csv
├── listar_hierarquiarecursos.csv
└── listar_todosrecursos.csv
```

The test data is loaded through:

```java
TestDataReader.lerCSV(
        "testdata/criar_recurso.csv"
);
```

The framework uses JUnit `@ParameterizedTest` and `@MethodSource`.

Example:

```java
@ParameterizedTest
@MethodSource("dadosCriarRecurso")
public void getcriarRecurso(
        int id,
        int statusEsperado,
        CriarRecursoDTO request) {
    
    // test
}
```

This allows multiple scenarios to be executed without duplicating test methods.

---

# 📊 TestDataReader

The `TestDataReader` is responsible for:

* Reading CSV files
* Ignoring headers
* Converting values
* Creating JUnit `Arguments`
* Supplying data to parameterized tests

Supported conversions include:

```text
String
Integer
Long
Double
Boolean
```

The test therefore remains focused on the scenario instead of file parsing.

---

# ✅ Response Validation

The framework uses a custom validator:

```text
validacoes.java
```

Example:

```java
assertTrue(
    validator.validarNumero(
        request.getUserId(),
        recurso.getUserId()
    )
);
```

Text validation:

```java
assertTrue(
    validator.validarTexto(
        request.getTitle(),
        recurso.getTitle()
    )
);
```

Status code validation remains explicit:

```java
assertEquals(
        statusEsperado,
        resposta.statusCode()
);
```

---

# 🔍 JSONPath

JSONPath is used when direct access to response information is useful.

Example:

```java
int id =
        resposta.jsonPath()
                .getInt("id");
```

For collections:

```java
int quantidade =
        resposta.jsonPath()
                .getList("id")
                .size();
```

The project also uses JSONPath expressions such as:

```java
findAll { it.userId == userId }
```

for collection-level validation.

---

# 🔄 CRUD Automation

The framework covers the complete CRUD lifecycle:

```text
CREATE
  POST /posts
      ↓
READ
  GET /posts/{id}
      ↓
UPDATE
  PUT /posts/{id}
      ↓
DELETE
  DELETE /posts/{id}
```

This provides a foundation for expanding the framework to more complex business scenarios.

---

# 🧪 Parameterized Tests

JUnit Parameterized Tests allow the same test logic to execute against different datasets.

Example:

```java
@ParameterizedTest
@MethodSource("dadosBuscarRecurso")
public void getbuscarRecurso(
        int id,
        int statusEsperado,
        String tituloEsperado,
        String corpoEsperado) {
    
    // test
}
```

The test data is externalized into CSV.

This approach improves:

* Maintainability
* Reusability
* Scalability
* Test coverage

---

# 🚀 Performance Testing with K6

Functional API automation is complemented by **K6 performance testing**.

The objective is to evaluate:

* Response time
* Throughput
* Error rate
* Concurrent users
* Performance thresholds
* API stability under load

Conceptual architecture:

```text
REST Assured
     │
     ├── Functional Tests
     │
     └── Regression Tests

K6
 │
 ├── Load Testing
 ├── Stress Testing
 ├── Performance Thresholds
 └── Metrics
```

This allows functional quality and performance quality to be evaluated as part of the same engineering approach.

---

# 📈 Dashboards & Observability

The project also includes the foundation for performance and execution dashboards.

The objective is to visualize metrics such as:

* Request rate
* Response time
* Error rate
* HTTP status codes
* Performance trends
* Test execution results
* Load-test results

The dashboard layer is intended to evolve toward a complete observability solution using tools such as:

```text
K6
  ↓
Metrics
  ↓
Dashboard
  ↓
Analysis
```

---

# 📋 Test Reporting

The project is structured to support automated reporting.

Current and planned reporting capabilities include:

* JUnit reports
* Maven test results
* Allure reports
* GitHub Actions artifacts
* Performance reports
* Dashboard visualization

The objective is to make test execution results easily accessible both locally and through CI/CD.

---

# 🔗 Contract Testing

The project architecture is prepared for API Contract Testing using:

* JSON Schema
* Contract validation
* Response structure validation

The goal is to validate not only the response values but also the API contract itself.

Example validation concepts:

```text
Required fields
Data types
Allowed structures
Response schema
API compatibility
```

---

# 🐳 Docker

Docker is part of the project's evolution toward reproducible execution environments.

The objective is to allow the automation stack to be executed consistently across:

```text
Developer Machine
       ↓
Docker
       ↓
CI/CD
```

This reduces environment-specific differences between local and pipeline execution.

---

# 🔄 CI/CD

The project uses **GitHub Actions** to automate API test execution.

Conceptual pipeline:

```text
Developer
    │
    ▼
Git Push
    │
    ▼
GitHub
    │
    ▼
GitHub Actions
    │
    ├── Checkout
    ├── Setup Java
    ├── Maven
    ├── Execute Tests
    ├── Generate Reports
    └── Publish Artifacts
```

The pipeline allows API tests to be executed automatically after changes are pushed to the repository.

---

# 🛡️ Quality Gates

The project is designed to evolve toward automated quality gates.

Examples:

```text
Build
  ↓
Unit/API Tests
  ↓
Contract Tests
  ↓
Performance Tests
  ↓
Reports
  ↓
Quality Gate
  ↓
Deployment
```

Possible quality criteria include:

* Test pass rate
* API errors
* Contract violations
* Response time thresholds
* Performance degradation
* Code quality

---

# 🌿 Git Workflow

Recommended workflow:

```text
main
 │
 ├── feature/api-tests
 ├── feature/dto
 ├── feature/performance
 └── feature/reporting
```

Typical development cycle:

```text
Create branch
      ↓
Implement change
      ↓
Run tests locally
      ↓
Commit
      ↓
Push
      ↓
Pull Request
      ↓
GitHub Actions
      ↓
Validation
      ↓
Merge
```

---

# ▶️ Running the Tests Locally

Clone the repository:

```bash
git clone https://github.com/antoniogmartins/Services.git
```

Navigate to the REST Assured project:

```bash
cd Services/RestAssured/projeto01/restassured
```

Run the tests:

```bash
mvn clean test
```

To run Maven tests without cleaning:

```bash
mvn test
```

---

# 🧪 Maven Commands

### Clean

```bash
mvn clean
```

### Test

```bash
mvn test
```

### Clean + Test

```bash
mvn clean test
```

### Run with environment

```bash
mvn clean test -Denv=staging
```

---

# 📌 Current Test Coverage

The current automation layer covers:

| Feature                   | Automated |
| ------------------------- | :-------: |
| Create resource           |     ✅     |
| Get resource              |     ✅     |
| List resources            |     ✅     |
| Update resource           |     ✅     |
| Delete resource           |     ✅     |
| Filter resources          |     ✅     |
| List comments             |     ✅     |
| Request DTO               |     ✅     |
| Response DTO              |     ✅     |
| CSV Data Driven           |     ✅     |
| Parameterized Tests       |     ✅     |
| Centralized RequestConfig |     ✅     |
| Custom validation         |     ✅     |
| GitHub Actions            |     ✅     |
| K6                        |     ✅     |
| Dashboards                |     ✅     |
| Allure                    |     🔄    |
| Contract Testing          |     🔄    |
| Docker                    |     🔄    |
| Quality Gates             |     🔄    |

> `🔄` represents capabilities being evolved/integrated into the broader framework.

---

# 📚 QA Concepts Demonstrated

This project demonstrates practical application of:

* API Testing
* Functional Testing
* Regression Testing
* Data Driven Testing
* Parameterized Testing
* DTO Pattern
* Client Pattern
* Separation of Responsibilities
* JSON Serialization
* JSON Deserialization
* JSONPath
* HTTP Methods
* HTTP Status Codes
* Path Parameters
* Query Parameters
* Request Body
* Response Validation
* Contract Testing
* Performance Testing
* CI/CD
* Quality Gates
* Observability

---

# 🧠 Architecture Principles

The project follows several important principles:

### Separation of Responsibilities

```text
Test
 ↓
Client
 ↓
RequestConfig
 ↓
API
```

### DTO Pattern

```text
Java Object
    ↓
JSON Request
```

and:

```text
JSON Response
    ↓
Java Object
```

### Data Driven Testing

```text
CSV
 ↓
TestDataReader
 ↓
Arguments
 ↓
ParameterizedTest
```

### Reusability

Common HTTP configuration is centralized in:

```text
RequestConfig
```

Common validation logic is centralized in:

```text
validacoes
```

---

# 📊 Evolution of the Framework

The framework evolved from simple REST Assured requests into a more structured automation architecture:

```text
REST Assured
     ↓
Reusable Clients
     ↓
Data Driven Testing
     ↓
Request DTOs
     ↓
Response DTOs
     ↓
Centralized Request Configuration
     ↓
Parameterized Tests
     ↓
Validation Layer
     ↓
CI/CD
     ↓
Performance Testing
     ↓
Dashboards
     ↓
Contract Testing
     ↓
Quality Engineering
```

---

# 🎯 Next Evolution

The framework can continue evolving toward:

```text
API Automation
      +
Performance Testing
      +
Contract Testing
      +
Observability
      +
CI/CD
      +
Quality Gates
      +
Reporting
      ↓
Complete API Quality Engineering Platform
```

Potential future improvements:

* Generic Base Client
* Generic API response handling
* Request/Response builders
* Authentication strategies
* OAuth2 / JWT
* Retry mechanisms
* Logging
* Correlation IDs
* Schema validation
* Pact Contract Testing
* Advanced K6 scenarios
* Grafana dashboards
* Allure reporting
* Dockerized execution
* Parallel test execution
* Test categorization
* Environment-specific configuration

---

# 👨‍💻 Author

**Antonio G. Martins**

Quality Assurance Analyst | Test Automation

Experience with:

```text
Java
REST Assured
Selenium
Cypress
Playwright
Robot Framework
K6
JMeter
Postman
JUnit
TestNG
GitHub Actions
Jenkins
Docker
AWS
SQL
```

---

# 🔗 Repository

GitHub:

https://github.com/antoniogmartins/Services

REST Assured project:

https://github.com/antoniogmartins/Services/tree/main/RestAssured

---

# 📄 License

This project is available under the MIT License.

---

## ⭐ Purpose

This repository is not only a collection of automated API tests.

It is a practical **Quality Engineering laboratory**, continuously evolving to demonstrate how automation, architecture, performance, observability and CI/CD can work together to improve software quality.

