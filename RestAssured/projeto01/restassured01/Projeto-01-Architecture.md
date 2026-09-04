# 🏗️ Projeto 01 — Architecture

## Visão arquitetural

```text
                    TEST
                     │
                     ▼
             Parameterized Test
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
                 REST API
                     │
                     ▼
                 Response
                     │
                     ▼
              Response DTO
                     │
                     ▼
             Validator / Assert
```

## Responsabilidades

### Test

Define o cenário e as regras de validação.

### DTO

Representa os dados de request e response.

### Client

Centraliza a comunicação HTTP.

### RequestConfig

Centraliza configurações comuns da requisição.

### Validator

Centraliza regras de validação reutilizáveis.

### TestDataReader

Responsável pela leitura dos dados externos.

---

## Benefícios

* Menor duplicação
* Maior legibilidade
* Manutenção simplificada
* Reutilização
* Escalabilidade
* Separação de responsabilidades

