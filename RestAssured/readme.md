# 🚀 API Automation Tests — REST Assured + Java

Framework de automação de testes de API desenvolvido em **Java 17 + REST Assured + JUnit 6**, utilizando boas práticas de automação, **Data Driven Testing**, **Parameterized Tests**, **Request/Response DTOs**, validações centralizadas e configuração por ambiente.

O projeto utiliza a API pública **JSONPlaceholder** como aplicação de referência para os testes.

---

## 🎯 Objetivo

O objetivo deste projeto é desenvolver progressivamente um **framework profissional de automação de APIs**, aplicando conceitos utilizados em projetos reais de QA Automation / Quality Engineering.

O projeto foi estruturado para permitir:

* Automação de APIs REST;
* Reutilização de código;
* Separação de responsabilidades;
* Testes parametrizados;
* Data Driven Testing;
* Validação de Request e Response;
* Serialização e desserialização de objetos;
* Configuração por ambiente;
* Manutenção e evolução do framework;
* Execução automatizada através de CI/CD.

A proposta não é apenas testar endpoints, mas construir uma estrutura que possa evoluir para um **framework de automação escalável e sustentável**.

---

# 🛠️ Tecnologias

| Tecnologia         | Utilização                              |
| ------------------ | --------------------------------------- |
| Java 17            | Linguagem principal                     |
| REST Assured 6.0.1 | Automação de APIs REST                  |
| JUnit 6            | Framework de testes                     |
| Maven              | Gerenciamento do projeto e dependências |
| JSONPath           | Consulta e validação de JSON            |
| Jackson            | Serialização / desserialização          |
| Apache Commons CSV | Leitura dos arquivos CSV                |
| Git                | Controle de versão                      |
| GitHub             | Repositório                             |
| GitHub Actions     | CI/CD                                   |

---

# 🏗️ Arquitetura

O projeto utiliza uma separação entre **Test**, **Client**, **DTO**, **Validator**, **Config** e **TestData**.

```text
RestAssured
│
└── projeto01
    │
    └── restassured
        │
        ├── src
        │   │
        │   ├── main
        │   │   └── java
        │   │       └── com.thecat
        │   │           │
        │   │           ├── Client
        │   │           │   ├── buscarRecurso.java
        │   │           │   ├── criarRecurso.java
        │   │           │   ├── atualizarRecurso.java
        │   │           │   ├── deletarRecurso.java
        │   │           │   ├── filtrarRecursos.java
        │   │           │   ├── listarhierarquiaRecursos.java
        │   │           │   └── listartodosRecursos.java
        │   │           │
        │   │           ├── DTO
        │   │           │   ├── Request
        │   │           │   └── Response
        │   │           │
        │   │           ├── Config
        │   │           │   ├── BaseTest.java
        │   │           │   └── ConfigManager.java
        │   │           │
        │   │           └── Validator
        │   │
        │   └── test
        │       │
        │       ├── java
        │       │   └── com.thecat.Tests
        │       │       ├── buscarRecursoTest.java
        │       │       ├── listarTodosRecursosTest.java
        │       │       ├── filtrarRecursosTest.java
        │       │       ├── listarHierarquiaRecursosTest.java
        │       │       ├── criarRecursoTest.java
        │       │       ├── atualizarRecursoTest.java
        │       │       └── deletarRecursoTest.java
        │       │
        │       └── resources
        │           ├── environments
        │           │   └── qa.properties
        │           │
        │           └── testdata
        │               ├── buscar_recurso.csv
        │               ├── listar_todos_recursos.csv
        │               ├── listar_filtrarecursos.csv
        │               ├── listar_hierarquiarecursos.csv
        │               ├── criar_recurso.csv
        │               ├── atualiza_recurso.csv
        │               └── deletar_recurso.csv
        │
        └── pom.xml
```

---

# 🔄 Fluxo de execução

O framework atualmente segue o seguinte fluxo:

```text
CSV
 │
 ▼
TestDataReader
 │
 ▼
Parameterized Test
 │
 ▼
Request DTO
 │
 ▼
Client
 │
 ▼
REST Assured
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
Validator
 │
 ▼
JUnit Assertions
```

---

# 🧪 Testes automatizados

Atualmente existem **7 cenários principais de API automatizados**.

### 1. Buscar recurso

```text
GET /posts/{id}
```

Classe:

```text
buscarRecursoTest
```

Valida:

* HTTP Status Code;
* ID;
* título;
* corpo;
* userId.

---

### 2. Listar todos os recursos

```text
GET /posts
```

Classe:

```text
listarTodosRecursosTest
```

Valida:

* HTTP Status Code;
* quantidade de recursos;
* estrutura da resposta;
* informações retornadas.

---

### 3. Filtrar recursos

```text
GET /posts?userId={userId}
```

Classe:

```text
filtrarRecursosTest
```

Valida:

* HTTP Status Code;
* quantidade esperada;
* userId;
* recursos retornados pelo filtro.

---

### 4. Listar hierarquia de recursos

```text
GET /posts/{postId}/comments
```

Classe:

```text
listarHierarquiaRecursosTest
```

Valida:

* HTTP Status Code;
* quantidade de registros;
* estrutura dos dados;
* informações relacionadas ao recurso.

---

### 5. Criar recurso

```text
POST /posts
```

Classe:

```text
criarRecursoTest
```

Utiliza:

```text
CriarRecursoDTO
```

Exemplo conceitual:

```java
CriarRecursoDTO request =
        new CriarRecursoDTO(
                titulo,
                corpo,
                userId
        );
```

O DTO é enviado diretamente pelo REST Assured:

```java
.body(request)
```

A resposta é convertida para:

```java
RecursoResponseDTO
```

---

### 6. Atualizar recurso

```text
PUT /posts/{id}
```

Classe:

```text
atualizarRecursoTest
```

Utiliza:

```text
AtualizarRecursoDTO
```

O ID é utilizado como **Path Parameter**:

```java
.put("/posts/{id}", id)
```

Enquanto o DTO representa o **Request Body**:

```java
.body(request)
```

A resposta é convertida para:

```java
RecursoResponseDTO
```

---

### 7. Deletar recurso

```text
DELETE /posts/{id}
```

Classe:

```text
deletarRecursoTest
```

Valida:

* HTTP Status Code;
* resposta vazia;
* conteúdo esperado da resposta.

---

# 📊 Data Driven Testing

Os testes utilizam arquivos CSV para separar os **dados de teste** da implementação.

Exemplo:

```csv
id,statusEsperado,title,body,userId
1,201,Meu titulo,Meu corpo,1
2,201,Outro titulo,Outro corpo,2
3,201,Terceiro titulo,Terceiro corpo,3
```

O `TestDataReader` realiza a leitura dos arquivos e converte os valores para os tipos Java correspondentes.

Isso permite executar o mesmo teste com diferentes conjuntos de dados.

---

# 🔁 Parameterized Tests

Os 7 testes principais utilizam:

```java
@ParameterizedTest
@MethodSource(...)
```

Exemplo:

```java
@ParameterizedTest
@MethodSource("dadosCriarRecurso")
public void getcriarRecurso(
        int id,
        int statusEsperado,
        CriarRecursoDTO request) {
    
    // teste
}
```

Essa abordagem evita duplicação de testes e permite ampliar a cobertura apenas adicionando novos dados aos arquivos CSV.

---

# 📦 DTO Pattern

O framework utiliza DTOs para representar os dados enviados e recebidos pela API.

## Request DTO

Representa os dados enviados para a API.

Exemplo:

```text
CriarRecursoDTO

title
body
userId
```

ou:

```text
AtualizarRecursoDTO

title
body
userId
```

## Response DTO

Representa os dados retornados pela API.

```text
RecursoResponseDTO

id
title
body
userId
```

### Fluxo

```text
Request DTO
     │
     ▼
   Client
     │
     ▼
    API
     │
     ▼
Response JSON
     │
     ▼
Response DTO
```

Essa abordagem reduz o uso de `jsonPath()` diretamente nos testes e melhora a organização e manutenção do código.

---

# ✅ Validações

As validações comuns foram centralizadas na classe:

```text
validacoes
```

Exemplo:

```java
public boolean validarTexto(
        String esperado,
        String atual) {

    return esperado.trim().equals(atual);
}
```

E:

```java
public boolean validarNumero(
        int esperado,
        int atual) {

    return esperado == atual;
}
```

Isso evita duplicação de lógica de validação entre os testes.

---

# ⚙️ Configuração de ambiente

A URL da API não fica diretamente nos testes.

O `BaseTest` utiliza:

```java
RestAssured.baseURI =
        ConfigManager.getBaseUrl();
```

O `ConfigManager` carrega o ambiente através da propriedade:

```text
-Denv=qa
```

Exemplo:

```bash
mvn test -Denv=qa
```

Arquivo:

```text
src/test/resources/environments/qa.properties
```

Exemplo:

```properties
base.url=https://jsonplaceholder.typicode.com
```

A estrutura permite futuramente adicionar:

```text
qa.properties
staging.properties
prod.properties
```

sem alterar os testes.

---

# 🧱 Separation of Responsibilities

O framework segue uma separação de responsabilidades:

```text
Test
│
└── Responsável pelos cenários e assertions

Client
│
└── Responsável pela comunicação HTTP

DTO
│
└── Representação dos dados

TestDataReader
│
└── Leitura dos dados de teste

Validator
│
└── Regras de validação

ConfigManager
│
└── Configuração dos ambientes

BaseTest
│
└── Configuração inicial do REST Assured
```

---

# ▶️ Como executar

### Executar todos os testes

```bash
mvn test
```

### Executar utilizando um ambiente específico

```bash
mvn test -Denv=qa
```

### Limpar e executar

```bash
mvn clean test
```

---

# 📈 Status atual do projeto

## ✅ Implementado

* Java 17
* REST Assured
* JUnit
* Maven
* JSONPath
* Data Driven Testing
* CSV Test Data
* Parameterized Tests
* 7 API Test Classes
* Request DTO
* Response DTO
* Serialization / Deserialization
* Centralized Validators
* Environment Configuration
* Base Test
* GET
* POST
* PUT
* DELETE
* Path Parameters
* Query Parameters
* Request Body
* Response validation
* Git / GitHub

---

# 🔮 Roadmap

## Próximas evoluções

* JSON Schema Validation
* Advanced Contract Testing
* Authentication / JWT
* Multiple API Environments
* Advanced Test Data Management
* Maven Surefire Reports
* GitHub Actions
* Automated CI execution
* Allure Reports
* Parallel Execution
* Docker Execution
* API Performance Testing
* K6 Integration
* Quality Gates
* Branch Protection
* Test Dashboard
* Advanced logging
* Test execution by environment
* Framework refactoring
* Reduction of duplicated Client configuration
* Reusable Request Specification
* Reusable Response Specification
* Custom REST Assured filters
* Request/Response logging
* API contract validation

---

# 🧭 Evolução planejada da arquitetura

A arquitetura atual será evoluída progressivamente para:

```text
                    ┌──────────────────────┐
                    │       Test Data      │
                    │         CSV          │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   TestDataReader     │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   Parameterized Test │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │      Request DTO     │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │        Client        │
                    │    REST Assured      │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │        REST API      │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    Response DTO      │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │      Validator       │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │        JUnit         │
                    │      Assertions     │
                    └──────────────────────┘
```

---

# 💡 Objetivo final

A evolução deste projeto é transformar uma automação inicialmente baseada em requisições individuais em um **framework de API Automation estruturado, reutilizável, escalável e integrado a CI/CD**.

Entre os principais objetivos estão:

```text
API Automation
      +
Data Driven Testing
      +
DTO Pattern
      +
Environment Management
      +
Contract Testing
      +
Performance Testing
      +
CI/CD
      +
Reporting
      =
Professional QA Automation Framework
```

---

## 👨‍💻 Author

**Antonio G. Martins**

QA Automation / Quality Engineering

Java • REST Assured • JUnit • Selenium • Cypress • Playwright • Robot Framework • K6 • JMeter • GitHub Actions

---

## 📌 Repository

[Services — RestAssured](https://github.com/antoniogmartins/Services/tree/main/RestAssured)

---

⭐ Se este projeto for útil, considere deixar uma estrela no repositório.

