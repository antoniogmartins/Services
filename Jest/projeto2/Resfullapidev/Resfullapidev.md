![NodeJS](https://img.shields.io/badge/Node.js-20.x-green)
![Mocha](https://img.shields.io/badge/Test-Mocha-red)
![Chai](https://img.shields.io/badge/Assertions-Chai-orange)
![Supertest](https://img.shields.io/badge/API-Supertest-blue)
![QA](https://img.shields.io/badge/Quality-Engineering-purple)

# 🚀 API Test Automation Framework

## Sobre o Projeto

Este projeto foi desenvolvido para demonstrar conhecimentos em Automação de Testes de API utilizando JavaScript, Node.js, Mocha, Chai e Supertest.

O objetivo é validar operações CRUD em uma API REST pública, aplicando boas práticas de testes automatizados, validações de contrato, assertions robustas e organização escalável dos cenários.

---

## Objetivos

* Validar criação de objetos via API
* Validar consultas de collections
* Validar consultas de objetos específicos
* Validar atualização de registros
* Validar exclusão de registros
* Demonstrar estrutura de automação para APIs REST
* Evidenciar conhecimento em Quality Assurance e Quality Engineering

---

## Tecnologias Utilizadas

| Tecnologia | Finalidade               |
| ---------- | ------------------------ |
| Node.js    | Runtime JavaScript       |
| Mocha      | Framework de testes      |
| Chai       | Biblioteca de Assertions |
| Supertest  | Testes de API            |
| GitHub     | Versionamento            |
| REST API   | Integração e validação   |

---

## Arquitetura do Projeto

```text
api-test-automation
│
├── test
│   └── collections.spec.js
│
├── package.json
├── README.md
└── .gitignore
```

---

## Cenários Automatizados

### Cenário 1 - Criar Objeto

**Método:** POST

Valida:

* Status Code 200
* Retorno do ID gerado
* Nome do objeto criado

---

### Cenário 2 - Listar Collections

**Método:** GET

Valida:

* Status Code 200
* Content-Type JSON
* Nome da Collection

---

### Cenário 3 - Listar Objetos da Collection

**Método:** GET

Valida:

* Status Code 200
* Estrutura do retorno
* Dados esperados

---

### Cenário 4 - Consultar Objeto Específico

**Método:** GET

Valida:

* Status Code 200
* Nome do objeto
* Dados técnicos do equipamento

---

### Cenário 5 - Atualizar Objeto

**Método:** PUT

Valida:

* Status Code 200
* Atualização dos atributos

---

### Cenário 6 - Excluir Objeto

**Método:** DELETE

Valida:

* Status Code 200
* Exclusão realizada com sucesso

---

## Boas Práticas Aplicadas

✔ Assertions com Chai

✔ Testes assíncronos utilizando async/await

✔ Separação por funcionalidades

✔ Headers parametrizados

✔ Estrutura preparada para escalabilidade

✔ Organização baseada em cenários de negócio

---

## Melhorias Futuras

### Qualidade Técnica

* Implementação de Page/API Objects
* Variáveis de ambiente
* Integração com dotenv
* Massa dinâmica de testes
* Geração automática de IDs

### Qualidade de Engenharia

* Integração contínua com GitHub Actions
* Pipeline CI/CD
* Relatórios Allure
* Coverage de APIs
* Contract Testing

### Observabilidade

* Logs estruturados
* Monitoramento de execução
* Métricas de qualidade

---

## Desafio Encontrado

Durante o desenvolvimento foi identificado um comportamento relacionado à persistência do objeto criado via POST para utilização posterior nos testes de UPDATE e DELETE.

Como alternativa para garantir a execução dos cenários seguintes, foi utilizado um ID previamente existente.

Este ponto foi documentado para futura evolução da suíte através da implementação de compartilhamento dinâmico de contexto entre cenários.

---

## Como Executar

### Instalar dependências

```bash
npm install
```

### Executar os testes

```bash
npm test
```

---

## Competências Demonstradas

* API Testing
* Test Automation
* REST Services
* JavaScript
* Node.js
* Mocha
* Chai
* Supertest
* Test Design
* Quality Assurance
* Quality Engineering

---

## Autor

QA Engineer focado em Automação, Qualidade de Software e Estratégias de Teste.

Buscando construir soluções que aumentem a confiabilidade, qualidade e velocidade das entregas.

==============================
# Jest

# Objetivo

# Arquitetura

# Tecnologias

# Como executar

# Evidências

# Pipeline

# Relatórios

# Melhorias futuras

# Inclua screenshots:

Allure Reports
GitHub Actions
Test Results

