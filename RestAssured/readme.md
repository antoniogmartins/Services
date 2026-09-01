# 🚀 API Automation Tests — Java + REST Assured

Projeto de **automação de testes de API REST** desenvolvido em Java utilizando **REST Assured + JUnit 5/6**, com foco em boas práticas de automação, organização de código, reutilização, Data Driven Testing e utilização de DTOs para representação de Request e Response.

O projeto utiliza a API pública **JSONPlaceholder** como ambiente de testes.

---

## 🎯 Objetivo

O objetivo deste projeto é demonstrar, na prática, a construção de uma solução de **API Automation** utilizando Java e REST Assured, aplicando conceitos utilizados em projetos reais de QA Automation.

Entre os principais conceitos implementados estão:

* Testes automatizados de API REST
* REST Assured
* Java
* JUnit
* Parameterized Tests
* Data Driven Testing
* CSV como fonte de dados
* Request DTO
* Response DTO
* Desserialização de JSON
* Validação de objetos Java
* Java Streams
* Reutilização de `RequestSpecification`
* Separação de responsabilidades
* Organização em camadas
* Maven
* Git
* GitHub
* GitHub Actions / CI

---

# 🏗️ Arquitetura

O projeto foi organizado buscando separar responsabilidades entre configuração, comunicação com a API, dados, testes e validações.

```text
RestAssured/
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
│   │               │   ├── BaseConfig.java
│   │               │   ├── BaseTest.java
│   │               │   ├── ConfigManager.java
│   │               │   └── RequestConfig.java
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
│   │               ├── Utils/
│   │               │   └── TestDataReader.java
│   │               │
│   │               └── Validator/
│   │                   └── validacoes.java
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
│               ├── atualizar_recurso.csv
│               ├── buscar_recurso.csv
│               ├── criar_recurso.csv
│               ├── deletar_recurso.csv
│               ├── listar_filtrarecursos.csv
│               ├── listar_hierarquiarecursos.csv
│               └── listar_todosrecursos.csv
│
├── pom.xml
└── README.md
```

---

# 🧩 Separação de responsabilidades

A estrutura foi pensada para evitar que os testes concentrem todas as responsabilidades.

## Client

As classes `Client` são responsáveis pela comunicação com a API.

Exemplo:

```java
public Response atualizaRecurso(int id, AtualizarRecursoDTO request) {

    return RequestConfig.requestSpec()
            .body(request)
            .when()
            .put("/posts/{id}", id)
            .then()
            .extract()
            .response();
}
```

O teste não precisa conhecer detalhes de URL, método HTTP ou configuração da requisição.

---

# ⚙️ RequestConfig

A classe `RequestConfig` centraliza a configuração comum das requisições.

```java
public class RequestConfig {

    public static RequestSpecification requestSpec() {

        return given()
                .contentType("application/json");
    }
}
```

Dessa forma, os Clients podem reutilizar a mesma configuração:

```java
RequestConfig.requestSpec()
```

Isso evita duplicação de código como:

```java
given()
    .contentType("application/json")
```

em todos os Clients.

---

# 📦 DTO — Data Transfer Object

O projeto utiliza DTOs para representar os dados enviados e recebidos pela API.

Existem dois tipos principais:

```text
DTO
│
├── Request
│   ├── CriarRecursoDTO
│   └── AtualizarRecursoDTO
│
└── Response
    ├── RecursoResponseDTO
    └── ComentarioResponseDTO
```

---

# 📤 Request DTO

O **Request DTO** representa os dados que serão enviados para a API.

Por exemplo:

```java
CriarRecursoDTO request =
        new CriarRecursoDTO(
                titulo,
                corpo,
                userId
        );
```

E posteriormente:

```java
.body(request)
```

O objeto Java é convertido para JSON pelo REST Assured/Jackson.

Exemplo:

```json
{
  "title": "Novo recurso",
  "body": "Conteúdo do recurso",
  "userId": 1
}
```

---

# 📥 Response DTO

O **Response DTO** representa os dados retornados pela API.

Exemplo:

```java
RecursoResponseDTO recurso =
        resposta.as(RecursoResponseDTO.class);
```

A resposta JSON:

```json
{
  "userId": 1,
  "id": 1,
  "title": "Título",
  "body": "Conteúdo"
}
```

é convertida para um objeto Java.

Isso permite trabalhar com:

```java
recurso.getId();
recurso.getTitle();
recurso.getBody();
recurso.getUserId();
```

em vez de depender constantemente de:

```java
response.jsonPath()
```

---

# 📚 Response DTO para listas

Quando a API retorna vários objetos, utilizamos uma lista de DTOs.

Exemplo:

```java
List<RecursoResponseDTO> recursos =
        resposta.jsonPath()
                .getList(
                        "",
                        RecursoResponseDTO.class
                );
```

Agora cada item da resposta é representado por um objeto:

```text
List<RecursoResponseDTO>
        │
        ├── RecursoResponseDTO
        ├── RecursoResponseDTO
        ├── RecursoResponseDTO
        └── ...
```

Isso permite utilizar recursos da linguagem Java, como Streams.

Exemplo:

```java
long quantidadeUserId =
        recursos.stream()
                .filter(recurso ->
                        recurso.getUserId() == 1
                )
                .count();
```

---

# 💬 ComentarioResponseDTO

Para o endpoint:

```text
GET /posts/{postId}/comments
```

a API retorna uma lista de comentários.

Por isso foi criado um DTO específico:

```java
ComentarioResponseDTO
```

com os seguintes campos:

```java
private int postId;
private int id;
private String name;
private String email;
private String body;
```

A resposta pode ser convertida diretamente:

```java
List<ComentarioResponseDTO> comentarios =
        resposta.jsonPath()
                .getList(
                        "",
                        ComentarioResponseDTO.class
                );
```

---

# 🧪 Testes implementados

Atualmente o projeto contempla os seguintes cenários:

| Teste                  | Método | Endpoint                   | Objetivo                      |
| ---------------------- | ------ | -------------------------- | ----------------------------- |
| Criar recurso          | POST   | `/posts`                   | Criar um novo recurso         |
| Buscar recurso         | GET    | `/posts/{id}`              | Buscar recurso por ID         |
| Atualizar recurso      | PUT    | `/posts/{id}`              | Atualizar recurso             |
| Deletar recurso        | DELETE | `/posts/{id}`              | Excluir recurso               |
| Filtrar recursos       | GET    | `/posts?userId={userId}`   | Filtrar por usuário           |
| Listar recursos        | GET    | `/posts`                   | Retornar todos os recursos    |
| Hierarquia/Comentários | GET    | `/posts/{postId}/comments` | Buscar comentários de um post |

---

# 🧪 Data Driven Testing

Os testes utilizam arquivos CSV como fonte de dados.

Exemplo:

```text
testdata/
│
├── criar_recurso.csv
├── atualizar_recurso.csv
├── buscar_recurso.csv
├── deletar_recurso.csv
├── listar_filtrarecursos.csv
├── listar_hierarquiarecursos.csv
└── listar_todosrecursos.csv
```

A leitura dos arquivos é centralizada na classe:

```java
TestDataReader
```

---

# 🔄 ParameterizedTest

Os dados são executados utilizando JUnit Parameterized Tests.

Exemplo:

```java
@ParameterizedTest
@MethodSource("dadosCriarRecurso")
public void getcriarRecurso(
        int id,
        int statusEsperado,
        CriarRecursoDTO request) {
```

Isso permite executar o mesmo teste com diferentes conjuntos de dados.

---

# 🏭 MethodSource

Os dados são fornecidos pelo método:

```java
static Stream<Arguments> dadosCriarRecurso()
```

Exemplo:

```java
return TestDataReader.lerCSV(
        "testdata/criar_recurso.csv"
);
```

Quando necessário, os dados do CSV são transformados em DTOs:

```java
CriarRecursoDTO request =
        new CriarRecursoDTO(
                titulo,
                corpo,
                userId
        );
```

---

# 🧰 TestDataReader

A classe `TestDataReader` possui a responsabilidade de:

* localizar o CSV;
* abrir o arquivo;
* identificar o cabeçalho;
* ler os registros;
* converter os valores;
* disponibilizar os dados como `Stream<Arguments>`.

A conversão suporta diferentes tipos:

```text
String
Integer
Long
Double
Boolean
```

Isso permite que os testes permaneçam independentes da implementação da leitura dos dados.

---

# 🔎 Validações

O projeto possui uma classe específica para validações:

```java
validacoes
```

Ela centraliza métodos utilizados pelos testes, como:

```java
validarNumero(...)
```

e:

```java
validarTexto(...)
```

Isso reduz duplicação e mantém a lógica de comparação fora dos Clients.

---

# 🌊 Java Streams

O projeto também utiliza Java Streams para trabalhar com coleções de objetos.

Exemplo:

```java
assertTrue(
        comentarios.stream()
                .allMatch(comentario ->
                        comentario.getPostId() == postId
                )
);
```

Nesse caso, `allMatch()` verifica se **todos os comentários pertencem ao `postId` informado**.

Outro exemplo:

```java
long quantidadeUserId =
        recursos.stream()
                .filter(recurso ->
                        recurso.getUserId() == 1
                )
                .count();
```

Nesse caso:

1. `stream()` percorre a lista;
2. `filter()` mantém apenas os recursos do usuário `1`;
3. `count()` contabiliza os elementos encontrados.

---

# 🔁 Fluxo da automação

O fluxo principal do projeto pode ser representado da seguinte forma:

```text
CSV
 │
 ▼
TestDataReader
 │
 ▼
ParameterizedTest
 │
 ▼
Request DTO
 │
 ▼
Client
 │
 ▼
RequestConfig
 │
 ▼
REST Assured
 │
 ▼
API
 │
 ▼
Response
 │
 ▼
Response DTO
 │
 ▼
Validações
 │
 ▼
JUnit Assertion
```

Esse fluxo permite separar claramente:

**Dados → Teste → Request → API → Response → Validação**

---

# 🧱 Exemplo completo

Um teste de atualização segue aproximadamente este fluxo:

```java
AtualizarRecursoDTO request =
        new AtualizarRecursoDTO(
                titulo,
                corpo,
                userId
        );

Response resposta =
        atualizarecurso.atualizaRecurso(
                id,
                request
        );

assertEquals(
        statusEsperado,
        resposta.statusCode()
);

RecursoResponseDTO recurso =
        resposta.as(
                RecursoResponseDTO.class
        );

assertTrue(
        validator.validarNumero(
                request.getUserId(),
                recurso.getUserId()
        )
);
```

O teste fica responsável pela **orquestração e validação**, enquanto o Client fica responsável pela **comunicação HTTP**.

---

# 🛠️ Tecnologias

| Tecnologia         | Utilização                              |
| ------------------ | --------------------------------------- |
| Java 17            | Linguagem principal                     |
| REST Assured       | Automação de APIs REST                  |
| JUnit              | Framework de testes                     |
| Maven              | Gerenciamento do projeto e dependências |
| Jackson            | Serialização/Desserialização JSON       |
| Apache Commons CSV | Leitura dos arquivos CSV                |
| Git                | Controle de versão                      |
| GitHub             | Repositório                             |
| GitHub Actions     | Integração/execução contínua            |

---

# 📦 Dependências principais

O projeto utiliza Maven para gerenciamento das dependências.

Principais bibliotecas:

```text
REST Assured
JUnit
Jackson
Apache Commons CSV
```

As versões e configurações podem ser consultadas diretamente no:

```text
pom.xml
```

---

# ▶️ Executando o projeto

Clone o repositório:

```bash
git clone https://github.com/antoniogmartins/Services.git
```

Acesse o projeto:

```bash
cd Services/RestAssured/projeto01/restassured
```

Execute os testes:

```bash
mvn clean test
```

---

# 🧪 Executando um teste específico

Exemplo:

```bash
mvn test -Dtest=criarRecursoTest
```

Outro exemplo:

```bash
mvn test -Dtest=atualizarRecursoTest
```

---

# 🌎 Ambientes

A configuração do projeto foi estruturada para permitir utilização de diferentes ambientes através da configuração centralizada.

Exemplo:

```bash
mvn clean test -Denv=staging
```

A configuração é gerenciada pelas classes:

```text
BaseConfig
ConfigManager
BaseTest
```

---

# 🤖 CI/CD

O projeto possui integração com **GitHub Actions** para execução automatizada dos testes.

Fluxo:

```text
Git Push
   │
   ▼
GitHub Actions
   │
   ▼
Setup Java
   │
   ▼
Maven
   │
   ▼
mvn clean test
   │
   ▼
Testes REST Assured
   │
   ▼
Resultado
```

Isso permite executar a suíte de testes automaticamente após alterações no projeto.

---

# 📊 Boas práticas aplicadas

Durante a evolução do projeto foram aplicadas algumas práticas importantes de automação:

### ✔ Separação de responsabilidades

```text
Client       → Comunicação com API
DTO Request  → Dados enviados
DTO Response → Dados recebidos
Config       → Configurações
Utils        → Utilitários
Validator    → Validações
Tests        → Cenários de teste
CSV          → Dados de teste
```

### ✔ Reutilização

A configuração HTTP é centralizada em:

```java
RequestConfig.requestSpec()
```

### ✔ Data Driven Testing

Os dados de teste ficam separados da lógica.

### ✔ DTO

Evita trabalhar diretamente com estruturas JSON espalhadas pelo código.

### ✔ Parameterized Tests

Permite executar o mesmo cenário com diferentes dados.

### ✔ Streams

Permite realizar operações sobre coleções de DTOs de forma mais expressiva.

---

# 📈 Evolução do projeto

O projeto foi desenvolvido de forma incremental.

### Etapa 1

Testes básicos utilizando REST Assured:

```text
given()
when()
then()
```

### Etapa 2

Criação dos Clients.

### Etapa 3

Parameterized Tests.

### Etapa 4

Data Driven Testing utilizando CSV.

### Etapa 5

Criação do `TestDataReader`.

### Etapa 6

Criação dos Request DTOs.

```text
CriarRecursoDTO
AtualizarRecursoDTO
```

### Etapa 7

Criação dos Response DTOs.

```text
RecursoResponseDTO
ComentarioResponseDTO
```

### Etapa 8

Desserialização das respostas:

```java
response.as(RecursoResponseDTO.class)
```

e:

```java
response.jsonPath()
        .getList("", RecursoResponseDTO.class);
```

### Etapa 9

Centralização da configuração HTTP:

```java
RequestConfig.requestSpec()
```

### Etapa 10

Utilização de Java Streams para validação de coleções.

---

# 🚧 Próximos passos

A arquitetura atual permite evoluir o projeto para recursos mais avançados de automação.

Próximas possibilidades:

* [ ] Melhorar nomenclatura das classes seguindo convenções Java
* [ ] Padronizar nomes de métodos
* [ ] Criar métodos HTTP genéricos quando fizer sentido
* [ ] Centralizar endpoints
* [ ] Criar constantes para endpoints
* [ ] Evoluir as validações
* [ ] Criar DTOs adicionais
* [ ] Implementar validação de schema
* [ ] Implementar JSON Schema
* [ ] Adicionar Allure Report
* [ ] Melhorar relatórios de execução
* [ ] Adicionar testes negativos
* [ ] Adicionar testes de contrato
* [ ] Adicionar testes de headers
* [ ] Adicionar testes de autenticação
* [ ] Evoluir a estratégia de CI/CD
* [ ] Dockerizar a execução
* [ ] Integrar com ferramentas de observabilidade

---

# 📚 Conceitos praticados

Este projeto também serve como laboratório para evolução em:

```text
Java
 │
 ├── POO
 ├── Classes
 ├── Objetos
 ├── Encapsulamento
 ├── Construtores
 ├── Getters / Setters
 ├── Collections
 ├── List
 ├── Streams
 ├── Lambda
 │
 └── Exceptions

REST Assured
 │
 ├── given()
 ├── when()
 ├── then()
 ├── RequestSpecification
 ├── Response
 ├── JSONPath
 └── Desserialização

JUnit
 │
 ├── @Test
 ├── @ParameterizedTest
 ├── @MethodSource
 └── Assertions

QA Automation
 │
 ├── API Testing
 ├── Data Driven Testing
 ├── Test Automation
 ├── Regression Testing
 ├── Validation
 └── CI/CD
```

---

# 👨‍💻 Autor

**Antonio G. Martins**

QA Automation / Quality Assurance

Especialização prática em:

```text
Java
REST Assured
Selenium
Cypress
Playwright
Robot Framework
JMeter
K6
API Testing
Test Automation
```

---

# 🔗 Repositório

**GitHub**

https://github.com/antoniogmartins/Services/tree/main/RestAssured

---

## ⭐ Considerações

Este projeto está em evolução contínua e representa um laboratório prático para aplicação de conceitos de **Java, API Automation, REST Assured, JUnit, DTO, Data Driven Testing e boas práticas de engenharia de software**.

A arquitetura está sendo evoluída gradualmente com o objetivo de aproximar o projeto de uma estrutura utilizada em ambientes profissionais de **QA Automation / Quality Engineering**.

