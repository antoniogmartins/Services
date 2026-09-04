# 🚀 REST Assured API Automation — Projeto 02

> **API Automation Framework** desenvolvido com **Java + REST Assured + JUnit**, com foco em autenticação, gerenciamento de usuários, produtos e geração de dados de teste.

Este projeto faz parte do laboratório **Services — API Quality Engineering & Automation** e representa uma evolução em relação aos testes básicos de API, introduzindo conceitos de **autenticação, token, dados dinâmicos e dependência entre fluxos de negócio**.

---

# 🎯 Objetivo

O objetivo deste projeto é praticar automação de APIs REST utilizando Java e REST Assured, explorando principalmente:

* API Testing;
* REST Assured;
* HTTP methods;
* Authentication;
* Authorization Token;
* CRUD;
* Test Data;
* Dados estáticos;
* Dados dinâmicos;
* JavaFaker;
* JSON;
* JSONPath;
* JUnit;
* Reutilização de informações entre testes.

O projeto utiliza uma API de usuários e produtos para demonstrar cenários de autenticação e operações que dependem de autorização.

---

# 🧰 Tecnologias

| Tecnologia             | Utilização                            |
| ---------------------- | ------------------------------------- |
| **Java 17**            | Linguagem de programação              |
| **REST Assured 6.0.1** | Automação de APIs REST                |
| **JUnit 5.11.0**       | Framework de testes                   |
| **Maven**              | Build e gerenciamento de dependências |
| **JavaFaker 1.0.1**    | Geração de dados dinâmicos            |
| **Jackson 2.19.2**     | Manipulação de objetos/JSON           |
| **JSON**               | Formato de comunicação                |
| **JSONPath**           | Extração de dados das respostas       |
| **Git / GitHub**       | Versionamento                         |

Essas tecnologias correspondem às dependências atualmente configuradas no projeto.

---

# 🏗️ Estrutura do Projeto

A estrutura atual está organizada por responsabilidade:

```text
restassured02/
│
├── pom.xml
├── readme.md
├── Readme
│
└── src/
    │
    ├── main/
    │   └── java/
    │       └── org/
    │           └── example/
    │               └── Main.java
    │
    └── test/
        └── java/
            │
            ├── Config/
            │   └── BaseTest.java
            │
            ├── Data/
            │   ├── GerarcorpousuarioDinamico.java
            │   ├── GerarcorpousuarioEstatico.java
            │   └── GerarprodutosDinamico.java
            │
            ├── Login/
            │   └── LoginTest.java
            │
            ├── Produtos/
            │   └── ProdutosTest.java
            │
            ├── Usuarios/
            │   └── UsuariosTest.java
            │
            └── Utils/
                ├── CriarprodutosDinamico.java
                ├── CriarusuarioDinamico.java
                └── CriarusuarioEstatico.java
```

A estrutura `Config`, `Data`, `Login`, `Produtos`, `Usuarios` e `Utils` está presente atualmente no projeto.

---

# 🔐 Autenticação

Um dos principais objetivos do Projeto 02 é demonstrar um fluxo de autenticação baseado em token.

O fluxo é:

```text
┌───────────────────┐
│       Login       │
│    POST /login    │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│ Response          │
│ authorization     │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│ Access Token      │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│ Authenticated API │
│ Requests          │
└───────────────────┘
```

O `LoginTest` realiza a chamada para:

```http
POST /login
```

e extrai o valor do campo:

```json
{
  "authorization": "..."
}
```

O token é armazenado para utilização nas requisições que exigem autenticação.

---

# 🔑 Access Token

O token obtido no login é utilizado como mecanismo de autorização.

Conceitualmente:

```text
Login
  ↓
Authorization Token
  ↓
Authenticated Request
  ↓
API Response
```

Essa abordagem permite demonstrar uma situação bastante comum em automação de APIs:

> Uma requisição precisa ser realizada antes que outra possa ser executada.

---

# 👤 Usuários

O projeto possui uma suíte específica para operações relacionadas a usuários.

### Operações

| Operação             | Método   | Endpoint                  |
| -------------------- | -------- | ------------------------- |
| Listar usuários      | `GET`    | `/usuarios`               |
| Criar usuário        | `POST`   | `/usuarios`               |
| Buscar usuário       | `GET`    | `/usuarios/{id}`          |
| Atualizar usuário    | `PUT`    | `/usuarios/{id}`          |
| Excluir usuário      | `DELETE` | `/usuarios/{id}`          |
| Pesquisar por e-mail | `GET`    | `/usuarios?email={email}` |

O objetivo é praticar operações CRUD e consultas utilizando parâmetros de caminho e parâmetros de consulta.

---

# 👤 Criação de Usuários

O projeto trabalha com duas estratégias para criação dos dados.

### Dados estáticos

Dados previamente definidos:

```text
Nome
E-mail
Senha
Administrador
```

Essa abordagem é útil para cenários controlados e reproduzíveis.

### Dados dinâmicos

Os dados são gerados durante a execução.

Para isso, o projeto utiliza:

```text
JavaFaker
```

A estrutura `Data` contém classes específicas para geração de dados de usuários e produtos.

---

# 🎲 Geração de Dados Dinâmicos

A utilização de dados dinâmicos evita que todos os testes dependam sempre dos mesmos valores.

Exemplo conceitual:

```java
Faker faker = new Faker();

String nome = faker.name().fullName();
String email = faker.internet().emailAddress();
```

O resultado pode ser utilizado para montar um novo usuário durante a execução.

### Benefícios

* Redução de dados hardcoded;
* Menor possibilidade de conflito de registros;
* Maior variedade de cenários;
* Reutilização;
* Testes mais próximos de situações reais.

---

# 📦 Produtos

O projeto também possui uma suíte dedicada a produtos:

```text
Produtos/
└── ProdutosTest.java
```

O fluxo de produtos utiliza autenticação.

A preparação do teste realiza:

```text
1. Obter URL
       ↓
2. Realizar Login
       ↓
3. Obter Access Token
       ↓
4. Gerar dados do produto
       ↓
5. Enviar requisição autenticada
       ↓
6. Validar resposta
```

Essa dependência pode ser observada na preparação do `ProdutosTest`, que obtém o token através do fluxo de login e gera os dados do produto antes da execução do teste.

---

# 🔄 Fluxo End-to-End

O principal fluxo demonstrado pelo projeto pode ser representado como:

```text
              ┌──────────────┐
              │ Gerar Dados  │
              └──────┬───────┘
                     │
                     ▼
              ┌──────────────┐
              │    Login     │
              └──────┬───────┘
                     │
                     ▼
              ┌──────────────┐
              │ Access Token │
              └──────┬───────┘
                     │
                     ▼
              ┌──────────────┐
              │   Usuário    │
              └──────┬───────┘
                     │
                     ▼
              ┌──────────────┐
              │   Produto    │
              └──────┬───────┘
                     │
                     ▼
              ┌──────────────┐
              │  Validação   │
              └──────────────┘
```

Esse fluxo demonstra uma característica importante da automação de APIs: **o teste pode trabalhar com dados produzidos por etapas anteriores da execução**.

---

# 🧪 Estratégia de Testes

A automação trabalha principalmente com:

### Functional Testing

Validação do comportamento dos endpoints.

### CRUD Testing

```text
CREATE
  POST
   ↓
READ
  GET
   ↓
UPDATE
  PUT
   ↓
DELETE
  DELETE
```

### Authentication Testing

Validação do fluxo:

```text
Credentials
    ↓
POST /login
    ↓
Authorization Token
    ↓
Authenticated Request
```

### Test Data

Utilização de:

* Dados estáticos;
* Dados dinâmicos;
* JavaFaker.

### Response Validation

Validação do resultado retornado pela API.

---

# 🔎 JSONPath

O projeto utiliza JSONPath para acessar informações específicas das respostas JSON.

Exemplo:

```java
String token =
        resposta
            .jsonPath()
            .getString("authorization");
```

Esse mecanismo é utilizado no fluxo de autenticação para extrair o token retornado pelo endpoint de login.

---

# 🧩 Organização por Responsabilidade

A organização atual permite separar diferentes responsabilidades:

```text
Config
  ↓
Configuração comum dos testes

Data
  ↓
Geração de dados

Login
  ↓
Autenticação

Usuarios
  ↓
Testes de usuários

Produtos
  ↓
Testes de produtos

Utils
  ↓
Objetos auxiliares / geração de payloads
```

Essa separação facilita a leitura e permite que novas funcionalidades sejam adicionadas gradualmente.

---

# ⚙️ Configuração Base

O projeto possui uma classe:

```text
Config/BaseTest.java
```

utilizada como base para os testes.

O objetivo é concentrar informações comuns utilizadas durante a execução.

Essa abordagem permite evoluir posteriormente para uma configuração mais robusta, com:

* Base URI;
* Ambientes;
* Headers;
* Authentication;
* Timeouts;
* Logging;
* Configurações específicas por ambiente.

---

# ▶️ Execução Local

### 1. Clonar o repositório

```bash
git clone https://github.com/antoniogmartins/Services.git
```

### 2. Acessar o projeto

```bash
cd Services/RestAssured/projeto02/restassured02
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

# 📊 Componentes do Framework

| Componente     | Responsabilidade     |
| -------------- | -------------------- |
| `BaseTest`     | Configuração base    |
| `LoginTest`    | Autenticação         |
| `UsuariosTest` | Testes de usuários   |
| `ProdutosTest` | Testes de produtos   |
| `Data`         | Geração de dados     |
| `Utils`        | Objetos auxiliares   |
| `pom.xml`      | Dependências e build |

---

# 📈 Evolução da Automação

O Projeto 02 representa uma evolução importante em relação a uma automação simples de endpoints.

```text
API Testing
     ↓
REST Assured
     ↓
JUnit
     ↓
CRUD
     ↓
Authentication
     ↓
Token
     ↓
Dynamic Test Data
     ↓
JavaFaker
     ↓
Dependent API Flows
```

O foco deixa de ser somente:

> "Como enviar uma requisição?"

e passa a ser:

> "Como estruturar uma automação capaz de representar fluxos reais de uma API?"

---

# 🚀 Próximas Evoluções

A documentação atual do projeto já identifica algumas evoluções planejadas.

## Arquitetura

* [ ] Melhorar arquitetura;
* [ ] Separar melhor responsabilidades;
* [ ] Criar camada de serviços;
* [ ] Criar clientes reutilizáveis.

## Modelagem

* [ ] DTOs;
* [ ] Builders;
* [ ] Objetos de request/response.

## Dados

* [ ] Data Providers;
* [ ] Estratégia avançada de geração de dados;
* [ ] Massa de testes externalizada.

## Configuração

* [ ] Configuration por ambiente;
* [ ] URLs parametrizadas;
* [ ] Variáveis de ambiente.

## Validação

* [ ] JSON Schema;
* [ ] Validações reutilizáveis;
* [ ] Contract Testing.

## CI/CD

* [ ] Pipeline automatizado;
* [ ] Execução dos testes no GitHub Actions;
* [ ] Reports;
* [ ] Quality Gates.

> Os itens acima representam a evolução planejada e não devem ser considerados funcionalidades completamente implementadas na versão atual.

---

# 📌 Status Atual

| Recurso            | Status |
| ------------------ | ------ |
| Java 17            | ✅      |
| REST Assured       | ✅      |
| JUnit              | ✅      |
| Maven              | ✅      |
| JSON / JSONPath    | ✅      |
| Authentication     | ✅      |
| Access Token       | ✅      |
| Testes de Usuários | ✅      |
| Testes de Produtos | ✅      |
| Dados estáticos    | ✅      |
| Dados dinâmicos    | ✅      |
| JavaFaker          | ✅      |
| DTOs               | 🔄     |
| Builders           | 🔄     |
| Data Providers     | 🔄     |
| Multi-environment  | 🔄     |
| Reports            | 🔄     |
| CI/CD              | 🔄     |
| JSON Schema        | 🔄     |
| Contract Testing   | 🔄     |

---

# 🧠 Conceitos de QA Automation Demonstrados

Este projeto demonstra conceitos relevantes para uma atuação como **QA Automation / SDET**:

* API Testing;
* REST API Automation;
* Authentication;
* Authorization;
* Token Management;
* CRUD;
* Test Data Management;
* Dynamic Data;
* Static Data;
* JSON;
* JSONPath;
* JUnit;
* REST Assured;
* Maven;
* Reutilização de código;
* Organização por responsabilidade.

---

# 🔗 Projeto

**Repository:** Services

**Projeto:** `RestAssured/projeto02/restassured02`

---

# 👨‍💻 Autor

**Antonio G. Martins**

**Quality Assurance Analyst | Test Automation**

Tecnologias relacionadas:

```text
Java
REST Assured
JUnit
Maven
Postman
Selenium
Cypress
Playwright
Robot Framework
K6
JMeter
GitHub Actions
Jenkins
```

---

## ⭐ Propósito

O Projeto 02 tem como objetivo demonstrar a evolução da automação de APIs para cenários que envolvem **autenticação, autorização, geração de dados e dependência entre operações**.

Mais do que validar endpoints isoladamente, a proposta é construir uma base que possa evoluir progressivamente para um **framework profissional de API Automation e Quality Engineering**.

