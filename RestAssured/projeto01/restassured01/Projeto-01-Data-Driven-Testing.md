# 🎲 Projeto 01 — Data Driven Testing

O framework utiliza **Data Driven Testing** para separar dados da lógica dos testes.

## Estrutura

```text
testdata/
├── criar_recurso.csv
├── atualiza_recurso.csv
├── buscar_recurso.csv
├── deletar_recurso.csv
├── listar_filtrarecursos.csv
├── listar_hierarquiarecursos.csv
└── listar_todosrecursos.csv
```

## Fluxo

```text
CSV
 ↓
TestDataReader
 ↓
Arguments
 ↓
ParameterizedTest
 ↓
Test
```

## JUnit

A execução utiliza:

```java
@ParameterizedTest
@MethodSource
```

## Benefícios

* Reutilização do teste
* Maior cobertura
* Menor duplicação
* Facilidade para adicionar cenários
* Separação entre dados e código

## TestDataReader

Responsável por:

* Ler CSV
* Ignorar header
* Converter valores
* Criar Arguments
* Alimentar testes parametrizados

