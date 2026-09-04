# ✅ Projeto 01 — Response Validation

A validação é realizada em diferentes níveis.

## HTTP Status

```java
assertEquals(
        statusEsperado,
        response.statusCode()
);
```

## JSONPath

```java
int id =
        response.jsonPath()
                .getInt("id");
```

## Response DTO

```java
RecursoResponseDTO recurso =
        response.as(RecursoResponseDTO.class);
```

## Custom Validator

Exemplo:

```java
assertTrue(
    validator.validarNumero(
        request.getUserId(),
        recurso.getUserId()
    )
);
```

## Validação de texto

```java
assertTrue(
    validator.validarTexto(
        request.getTitle(),
        recurso.getTitle()
    )
);
```

## Estratégia

```text
HTTP Status
     +
Response Structure
     +
Business Data
     +
Data Type
     =
API Validation
```

