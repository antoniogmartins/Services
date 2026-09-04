# ☕ REST Assured — Projeto 02

Projeto de automação de APIs utilizando Java e REST Assured com foco em autenticação, usuários e produtos.

---

# 🎯 Objetivo

Praticar:

* API Testing
* REST Assured
* Authentication
* Token
* CRUD
* Test Data
* Dados estáticos
* Dados dinâmicos

---

# 🛠️ Tecnologias

* Java 17
* REST Assured
* JUnit
* Maven
* JavaFaker
* JSON
* JSONPath

---

# 🔐 Login

O projeto possui um fluxo de autenticação.

Conceitualmente:

```text
POST /login
       ↓
Authorization Token
       ↓
Authenticated Requests
```

O token retornado pelo login pode ser utilizado nas requisições que exigem autenticação.

---

# 👤 Usuários

Operações praticadas:

```text
GET    /usuarios
POST   /usuarios
GET    /usuarios/{id}
PUT    /usuarios/{id}
DELETE /usuarios/{id}
```

Também existe pesquisa utilizando email.

---

# 📦 Produtos

O projeto utiliza endpoints relacionados a produtos.

A criação de produtos demonstra a utilização de autenticação através do token obtido no login.

---

# 🧪 Test Data

O projeto utiliza duas abordagens:

### Dados estáticos

Dados previamente definidos no código.

### Dados dinâmicos

Dados gerados durante a execução.

Para isso é utilizada a biblioteca JavaFaker.

---

# 🔄 Fluxo

```text
Gerar dados
     ↓
Login
     ↓
Obter token
     ↓
Criar usuário
     ↓
Criar produto
     ↓
Validar resposta
```

---

# 🚀 Próximas evoluções

* Melhorar arquitetura
* DTOs
* Builders
* Data Providers
* Configuration por ambiente
* Reports
* CI/CD
* JSON Schema
* Contract Testing

