# Exemplo de Saída

# QA REST API Test Designer

**Versão:** 1.0

---

# Relatório de Análise de Testes para APIs REST

## Informações Gerais

| Campo           | Valor                             |
| --------------- | --------------------------------- |
| API             | ServeRest                         |
| Collection      | ServeRest.postman_collection.json |
| Data da análise | 15/01/2026                        |
| Analista        | QA REST API Test Designer         |
| Versão do Skill | 1.0                               |

---

# Resumo Executivo

## Objetivo

Analisar a Collection Postman da API ServeRest para identificar lacunas de cobertura de testes e propor novos cenários em Gherkin.

---

## Resultados da Análise

| Indicador               | Quantidade |
| ----------------------- | ---------: |
| Endpoints analisados    |          8 |
| Lacunas identificadas   |         24 |
| Cenários funcionais     |         48 |
| Cenários negativos      |         40 |
| Cenários não funcionais |         16 |
| Cenários de segurança   |         28 |
| Total de cenários       |        132 |

---

# Endpoint

## POST /usuarios

---

## Objetivo

Cadastrar um novo usuário.

---

## Regras Identificadas

### Regras Explícitas

* Nome é obrigatório.
* Email deve ser único.
* Password é obrigatória.
* Administrador deve receber valor booleano.

### Regras Implícitas

* Não deve permitir cadastro duplicado.
* Dados devem ser persistidos.
* Campos obrigatórios devem ser validados antes da persistência.

---

## Riscos Identificados

| ID   | Categoria | Severidade | Descrição                      |
| ---- | --------- | ---------- | ------------------------------ |
| R001 | Funcional | Alta       | Cadastro duplicado de usuários |
| R002 | Segurança | Crítica    | Mass Assignment                |
| R003 | Segurança | Alta       | SQL Injection                  |
| R004 | Segurança | Alta       | Enumeração de usuários         |

---

## Lacunas Encontradas

| ID   | Categoria   | Descrição                                |
| ---- | ----------- | ---------------------------------------- |
| L001 | Funcional   | Ausência de teste para nome vazio        |
| L002 | Funcional   | Não valida tamanho máximo do nome        |
| L003 | Segurança   | Não existem testes para JWT inválido     |
| L004 | Segurança   | Não existem testes para Header Injection |
| L005 | Performance | Não existem testes de carga              |

---

# Cenário Funcional

## Informações

| Campo      | Valor          |
| ---------- | -------------- |
| ID         | CT-001         |
| Categoria  | Funcional      |
| Tipo       | Fluxo Positivo |
| Prioridade | Alta           |
| Risco      | Persistência   |

---

### Objetivo

Validar o cadastro de um usuário com dados válidos.

---

### Pré-condições

* API disponível.
* Usuário autenticado.
* Email inexistente.

---

### Headers

```http
Content-Type: application/json
Accept: application/json
Authorization: Bearer <token>
```

---

### Payload

```json
{
  "nome": "João da Silva",
  "email": "joao@email.com",
  "password": "123456",
  "administrador": "true"
}
```

---

### Gherkin

```gherkin
Feature: Cadastro de Usuários

Scenario: Cadastrar usuário com sucesso

Given exista um usuário administrador autenticado
And o email informado não esteja cadastrado

When enviar uma requisição POST para "/usuarios"
And informar um payload válido

Then a API deverá retornar HTTP 201
And o usuário deverá ser persistido
And deverá retornar o identificador do usuário
```

---

### Resultado Esperado

* Usuário criado.
* ID retornado.
* Persistência confirmada.

HTTP esperado

```text
201 Created
```

---

### Justificativa Técnica

Valida o fluxo principal do endpoint garantindo a criação correta do usuário.

---

### Risco Mitigado

Falha de persistência de dados.

---

# Cenário Negativo

### Objetivo

Validar tentativa de cadastro utilizando email já existente.

```gherkin
Feature: Cadastro de Usuários

Scenario: Cadastrar usuário com email duplicado

Given exista um usuário previamente cadastrado

When enviar um novo cadastro utilizando o mesmo email

Then a API deverá retornar HTTP 400
And deverá informar que o email já está em uso
```

HTTP esperado

```text
400 Bad Request
```

---

# Cenário de Segurança

### Objetivo

Validar tentativa de SQL Injection.

```gherkin
Feature: Cadastro de Usuários

Scenario: Tentativa de SQL Injection no campo email

Given exista um usuário administrador autenticado

When enviar no campo email o valor "' OR '1'='1"

Then a API deverá rejeitar a requisição
And deverá retornar HTTP 400
And nenhum usuário deverá ser criado
```

HTTP esperado

```text
400 Bad Request
```

---

# Cenário Não Funcional

### Objetivo

Validar comportamento do endpoint sob carga.

```gherkin
Feature: Cadastro de Usuários

Scenario: Cadastro concorrente de usuários

Given o ambiente esteja disponível

When 100 usuários realizarem cadastros simultaneamente

Then a API deverá responder dentro do SLA
And nenhuma inconsistência deverá ocorrer
```

Critérios esperados

* Tempo médio inferior a 2 segundos.
* Nenhuma perda de dados.
* Nenhum erro HTTP 500.

---

# Matriz de Rastreabilidade

| Endpoint       | Regra            | Risco              | Cenário | Prioridade |
| -------------- | ---------------- | ------------------ | ------- | ---------- |
| POST /usuarios | Email único      | Cadastro duplicado | CT-002  | Alta       |
| POST /usuarios | Persistência     | Falha de gravação  | CT-001  | Alta       |
| POST /usuarios | Autenticação     | JWT inválido       | CT-015  | Alta       |
| POST /usuarios | Entrada de dados | SQL Injection      | CT-021  | Crítica    |

---

# Recomendações Técnicas

* Implementar testes automatizados para todos os cenários críticos.
* Adicionar testes específicos para OWASP API Security Top 10.
* Incluir testes de carga e concorrência na pipeline CI/CD.
* Revisar validações de entrada para prevenir ataques de Injection.
* Monitorar continuamente métricas de desempenho da API.

---

# Conclusão

A análise identificou lacunas relevantes na cobertura de testes do endpoint **POST /usuarios**, principalmente em cenários de segurança, validações negativas e testes não funcionais. A inclusão dos cenários propostos amplia significativamente a cobertura da suíte de testes e reduz os riscos associados à autenticação, persistência de dados e exposição de vulnerabilidades.

---

# Artefatos Gerados

* Relatório Executivo
* Análise por Endpoint
* Cenários Funcionais
* Cenários Negativos
* Cenários Não Funcionais
* Cenários de Segurança
* Matriz de Rastreabilidade
* Classificação de Riscos
* Recomendações Técnicas
* Resumo Executivo

---

# Autoavaliação

| Verificação                      | Status |
| -------------------------------- | :----: |
| Todos os endpoints analisados    |    ✔   |
| Nenhum cenário duplicado         |    ✔   |
| Gherkin válido                   |    ✔   |
| Justificativa técnica presente   |    ✔   |
| Riscos classificados             |    ✔   |
| Matriz de rastreabilidade gerada |    ✔   |

---

# Observação

Este documento é um exemplo ilustrativo de saída produzida pelo **QA REST API Test Designer**. Os cenários, riscos e recomendações variam conforme a Collection Postman, a documentação da API e os artefatos fornecidos como entrada.

