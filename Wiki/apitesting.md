# 🧪 API Testing

Esta seção concentra os estudos e projetos relacionados a **testes de APIs**.

O objetivo é validar o comportamento das APIs sob diferentes perspectivas, desde cenários funcionais simples até validações negativas e monitoramento.

---

## 🎯 Objetivos

Validar:

* Status Codes
* Response Body
* Headers
* JSON
* Contratos
* Regras de negócio
* Parâmetros
* Autenticação
* Cenários positivos
* Cenários negativos
* Fluxos completos

---

# 🛠️ Ferramentas

Atualmente são utilizados principalmente:

* Postman
* Postman Collections
* JSON
* JavaScript para scripts do Postman

---

# 📚 Conceitos

## HTTP

Principais métodos:

```text
GET
POST
PUT
PATCH
DELETE
```

---

## Status Codes

Exemplos:

```text
200 OK
201 Created
204 No Content
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
500 Internal Server Error
```

---

# 🧪 Estratégia de testes

Os testes podem contemplar:

### Smoke Testing

Validação rápida dos principais endpoints.

### Positive Testing

Validação utilizando dados válidos e fluxos esperados.

### Negative Testing

Validação de comportamentos esperados diante de dados inválidos.

### Boundary Testing

Validação de limites e valores extremos.

### Authentication Testing

Validação de autenticação e autorização.

---

# 📦 Collections

O repositório possui collections para diferentes APIs públicas utilizadas nos experimentos.

Entre elas:

* Contact List
* DummyJSON
* FakeStore API
* JSONPlaceholder
* Restful Booker

---

# 🔄 Fluxo

```text
Request
   ↓
API
   ↓
Response
   ↓
Status Code
   ↓
Headers
   ↓
Body
   ↓
Assertions
   ↓
Resultado
```

---

# 📈 Evolução

O próximo nível da área de API Testing envolve:

* Contract Testing
* Schema Validation
* API Security Testing
* Test Data Management
* Test Automation
* CI/CD
* Performance Testing

