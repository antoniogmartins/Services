# 🔄 Projeto 01 — CI/CD

O projeto está preparado para execução automatizada através do GitHub Actions.

## Pipeline

```text
Developer
    ↓
Git Push
    ↓
GitHub
    ↓
GitHub Actions
    ↓
Setup Java
    ↓
Maven
    ↓
Run Tests
    ↓
Reports
```

## Maven

Execução local:

```bash
mvn clean test
```

## Objetivo

Garantir que alterações no código possam disparar automaticamente a suíte de testes.

## Benefícios

* Feedback rápido
* Regressão automatizada
* Integração contínua
* Histórico de execuções
* Maior confiança nas alterações

