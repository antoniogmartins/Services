# 📈 Projeto 01 — Performance Testing

Além dos testes funcionais, o projeto possui uma estrutura preparada para evolução para testes de performance utilizando K6.

## Objetivos

Avaliar:

* Response Time
* Throughput
* Error Rate
* Concurrent Users
* Performance Thresholds
* API Stability

## Estratégia

```text
REST Assured
     ↓
Functional Testing

K6
     ↓
Performance Testing
```

## Evolução

```text
Functional
     ↓
Load
     ↓
Stress
     ↓
Thresholds
     ↓
Metrics
     ↓
Dashboard
```

A camada de performance complementa os testes funcionais, permitindo uma visão mais ampla da qualidade da API.

