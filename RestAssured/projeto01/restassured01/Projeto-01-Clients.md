# 🧱 Projeto 01 — Client Layer

A camada `Client` encapsula a comunicação HTTP.

## Clients

```text
atualizarRecurso
buscarRecurso
criarRecurso
deletarRecurso
filtrarRecursos
listarhierarquiaRecursos
listartodosRecursos
```

## Exemplo

```java
public Response atualizaRecurso(
        int id,
        AtualizarRecursoDTO request) {

    return RequestConfig.requestSpec()
            .body(request)
            .when()
            .put("/posts/{id}", id)
            .then()
            .extract()
            .response();
}
```

## Responsabilidade do teste

O teste não precisa conhecer os detalhes da requisição HTTP.

Ele simplesmente utiliza o Client:

```java
Response response =
        atualizarRecurso.atualizaRecurso(id, request);
```

## Benefício

O teste fica concentrado em:

```text
Arrange
   ↓
Act
   ↓
Assert
```

em vez de misturar implementação HTTP com regras de negócio.

