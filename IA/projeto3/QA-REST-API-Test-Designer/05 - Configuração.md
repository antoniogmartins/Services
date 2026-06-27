# Configuração

# QA REST API Test Designer

**Versão:** 1.0

**Autor:** Antonio G. Martins

---

# 1. Objetivo

Este documento define os parâmetros de configuração do Skill **QA REST API Test Designer**.

Seu objetivo é garantir que diferentes colaboradores obtenham resultados consistentes ao utilizar Inteligência Artificial Generativa na análise de APIs REST.

---

# 2. Informações Gerais

| Item             | Valor                                                |
|------------------|------------------------------------------------------|
| Nome             | QA REST API Test Designer                            |
| Versão           | 1.0                                                  |
| Domínio          | Engenharia de Qualidade                              |
| Especialidade    | APIs REST                                            |
| Idioma           | Português (Brasil)                                   |
| Formato da saída | Markdown                                             |
| Público-alvo     | QA, Testers, Analistas de Qualidade, Desenvolvedores |
| Tipo             | Skill Corporativo                                    |
| Status           | Produção                                             |

---

# 3. Modelo de IA

O Skill pode ser utilizado em diferentes plataformas de IA Generativa.

Modelos recomendados:

| Plataforma        | Modelo recomendado    |
|-------------------|-----------------------|
| ChatGPT           | GPT-5.5 ou superior   |
| Microsoft Copilot | Enterprise            |
| Claude            | Claude Sonnet ou Opus |
| Gemini            | Gemini Advanced       |

Independentemente da plataforma, utilizar sempre o Prompt Mestre fornecido neste Skill.

---

# 4. Configuração Recomendada

## Temperatura

Valor recomendado:

```text
0.1 a 0.3
```

Objetivo:

- respostas determinísticas;
- menor variabilidade;
- maior consistência.

---

## Top P

```text
1.0
```

---

## Frequência

Penalty:

```text
0
```

---

## Presence Penalty

```text
0
```

---

## Idioma

Utilizar obrigatoriamente:

```text
Português (Brasil)
```

---

## Formato

Utilizar:

```text
Markdown
```

---

## Estilo

A resposta deverá ser:

- técnica;
- objetiva;
- estruturada;
- consistente;
- rastreável.

Evitar linguagem coloquial.

---

# 5. Entradas Esperadas

## Obrigatórias

- Collection Postman (.json)

## Opcionais

- Swagger/OpenAPI
- Documentação Funcional
- Documentação Técnica
- Requisitos
- Critérios de Aceitação
- Casos de Uso
- Cenários Existentes

---

# 6. Prioridade das Fontes

Quando múltiplas fontes forem fornecidas, considerar a seguinte ordem de prioridade:

1. Collection Postman
2. Swagger/OpenAPI
3. Documentação Funcional
4. Requisitos
5. Critérios de Aceitação

Caso exista conflito entre as fontes, registrar explicitamente a divergência.

---

# 7. Estratégia de Execução

Durante a execução o Skill deverá:

1. Ler toda a Collection.
2. Identificar todos os endpoints.
3. Somente depois iniciar a geração dos cenários.
4. Produzir uma única resposta consolidada.

Não gerar resultados parciais.

---

# 8. Cobertura Obrigatória

Garantir cobertura mínima para:

## Funcionais

- Fluxo feliz
- CRUD
- Validações
- Persistência
- Integridade
- Idempotência

## Negativos

- Dados inválidos
- Campos obrigatórios
- Valores limite
- Dados duplicados
- Estados inconsistentes

## Não Funcionais

- Performance
- Concorrência
- Timeout
- Retry
- Rate Limit

## Segurança

Cobertura baseada na OWASP API Security Top 10.

---

# 9. Quantidade Mínima de Cenários

Para cada endpoint:

| Categoria      | Quantidade mínima |
|--------------- |-------------------|
| Funcionais     | 5                 |
| Negativos      | 5                 |
| Segurança      | 3                 |
| Não Funcionais | 2                 |

Caso novos riscos sejam encontrados, gerar cenários adicionais.

---

# 10. Estrutura da Resposta

A resposta deverá seguir exatamente esta estrutura:

```text
Resumo

↓

Regras

↓

Riscos

↓

Lacunas

↓

Cenários Funcionais

↓

Cenários Negativos

↓

Cenários Não Funcionais

↓

Cenários de Segurança

↓

Matriz de Rastreabilidade

↓

Resumo Executivo
```

---

# 11. Critérios de Priorização

Ordenar os cenários considerando:

1. Segurança
2. Impacto no negócio
3. Integridade dos dados
4. Probabilidade de falha
5. Frequência de utilização
6. Performance
7. Casos extremos

---

# 12. Critérios de Qualidade

Antes da entrega verificar:

- todos os endpoints analisados;
- cenários completos;
- Gherkin válido;
- justificativas técnicas;
- classificação de risco;
- ausência de duplicação.

---

# 13. Critérios de Encerramento

A execução somente poderá ser encerrada quando:

- todos os endpoints tiverem sido analisados;
- todos os cenários obrigatórios forem gerados;
- a matriz de rastreabilidade estiver concluída;
- o resumo executivo estiver produzido.

---

# 14. Tratamento de Exceções

Caso ocorram limitações durante a análise:

- registrar a limitação;
- registrar as premissas adotadas;
- identificar informações ausentes;
- não inferir regras de negócio sem evidências.

---

# 15. Artefatos Gerados

Ao final da execução deverão ser produzidos:

- Relatório Executivo
- Análise por Endpoint
- Cenários em Gherkin
- Matriz de Rastreabilidade
- Classificação dos Riscos
- Recomendações Técnicas
- Resumo Executivo

---

# 16. Boas Práticas

Recomenda-se:

- utilizar Collections atualizadas;
- anexar Swagger sempre que disponível;
- fornecer documentação funcional;
- revisar manualmente todos os cenários gerados;
- validar hipóteses com especialistas de negócio.

---

# 17. Histórico de Configuração

| Versão  | Data      | Responsável        | Alteração       |
|---------|-----------|--------------------|-----------------|
| 1.0     | 27.06.26  | Antonio G. Martins | Criação inicial |
