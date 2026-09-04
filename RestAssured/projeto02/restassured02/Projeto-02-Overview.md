# 🔐 Projeto 02 — API Testing

## Overview

Projeto de automação de testes de APIs utilizando:

* Java 17
* REST Assured 6.0.1
* JUnit
* Maven
* JavaFaker
* JSON
* JSONPath

## Objetivo

Demonstrar automação de APIs envolvendo:

* Authentication
* Users
* Products
* CRUD
* Dynamic Data
* Static Data
* Token
* Response Validation

## Domínios

```text
             API
              │
       ┌──────┼──────┐
       │      │      │
     Login  Users  Products
```

## API Coverage

### Users

```text
GET /usuarios
POST /usuarios
GET /usuarios/{id}
GET /usuarios?email={email}
PUT /usuarios/{id}
DELETE /usuarios/{id}
```

### Authentication

```text
POST /login
```

### Products

```text
POST /produtos
```

## Código

[Visualizar Projeto 02](https://github.com/antoniogmartins/Services/tree/main/RestAssured/projeto02/restassured02)

