# 🏗️ Overall Architecture

A solução RestAssured é organizada como um laboratório de evolução de automação de APIs.

```text
                    API Automation
                          │
              ┌───────────┴───────────┐
              │                       │
         Projeto 01              Projeto 02
              │                       │
        Framework                Authentication
              │                       │
       ┌──────┴──────┐          ┌─────┴─────┐
       │             │          │           │
     Client         DTO       Login      Resources
       │             │          │           │
       └──────┬──────┘          └─────┬─────┘
              │                       │
          REST Assured           REST Assured
              │                       │
              └──────────┬────────────┘
                         │
                       API
```

## 🧱 Arquitetura do Projeto 01

```text
Test Data
    ↓
TestDataReader
    ↓
Parameterized Test
    ↓
Request DTO
    ↓
Client
    ↓
RequestConfig
    ↓
REST API
    ↓
Response
    ↓
Response DTO
    ↓
Validator / Assertions
```

## 🔐 Arquitetura do Projeto 02

```text
Test Data
    ↓
Utility / JavaFaker
    ↓
Login
    ↓
Access Token
    ↓
Authenticated Request
    ↓
API
    ↓
Response
    ↓
Assertions
```

