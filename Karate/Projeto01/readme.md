# 🥋 Karate API Quality

Projeto de **automação de testes de APIs REST** utilizando o framework **Karate**, integrado ao **JUnit 6** e gerenciado pelo **Maven**.

O objetivo deste projeto é explorar, na prática, a criação de testes automatizados para APIs utilizando recursos do Karate como requisições HTTP, validação de status code, validação de JSON, parâmetros, headers, payloads externos e reutilização de massas de dados.

> 🚧 Projeto em desenvolvimento e utilizado como laboratório de estudos de automação de testes de API e Quality Engineering.

---

## 🚀 Tecnologias

* **Java 21**
* **Karate 2.1.2**
* **JUnit 6.1.3**
* **Maven**
* **Logback 1.5.18**
* **JSON**
* **REST API**

As versões utilizadas estão definidas diretamente no `pom.xml` do projeto. O projeto também está configurado para compilação utilizando Java 21.

---

## 📋 Sobre o projeto

O projeto utiliza o **JSONPlaceholder** como API de referência para a execução dos testes.

A URL base atualmente configurada é:

```text
https://jsonplaceholder.typicode.com
```

Essa configuração está centralizada no arquivo:

```text
src/test/resources/karate-config.js
```

A configuração também possui estruturas para diferentes ambientes (`dev`, `staging` e `prod`), permitindo que a URL base e o timeout sejam alterados de acordo com o ambiente de execução.

Atualmente:

| Ambiente  | Base URL                               | Timeout |
| --------- | -------------------------------------- | ------: |
| `dev`     | `https://jsonplaceholder.typicode.com` |     30s |
| `staging` | `https://api.staging.example.com`      |     30s |
| `prod`    | `https://api.example.com`              |     60s |

A configuração padrão utiliza `dev` quando nenhuma variável de ambiente é informada.

---

# 📁 Estrutura do projeto

A estrutura atual do projeto está organizada da seguinte forma:

```text
karate-api-quality/
│
├── .idea/
│
├── src/
│   ├── main/
│   │   └── java/
│   │       └── org/
│   │           └── example/
│   │               └── Main.java
│   │
│   └── test/
│       ├── java/
│       │   └── runners/
│       │       ├── JunitTest.java
│       │       └── KarateTest.java
│       │
│       ├── resources/
│       │   ├── features/
│       │   │   ├── data/
│       │   │   │   ├── recursos/
│       │   │   │   │   ├── request/
│       │   │   │   │   └── response/
│       │   │   │   │
│       │   │   │   └── users/
│       │   │   │       ├── request/
│       │   │   │       └── response/
│       │   │   │
│       │   │   ├── recurso/
│       │   │   │   └── recurso.feature
│       │   │   │
│       │   │   └── users/
│       │   │       └── users.feature
│       │   │
│       │   └── karate-config.js
│       │
│       └── logback-test.xml
│
├── .editorconfig
├── .gitignore
├── classpath.txt
├── pom.xml
└── README.md
```

A organização atual separa os **runners**, as **Features** e os arquivos de dados utilizados pelos testes.

---

# 🧪 Features implementadas

Atualmente existem duas Features principais:

```text
features/
├── recurso/
│   └── recurso.feature
│
└── users/
    └── users.feature
```

Cada Feature contém cenários específicos para validação dos recursos da API.

---

# 👤 Users API

A Feature `users.feature` possui atualmente **8 cenários de teste**.

Arquivo:

```text
src/test/resources/features/users/users.feature
```

## Cenários implementados

### CT01 — Listar todos os usuários

Endpoint:

```http
GET /users
```

Valida:

* HTTP 200
* Estrutura dos usuários
* Conteúdo dos dados esperados
* Tipo do campo `address.street`

O teste também utiliza `karate.map()` para extrair os valores de `address.street` da resposta e validar que os valores são strings.

---

### CT02 — Listar um usuário

Endpoint:

```http
GET /users/1
```

Valida:

* HTTP 200
* Resposta esperada
* Campo `address.geo.lat`

---

### CT03 — Listar comentários de um usuário

Endpoint:

```http
GET /users/1/comments
```

Valida:

* HTTP 200
* Estrutura dos comentários retornados

---

### CT04 — Filtrar comentários por `postId`

Endpoint:

```http
GET /comments?postId=10
```

Valida:

* HTTP 200
* Estrutura dos comentários retornados

---

### CT05 — Criar usuário

Endpoint:

```http
POST /users
```

O payload utilizado no request é carregado de um arquivo JSON externo:

```text
features/data/users/request/users.json
```

O response esperado também é armazenado externamente:

```text
features/data/users/response/users_create.json
```

Valida:

```text
HTTP 201
```

---

### CT06 — Atualizar todos os dados do usuário

Endpoint:

```http
PUT /users/10
```

O payload é carregado do arquivo:

```text
features/data/users/request/users.json
```

Valida:

```text
HTTP 200
```

---

### CT07 — Atualizar parcialmente um usuário

Endpoint:

```http
PATCH /users/1
```

O payload utilizado está em:

```text
features/data/users/request/users_patch.json
```

Valida:

```text
HTTP 200
```

---

### CT08 — Deletar usuário

Endpoint:

```http
DELETE /users/1
```

Valida:

```text
HTTP 200
```

Os oito cenários estão implementados diretamente na Feature `users.feature`.

---

# 📚 Resources API

A Feature `recurso.feature` também possui **8 cenários de teste**.

Arquivo:

```text
src/test/resources/features/recurso/recurso.feature
```

Os testes utilizam o recurso `posts` disponibilizado pelo JSONPlaceholder.

## Cenários implementados

### CT01 — Listar todos os recursos

Endpoint:

```http
GET /posts
```

Valida:

* HTTP 200
* Conteúdo retornado
* Tipo do campo `id`

Também utiliza uma massa de dados externa para comparação:

```text
features/data/recursos/response/recursos.json
```

---

### CT02 — Consultar recurso por ID

Endpoint:

```http
GET /posts/1
```

Valida:

* HTTP 200
* `userId == 1`
* `id == 1`
* `title` como string
* `body` como string

---

### CT03 — Filtrar recursos por `userId`

Endpoint:

```http
GET /posts?userId=1
```

Valida:

* HTTP 200
* Conteúdo dos recursos retornados

---

### CT04 — Listar comentários relacionados a um recurso

Endpoint:

```http
GET /posts/3/comments
```

Valida:

* HTTP 200
* Estrutura da resposta

---

### CT05 — Criar recurso

Endpoint:

```http
POST /posts
```

O payload é carregado de:

```text
features/data/recursos/request/recursos_create.json
```

Valida:

```text
HTTP 201
```

---

### CT06 — Atualizar recurso

Endpoint:

```http
PUT /posts/1
```

O payload é carregado de:

```text
features/data/recursos/request/recursos.json
```

Valida:

```text
HTTP 200
```

E compara o response com:

```text
features/data/recursos/response/recursos_put.json
```

---

### CT07 — Atualizar parcialmente um recurso

Endpoint:

```http
PATCH /posts/1
```

O payload é carregado de:

```text
features/data/recursos/request/recursos_patch.json
```

Valida:

```text
HTTP 200
```

---

### CT08 — Deletar recurso

Endpoint:

```http
DELETE /posts/1
```

Valida:

```text
HTTP 200
```

Os cenários estão implementados diretamente em `recurso.feature`.

---

# 📊 Cobertura atual

Considerando as Features atualmente implementadas:

| Feature       | Cenários |
| ------------- | -------: |
| Users API     |        8 |
| Resources API |        8 |
| **Total**     |   **16** |

Os cenários cobrem operações de consulta, filtros, criação, atualização completa, atualização parcial e exclusão.

---

# 🔄 Métodos HTTP utilizados

O projeto atualmente possui testes para:

```text
GET
POST
PUT
PATCH
DELETE
```

Exemplo da cobertura:

```text
GET
├── /users
├── /users/1
├── /users/1/comments
├── /comments?postId=10
├── /posts
├── /posts/1
├── /posts?userId=1
└── /posts/3/comments

POST
├── /users
└── /posts

PUT
├── /users/10
└── /posts/1

PATCH
├── /users/1
└── /posts/1

DELETE
├── /users/1
└── /posts/1
```

---

# 🗂️ Massa de dados

Um dos pontos importantes da estrutura atual é a separação entre os cenários e os dados utilizados pelos testes.

A estrutura possui:

```text
features/
└── data/
    ├── recursos/
    │   ├── request/
    │   └── response/
    │
    └── users/
        ├── request/
        └── response/
```

Isso permite manter payloads e respostas esperadas fora dos arquivos `.feature`.

Por exemplo:

```gherkin
And def data = read('../data/users/request/users.json')
And request data
```

Essa abordagem evita deixar grandes estruturas JSON diretamente dentro dos cenários e facilita a manutenção das massas de teste.

---

# ⚙️ Configuração do Karate

A configuração global está localizada em:

```text
src/test/resources/karate-config.js
```

Atualmente o projeto define:

```javascript
var config = {
    baseUrl: 'https://jsonplaceholder.typicode.com',
    authUrl: 'https://auth.dev.example.com',
    timeout: 30000
};
```

A variável:

```javascript
karate.env
```

é utilizada para identificar o ambiente.

Quando nenhum ambiente é informado:

```text
dev
```

é utilizado como padrão.

Também existem configurações específicas para:

```text
staging
prod
```

A configuração de produção aumenta o timeout para `60000` milissegundos.

---

# 🏃 Runners

O projeto possui atualmente dois runners.

## KarateTest

Arquivo:

```text
src/test/java/runners/KarateTest.java
```

O runner utiliza a integração do Karate com JUnit 6:

```java
@Karate.Test
Iterable<DynamicNode> testAll() {
    return Karate.run("classpath:features");
}
```

Dessa forma, os testes são executados a partir do diretório:

```text
classpath:features
```

---

## JunitTest

Também existe um runner utilizando diretamente a API do Karate:

```text
src/test/java/runners/JunitTest.java
```

Esse runner executa:

```java
Runner.path("classpath:features")
```

e habilita a geração do relatório HTML:

```java
.outputHtmlReport(true)
```

A execução está configurada atualmente com:

```java
.parallel(1)
```

Ou seja, a suíte é executada com um nível de paralelismo igual a 1.

Ao final, o resultado da suíte é validado através de:

```java
assertTrue(result.isPassed());
```

---

# 📦 Maven

O projeto utiliza Maven para gerenciamento das dependências e execução dos testes.

Principais dependências:

```xml
<dependency>
    <groupId>io.karatelabs</groupId>
    <artifactId>karate-junit6</artifactId>
    <version>2.1.2</version>
</dependency>
```

```xml
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>6.1.3</version>
</dependency>
```

Também é utilizado:

```text
Logback 1.5.18
```

O Maven Compiler Plugin está configurado para Java 21 e o projeto utiliza o Maven Surefire Plugin `3.5.3` para execução dos testes.

---

# ☕ Java

O projeto está configurado para utilizar:

```text
Java 21
```

No `pom.xml`, estão definidos:

```xml
<maven.compiler.source>21</maven.compiler.source>
<maven.compiler.target>21</maven.compiler.target>
<maven.compiler.release>21</maven.compiler.release>
```

Portanto, para executar o projeto localmente, recomenda-se utilizar um JDK compatível com Java 21.

---

# ▶️ Como executar

## 1. Clonar o repositório

```bash
git clone https://github.com/antoniogmartins/Services.git
```

## 2. Acessar o projeto

```bash
cd Services/Karate/Projeto01/karate-api-quality
```

## 3. Executar os testes

```bash
mvn test
```

O Maven utilizará o Surefire Plugin configurado no projeto para executar os testes.

---

# 🌎 Executando com ambiente específico

A configuração do projeto suporta a utilização da variável:

```text
karate.env
```

Por exemplo:

```bash
mvn test -Dkarate.env=staging
```

ou:

```bash
mvn test -Dkarate.env=prod
```

Quando nenhum ambiente é informado, o projeto utiliza `dev` como padrão.

> **Observação:** as URLs de `staging` e `prod` atualmente presentes no `karate-config.js` são valores de configuração do projeto e não representam endpoints reais disponibilizados pelo JSONPlaceholder.

---

# 📈 Relatórios

O projeto possui suporte à geração de relatório HTML através do runner `JunitTest`.

A configuração está presente em:

```java
.outputHtmlReport(true)
```

Esse recurso é utilizado durante a execução da suíte pelo `Runner` do Karate.

---

# 🧩 Conceitos de Karate utilizados

Os testes atuais exploram diversos recursos do framework.

### Requisições HTTP

```gherkin
When method get
```

```gherkin
When method post
```

```gherkin
When method put
```

```gherkin
When method patch
```

```gherkin
When method delete
```

### Validação de status

```gherkin
Then status 200
```

```gherkin
Then status 201
```

### Headers

```gherkin
And header Accept = 'application/json'
```

### Query parameters

```gherkin
And param userId = 1
```

```gherkin
And param postId = 10
```

### Payload externo

```gherkin
And def data = read('../data/users/request/users.json')
And request data
```

### Validação de JSON

```gherkin
And match response == data
```

### Validação de tipos

```gherkin
And match response.title == '#string'
```

### Validação de coleções

```gherkin
And match each response contains data
```

### Manipulação de resposta

O projeto também utiliza:

```javascript
karate.map()
```

para extrair informações da resposta e posteriormente realizar asserções.

---

# 🧭 Roadmap

O projeto está sendo desenvolvido de forma incremental.

## Implementado

* [x] Configuração Maven
* [x] Java 21
* [x] Integração Karate + JUnit 6
* [x] Configuração global através do `karate-config.js`
* [x] Feature de usuários
* [x] Feature de recursos/posts
* [x] Testes GET
* [x] Testes POST
* [x] Testes PUT
* [x] Testes PATCH
* [x] Testes DELETE
* [x] Query parameters
* [x] Headers
* [x] Payloads externos
* [x] Respostas esperadas externas
* [x] Validação de JSON
* [x] Validação de tipos
* [x] Geração de relatório HTML

## Próximos passos

* [ ] Adicionar cenários negativos
* [ ] Aumentar cobertura de validações
* [ ] Melhorar estratégia de configuração de ambientes
* [ ] Implementar autenticação
* [ ] Criar funções reutilizáveis
* [ ] Melhorar organização das massas de teste
* [ ] Avaliar execução paralela
* [ ] Criar pipeline CI/CD
* [ ] Configurar GitHub Actions
* [ ] Adicionar badge de build ao README

---

# 🔄 CI/CD

A integração com CI/CD ainda não está configurada neste projeto.

Como próximo passo, a ideia é utilizar **GitHub Actions** para executar automaticamente:

```text
Push / Pull Request
        ↓
GitHub Actions
        ↓
Configuração Java 21
        ↓
Maven
        ↓
mvn test
        ↓
Karate
        ↓
16 cenários
        ↓
Resultado
```

Depois da criação do workflow, poderá ser adicionado ao README um badge real indicando o status da build.

---

# 📚 Referências

* [Karate Framework](https://github.com/karatelabs/karate)
* [Documentação do Karate](https://docs.karatelabs.io/)
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
* [JUnit](https://junit.org/)
* [Apache Maven](https://maven.apache.org/)

---

# 👨‍💻 Autor

**Antonio Martins**

Projeto desenvolvido para estudos e evolução prática em:

* Automação de testes de API
* Quality Engineering
* Karate Framework
* Java
* JUnit
* Maven
* Testes automatizados de serviços REST

---

## ⭐ Considerações

Este projeto está em evolução e tem como objetivo servir como laboratório para experimentação e aplicação de boas práticas de automação de testes de APIs utilizando Karate.

