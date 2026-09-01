# 🚀 API Automation Tests — REST Assured + Java

Framework de automação de testes de API desenvolvido em **Java 17 + REST Assured + JUnit 6**, aplicando conceitos e boas práticas de **QA Automation / Quality Engineering**.

O projeto utiliza a API pública **JSONPlaceholder** como aplicação de referência para os testes.

A automação foi construída de forma incremental, evoluindo de chamadas REST individuais para uma estrutura organizada com:

* API Clients
* Request DTOs
* Response DTOs
* Data Driven Testing
* Parameterized Tests
* Configuração por ambiente
* Request Specification reutilizável
* Desserialização de respostas
* Validações utilizando JUnit Assertions e Java Streams
* Maven
* GitHub Actions / CI

---

# 🎯 Objetivo

O objetivo deste projeto é construir uma estrutura de automação de APIs próxima de um framework utilizado em projetos reais de **QA Automation / Quality Engineering**.

O projeto busca demonstrar:

* Automação de APIs REST;
* Separação de responsabilidades;
* Reutilização de código;
* Data Driven Testing;
* Parameterized Tests;
* Request DTO;
* Response DTO;
* Serialização e desserialização;
* Configuração por ambiente;
* Request Specification reutilizável;
* Validação de objetos e coleções;
* Uso de Java Streams em testes;
* Organização de API Clients;
* Execução através de Maven;
* Integração com CI/CD.

A proposta não é apenas testar endpoints, mas construir uma base que possa evoluir para um framework de automação **reutilizável, escalável e sustentável**.

---

# 🛠️ Tecnologias

| Tecnologia         | Utilização                            |
| ------------------ | ------------------------------------- |
| Java 17            | Linguagem principal                   |
| REST Assured 6.0.1 | Automação de APIs REST                |
| JUnit 6            | Framework de testes                   |
| Maven              | Build e gerenciamento de dependências |
| Jackson            | Serialização e desserialização        |
| JSONPath           | Navegação complementar em JSON        |
| Apache Commons CSV | Leitura dos dados de teste            |
| Git                | Controle de versão                    |
| GitHub             | Repositório                           |
| GitHub Actions     | CI/CD                                 |

---

# 🏗️ Arquitetura

A estrutura foi organizada utilizando separação de responsabilidades entre:

```text
                    ┌──────────────────────┐
                    │      Test Data       │
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
                    ┌──────────▼───────────┐
                    │      Request DTO     │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │        Client        │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    RequestConfig     │
                    │ RequestSpecification │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │      REST API        │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    Response DTO      │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   JUnit Assertions   │
                    │   Java Streams       │
                    └──────────────────────┘
```

---

# 📁 Estrutura do projeto

```text
RestAssured/
│
├── projeto01/
│   └── restassured/
│
│       ├── src/
│       │
│       ├── main/
│       │   └── java/
│       │       └── com.thecat/
│       │
│       │           ├── Client/
│       │           │   ├── atualizarRecurso.java
│       │           │   ├── buscarRecurso.java
│       │           │   ├── criarRecurso.java
│       │           │   ├── deletarRecurso.java
│       │           │   ├── filtrarRecursos.java
│       │           │   ├── listarhierarquiaRecursos.java
│       │           │   └── listartodosRecursos.java
│       │           │
│       │           ├── Config/
│       │           │   ├── ConfigManager.java
│       │           │   ├── BaseTest.java
│       │           │   └── RequestConfig.java
│       │           │
│       │           ├── DTO/
│       │           │   ├── Request/
│       │           │   │   ├── CriarRecursoDTO.java
│       │           │   │   └── AtualizarRecursoDTO.java
│       │           │   │
│       │           │   └── Response/
│       │           │       ├── RecursoResponseDTO.java
│       │           │       └── ComentarioResponseDTO.java
│       │           │
│       │           └── Validator/
│       │
│       └── test/
│           │
│           ├── java/
│           │   └── com.thecat.Tests/
│           │       ├── atualizarRecursoTest.java
│           │       ├── buscarRecursoTest.java
│           │       ├── criarRecursoTest.java
│           │       ├── deletarRecursoTest.java
│           │       ├── filtrarRecursosTest.java
│           │       ├── listarhierarquiaRecursosTest.java
│           │       └── listartodosRecursosTest.java
│           │
│           └── resources/
│               │
│               ├── environments/
│               │   └── qa.properties
│               │
│               └── testdata/
│                   ├── buscar_recurso.csv
│                   ├── listar_todosrecursos.csv
│                   ├── listar_filtrarecursos.csv
│                   ├── listar_hierarquiarecursos.csv
│                   ├── criar_recurso.csv
│                   ├── atualiza_recurso.csv
│                   └── deletar_recurso.csv
│
└── pom.xml
```

---

# 🔌 API Clients

Cada endpoint possui seu próprio Client.

O Client é responsável exclusivamente pela comunicação HTTP.

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

O teste não precisa conhecer detalhes da construção da requisição.

Ele apenas informa:

```java
client.atualizaRecurso(id, request);
```

Essa separação reduz a duplicação e facilita a manutenção.

---

# ⚙️ RequestConfig

A configuração comum das requisições foi centralizada em:

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
        .body(request)
        .when()
        .post("/posts");
```

Dessa forma, configurações comuns não precisam ser repetidas em todos os Clients.

---

# 🧱 BaseTest e configuração de ambiente

O `BaseTest` configura a URL base da API:

```java
@BeforeAll
static void setup() {
    RestAssured.baseURI = ConfigManager.getBaseUrl();
}
```

A URL é carregada pelo `ConfigManager`.

Arquivo:

```text
src/test/resources/environments/qa.properties
```

Exemplo:

```properties
base.url=https://jsonplaceholder.typicode.com
```

O ambiente pode ser selecionado através de:

```bash
mvn test -Denv=qa
```

A arquitetura permite adicionar futuramente:

```text
qa.properties
staging.properties
prod.properties
```

sem alterar os testes.

---

# 📦 DTO Pattern

O projeto utiliza DTOs para representar os dados enviados e recebidos pela API.

## Request DTO

Representa o corpo enviado para a API.

### Criar recurso

```java
CriarRecursoDTO request =
        new CriarRecursoDTO(
                titulo,
                corpo,
                userId
        );
```

### Atualizar recurso

```java
AtualizarRecursoDTO request =
        new AtualizarRecursoDTO(
                titulo,
                corpo,
                userId
        );
```

O DTO é enviado diretamente:

```java
.body(request)
```

---

# 📥 Response DTO

As respostas da API também são representadas por DTOs.

## RecursoResponseDTO

```text
id
title
body
userId
```

Exemplo:

```java
RecursoResponseDTO recurso =
        resposta.as(RecursoResponseDTO.class);
```

## ComentarioResponseDTO

Utilizado para respostas que retornam uma coleção de comentários:

```text
postId
id
name
email
body
```

Como o endpoint retorna um array:

```text
GET /posts/{postId}/comments
```

a resposta é convertida para:

```java
List<ComentarioResponseDTO>
```

Exemplo:

```java
List<ComentarioResponseDTO> comentarios =
        resposta.jsonPath()
                .getList(
                        "",
                        ComentarioResponseDTO.class
                );
```

---

# 🔄 Request DTO × Response DTO

Uma das principais decisões arquiteturais do projeto é separar claramente:

```text
Request DTO
     │
     │ dados enviados
     ▼
   API
     │
     │ dados retornados
     ▼
Response DTO
```

Por exemplo:

```text
CriarRecursoDTO
       │
       ▼
    POST /posts
       │
       ▼
RecursoResponseDTO
```

Isso evita utilizar o mesmo objeto para representar conceitos diferentes.

---

# 🧪 Testes automatizados

Atualmente o projeto possui **7 classes principais de testes**, cobrindo operações GET, POST, PUT e DELETE.

## 1. Buscar recurso

```http
GET /posts/{id}
```

Classe:

```text
buscarRecursoTest
```

Valida:

* Status Code;
* ID;
* título;
* corpo;
* dados retornados pelo Response DTO.

---

## 2. Listar todos os recursos

```http
GET /posts
```

Classe:

```text
listartodosRecursosTest
```

A resposta é convertida para:

```java
List<RecursoResponseDTO>
```

São realizadas validações sobre:

* Status Code;
* quantidade de recursos;
* quantidade de recursos pertencentes a determinado `userId`.

Para a análise da coleção são utilizados Java Streams:

```java
long quantidadeUserId =
        recursos.stream()
                .filter(recurso ->
                        recurso.getUserId() == 1
                )
                .count();
```

---

## 3. Filtrar recursos

```http
GET /posts?userId={userId}
```

Classe:

```text
filtrarRecursosTest
```

A resposta é convertida para:

```java
List<RecursoResponseDTO>
```

Além da quantidade esperada, o teste verifica se todos os recursos retornados pertencem ao usuário solicitado:

```java
assertTrue(
        recursos.stream()
                .allMatch(recurso ->
                        recurso.getUserId() == userId
                )
);
```

---

## 4. Listar comentários relacionados

```http
GET /posts/{postId}/comments
```

Classe:

```text
listarhierarquiaRecursosTest
```

Como o endpoint retorna uma coleção, utilizamos:

```java
List<ComentarioResponseDTO>
```

O teste verifica se todos os comentários pertencem ao `postId` solicitado:

```java
assertTrue(
        comentarios.stream()
                .allMatch(comentario ->
                        comentario.getPostId() == postId
                )
);
```

---

## 5. Criar recurso

```http
POST /posts
```

Classe:

```text
criarRecursoTest
```

Utiliza:

```java
CriarRecursoDTO
```

Request:

```java
CriarRecursoDTO request =
        new CriarRecursoDTO(
                titulo,
                corpo,
                userId
        );
```

O Client envia:

```java
.body(request)
```

A resposta é desserializada:

```java
RecursoResponseDTO recurso =
        resposta.as(RecursoResponseDTO.class);
```

---

## 6. Atualizar recurso

```http
PUT /posts/{id}
```

Classe:

```text
atualizarRecursoTest
```

Utiliza:

```java
AtualizarRecursoDTO
```

O ID é utilizado como Path Parameter:

```java
.put("/posts/{id}", id)
```

Enquanto o DTO representa o Request Body:

```java
.body(request)
```

A resposta é convertida para:

```java
RecursoResponseDTO
```

---

## 7. Deletar recurso

```http
DELETE /posts/{id}
```

Classe:

```text
deletarRecursoTest
```

Valida:

* Status Code;
* conteúdo da resposta;
* comportamento esperado do endpoint.

---

# 📊 Data Driven Testing

Os testes utilizam arquivos CSV para separar **dados de teste** da **lógica de automação**.

Exemplo:

```csv
id,statusEsperado,title,body,userId
1,201,Meu titulo,Meu corpo,1
2,201,Outro titulo,Outro corpo,2
3,201,Terceiro titulo,Terceiro corpo,3
```

O `TestDataReader` é responsável por:

* localizar o arquivo;
* ler o CSV;
* identificar as colunas;
* converter os valores;
* fornecer os dados para os testes parametrizados.

---

# 🔁 Parameterized Tests

Os testes utilizam:

```java
@ParameterizedTest
@MethodSource(...)
```

Exemplo:

```java
@ParameterizedTest
@MethodSource("dadosCriarRecurso")
public void criarRecurso(
        int id,
        int statusEsperado,
        CriarRecursoDTO request) {

    // teste
}
```

Essa abordagem permite executar o mesmo cenário com diferentes conjuntos de dados.

Para aumentar a cobertura, podemos adicionar novos registros aos arquivos CSV sem duplicar a implementação do teste.

---

# ☕ Java Streams aplicado a testes

O projeto também utiliza recursos do Java moderno para trabalhar com coleções.

## allMatch()

Verifica se todos os elementos satisfazem uma condição:

```java
comentarios.stream()
        .allMatch(comentario ->
                comentario.getPostId() == postId
        );
```

## filter()

Seleciona elementos que atendem a uma condição:

```java
recursos.stream()
        .filter(recurso ->
                recurso.getUserId() == 1
        );
```

## count()

Conta os elementos resultantes:

```java
recursos.stream()
        .filter(recurso ->
                recurso.getUserId() == 1
        )
        .count();
```

Esses recursos permitem que os testes trabalhem diretamente com objetos Java, reduzindo a necessidade de navegação manual pelo JSON.

---

# 🧹 Evolução das validações

Durante a evolução do framework, algumas validações inicialmente realizadas através de:

```java
jsonPath()
```

foram substituídas por objetos desserializados.

Antes:

```java
String titulo =
        resposta.jsonPath()
                .getString("title");
```

Agora:

```java
RecursoResponseDTO recurso =
        resposta.as(RecursoResponseDTO.class);

String titulo =
        recurso.getTitle();
```

Para coleções:

```java
List<RecursoResponseDTO> recursos =
        resposta.jsonPath()
                .getList(
                        "",
                        RecursoResponseDTO.class
                );
```

Essa abordagem melhora:

* legibilidade;
* tipagem;
* manutenção;
* reutilização;
* organização dos testes.

O `Validator` permanece disponível para regras de validação reutilizáveis quando realmente fizer sentido, mas não é mais utilizado obrigatoriamente em todas as assertions.

---

# 🧩 Separation of Responsibilities

O framework segue uma separação clara:

```text
Test
│
└── Cenários e Assertions

Client
│
└── Comunicação HTTP

Request DTO
│
└── Dados enviados para API

Response DTO
│
└── Dados recebidos da API

RequestConfig
│
└── Configuração reutilizável das requisições

TestDataReader
│
└── Leitura dos dados de teste

ConfigManager
│
└── Configuração dos ambientes

BaseTest
│
└── Configuração inicial do REST Assured
```

Essa separação evita concentrar toda a lógica dentro das classes de teste.

---

# ▶️ Como executar

## Executar todos os testes

```bash
mvn test
```

## Executar especificando o ambiente

```bash
mvn test -Denv=qa
```

## Limpar e executar

```bash
mvn clean test
```

---

# 📈 Status atual

## ✅ Implementado

* [x] Java 17
* [x] REST Assured
* [x] JUnit
* [x] Maven
* [x] JSONPath
* [x] Jackson
* [x] Apache Commons CSV
* [x] Data Driven Testing
* [x] CSV Test Data
* [x] Parameterized Tests
* [x] 7 API Test Classes
* [x] API Clients
* [x] Request DTO
* [x] Response DTO
* [x] Serialization / Deserialization
* [x] Request Specification reutilizável
* [x] Environment Configuration
* [x] Base Test
* [x] GET
* [x] POST
* [x] PUT
* [x] DELETE
* [x] Path Parameters
* [x] Query Parameters
* [x] Request Body
* [x] Response validation
* [x] Java Streams em validações de coleções
* [x] Git / GitHub
* [x] GitHub Actions / CI

---

# 🔮 Roadmap

## Próximas evoluções

### Framework

* [ ] Melhorar nomenclatura das classes
* [ ] Padronizar métodos dos Clients
* [ ] Padronizar nomenclatura dos testes
* [ ] Revisar responsabilidades do Validator
* [ ] Criar constantes para endpoints
* [ ] Melhorar tratamento de erros

### API Automation

* [ ] JSON Schema Validation
* [ ] API Contract Testing
* [ ] Authentication / JWT
* [ ] Headers dinâmicos
* [ ] Query Parameters reutilizáveis
* [ ] Request/Response Logging
* [ ] REST Assured Filters
* [ ] Response Specification

### Test Data

* [ ] Melhor gerenciamento dos dados
* [ ] Data Factory
* [ ] Test Data Builder
* [ ] Dados dinâmicos
* [ ] Randomização controlada

### Reporting

* [ ] Maven Surefire Reports
* [ ] Allure Reports
* [ ] Evidências de execução
* [ ] Dashboard de testes

### CI/CD

* [ ] Execução por ambiente
* [ ] Execução paralela
* [ ] Quality Gates
* [ ] Branch Protection
* [ ] Integração com pipeline CI/CD

### Performance

* [ ] K6
* [ ] Performance Testing
* [ ] Load Testing
* [ ] Stress Testing
* [ ] Métricas e thresholds

### Infraestrutura

* [ ] Docker
* [ ] Execução containerizada
* [ ] Integração com observabilidade

---

# 🧭 Próxima evolução arquitetural

A evolução planejada do framework é:

```text
                     ┌──────────────────────┐
                     │      Test Data       │
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
                     └──────────┬───────────┘
                                │
                                ▼
                     ┌──────────────────────┐
                     │    RequestConfig     │
                     └──────────┬───────────┘
                                │
                                ▼
                     ┌──────────────────────┐
                     │       REST API       │
                     └──────────┬───────────┘
                                │
                                ▼
                     ┌──────────────────────┐
                     │    Response DTO      │
                     └──────────┬───────────┘
                                │
                                ▼
                     ┌──────────────────────┐
                     │ JUnit + Java Streams │
                     │     Assertions       │
                     └──────────────────────┘
```

---

# 💡 Objetivo final

A evolução deste projeto é transformar uma automação inicialmente baseada em requisições individuais em um **framework profissional de API Automation**.

```text
API Automation
       +
Data Driven Testing
       +
Parameterized Tests
       +
DTO Pattern
       +
Environment Management
       +
Reusable Request Specification
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

# 👨‍💻 Author

**Antonio G. Martins**

QA Automation / Quality Engineering

**Java • REST Assured • JUnit • Selenium • Cypress • Playwright • Robot Framework • K6 • JMeter • GitHub Actions**

---

# 📌 Repository

[Services — RestAssured](https://github.com/antoniogmartins/Services/tree/main/RestAssured)

⭐ Se este projeto for útil, considere deixar uma estrela no repositório.

