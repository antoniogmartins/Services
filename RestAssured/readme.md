# 🧪 API Automation Framework — Java + REST Assured

[![Java](https://img.shields.io/badge/Java-17-orange?logo=openjdk)](https://www.oracle.com/java/)
[![REST Assured](https://img.shields.io/badge/REST%20Assured-6.0.1-green)](https://rest-assured.io/)
[![JUnit](https://img.shields.io/badge/JUnit-6.1.3-red?logo=junit5)](https://junit.org/)
[![Maven](https://img.shields.io/badge/Maven-Build-blue?logo=apachemaven)](https://maven.apache.org/)
[![JSON](https://img.shields.io/badge/JSON-Validation-lightgrey)](https://www.json.org/)
[![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-blue?logo=githubactions)](https://github.com/features/actions)

[![API Tests](https://github.com/antoniogmartins/Services/actions/workflows/api-tests.yml/badge.svg)](https://github.com/antoniogmartins/Services/actions/workflows/api-tests.yml)

> **API Automation Framework developed with Java and REST Assured, focused on functional API testing, response validation, JSON processing, schema validation and continuous integration with GitHub Actions.**

---

# 🎯 Project Overview

This project is part of my **QA Automation portfolio** and demonstrates the implementation of an automated API testing solution using:

* Java 17
* REST Assured
* JUnit
* Maven
* JSONPath
* JSON Schema Validation
* GitHub Actions

The main objective is to demonstrate how automated API tests can be structured to provide:

* Maintainability
* Reusability
* Readability
* Reliable assertions
* API response validation
* Contract/schema validation
* Automated execution through CI/CD

The framework separates API communication, test scenarios and validation responsibilities, making the automation easier to maintain and evolve.

---

# 🏗️ Automation Architecture

The project follows a layered approach:

```text
                         ┌─────────────────────────┐
                         │       TEST CASES        │
                         │                         │
                         │      JUnit Tests        │
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
                         │       RESPONSE          │
                         │                         │
                         │ Status Code             │
                         │ Headers                 │
                         │ Body                    │
                         │ JSON                    │
                         └────────────┬────────────┘
                                      │
                                      ▼
                         ┌─────────────────────────┐
                         │       VALIDATORS        │
                         │                         │
                         │ Assertions              │
                         │ JSONPath                │
                         │ JSON Schema             │
                         │ Business Rules          │
                         └─────────────────────────┘
```

## Architecture Principles

The framework aims to avoid placing all automation logic directly inside test classes.

Responsibilities are separated according to the purpose of each component:

```text
Client       → API communication
Config       → Test configuration
Tests        → Test scenarios
Validator    → Assertions and validations
Relatorios   → Reporting resources
```

This separation improves maintainability and allows the framework to evolve as new endpoints and scenarios are added.

---

# 📁 Project Structure

```text
restassured/
│
├── src/
│   └── test/
│       └── java/
│           └── com/
│               └── thecat/
│                   │
│                   ├── Client/
│                   │   └── API communication layer
│                   │
│                   ├── Config/
│                   │   └── Test configuration
│                   │
│                   ├── Relatorios/
│                   │   └── Reporting resources
│                   │
│                   ├── Tests/
│                   │   └── Automated test scenarios
│                   │
│                   └── Validator/
│                       └── Response validations
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
| 🔎 JSONPath              | JSON extraction and validation  |
| 📋 JSON Schema Validator | API contract/schema validation  |
| 🌱 Git                   | Version control                 |
| 🐙 GitHub                | Source code repository          |
| ⚙️ GitHub Actions        | Continuous Integration          |
| 📊 Maven Surefire        | Test execution and reports      |

---

# 🧪 API Testing Strategy

The automation does not validate only HTTP status codes.

The strategy considers different validation levels.

```text
API Request
     │
     ▼
HTTP Response
     │
     ├── Status Code
     │
     ├── Headers
     │
     ├── Content-Type
     │
     ├── Response Body
     │
     ├── JSONPath
     │
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
        .get("/endpoint")
    .then()
        .statusCode(200);
```

---

# 📦 Response Body Validation

The response payload can be validated using REST Assured assertions.

Example:

```java
.then()
    .body("id", equalTo(1));
```

Possible validations include:

* Required fields
* Returned values
* Collections
* Nested objects
* Business information
* Response data

---

# 🔎 JSONPath

JSONPath is used to extract specific information from JSON responses.

Example:

```java
String value =
    given()
        .when()
            .get("/endpoint")
        .then()
            .extract()
            .path("data.id");
```

Extracted information can be used in subsequent test steps, allowing the automation to validate relationships between API operations.

---

# 📋 JSON Schema Validation

The project also supports JSON Schema validation.

Schema validation allows the automation to verify whether an API response follows the expected structure.

Examples of problems that can be detected:

```text
❌ Missing required field
❌ Incorrect data type
❌ Unexpected JSON structure
❌ Invalid response contract
❌ Breaking response changes
```

This provides an additional layer of confidence beyond simple status-code validation.

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

Example:

```java
given()
    .header("Content-Type", "application/json")

.when()
    .get("/endpoint")

.then()
    .statusCode(200)
    .body("status", equalTo("success"));
```

This approach improves test readability and makes the intention of each scenario easier to understand.

---

# 🛡️ Positive and Negative Testing

The automation strategy considers both successful and unsuccessful scenarios.

## Positive scenarios

```text
✔ Valid request
✔ Valid resource
✔ Expected response
✔ Valid response structure
✔ Expected business data
```

## Negative scenarios

```text
✔ Invalid resource
✔ Invalid parameters
✔ Missing required information
✔ Invalid request
✔ Unexpected API behavior
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

Example:

```text
Invalid Request
      │
      ▼
     API
      │
      ▼
400 Bad Request
      │
      ▼
Validate Error Response
```

---

# 🔄 API Test Flow

```text
                     Test Scenario
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

The pipeline is triggered by:

* Push to `main`
* Pull Requests targeting `main`
* Manual execution through GitHub Actions

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

## CI Activities

The workflow performs:

```text
✔ Repository checkout
✔ Java 17 setup
✔ Maven dependency cache
✔ Maven project validation
✔ Test compilation
✔ REST API test execution
✔ Surefire report generation
✔ Test result artifact upload
```

Workflow location:

```text
.github/workflows/api-tests.yml
```

---

# 📊 Test Execution

## Local Execution

The test suite can be executed locally using Maven:

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

## CI Execution

The same automated test suite is executed through GitHub Actions.

This provides automated feedback whenever changes are pushed to the main branch or submitted through a Pull Request.

Test reports generated by Maven Surefire are uploaded as GitHub Actions artifacts.

---

# 📎 Test Evidence

Test execution evidence can be stored in the repository or accessed through GitHub Actions artifacts.

Recommended evidence:

```text
docs/
└── execution/
    ├── maven-test-success.png
    ├── github-actions-success.png
    └── api-response-validation.png
```

Example:

```markdown
![GitHub Actions](docs/execution/github-actions-success.png)
```

> Evidence of successful automated execution is particularly useful in a QA portfolio because it demonstrates that the automation is executable and integrated into CI.

---

# 📈 Quality Engineering Approach

The purpose of this project is not simply to automate HTTP requests.

The automation follows a Quality Engineering mindset:

```text
Requirements
     │
     ▼
Test Scenarios
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

The goal is to provide fast and reliable feedback about API quality throughout the software development lifecycle.

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

## Run Maven Validation

```bash
mvn validate
```

---

## Compile Tests

```bash
mvn test-compile
```

---

# 📋 QA Automation Capabilities

This project demonstrates practical knowledge in:

### API Testing

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

### Test Automation

* REST Assured
* Java
* JUnit
* Maven
* Assertions
* JSONPath
* Reusable automation components
* Test organization
* Maintainable automation architecture

### CI/CD

* GitHub Actions
* Automated test execution
* Maven CI execution
* Pull Request validation
* Test artifacts
* Continuous Integration

### Quality Engineering

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
CI/CD
 │
 └── Automated Feedback
```

This approach reflects a **Quality Engineering mindset**, where automation is part of the overall software quality strategy.

---

# 🔮 Roadmap

Future improvements planned for the framework:

* [x] Java 17
* [x] REST Assured
* [x] JUnit
* [x] Maven
* [x] JSONPath
* [x] JSON Schema Validation
* [x] GitHub Actions
* [x] Automated CI execution
* [x] Maven Surefire Reports
* [ ] Data Driven Testing
* [ ] Parameterized Tests
* [ ] Authentication / JWT
* [ ] Environment Configuration
* [ ] Multiple API Environments
* [ ] Test Data Management
* [ ] Advanced Contract Testing
* [ ] Allure Reports
* [ ] Parallel Execution
* [ ] Docker Execution
* [ ] API Performance Testing
* [ ] K6 Integration
* [ ] Quality Gates / Branch Protection
* [ ] Test Dashboard

---

# 📚 Skills Demonstrated

This repository demonstrates practical experience with:

```text
✔ API test automation
✔ REST Assured
✔ Java 17
✔ JUnit
✔ Maven
✔ JSON / JSONPath
✔ JSON Schema validation
✔ Positive and negative testing
✔ API contract validation
✔ Response validation
✔ Reusable automation components
✔ CI/CD with GitHub Actions
✔ Automated test execution
✔ Maven Surefire reports
✔ Test evidence
✔ Quality Engineering practices
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

### Project

https://github.com/antoniogmartins/Services/tree/main/RestAssured/projeto01/restassured

### GitHub Actions

https://github.com/antoniogmartins/Services/actions

---

# ⭐ Portfolio

This project is part of my QA Automation portfolio and demonstrates practical implementation of API automation, test validation and Continuous Integration.

Feel free to explore the repository and other QA automation projects.

---

# 📄 License

This project is intended for educational, technical demonstration and professional portfolio purposes.

```
```
