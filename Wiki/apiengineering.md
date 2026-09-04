# 🔧 API Engineering

API Engineering representa a camada de práticas que complementam os testes funcionais e a automação.

---

# 🧩 Componentes

```text
API Engineering
│
├── Swagger / OpenAPI
├── JSON Schema
├── Contract Testing
├── CI/CD
├── Docker
├── Quality Gates
└── Observability
```

---

# 📘 Swagger / OpenAPI

Utilizado para documentar e descrever APIs.

Objetivos:

* Documentação
* Contratos
* Endpoints
* Request Models
* Response Models
* Integração com ferramentas

---

# 📐 JSON Schema

Utilizado para validar a estrutura das respostas JSON.

Exemplo conceitual:

```text
Response
   ↓
JSON Schema
   ↓
Validation
   ↓
PASS / FAIL
```

---

# 🤝 Contract Testing

Área planejada para validação de contratos entre consumidores e provedores.

Tecnologia planejada:

```text
Pact
```

---

# 🚀 CI/CD

A automação deverá ser integrada aos pipelines para executar testes automaticamente.

Fluxo:

```text
Git Push
   ↓
Pipeline
   ↓
Build
   ↓
Tests
   ↓
Reports
   ↓
Quality Gate
```

---

# 🐳 Docker

Planejado para padronizar ambientes de execução e permitir integração entre serviços.

---

# 📌 Status

🟡 **Em evolução / Roadmap**

