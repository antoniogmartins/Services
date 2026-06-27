# INSTALL.md

# QA REST API Test Designer

## Instalação e Guia de Utilização

Versão: **1.0**

---

# Visão Geral

O **QA REST API Test Designer** é uma Skill de IA especializada em gerar artefatos completos de testes para APIs REST a partir de um contrato OpenAPI/Swagger ou JSON da API.

Entre os artefatos gerados estão:

* Casos de Teste Positivos
* Casos de Teste Negativos
* Casos Alternativos
* Casos de Exceção
* Validação de Contrato
* Testes HTTP
* Testes de Autenticação
* Testes de Autorização
* Testes de Performance (Checklist)
* Matriz de Riscos
* Cenários BDD (Gherkin)
* Checklist de Cobertura

---

# Requisitos

Para utilizar esta Skill você precisará de:

* ChatGPT
* Claude
* Gemini
* Microsoft Copilot

*(Recomendado utilizar ChatGPT com GPT-5 ou superior.)*

---

# Estrutura do Projeto

```
QA REST API Test Designer/

│
├── README.md
│
├── Arquitetura.md
│
├── Glossário.md
│
├── CHANGELOG.md
│
├── ROADMAP.md
│
├── INSTALL.md
│
├── 01 - Skill.md
│
├── 02 - Guia de Utilização.md
│
├── 03 - Prompt Mestre.md
│
├── 04 - Templates
│   ├── Template de Saída.md
│   ├── Template Gherkin.md
│   ├── Template Matriz de Riscos.md
│   ├── Template Relatório Executivo.md
│   └── Template Análise por Endpoint.md
│
├── 05 - Configuração.md
│
├── 06 - Exemplos
│   ├── Exemplo de Entrada.md
│   └── Exemplo de Saída.md
│
├── 07 - Collections/
│   ├── serverest.postman_collection.json
│
├── 08 - Environments/
│   ├── serverest.environment.json
│
└── docs
    ├── FAQ.md
    ├── Boas Práticas.md
    └── Guia de Evolução.md
```

---

# Instalação

Não existe instalação tradicional.

A Skill funciona por meio de engenharia de prompts.

Basta seguir os passos abaixo.

---

# Passo 1

Abra uma nova conversa no ChatGPT.

Recomendação:

```
Nova conversa
```

---

# Passo 2

Carregue o arquivo:

```
03 - Prompt Mestre.md
```

ou copie seu conteúdo para a conversa.

---

# Passo 3

Anexe o arquivo:

```
01 - Skill.md
```

---

# Passo 4

Caso utilize Templates personalizados, anexe também:

```
Template de Saída.md

Template Gherkin.md

Template Matriz de Riscos.md
```

---

# Passo 5

Anexe o contrato da API.

Tanto o Collection quanto o environment

São aceitos:

* Swagger JSON
* OpenAPI JSON
* OpenAPI YAML
* Collection Postman
* Documentação REST

---

# Passo 6

Digite uma instrução.

Exemplos:

```
Gerar casos de teste.
```

ou

```
Gerar casos de teste completos.
```

ou

```
Gerar cobertura funcional.
```

ou

```
Gerar cenários BDD.
```

ou

```
Gerar matriz de riscos.
```

---

# Exemplo de Fluxo

```
Abrir ChatGPT

↓

Enviar Prompt Mestre

↓

Enviar Skill

↓

Enviar Swagger

↓

Executar

↓

Receber os artefatos
```

---

# Resultado Esperado

A Skill poderá gerar automaticamente:

✔ Casos Positivos

✔ Casos Negativos

✔ Casos Alternativos

✔ Casos de Exceção

✔ Testes de Contrato

✔ Validações HTTP

✔ Testes de Segurança

✔ Testes de Autorização

✔ BDD

✔ Matriz de Riscos

✔ Plano de Testes

✔ Checklist de Cobertura

---

# Atualizando para uma nova versão

Caso exista uma nova versão da Skill:

1. Substitua os arquivos antigos pelos novos.

2. Inicie uma nova conversa no ChatGPT.

3. Recarregue os arquivos.

Não reutilize conversas antigas, pois o modelo pode manter contexto da versão anterior.

---

# Boas Práticas

* Utilize sempre uma nova conversa para cada API.

* Envie o contrato mais atualizado da API.

* Utilize OpenAPI sempre que possível.

* Não remova arquivos da Skill.

* Não altere os Templates sem conhecer sua estrutura.

* Utilize exemplos para validar a qualidade da saída.

---

# Solução de Problemas

## A IA gerou poucos casos

Verifique se:

* o Swagger está completo;
* os schemas possuem exemplos;
* os endpoints estão documentados.

---

## A IA ignorou endpoints

Confirme se:

* o arquivo JSON é válido;
* o Swagger não possui erros;
* todos os paths estão presentes.

---

## A IA não utilizou os Templates

Verifique se os arquivos de Template foram anexados corretamente.

---

# Compatibilidade

| Plataforma        | Compatível |
| ----------------- | ---------- |
| ChatGPT           | ✅          |
| Claude            | ✅          |
| Gemini            | ✅          |
| Microsoft Copilot | ✅          |

---

# Licença

Este projeto destina-se ao uso interno, educacional e profissional por equipes de Qualidade de Software.

Consulte o arquivo LICENSE para detalhes de uso e distribuição.

---

# Autor

**QA REST API Test Designer**

Versão 1.0

Framework para geração inteligente de artefatos de testes de APIs utilizando Inteligência Artificial Generativa.

