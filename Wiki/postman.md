# 📮 Postman

O Postman é utilizado no projeto para exploração, validação manual e automação de cenários básicos de APIs.

---

# 🎯 Objetivos

Os experimentos utilizam Postman para:

* Criar requests
* Validar endpoints
* Criar collections
* Criar environments
* Validar responses
* Criar assertions
* Executar cenários positivos
* Executar cenários negativos
* Executar smoke tests
* Trabalhar com variáveis
* Automatizar execuções

---

# 📁 Estrutura

No repositório existem duas áreas principais relacionadas ao Postman:

```text
Postman/
└── collections/

Collections/
├── DummyJson
├── FakeStoreAPI
├── JsonPlaceHolder
└── Restful-Booker
```

---

# 🧪 Principais validações

Exemplo conceitual:

```javascript
pm.test("Status code deve ser 200", function () {
    pm.response.to.have.status(200);
});
```

Também podem ser realizadas validações sobre:

* JSON
* Headers
* Campos específicos
* Tipos de dados
* Valores retornados

---

# 🔐 Environments

Os environments permitem separar configurações como:

```text
baseUrl
token
userId
productId
```

Isso evita a necessidade de alterar manualmente cada request.

---

# 🚀 Execução

As collections podem ser executadas individualmente ou como conjunto de cenários.

A evolução planejada inclui:

```text
Postman
   ↓
Collection
   ↓
Automated Run
   ↓
CI/CD
   ↓
Report
```

---

# 📌 Próximos passos

* Melhorar organização das collections
* Padronizar environments
* Expandir testes negativos
* Aumentar cobertura
* Integrar execuções ao CI/CD
* Melhorar relatórios

