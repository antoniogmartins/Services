# 🧪 Projeto 01 — API Automation Framework

> Framework de automação de testes de APIs desenvolvido com **Java + REST Assured + JUnit**, com foco em reutilização, manutenção, Data Driven Testing, DTOs, validação de respostas e boas práticas de engenharia de testes.

---

## 🎯 Objetivo

O Projeto 01 tem como objetivo demonstrar a construção evolutiva de um **framework de automação de APIs**, partindo de testes simples e evoluindo para uma estrutura organizada e reutilizável.

A solução utiliza:

* Java 17
* REST Assured
* JUnit 5
* Maven
* Jackson
* JSONPath
* Apache Commons CSV
* Git / GitHub
* GitHub Actions
* K6

O projeto utiliza a **JSONPlaceholder** como API para os testes funcionais atuais.

---

## 🧭 Evolução do Framework

A arquitetura foi construída seguindo uma evolução progressiva:

```text
Teste de API
     ↓
Client Layer
     ↓
Request Configuration
     ↓
Request DTO
     ↓
Response DTO
     ↓
Response Validation
     ↓
Data Driven Testing
     ↓
Parameterized Tests
     ↓
CI/CD
     ↓
Performance Testing
     ↓
Quality Engineering
```

A proposta é demonstrar não apenas como automatizar uma API, mas como estruturar uma solução que possa evoluir junto com a complexidade do projeto.

---

# 🏗️ Arquitetura

A arquitetura atual separa as principais responsabilidades:

```text
              ┌─────────────────────┐
              │     Test Data       │
              │       CSV           │
              └──────────┬──────────┘
                         │
                         ▼
              ┌─────────────────────┐
              │   TestDataReader    │
              └──────────┬──────────┘
                         │
                         ▼
              ┌─────────────────────┐
              │ Parameterized Tests │
              └──────────┬──────────┘
                         │
                         ▼
              ┌─────────────────────┐
              │     Request DTO     │
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

Essa separação evita concentrar:

* comunicação HTTP;
* construção de dados;
* serialização;
* desserialização;
* validação;
* execução dos testes

em uma única classe.

---

# 📁 Estrutura do Projeto

```text
restassured01/
│
├── pom.xml
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

# 🔌 API Coverage

O framework possui automação para diferentes operações da API:

| Funcionalidade     | Método | Endpoint                   |
| ------------------ | ------ | -------------------------- |
| Criar recurso      | POST   | `/posts`                   |
| Buscar recurso     | GET    | `/posts/{id}`              |
| Listar recursos    | GET    | `/posts`                   |
| Atualizar recurso  | PUT    | `/posts/{id}`              |
| Excluir recurso    | DELETE | `/posts/{id}`              |
| Filtrar recursos   | GET    | `/posts?userId={userId}`   |
| Listar comentários | GET    | `/posts/{postId}/comments` |

---

# 🧪 Estratégia de Testes

O projeto utiliza diferentes estratégias para aumentar a cobertura e reduzir duplicação.

### Testes funcionais

Validação dos principais comportamentos dos endpoints:

```text
POST
GET
PUT
DELETE
```

### Validação de Status Code

Exemplo:

```java
assertEquals(
    statusEsperado,
    resposta.statusCode()
);
```

### Validação de dados

Os dados retornados pela API podem ser convertidos para objetos Java e posteriormente validados.

```java
RecursoResponseDTO recurso =
        resposta.as(RecursoResponseDTO.class);
```

---

# 📦 Request DTO

Os objetos enviados para a API são representados por DTOs.

Exemplo:

```java
CriarRecursoDTO request =
        new CriarRecursoDTO(
            titulo,
            corpo,
            userId
        );
```

O DTO permite enviar o objeto diretamente:

```java
.body(request)
```

Isso evita a construção manual de JSON dentro dos testes.

---

# 📥 Response DTO

As respostas também podem ser representadas por objetos Java.

Exemplo:

```java
RecursoResponseDTO recurso =
        resposta.as(RecursoResponseDTO.class);
```

Dessa forma, o teste pode trabalhar com:

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

# 📊 Data Driven Testing

Os dados dos testes são separados da lógica de automação através de arquivos CSV.

Exemplo:

```text
testdata/
│
├── criar_recurso.csv
├── atualiza_recurso.csv
├── buscar_recurso.csv
├── deletar_recurso.csv
├── listar_filtrarecursos.csv
├── listar_hierarquiarecursos.csv
└── listar_todosrecursos.csv
```

O `TestDataReader` realiza a leitura dos arquivos e disponibiliza os dados para os testes parametrizados.

Exemplo:

```java
TestDataReader.lerCSV(
    "testdata/criar_recurso.csv"
);
```

---

# 🔁 Parameterized Tests

O framework utiliza o recurso de testes parametrizados do JUnit.

Exemplo:

```java
@ParameterizedTest
@MethodSource("dadosBuscarRecurso")
public void getbuscarRecurso(
        int id,
        int statusEsperado,
        String tituloEsperado,
        String corpoEsperado) {

    // execução do teste
}
```

Isso permite executar a mesma lógica de teste utilizando diferentes conjuntos de dados.

### Benefícios

* Menor duplicação de código
* Maior cobertura
* Melhor manutenção
* Reutilização da lógica
* Facilidade para adicionar novos cenários

---

# 🧩 Client Layer

A comunicação com a API foi isolada em classes Client.

Atualmente existem Clients para:

```text
criarRecurso
buscarRecurso
atualizarRecurso
deletarRecurso
filtrarRecursos
listarhierarquiaRecursos
listartodosRecursos
```

O teste não precisa conhecer todos os detalhes da requisição HTTP.

Exemplo:

```java
Response resposta =
        atualizarecurso.atualizaRecurso(
            id,
            request
        );
```

Enquanto a construção da requisição permanece dentro do Client.

---

# ⚙️ Request Configuration

A configuração das requisições é centralizada em:

```text
RequestConfig.java
```

Exemplo:

```java
public static RequestSpecification requestSpec() {

    return given()
            .contentType("application/json");
}
```

Os Clients reutilizam essa configuração.

Isso reduz repetição e facilita futuras alterações de configuração.

---

# 🔍 JSONPath

O framework também utiliza JSONPath para acessar informações diretamente da resposta.

Exemplo:

```java
int id =
        resposta.jsonPath()
                .getInt("id");
```

Para listas:

```java
int quantidade =
        resposta.jsonPath()
                .getList("id")
                .size();
```

JSONPath também pode ser utilizado para validações sobre coleções de recursos.

---

# ✅ Validações

As validações foram separadas da implementação dos Clients.

O projeto possui uma classe dedicada:

```text
validacoes.java
```

Exemplo de validação numérica:

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

Essa abordagem permite reutilizar regras de validação entre diferentes testes.

---

# 🔄 CRUD

O Projeto 01 demonstra o ciclo completo de operações CRUD:

```text
             CREATE
          POST /posts
               │
               ▼
              READ
       GET /posts/{id}
               │
               ▼
             UPDATE
       PUT /posts/{id}
               │
               ▼
             DELETE
      DELETE /posts/{id}
```

Essa estrutura representa uma base importante para a automação de APIs REST.

---

# 🛠️ Tecnologias

| Tecnologia         | Utilização                     |
| ------------------ | ------------------------------ |
| Java 17            | Desenvolvimento                |
| REST Assured       | Automação de APIs              |
| JUnit 5            | Execução dos testes            |
| Maven              | Build e dependências           |
| Jackson            | Serialização / Desserialização |
| JSONPath           | Manipulação de respostas       |
| Apache Commons CSV | Dados de teste                 |
| Git                | Versionamento                  |
| GitHub             | Repositório                    |
| GitHub Actions     | CI/CD                          |
| K6                 | Testes de performance          |
| Allure             | Relatórios                     |
| Docker             | Containerização                |
| Grafana            | Visualização                   |
| JSON Schema        | Validação de contratos         |

---

# 🚀 CI/CD

O projeto possui integração com **GitHub Actions** para execução automatizada dos testes.

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
    ▼
Build
    │
    ▼
Automated API Tests
    │
    ▼
Test Results
```

Isso permite que os testes sejam executados automaticamente durante o ciclo de desenvolvimento.

---

# 📈 Próximas Evoluções

O framework foi planejado para evoluir para uma solução mais completa de Quality Engineering.

Possíveis evoluções:

```text
API Functional Testing
        ↓
Data Driven Testing
        ↓
CI/CD
        ↓
Contract Testing
        ↓
Performance Testing
        ↓
Observability
        ↓
Quality Gates
        ↓
Advanced Reporting
```

Entre as tecnologias e práticas consideradas estão:

* K6
* Allure
* Grafana
* Docker
* JSON Schema
* Contract Testing
* Observability
* Quality Gates

---

# 📚 Documentação do Projeto

As próximas páginas deste Wiki detalham cada parte do framework.

### 🏗️ Arquitetura

[Projeto 01 — Arquitetura](https://github.com/antoniogmartins/Services/blob/main/RestAssured/projeto01/restassured01/Projeto-01-Architecture.md)

Detalhamento da arquitetura, responsabilidades e fluxo entre as camadas.

### ⚙️ Configuração

[Projeto 01 — Configuração](Projeto-01-Configuracao)

Configuração do Maven, REST Assured, ambientes e propriedades.

### 🧪 Testes de API

[Projeto 01 — Testes](Projeto-01-Testes)

Detalhamento dos testes GET, POST, PUT, DELETE e demais operações.

### 📊 Data Driven Testing

[Projeto 01 — Data Driven Testing](Projeto-01-Data-Driven)

Estratégia de utilização de CSV, `TestDataReader`, `@ParameterizedTest` e `@MethodSource`.

### 🚀 CI/CD

[Projeto 01 — CI/CD](Projeto-01-CI-CD)

Execução dos testes através do GitHub Actions e integração com o pipeline.

---

# 🔗 Código-fonte

O código completo do Projeto 01 está disponível no repositório:

**Services → RestAssured → projeto01 → restassured01**

---

# 🎯 Competências Demonstradas

Este projeto demonstra conhecimentos práticos em:

* API Testing
* REST API
* REST Assured
* Java
* JUnit 5
* Maven
* HTTP Methods
* CRUD
* JSON
* JSONPath
* DTO Pattern
* Data Driven Testing
* Parameterized Testing
* CSV
* Assertions
* Test Automation Framework
* CI/CD
* GitHub Actions
* Performance Testing
* Quality Engineering

---

## 🧠 Objetivo Profissional

O Projeto 01 representa a evolução de um conjunto de testes automatizados para uma estrutura de **API Automation Framework**, demonstrando preocupação não apenas com a execução dos testes, mas também com:

```text
Qualidade
   +
Manutenibilidade
   +
Reutilização
   +
Escalabilidade
   +
Automação
   +
CI/CD
```

---

⬅️ [Voltar para Home](Home)

➡️ [Projeto 02 — Overview](Projeto-02-Overview)

