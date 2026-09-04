# 🧪 Projeto 01 — API Tests

## GET

Consulta um recurso:

```http
GET /posts/{id}
```

## GET — List

Consulta todos os recursos:

```http
GET /posts
```

## POST

Cria um recurso:

```http
POST /posts
```

## PUT

Atualiza um recurso:

```http
PUT /posts/{id}
```

## DELETE

Remove um recurso:

```http
DELETE /posts/{id}
```

## Query Parameter

Filtro:

```http
GET /posts?userId={userId}
```

## Nested Resource

Comentários:

```http
GET /posts/{postId}/comments
```

## CRUD

```text
CREATE → POST
READ   → GET
UPDATE → PUT
DELETE → DELETE
```

