# RestAssured

# 🧪 API Automation Framework — Java + REST Assured

[![Java](https://img.shields.io/badge/Java-17-orange?logo=openjdk)](https://www.oracle.com/java/)
[![REST Assured](https://img.shields.io/badge/REST%20Assured-6.0.1-green)](https://rest-assured.io/)
[![JUnit](https://img.shields.io/badge/JUnit-6.1.3-red?logo=junit5)](https://junit.org/)
[![Maven](https://img.shields.io/badge/Maven-Build-blue?logo=apachemaven)](https://maven.apache.org/)
[![API Testing](https://img.shields.io/badge/API-Testing-purple)]()
[![JSON](https://img.shields.io/badge/JSON-Validation-lightgrey)]()

> **API Automation Testing framework developed with Java and REST Assured, focused on functional validation, response validation, JSON processing and API contract validation.**

---

## 🎯 Project Overview

This project demonstrates the implementation of an **API automation test solution** using Java and REST Assured.

The framework was designed with separation of responsibilities between:

* API clients
* Test scenarios
* Configuration
* Validation components
* Test reporting

The main objective is to demonstrate how an API automation solution can be structured to provide **maintainability, readability, reusability and reliable feedback about API quality**.

The project is part of my QA Automation portfolio and represents practical knowledge in **API Testing, Java, REST Assured, JUnit, JSON validation and automated quality engineering**.

---

# 🏗️ Automation Architecture

The project follows a layered approach:

```text
                         ┌──────────────────────┐
                         │      TEST CASES      │
                         │                      │
                         │      JUnit Tests     │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │      API CLIENT      │
                         │                      │
                         │   REST Assured       │
                         │   HTTP Requests       │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │       API            │
                         │                      │
                         │ GET / POST / PUT     │
                         │ DELETE / PATCH       │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │      RESPONSE       │
                         │                      │
                         │ Status Code         │
                         │ Headers              │
                         │ Body                 │
                         │ JSON                 │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │      VALIDATORS      │
                         │                      │
                         │ Assertions           │
                         │ JSONPath             │
                         │ JSON Schema          │
                         │ Business Rules       │
                         └──────────────────────┘
```

### Architecture principles

The project aims to avoid putting all automation logic directly inside test classes.

Instead, responsibilities are distributed according to the purpose of each component:

```text
Client      → API communication
Config      → Test configuration
Tests       → Test scenarios
Validator   → Assertions and validations
Relatorios  → Test result/reporting resources
```

This approach makes the framework easier to maintain and extend as the number of endpoints and scenarios increases.

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
│                   │   └── Test reporting resources
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

| Technology               | Purpose                             |
| ------------------------ | ----------------------------------- |
| ☕ Java 17                | Programming language                |
| 🧪 REST Assured 6.0.1    | REST API automation                 |
| 🔬 JUnit Jupiter 6.1.3   | Test framework                      |
| 📦 Maven                 | Dependency and build management     |
| 🔎 JSONPath              | JSON data extraction and validation |
| 📋 JSON Schema Validator | API contract/schema validation      |
| 🌱 Git                   | Version control                     |
| 🐙 GitHub                | Source code and portfolio           |

The current `pom.xml` defines Java 17 and the REST Assured, JUnit, JSON Schema Validator and JSONPath dependencies.

---

# 🔬 Test Strategy

The automation strategy is based on validating APIs at multiple levels instead of validating only the HTTP status code.

## 1. HTTP Layer

Validation of:

* HTTP method
* Status code
* Headers
* Content-Type
* Response time when applicable

Example:

```java
given()
    .when()
        .get("/endpoint")
    .then()
        .statusCode(200);
```

---

## 2. Response Layer

Validation of the returned payload.

Examples:

```java
.then()
    .body("id", equalTo(1));
```

Possible validations include:

* Required fields
* Field values
* Data types
* Collections
* Nested objects
* Business information

---

## 3. JSON Layer

JSONPath is used when it is necessary to access specific information inside the response.

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

This allows information returned by one API operation to be used in subsequent test steps.

---

## 4. Contract Layer

The project includes JSON Schema validation.

This allows the automation to verify whether the response structure follows the expected contract.

Examples of defects that can be detected:

```text
❌ Missing required field
❌ Incorrect data type
❌ Unexpected JSON structure
❌ Invalid response contract
❌ Breaking API changes
```

---

# 🧪 Test Design

The tests are structured around the **Given / When / Then** pattern.

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

This structure improves test readability and makes the intent of each scenario clear.

---

# ✅ Validation Pyramid

The automation can be viewed as a validation pyramid:

```text
                 ┌─────────────────────┐
                 │   Business Rules    │
                 └──────────┬──────────┘
                            │
                 ┌──────────▼──────────┐
                 │    JSON Schema      │
                 └──────────┬──────────┘
                            │
                 ┌──────────▼──────────┐
                 │    Response Body    │
                 └──────────┬──────────┘
                            │
                 ┌──────────▼──────────┐
                 │   Headers / JSON    │
                 └──────────┬──────────┘
                            │
                 ┌──────────▼──────────┐
                 │    HTTP Status      │
                 └─────────────────────┘
```

The goal is to increase the confidence level of the automated validation.

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
         Status       Headers       Body
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

# 🧩 Example Test Pattern

A typical API test follows the pattern:

```java
@Test
void shouldReturnSuccessfulResponse() {

    given()
        .header("Content-Type", "application/json")

    .when()
        .get("/endpoint")

    .then()
        .statusCode(200)
        .contentType("application/json");
}
```

The same structure can be extended to POST, PUT, PATCH and DELETE operations.

---

# 🛡️ Negative Testing

A mature API automation strategy should also validate invalid scenarios.

Examples:

```text
✔ Valid request
✔ Missing required parameter
✔ Invalid parameter
✔ Invalid resource ID
✔ Invalid JSON
✔ Unauthorized request
✔ Forbidden operation
✔ Resource not found
✔ Invalid business rule
```

Expected behavior should be validated through both:

```text
HTTP Status
      +
Response Body
      +
Error Contract
```

For example:

```text
Request
   │
   ▼
Invalid data
   │
   ▼
API
   │
   ▼
400 Bad Request
   │
   ▼
Validate error payload
```

---

# 📊 Quality Gates

The automation can be integrated into a CI/CD pipeline to act as a quality gate.

```text
Developer
    │
    ▼
Git Push
    │
    ▼
CI/CD Pipeline
    │
    ▼
Build
    │
    ▼
Automated API Tests
    │
    ├───────────────┐
    │               │
    ▼               ▼
 PASS              FAIL
    │               │
    ▼               ▼
Continue          Stop Pipeline
Deployment        / Notify Team
```

This approach allows API regressions to be detected earlier in the software delivery lifecycle.

---

# 🚀 How to Run

## Prerequisites

Install:

```text
Java 17+
Maven 3.8+
Git
```

Check Java:

```bash
java -version
```

Check Maven:

```bash
mvn -version
```

---

## Clone the repository

```bash
git clone https://github.com/antoniogmartins/Services.git
```

Access the project:

```bash
cd Services/RestAssured/projeto01/restassured
```

---

## Execute the test suite

```bash
mvn test
```

---

# 📈 Test Execution Evidence

> 📌 **Portfolio recommendation:** add screenshots from real executions here.

Example:

```text
┌─────────────────────────────────────────────┐
│              MAVEN TEST EXECUTION           │
│                                             │
│ Tests run: XX                               │
│ Failures: 0                                 │
│ Errors: 0                                   │
│ Skipped: 0                                  │
│                                             │
│ BUILD SUCCESS                               │
└─────────────────────────────────────────────┘
```

You can add an image to the repository:

```text
docs/
└── execution/
    ├── maven-test-success.png
    └── api-response-validation.png
```

And display it here:

```markdown
![Test Execution](docs/execution/maven-test-success.png)
```

This is particularly valuable for a QA portfolio because the recruiter can see evidence of the automation being executed rather than only seeing source code.

---

# 📋 QA Automation Capabilities Demonstrated

### API Testing

* REST API Testing
* API Functional Testing
* API Regression Testing
* Positive Testing
* Negative Testing
* HTTP Validation
* Request/Response Validation
* JSON Validation
* JSON Schema Validation

### Automation

* REST Assured
* Java
* JUnit
* Maven
* Reusable API components
* Assertions
* Test organization
* Test maintainability

### Quality Engineering

* Test Strategy
* Test Design
* Shift-Left Testing
* API Contract Validation
* Regression Automation
* Quality Gates
* CI/CD integration concepts
* Defect prevention

---

# 🔑 ATS / Recruiter Keywords

This project demonstrates practical experience and knowledge in:

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
Test Strategy
Test Design
Assertions
API Contract Testing
CI/CD
Git
GitHub
Quality Engineering
Software Quality
Automated Testing
```

---

# 🧠 Senior QA Perspective

The objective of this project is not simply to automate API requests.

The automation is designed around the question:

> **"How can automated tests provide reliable evidence about the quality and behavior of an API?"**

Therefore, the framework considers:

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

This is the mindset behind **Quality Engineering**, where automation is used as part of the software quality strategy rather than simply as a replacement for manual execution.

---

# 🔮 Roadmap

Future improvements planned for the framework:

* [ ] Data Driven Testing
* [ ] Parameterized Tests
* [ ] Authentication / JWT
* [ ] Environment configuration
* [ ] Multiple API environments
* [ ] Test data management
* [ ] Contract Testing
* [ ] Allure Reports
* [ ] GitHub Actions
* [ ] Jenkins Pipeline
* [ ] Docker execution
* [ ] Parallel execution
* [ ] API Performance Testing
* [ ] K6 integration
* [ ] Test result dashboards
* [ ] Quality Gates
* [ ] SonarQube integration

---

# 📚 What This Project Demonstrates

This repository demonstrates the ability to:

```text
✔ Analyze API behavior
✔ Design API test scenarios
✔ Automate REST APIs
✔ Build reusable test components
✔ Validate HTTP responses
✔ Validate JSON payloads
✔ Validate API contracts
✔ Implement positive and negative scenarios
✔ Organize automation code
✔ Execute tests through Maven
✔ Prepare automation for CI/CD
✔ Think beyond simple status-code validation
```

---

# 👨‍💻 About Me

## Antonio G. Martins

**QA Engineer | Quality Assurance | Test Automation | API Testing**

Experience and technical interests include:

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
CI/CD
Docker
AWS
```

Focused on building reliable and maintainable automated tests and contributing to software quality throughout the development lifecycle.

---

# 🔗 Repository

**GitHub — Services**

https://github.com/antoniogmartins/Services

**Project**

https://github.com/antoniogmartins/Services/tree/main/RestAssured/projeto01/restassured

---

# ⭐ Portfolio

If you find this project useful, feel free to explore the other automation and QA projects available in the repository.

---

## 📄 License

This project is intended for educational, technical demonstration and portfolio purposes.
