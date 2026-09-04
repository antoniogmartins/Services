# 🏗️ Projeto 02 — Architecture

## Arquitetura

```text
              Test
               │
        ┌──────┴──────┐
        │             │
      Login         Users
        │             │
        │          Products
        │             │
        └──────┬──────┘
               │
          REST Assured
               │
               ▼
              API
```

## Authentication Flow

```text
Test Data
    ↓
POST /login
    ↓
Response
    ↓
Extract Token
    ↓
Authorization Header
    ↓
Authenticated Endpoint
```

## Data Flow

```text
JavaFaker
    ↓
Dynamic Data
    ↓
Request Body
    ↓
REST Assured
    ↓
API
    ↓
Response
    ↓
JSONPath
    ↓
Assertion
```

