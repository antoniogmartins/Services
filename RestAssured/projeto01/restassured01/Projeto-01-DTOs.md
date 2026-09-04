# 📦 Projeto 01 — DTOs

DTO significa **Data Transfer Object**.

Os DTOs são utilizados para representar os dados enviados e recebidos pela API.

## Request DTO

Exemplos:

```text
CriarRecursoDTO
AtualizarRecursoDTO
```

Exemplo:

```java
CriarRecursoDTO request =
        new CriarRecursoDTO(
                titulo,
                corpo,
                userId
        );
```

## Response DTO

Exemplos:

```text
RecursoResponseDTO
ComentarioResponseDTO
```

A resposta pode ser convertida para um objeto Java:

```java
RecursoResponseDTO recurso =
        response.as(RecursoResponseDTO.class);
```

## Benefícios

* Type safety
* Código mais legível
* Menor uso de JSON hardcoded
* Reutilização
* Melhor manutenção
* Separação entre transporte e teste

