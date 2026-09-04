# 🧪 Projeto 01 — API Automation Framework

## 📌 Overview

O Projeto 01 é um framework de automação de testes de APIs desenvolvido com:

* Java 17
* REST Assured
* JUnit
* Maven

O projeto foi estruturado com foco em:

* Reutilização
* Manutenibilidade
* Separação de responsabilidades
* Data Driven Testing
* DTO
* Client Layer
* Centralized Configuration
* API Validation
* CI/CD

## 🎯 Objetivo

Demonstrar a evolução de uma automação de API simples para uma arquitetura mais estruturada.

```text
Simple API Test
      ↓
Reusable Client
      ↓
DTO
      ↓
Data Driven
      ↓
Configuration
      ↓
CI/CD
      ↓
Performance
```

## 🔌 API

A camada funcional utiliza a API JSONPlaceholder.

## 📡 Endpoints

| Operação    | Método | Endpoint                   |
| ----------- | ------ | -------------------------- |
| Criar       | POST   | `/posts`                   |
| Buscar      | GET    | `/posts/{id}`              |
| Listar      | GET    | `/posts`                   |
| Atualizar   | PUT    | `/posts/{id}`              |
| Deletar     | DELETE | `/posts/{id}`              |
| Filtrar     | GET    | `/posts?userId={userId}`   |
| Comentários | GET    | `/posts/{postId}/comments` |

## 📂 Código

[Visualizar Projeto 01](https://github.com/antoniogmartins/Services/tree/main/RestAssured/projeto01/restassured01)

