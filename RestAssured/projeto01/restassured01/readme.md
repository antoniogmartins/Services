# 🚀 REST Assured API Automation — Projeto 01

> **API Automation Framework** desenvolvido com **Java + REST Assured + JUnit + Maven**, aplicando princípios de organização, reutilização, Data Driven Testing, DTOs, validação de respostas e execução automatizada.

Este projeto faz parte do laboratório **Services — API Quality Engineering & Automation** e representa a evolução de uma automação de APIs simples para uma estrutura mais organizada e sustentável.

---

## 🎯 Objetivo

Construir uma base de automação de APIs que permita:

* Automatizar operações HTTP;
* Separar testes da comunicação com a API;
* Reutilizar configurações de requisições;
* Utilizar DTOs para requests e responses;
* Externalizar dados de teste em CSV;
* Executar testes parametrizados;
* Centralizar validações;
* Facilitar manutenção e expansão da suíte;
* Integrar os testes ao processo de CI/CD.

A API utilizada na camada funcional atual é a **JSONPlaceholder**.

---

## 🧰 Stack Tecnológica

| Tecnologia                      | Utilização                                |
| ------------------------------- | ----------------------------------------- |
| **Java 17**                     | Linguagem de programação                  |
| **REST Assured 6.0.1**          | Automação e validação de APIs REST        |
| **JUnit 6.1.3**                 | Execução e parametrização dos testes      |
| **Maven**                       | Build e gerenciamento de dependências     |
| **Jackson**                     | Serialização e desserialização de objetos |
| **JSONPath**                    | Consulta e validação de respostas JSON    |
| **Apache Commons CSV 1.14.1**   | Leitura dos dados de teste                |
| **JSON Schema Validator 5.1.1** | Validação de contratos JSON               |
| **Git / GitHub**                | Versionamento                             |
| **GitHub Actions**              | Integração e execução automatizada        |

As versões acima refletem o `pom.xml` atual do projeto.

---

# 🏗️ Arquitetura

A automação foi estruturada utilizando separação de responsabilidades:

```text
                 ┌─────────────────────┐
                 │    Test Data / CSV  │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │   TestDataReader    │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │ Parameterized Test  │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │      Request DTO    │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │       Client        │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │   RequestConfig     │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │       REST API      │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │      Response       │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │   Response DTO      │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │ Validators / Assert │
                 └─────────────────────┘
```

### Princípios aplicados

* Separation of Responsibilities
* Reusability
* DTO Pattern
* Client Pattern
* Data Driven Testing
* Parameterized Testing
* Centralized Configuration
* Explicit Assertions
* API Layer Abstraction

---

# 📁 Estrutura do Projeto

```text
restassured01/
│
├── pom.xml
├── readme.md
├── .gitignore
│
└── src/
    └── test/
        ├── java/
        │   └── com/
        │       └── thecat/
        │           ├── Client/
        │           │   ├── atualizarRecurso.java
        │           │   ├── buscarRecurso.java
        │           │   ├── criarRecurso.java
        │           │   ├── deletarRecurso.java
        │           │   ├── filtrarRecursos.java
        │           │   ├── listarhierarquiaRecursos.java
        │           │   └── listartodosRecursos.java
        │           │
        │           ├── Config/
        │           │   ├── BaseTest.java
        │           │   ├── RequestConfig.java
        │           │   ├── ConfigManager.java
        │           │   └── RestAssuredConfig.java
        │           │
        │           ├── DTO/
        │           │   ├── Request/
        │           │   │   ├── CriarRecursoDTO.java
        │           │   │   └── AtualizarRecursoDTO.java
        │           │   │
        │           │   └── Response/
        │           │       ├── RecursoResponseDTO.java
        │           │       └── ComentarioResponseDTO.java
        │           │
        │           ├── Validator/
        │           │   └── validacoes.java
        │           │
        │           └── Utils/
        │               └── TestDataReader.java
        │
        └── resources/
            └── testdata/
                ├── criar_recurso.csv
                ├── atualiza_recurso.csv
                ├── buscar_recurso.csv
                ├── deletar_recurso.csv
                ├── listar_filtrarecursos.csv
                ├── listar_hierarquiarecursos.csv
                └── listar_todosrecursos.csv
```

> A estrutura acima representa a organização funcional documentada no projeto atual.

---

# 🔌 API Coverage

A suíte contempla os principais fluxos da API de recursos:

| Cenário            | Método   | Endpoint                   |
| ------------------ | -------- | -------------------------- |
| Criar recurso      | `POST`   | `/posts`                   |
| Buscar recurso     | `GET`    | `/posts/{id}`              |
| Listar recursos    | `GET`    | `/posts`                   |
| Atualizar recurso  | `PUT`    | `/posts/{id}`              |
| Excluir recurso    | `DELETE` | `/posts/{id}`              |
| Filtrar recursos   | `GET`    | `/posts?userId={userId}`   |
| Listar comentários | `GET`    | `/posts/{postId}/comments` |

---

# 🧪 Estratégia de Testes

Os testes são organizados considerando diferentes aspectos da validação de APIs.

### Functional Testing

Validação do comportamento dos endpoints.

### CRUD Testing

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

### Response Validation

Validação de:

* HTTP Status Code;
* IDs;
* campos textuais;
* estrutura da resposta;
* conteúdo retornado pela API.

### Query Parameters

Exemplo:

```text
GET /posts?userId=1
```

### Path Parameters

Exemplo:

```text
GET /posts/{id}
```

### Request Body

Utilização de objetos Java para representar o payload da requisição.

---

# 📦 Request DTO

Os payloads são representados através de DTOs.

Exemplo:

```java
CriarRecursoDTO request =
        new CriarRecursoDTO(
                titulo,
                corpo,
                userId
        );
```

O objeto é enviado diretamente através do REST Assured:

```java
.body(request)
```

Exemplo de JSON:

```json
{
  "title": "New title",
  "body": "New body",
  "userId": 1
}
```

### Benefícios

* Tipagem forte;
* Melhor legibilidade;
* Redução de JSON hardcoded;
* Reutilização;
* Facilidade de manutenção.

---

# 📥 Response DTO

As respostas da API podem ser convertidas para objetos Java.

```java
RecursoResponseDTO recurso =
        resposta.as(RecursoResponseDTO.class);
```

Depois disso, os dados podem ser acessados através do objeto:

```java
recurso.getId();
recurso.getTitle();
recurso.getBody();
recurso.getUserId();
```

Para respostas em formato de lista:

```java
List<ComentarioResponseDTO> comentarios =
        resposta.jsonPath()
                .getList(
                        "",
                        ComentarioResponseDTO.class
                );
```

---

# 🧩 Client Layer

A camada `Client` encapsula a comunicação HTTP.

Atualmente existem clientes responsáveis pelas operações:

```text
atualizarRecurso
buscarRecurso
criarRecurso
deletarRecurso
filtrarRecursos
listarhierarquiaRecursos
listartodosRecursos
```

Exemplo:

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

O teste não precisa conhecer os detalhes de construção da requisição.

Ele trabalha com uma abstração:

```java
Response resposta =
        atualizarecurso.atualizaRecurso(id, request);
```

Isso mantém o teste concentrado no **comportamento esperado** e na **validação do resultado**.

---

# ⚙️ Request Configuration

A configuração comum das requisições está centralizada em:

```text
RequestConfig.java
```

Exemplo:

```java
public class RequestConfig {

    public static RequestSpecification requestSpec() {

        return given()
                .contentType("application/json");
    }
}
```

Os Clients reutilizam essa configuração:

```java
RequestConfig.requestSpec()
```

### Benefício

Evita duplicação de configurações como:

```java
given()
    .contentType("application/json")
```

em diferentes classes.

---

# 📊 Data Driven Testing

Os dados de teste são externalizados em arquivos CSV.

Exemplo:

```text
src/test/resources/testdata/

├── criar_recurso.csv
├── atualiza_recurso.csv
├── buscar_recurso.csv
├── deletar_recurso.csv
├── listar_filtrarecursos.csv
├── listar_hierarquiarecursos.csv
└── listar_todosrecursos.csv
```

Os dados são carregados através do:

```text
TestDataReader
```

Exemplo:

```java
TestDataReader.lerCSV(
        "testdata/criar_recurso.csv"
);
```

---

# 🔁 Parameterized Tests

O projeto utiliza os recursos de parametrização do JUnit para executar o mesmo cenário com diferentes conjuntos de dados.

Exemplo:

```java
@ParameterizedTest
@MethodSource("dadosCriarRecurso")
public void criarRecurso(
        int id,
        int statusEsperado,
        CriarRecursoDTO request) {

    // test
}
```

### Benefícios

* Menor duplicação;
* Maior cobertura;
* Reutilização da lógica;
* Facilidade para adicionar cenários;
* Separação entre dados e implementação.

---

# 📄 TestDataReader

O `TestDataReader` é responsável por abstrair a leitura dos arquivos CSV.

Responsabilidades:

* Ler arquivos CSV;
* Ignorar cabeçalhos;
* Converter valores;
* Criar `Arguments`;
* Alimentar testes parametrizados.

Conversões utilizadas incluem:

```text
String
Integer
Long
Double
Boolean
```

Com isso, a classe de teste não precisa conhecer os detalhes da leitura do arquivo.

---

# ✅ Response Validation

As validações são centralizadas quando existe lógica reutilizável.

Exemplo:

```java
assertEquals(
        statusEsperado,
        resposta.statusCode()
);
```

Validação numérica:

```java
assertTrue(
        validator.validarNumero(
                request.getUserId(),
                recurso.getUserId()
        )
);
```

Validação textual:

```java
assertTrue(
        validator.validarTexto(
                request.getTitle(),
                recurso.getTitle()
        )
);
```

Essa abordagem reduz duplicação e mantém os testes mais legíveis.

---

# 🔎 JSONPath

O JSONPath é utilizado para acessar informações específicas da resposta.

Exemplo:

```java
int id =
        resposta.jsonPath()
                .getInt("id");
```

Para coleções:

```java
int quantidade =
        resposta.jsonPath()
                .getList("id")
                .size();
```

Também pode ser utilizado para consultas em estruturas JSON mais complexas.

---

# ▶️ Execução Local

### 1. Clonar o repositório

```bash
git clone https://github.com/antoniogmartins/Services.git
```

### 2. Acessar o projeto

```bash
cd Services/RestAssured/projeto01/restassured01
```

### 3. Executar os testes

```bash
mvn clean test
```

Ou:

```bash
mvn test
```

---

# 🧪 Principais comandos Maven

### Limpar o projeto

```bash
mvn clean
```

### Executar testes

```bash
mvn test
```

### Limpar e executar

```bash
mvn clean test
```

---

# 🔄 CI/CD

O projeto possui integração com **GitHub Actions** para automatização da execução dos testes.

Fluxo conceitual:

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
    └── Execute Tests
```

O objetivo é permitir que alterações no projeto sejam acompanhadas por uma execução automatizada da suíte.

---

# 📈 Qualidade e Evolução

O projeto foi estruturado para permitir sua evolução para uma arquitetura mais completa de **API Quality Engineering**.

### Já demonstrado no projeto

* API Testing
* REST Assured
* Java
* JUnit
* Maven
* CRUD
* Client Layer
* DTO Pattern
* Data Driven Testing
* Parameterized Tests
* CSV
* JSONPath
* Response Validation
* Centralized Request Configuration
* CI/CD

### Próximas evoluções

* Generic Base Client
* Request/Response Builders
* Authentication Strategies
* OAuth2 / JWT
* Retry Mechanisms
* Logging
* Correlation IDs
* Parallel Test Execution
* Test Categorization
* Environment-specific Configuration
* Advanced Schema Validation
* Contract Testing
* Performance Testing
* Allure Reporting
* Dockerized Execution
* Grafana Dashboards

> As funcionalidades acima representam a evolução planejada do framework e não devem ser interpretadas como funcionalidades necessariamente implementadas na versão atual.

---

# 🧠 Conceitos de QA Demonstrados

Este projeto aplica conceitos importantes de **QA Automation / SDET**:

```text
API Testing
     ↓
Functional Testing
     ↓
CRUD
     ↓
Client Pattern
     ↓
DTO Pattern
     ↓
Data Driven Testing
     ↓
Parameterized Testing
     ↓
Response Validation
     ↓
CI/CD
```

Além da implementação técnica, o projeto busca demonstrar preocupações de engenharia como:

* Manutenibilidade;
* Reutilização;
* Separação de responsabilidades;
* Escalabilidade;
* Legibilidade;
* Redução de duplicação;
* Organização da suíte de testes.

---

# 🚀 Roadmap

```text
                    API Automation
                          │
                          ▼
                 REST Assured + Java
                          │
                          ▼
                    Client Layer
                          │
                          ▼
                     DTO Pattern
                          │
                          ▼
                Data Driven Testing
                          │
                          ▼
                Parameterized Tests
                          │
                          ▼
                  Response Validation
                          │
                          ▼
                       CI/CD
                          │
              ┌───────────┴───────────┐
              ▼                       ▼
       Performance              Contract Testing
          K6                         JSON Schema
              │                       │
              └───────────┬───────────┘
                          ▼
                 Quality Engineering
```

---

# 📌 Status do Projeto

| Recurso                | Status |
| ---------------------- | ------ |
| Java 17                | ✅      |
| REST Assured           | ✅      |
| JUnit                  | ✅      |
| Maven                  | ✅      |
| CRUD API Testing       | ✅      |
| Client Layer           | ✅      |
| Request DTO            | ✅      |
| Response DTO           | ✅      |
| Data Driven Testing    | ✅      |
| Parameterized Tests    | ✅      |
| JSONPath               | ✅      |
| Response Validation    | ✅      |
| GitHub Actions         | ✅      |
| JSON Schema Validation | 🔄     |
| Performance Testing    | 🔄     |
| Contract Testing       | 🔄     |
| Allure                 | 🔄     |
| Docker                 | 🔄     |
| Grafana                | 🔄     |

`🔄` representa evolução ou integração planejada do framework.

---

# 👨‍💻 Autor

**Antonio G. Martins**

**Quality Assurance Analyst | Test Automation**

Principais tecnologias relacionadas ao projeto:

```text
Java
REST Assured
JUnit
TestNG
Selenium
Cypress
Playwright
Robot Framework
Postman
K6
JMeter
GitHub Actions
Jenkins
Docker
SQL
AWS
```

---

# 🔗 Repository

**Services — API Quality Engineering & Automation**

[Acessar o repositório Services](https://github.com/antoniogmartins/Services?utm_source=chatgpt.com)

**REST Assured**

[Acessar os projetos REST Assured](https://github.com/antoniogmartins/Services/tree/main/RestAssured?utm_source=chatgpt.com)

---

## ⭐ Propósito

Este projeto não tem como objetivo apenas demonstrar chamadas HTTP automatizadas.

A proposta é demonstrar, de forma prática, a evolução de uma suíte de testes de API para uma solução organizada de **Quality Engineering**, utilizando automação, boas práticas de arquitetura, reutilização de código, dados externos, validação e integração contínua.

