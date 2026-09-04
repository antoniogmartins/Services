# ⚙️ Projeto 01 — Configuration

A configuração HTTP é centralizada para evitar duplicação nos Clients.

## RequestConfig

Responsável por fornecer uma `RequestSpecification` reutilizável.

Exemplo conceitual:

```java
public static RequestSpecification requestSpec() {
    return given()
            .contentType("application/json");
}
```

## RestAssuredConfig

Responsável pela configuração global do REST Assured.

## BaseTest

Classe base utilizada pelos testes para inicialização comum.

## ConfigManager

Centraliza informações relacionadas aos ambientes.

## Benefícios

```text
Configuration
      ↓
Single Point
      ↓
Reusable
      ↓
Maintainable
```

