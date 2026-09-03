# 🚀 API Automation Testing — Java + REST Assured

![Java](https://img.shields.io/badge/Java-17-orange?style=for-the-badge\&logo=openjdk)
![REST Assured](https://img.shields.io/badge/REST%20Assured-6.0.1-green?style=for-the-badge)
![JUnit](https://img.shields.io/badge/JUnit-5-red?style=for-the-badge\&logo=junit5)
![Maven](https://img.shields.io/badge/Maven-Build-blue?style=for-the-badge\&logo=apachemaven)
![JavaFaker](https://img.shields.io/badge/JavaFaker-Test%20Data-purple?style=for-the-badge)

Projeto de **automação de testes de APIs REST** desenvolvido utilizando **Java, REST Assured, JUnit 5, Maven e JavaFaker**, com foco na aplicação de boas práticas de **API Testing** e **QA Automation**.

O projeto faz parte do meu laboratório prático de automação de testes e demonstra a construção de testes automatizados para diferentes recursos de uma API, incluindo **autenticação, usuários e produtos**.

---

## 🎯 Objetivo

O objetivo deste projeto é demonstrar, na prática, como desenvolver uma estrutura de automação de testes de API utilizando Java e REST Assured.

Entre os principais conceitos trabalhados estão:

* Automação de APIs REST
* Testes funcionais de API
* HTTP Methods
* Status Codes
* Headers
* Request Body
* Response Body
* JSON
* JSONPath
* Autenticação baseada em token
* Massa de dados dinâmica
* Massa de dados estática
* Validação de respostas
* Organização de testes
* Reutilização de código
* Execução dos testes através do Maven

O REST Assured fornece uma DSL em Java para simplificar a criação e validação de testes de serviços REST, suportando métodos HTTP como `GET`, `POST`, `PUT`, `DELETE`, `PATCH`, `HEAD` e `OPTIONS`.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia             | Utilização                               |
| ---------------------- | ---------------------------------------- |
| **Java 17**            | Linguagem de programação                 |
| **REST Assured 6.0.1** | Automação e validação de APIs REST       |
| **JUnit 5**            | Framework de testes                      |
| **Maven**              | Gerenciamento de dependências e execução |
| **JavaFaker 1.0.1**    | Geração de dados para testes             |
| **JSON / JSONPath**    | Manipulação e validação das respostas    |
| **Git / GitHub**       | Versionamento e hospedagem do projeto    |

A versão do projeto está configurada para utilizar Java 17 e REST Assured 6.0.1 no `pom.xml`.

---

## 📁 Estrutura do projeto

```text
RestAssured02/
│
├── .idea/
│
├── src/
│   │
│   ├── main/
│   │   └── java/
│   │       └── org/
│   │           └── example/
│   │               └── Main.java
│   │
│   └── test/
│       └── java/
│           │
│           ├── Config/
│           │   └── baseTest.java
│           │
│           ├── Login/
│           │   └── loginTest.java
│           │
│           ├── Produtos/
│           │   └── produtosTest.java
│           │
│           ├── Usuarios/
│           │   └── usuariosTest.java
│           │
│           └── Utils/
│               ├── criarprodutosDinamico.java
│               ├── criarusuarioDinamico.java
│               ├── criarusuarioEstatico.java
│               ├── geracorpoprodutoDinamico.java
│               ├── geracorpousuarioDinamico.java
│               └── geracorpousuarioEstatico.java
│
├── .gitignore
├── pom.xml
└── README.md
```

A estrutura atual separa a configuração, testes por domínio e utilitários para geração de dados, facilitando a manutenção e evolução do projeto.

---

# 🧪 Cenários automatizados

## 👤 Usuários

A suíte de testes de usuários contempla um fluxo completo de operações sobre o recurso `/usuarios`.

### GET — Listar usuários

```http
GET /usuarios
```

Validação:

```java
.then()
.statusCode(200);
```

---

### POST — Cadastrar usuário

```http
POST /usuarios
```

O teste utiliza uma massa de dados gerada dinamicamente.

Após o cadastro, o `_id` retornado pela API é armazenado para utilização nos próximos cenários.

```java
idusuario = resposta.jsonPath().getString("_id");
```

---

### GET — Buscar usuário por ID

```http
GET /usuarios/{id}
```

O ID obtido no cadastro é utilizado para consultar o usuário criado.

Além do status HTTP, o teste extrai informações da resposta, como o e-mail.

---

### GET — Buscar usuário por e-mail

```http
GET /usuarios?email={email}
```

O e-mail obtido anteriormente é utilizado como parâmetro de consulta.

---

### PUT — Alterar usuário

```http
PUT /usuarios/{id}
```

Um novo corpo JSON é enviado para atualização do usuário.

---

### DELETE — Excluir usuário

```http
DELETE /usuarios/{id}
```

Além da validação do status HTTP, o teste também valida a mensagem retornada pela API:

```java
String mensagemEsperada = "Registro excluído com sucesso";
String mensagemRetornada = resposta.jsonPath().getString("message");

assertEquals(mensagemEsperada, mensagemRetornada);
```

Esse fluxo demonstra a utilização de **assertions sobre dados do response body**, além da simples validação do status code.

---

# 🔐 Autenticação

O projeto também possui uma suíte dedicada ao processo de login.

```http
POST /login
```

O teste envia um corpo JSON contendo os dados do usuário e valida:

```java
.statusCode(200)
```

Após a autenticação, o token retornado no campo `authorization` é extraído utilizando JSONPath:

```java
acessToken = resposta.jsonPath()
        .getString("authorization");
```

Esse token é posteriormente utilizado nos testes que necessitam de autenticação.

---

# 📦 Produtos

O projeto também contempla automação do recurso de produtos.

O fluxo realiza autenticação antes da execução e utiliza o token obtido no login para enviar uma requisição autenticada.

```http
POST /produtos
```

O token é enviado através do header:

```http
Authorization: {token}
```

E o teste valida o cadastro através do status:

```java
.statusCode(201);
```

A massa do produto é gerada dinamicamente através de uma classe utilitária dedicada.

---

# 🎲 Massa de dados dinâmica

Uma das práticas utilizadas neste projeto é a geração de dados de teste dinamicamente.

Para isso, o projeto utiliza **JavaFaker**.

Exemplos de utilitários:

```text
geracorpousuarioDinamico
geracorpousuarioEstatico
geracorpoprodutoDinamico
```

A utilização de dados dinâmicos ajuda a reduzir a dependência de dados fixos e permite executar os cenários utilizando diferentes informações a cada execução.

---

# 🔄 Fluxo de autenticação

O fluxo de autenticação utilizado pelos testes pode ser representado da seguinte forma:

```text
              ┌─────────────────┐
              │   Massa de      │
              │     Dados       │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │   POST /login   │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │   Access Token  │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │ Authorization   │
              │     Header      │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │ API protegida   │
              │ /produtos       │
              └─────────────────┘
```

---

# 🧱 Arquitetura de testes

A organização atual procura separar responsabilidades:

```text
Testes
│
├── Config
│   └── Configuração da API
│
├── Login
│   └── Autenticação
│
├── Usuarios
│   └── Testes do recurso Usuários
│
├── Produtos
│   └── Testes do recurso Produtos
│
└── Utils
    └── Geração de massa de dados
```

Essa separação permite evoluir posteriormente o projeto para uma arquitetura mais robusta baseada em:

* BaseTest
* Request Specifications
* Response Specifications
* API Clients
* Services
* DTOs
* POJOs
* Builders
* Data Providers
* Reports
* CI/CD

---

# ▶️ Como executar o projeto

## Pré-requisitos

Antes de executar o projeto, certifique-se de possuir:

* Java JDK 17+
* Maven 3.8+
* Git
* IDE de sua preferência

Verifique o Java:

```bash
java -version
```

Verifique o Maven:

```bash
mvn -version
```

---

## 📥 Clonar o repositório

```bash
git clone https://github.com/antoniogmartins/Services.git
```

Acesse o projeto:

```bash
cd Services/RestAssured/projeto02/RestAssured02
```

---

## 📦 Instalar dependências

Execute:

```bash
mvn clean install
```

---

## 🧪 Executar os testes

Para executar toda a suíte:

```bash
mvn test
```

Para limpar os arquivos gerados e executar novamente:

```bash
mvn clean test
```

---

# 📊 Validações realizadas

Os testes utilizam diferentes níveis de validação:

### Status Code

```java
.statusCode(200);
```

### Response Body

```java
resposta.jsonPath().getString("email");
```

### JSONPath

```java
resposta.jsonPath()
        .getString("_id");
```

### Assertions

```java
assertEquals(
    mensagemEsperada,
    mensagemRetornada
);
```

### Headers

```java
.header("Authorization", acessToken)
```

Essas validações permitem verificar não somente se a requisição foi executada com sucesso, mas também se a API retornou os dados esperados.

---

# 📚 Conceitos de API Testing aplicados

Este projeto foi desenvolvido para praticar conceitos fundamentais e intermediários de automação de APIs:

* REST API
* HTTP
* GET
* POST
* PUT
* DELETE
* Headers
* HTTP Status Codes
* JSON
* JSONPath
* Request Body
* Response Body
* Authentication
* Access Token
* Assertions
* Test Data
* Data Generation
* API Automation
* Test Automation
* JUnit 5
* REST Assured
* Maven

---

# 🚀 Próximas evoluções

O projeto pode evoluir para uma arquitetura de automação mais próxima de frameworks utilizados em ambientes corporativos.

### Roadmap

* [ ] Request Specification
* [ ] Response Specification
* [ ] API Client
* [ ] POJO / DTO
* [ ] Serialization / Deserialization
* [ ] Builder Pattern
* [ ] Data Driven Testing
* [ ] Parameterized Tests
* [ ] JSON Schema Validation
* [ ] Contract Testing
* [ ] Allure Report
* [ ] Logs estruturados
* [ ] GitHub Actions
* [ ] CI/CD
* [ ] Docker
* [ ] Environment Configuration
* [ ] Test Tags
* [ ] Test Suites
* [ ] Parallel Execution

---

# 🎓 Objetivo profissional

Este projeto faz parte do meu laboratório de **QA Automation / SDET**, com foco no desenvolvimento de competências em:

```text
QA
 │
 ├── API Testing
 │    └── REST Assured
 │
 ├── Automation
 │    └── Java
 │
 ├── Test Framework
 │    └── JUnit 5
 │
 ├── Build
 │    └── Maven
 │
 ├── Test Data
 │    └── JavaFaker
 │
 └── DevOps
      └── CI/CD
```

A proposta é evoluir progressivamente de testes de API básicos para uma **arquitetura profissional de automação**, aplicando princípios de qualidade, reutilização, manutenção e escalabilidade.

---

## 👨‍💻 Autor

**Antonio Gonçalves Martins**

QA Automation | Quality Assurance | Manual & Automated Testing

Experiência e estudos em:

* API Testing
* REST Assured
* Java
* Selenium
* Cypress
* Playwright
* Robot Framework
* JMeter
* K6
* Postman
* CI/CD
* GitHub Actions

---

## 🔗 Repositório

[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge\&logo=github)](https://github.com/antoniogmartins/Services)

📂 **Projeto:** `RestAssured/projeto02/RestAssured02`

---

## 📖 Referência

A documentação oficial do REST Assured apresenta a ferramenta como uma DSL Java para testes de serviços REST e demonstra recursos de requisições, validação de respostas, autenticação e extração de dados.

---

⭐ **Se este projeto foi útil, considere deixar uma estrela no repositório!**

