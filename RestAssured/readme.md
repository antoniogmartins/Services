# 🧪 API Automation Framework — Java + REST Assured

[![Java](https://img.shields.io/badge/Java-17-orange?logo=openjdk)](https://www.oracle.com/java/)
[![REST Assured](https://img.shields.io/badge/REST%20Assured-6.0.1-green)](https://rest-assured.io/)
[![JUnit](https://img.shields.io/badge/JUnit-6.1.3-red?logo=junit5)](https://junit.org/)
[![Maven](https://img.shields.io/badge/Maven-Build-blue?logo=apachemaven)](https://maven.apache.org/)
[![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-blue?logo=githubactions)](https://github.com/features/actions)

[![API Tests](https://github.com/antoniogmartins/Services/actions/workflows/api-tests.yml/badge.svg)](https://github.com/antoniogmartins/Services/actions/workflows/api-tests.yml)

> **API Automation Framework developed with Java and REST Assured, focused on functional API testing, data-driven testing, response validation, environment configuration and continuous integration.**

---

# 🎯 Project Overview

This project is part of my **QA Automation portfolio** and demonstrates the implementation and evolution of a maintainable API automation framework using:

* Java 17
* REST Assured
* JUnit Jupiter
* Maven
* JSONPath
* JSON Schema Validation
* Apache Commons CSV
* Git
* GitHub
* GitHub Actions

The framework is being evolved incrementally toward a more complete **API Quality Engineering solution**, covering test design, data management, configuration, authentication, contract testing, reporting, parallel execution, performance testing and CI/CD quality controls.

---

# 🏗️ Automation Architecture

The framework follows a layered architecture that separates API communication, configuration, test scenarios, test data and validations.

```text
                         ┌──────────────────────────┐
                         │       TEST CASES         │
                         │                          │
                         │ JUnit Parameterized      │
                         │ Tests / MethodSource     │
                         └────────────┬─────────────┘
                                      │
                                      ▼
                         ┌──────────────────────────┐
                         │       TEST DATA          │
                         │                          │
                         │ CSV / TestDataReader     │
                         └────────────┬─────────────┘
                                      │
                                      ▼
                         ┌──────────────────────────┐
                         │       API CLIENT          │
                         │                          │
                         │ REST Assured              │
                         │ HTTP Requests             │
                         └────────────┬─────────────┘
                                      │
                                      ▼
                         ┌──────────────────────────┐
                         │          API             │
                         │                          │
                         │ GET / POST / PUT / DELETE│
                         └────────────┬─────────────┘
                                      │
                                      ▼
                         ┌──────────────────────────┐
                         │        RESPONSE          │
                         │                          │
                         │ Status / Headers / Body  │
                         │ JSON / JSONPath           │
                         └────────────┬─────────────┘
                                      │
                                      ▼
                         ┌──────────────────────────┐
                         │       VALIDATORS         │
                         │                          │
                         │ Business validations     │
                         │ Assertions               │
                         │ Schema validation        │
                         └──────────────────────────┘
```

## Architecture Principles

The framework avoids placing all automation logic directly inside test classes.

Responsibilities are separated according to the purpose of each component:

```text
Client       → API communication
Config       → Environment and test configuration
Tests        → Test scenarios
Utils        → Reusable utilities and test data
Validator    → Business and response validations
Impressao    → Execution/output resources
```

This separation improves maintainability, readability and scalability as new endpoints and scenarios are added.

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
│       │           │   └── API communication
│       │           │
│       │           ├── Config/
│       │           │   └── Environment configuration
│       │           │
│       │           ├── Impressao/
│       │           │   └── Execution/output resources
│       │           │
│       │           ├── Tests/
│       │           │   └── Automated test scenarios
│       │           │
│       │           ├── Utils/
│       │           │   └── Test data utilities
│       │           │
│       │           └── Validator/
│       │               └── Response/business validations
│       │
│       └── resources/
│           ├── environments/
│           │   ├── dev.properties
│           │   ├── qa.properties
│           │   └── staging.properties
│           │
│           └── testdata/
│               └── buscar_recurso.csv
│
├── .github/
│   └── workflows/
│       └── api-tests.yml
│
├── .gitignore
│
└── pom.xml
```

---

# 🧰 Technology Stack

| Technology               | Purpose                         |
| ------------------------ | ------------------------------- |
| ☕ Java 17                | Programming language            |
| 🧪 REST Assured 6.0.1    | REST API automation             |
| 🔬 JUnit Jupiter 6.1.3   | Test framework                  |
| 📦 Maven                 | Build and dependency management |
| 📄 Apache Commons CSV    | CSV test data parsing           |
| 🔎 JSONPath              | JSON extraction and validation  |
| 📋 JSON Schema Validator | Schema/contract validation      |
| 🌱 Git                   | Version control                 |
| 🐙 GitHub                | Source code repository          |
| ⚙️ GitHub Actions        | Continuous Integration          |
| 📊 Maven Surefire        | Test execution and reports      |

Apache Commons CSV is used to correctly process CSV fields containing quoted values and delimiters. The current release used by the project is available through Maven Central.

---

# 🧪 API Testing Strategy

The automation does not validate only HTTP status codes.

The strategy considers multiple validation levels:

```text
API Request
     │
     ▼
HTTP Response
     │
     ├── Status Code
     ├── Headers
     ├── Content-Type
     ├── Response Body
     ├── JSONPath
     └── JSON Schema
```

The objective is to increase confidence in both the API behavior and the structure of its responses.

---

# 🔬 HTTP Layer Validation

The HTTP layer validates aspects such as:

* HTTP method
* Status code
* Headers
* Content-Type
* Response behavior

Example:

```java
given()
    .when()
        .get("/posts/1")
    .then()
        .statusCode(200);
```

---

# 📦 Response Body Validation

Response payloads are extracted and validated according to the expected test scenario.

Examples include:

* Resource ID
* Title
* Body
* Required fields
* Returned values
* Response structure
* Business rules

Example:

```java
String titulo = resposta.jsonPath()
        .getString("title");
```

---

# 🔎 JSONPath

JSONPath is used to extract specific information from API responses.

Example:

```java
Integer id = resposta.jsonPath()
        .getInt("id");

String titulo = resposta.jsonPath()
        .getString("title");
```

The extracted values can then be passed to validation methods and assertions.

---

# 📋 JSON Schema Validation

The project supports JSON Schema validation as an additional layer of API contract verification.

Schema validation can identify:

```text
❌ Missing required fields
❌ Incorrect data types
❌ Unexpected JSON structure
❌ Invalid response contracts
❌ Breaking response changes
```

---

# 📊 Data Driven Testing

The framework now supports **Data Driven Testing** using external CSV files.

Instead of hardcoding all test data inside the Java test class, scenarios can be maintained in:

```text
src/test/resources/testdata/
```

Example:

```text
buscar_recurso.csv
```

```csv
id,statusEsperado,tituloEsperado,corpoEsperado
1,200,"sunt aut facere...","quia et suscipit..."
2,200,"qui est esse","est rerum tempore vitae..."
3,200,"ea molestias...","et iusto sed quo iure..."
```

The data is loaded through the reusable:

```text
TestDataReader
```

This approach separates:

```text
Test Logic
     +
Test Data
```

improving maintainability and allowing additional scenarios to be added without modifying the test implementation.

---

# 🔄 Parameterized Tests

The framework uses **JUnit Parameterized Tests** together with `@MethodSource`.

Example:

```java
@ParameterizedTest
@MethodSource("dadosBuscarRecurso")
public void getbuscarRecurso(
        int id,
        int statusEsperado,
        String tituloEsperado,
        String corpoEsperado) {

    // test execution
}
```

The test data is supplied dynamically:

```java
static Stream<Arguments> dadosBuscarRecurso() {
    return TestDataReader.lerCSV(
            "testdata/buscar_recurso.csv"
    );
}
```

The execution flow is therefore:

```text
CSV
 │
 ▼
TestDataReader
 │
 ▼
Stream<Arguments>
 │
 ▼
@MethodSource
 │
 ▼
@ParameterizedTest
 │
 ▼
API Request
 │
 ▼
Validation
```

This allows a single test implementation to execute multiple scenarios.

---

# ⚙️ Environment Configuration

The framework supports environment-based configuration.

The target environment can be selected through the Maven property:

```bash
mvn clean test -Denv=qa
```

or:

```bash
mvn clean test -Denv=staging
```

If no environment is explicitly provided, the framework uses the configured default environment.

Example structure:

```text
resources/
└── environments/
    ├── dev.properties
    ├── qa.properties
    └── staging.properties
```

This prevents environment-specific URLs from being hardcoded inside API clients.

---

# 🧪 Test Design

The tests follow the **Given / When / Then** concept.

```text
GIVEN
Prepare request
     │
     ▼
WHEN
Execute API operation
     │
     ▼
THEN
Validate response
```

The API client is responsible for the HTTP communication while the test class is responsible for the scenario and assertions.

---

# 🛡️ Positive and Negative Testing

The automation strategy considers both successful and unsuccessful scenarios.

## Positive Scenarios

```text
✔ Valid request
✔ Valid resource
✔ Expected response
✔ Valid response structure
✔ Expected business data
```

## Negative Scenarios

```text
✔ Invalid resource
✔ Invalid parameters
✔ Missing required information
✔ Invalid request
✔ Error response validation
```

For negative scenarios, validation should consider:

```text
HTTP Status
     +
Response Body
     +
Error Contract
```

---

# 🔄 API Test Flow

```text
                     Test Scenario
                           │
                           ▼
                    Test Data
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
              ┌────────────┼────────────┐
              ▼            ▼            ▼
           Status        Headers       Body
              │            │            │
              └────────────┼────────────┘
                           ▼
                    JSON Validation
                           │
                           ▼
                   Schema Validation
                           │
                           ▼
                     Test Result
```

---

# ⚙️ CI/CD — GitHub Actions

The project is integrated with **GitHub Actions** to automatically execute the API test suite.

The workflow can be triggered by:

* Push to `main`
* Pull Requests targeting `main`
* Manual execution

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
     Maven Build
          │
          ▼
    Test Execution
          │
      ┌───┴───┐
      ▼       ▼
    PASS     FAIL
      │       │
      ▼       ▼
  Reports    Logs
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

Run a specific environment:

```bash
mvn clean test -Denv=qa
```

```bash
mvn clean test -Denv=staging
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
     ├── Headers
     ├── JSON
     ├── Schema
     └── Business Rules
     │
     ▼
Test Evidence
     │
     ▼
Quality Decision
```

The objective is to provide fast and reliable feedback about API quality throughout the software development lifecycle.

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

## Run Tests with Environment

```bash
mvn clean test -Denv=qa
```

```bash
mvn clean test -Denv=staging
```

---

## Compile Tests

```bash
mvn test-compile
```

---

# 📋 Current QA Automation Capabilities

## API Testing

* REST API Testing
* Functional API Testing
* Regression Testing
* Positive Testing
* Negative Testing
* HTTP validation
* Request/Response validation
* JSON validation
* JSON Schema validation
* API contract validation

## Test Automation

* REST Assured
* Java
* JUnit
* Maven
* Parameterized Tests
* Data Driven Testing
* CSV Test Data
* JSONPath
* Assertions
* Reusable automation components
* Maintainable automation architecture

## Configuration

* Environment Configuration
* Multiple API environments
* Maven environment selection
* Externalized configuration

## CI/CD

* GitHub Actions
* Automated test execution
* Maven CI execution
* Pull Request validation
* Test artifacts
* Continuous Integration

## Quality Engineering

* Test Strategy
* Test Design
* Shift-Left Testing
* Regression Automation
* API Contract Validation
* Quality Gates concepts
* Continuous Feedback
* Software Quality

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
Data Driven Testing
Parameterized Testing
API Contract Testing
Environment Configuration
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
```

---

# 🧠 Senior QA Perspective

The main objective of this project is to demonstrate that API automation is not limited to sending requests and checking status codes.

A robust automation solution should answer:

> **Does the API behave correctly, return the expected data, respect its contract and provide reliable feedback when something changes?**

Therefore, the framework considers multiple levels of validation:

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
Contract
 │
 └── JSON Schema
       │
       ▼
Test Data
 │
 └── Data Driven Testing
       │
       ▼
CI/CD
 │
 └── Automated Feedback
```

This approach reflects a **Quality Engineering mindset**, where automation is part of the overall software quality strategy.

---

# 🔮 Roadmap

The framework will continue to evolve toward a production-oriented API automation solution.

### ✅ Implemented

* Java 17
* REST Assured
* JUnit
* Maven
* JSONPath
* JSON Schema Validation
* GitHub Actions
* Automated CI execution
* Maven Surefire Reports
* Data Driven Testing
* Parameterized Tests
* CSV Test Data
* TestDataReader
* Environment Configuration
* Multiple API Environments

### 🚧 In Progress / Planned

* Authentication / JWT
* Advanced Test Data Management
* Advanced Contract Testing
* Allure Reports
* Parallel Execution
* Docker Execution
* API Performance Testing
* K6 Integration
* Quality Gates
* Branch Protection
* Test Dashboard
* Enhanced test reporting
* API observability and execution metrics

---

# 📚 Skills Demonstrated

```text
✔ API Test Automation
✔ REST Assured
✔ Java 17
✔ JUnit
✔ Maven
✔ JSON / JSONPath
✔ JSON Schema Validation
✔ Positive and Negative Testing
✔ API Contract Validation
✔ Response Validation
✔ Data Driven Testing
✔ Parameterized Tests
✔ CSV Test Data Management
✔ Environment Configuration
✔ Multiple API Environments
✔ Reusable Automation Components
✔ CI/CD with GitHub Actions
✔ Automated Test Execution
✔ Maven Surefire Reports
✔ Quality Engineering Practices
```

---

# 👨‍💻 About Me

## Antonio G. Martins

**QA Engineer | Quality Assurance | Test Automation | API Testing**

My technical background includes software quality, manual and automated testing, API testing and test automation.

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

### API Automation Project

https://github.com/antoniogmartins/Services/tree/main/RestAssured/projeto01/restassured

### GitHub Actions

https://github.com/antoniogmartins/Services/actions

---

# ⭐ Portfolio

This project is part of my **QA Automation portfolio** and demonstrates the practical evolution of an API automation framework.

The goal is to demonstrate not only API test automation, but also the engineering practices required to build a maintainable, scalable and CI/CD-ready quality solution.

---

# 📄 License

This project is intended for educational, technical demonstration and professional portfolio purposes.

```
```

