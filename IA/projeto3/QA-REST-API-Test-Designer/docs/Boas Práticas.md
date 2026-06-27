# Boas Práticas

# QA REST API Test Designer

**Versão:** 1.0.0

---

# Objetivo

Este documento reúne recomendações para garantir o uso consistente e eficaz do **QA REST API Test Designer**, promovendo análises de alta qualidade, reprodutibilidade dos resultados e aderência às boas práticas de Engenharia de Qualidade.

---

# 1. Princípios Gerais

Ao utilizar este Skill, siga os princípios abaixo:

* Priorize a qualidade das entradas.
* Utilize documentação atualizada.
* Valide os resultados produzidos pela IA.
* Registre todas as premissas adotadas.
* Evite interpretações sem evidências.

---

# 2. Preparação da Entrada

## Collection Postman

Antes da execução, verifique se a Collection:

* está atualizada;
* contém todos os endpoints relevantes;
* possui exemplos de requisição e resposta;
* utiliza variáveis corretamente;
* está livre de inconsistências.

### Recomendação

Sempre utilizar a versão mais recente da Collection.

---

## Swagger/OpenAPI

Sempre que disponível:

* forneça o Swagger/OpenAPI juntamente com a Collection;
* utilize a mesma versão da API;
* verifique se a documentação está sincronizada com a implementação.

---

## Documentação Funcional

Sempre que possível, disponibilize:

* requisitos funcionais;
* critérios de aceitação;
* regras de negócio;
* fluxos do sistema;
* diagramas.

Quanto maior o contexto, melhor será a análise da IA.

---

# 3. Execução do Skill

Durante a execução:

* utilize o Prompt Mestre oficial;
* mantenha os parâmetros padronizados;
* não altere a metodologia definida no Skill;
* utilize sempre a mesma versão da documentação.

---

# 4. Organização das Entradas

Recomenda-se utilizar a seguinte estrutura:

```text
Projeto/

├── Collection.json
├── Swagger.json
├── Requisitos.pdf
├── Critérios de Aceitação.md
└── CasosExistentes.xlsx
```

---

# 5. Qualidade da Análise

Após a geração dos resultados, verificar:

* todos os endpoints foram analisados;
* todos os riscos foram classificados;
* todas as lacunas foram identificadas;
* os cenários estão completos;
* o Gherkin está válido.

---

# 6. Boas Práticas para Gherkin

Cada cenário deve:

* possuir um único objetivo;
* descrever apenas um comportamento;
* utilizar linguagem clara;
* ser independente dos demais.

Evite:

* múltiplos comportamentos em um único cenário;
* passos redundantes;
* regras implícitas não justificadas.

---

# 7. Cobertura de Testes

Garantir que cada endpoint possua cenários para:

## Funcionais

* Fluxo feliz
* Fluxos alternativos
* CRUD
* Regras de negócio
* Persistência
* Idempotência

---

## Negativos

* Dados inválidos
* Campos obrigatórios
* Campos vazios
* Dados duplicados
* IDs inexistentes

---

## Não Funcionais

* Performance
* Concorrência
* Timeout
* Retry
* Carga
* Stress
* Rate Limit

---

## Segurança

Utilizar sempre como referência a **OWASP API Security Top 10**, contemplando, entre outros:

* Broken Object Level Authorization
* Broken Authentication
* Broken Function Level Authorization
* Injection
* Mass Assignment
* Excessive Data Exposure
* JWT inválido
* HTTP Verb Tampering
* Parameter Pollution

---

# 8. Priorização dos Cenários

Ao revisar os cenários gerados, priorize:

1. Vulnerabilidades de segurança.
2. Regras críticas de negócio.
3. Fluxos de maior utilização.
4. Integridade dos dados.
5. Casos extremos.
6. Performance.
7. Funcionalidades de menor risco.

---

# 9. Revisão Humana

Todo resultado produzido pela IA deve passar por revisão técnica.

Verifique:

* aderência às regras de negócio;
* consistência técnica;
* ausência de duplicações;
* clareza dos cenários;
* viabilidade da execução.

---

# 10. Registro de Premissas

Sempre documente:

* hipóteses adotadas;
* limitações da documentação;
* divergências identificadas;
* informações ausentes.

Isso facilita futuras revisões e auditorias.

---

# 11. Versionamento

Sempre registre:

* versão da Skill;
* versão da Collection;
* versão do Swagger;
* data da análise;
* responsável pela execução.

---

# 12. Reprodutibilidade

Para obter resultados consistentes entre diferentes colaboradores:

* utilize a mesma versão do Skill;
* utilize o Prompt Mestre oficial;
* mantenha a temperatura baixa (0,1–0,3);
* utilize os mesmos artefatos de entrada;
* siga a metodologia sem alterações.

---

# 13. Erros Comuns

Evite:

* analisar apenas parte da Collection;
* gerar cenários sem justificativa técnica;
* ignorar regras implícitas;
* criar regras de negócio não documentadas;
* repetir cenários já existentes;
* deixar riscos sem classificação.

---

# 14. Checklist Antes da Execução

* [ ] Collection atualizada.
* [ ] Swagger disponível (quando aplicável).
* [ ] Documentação funcional revisada.
* [ ] Prompt Mestre correto.
* [ ] Versão da Skill validada.
* [ ] Objetivo da análise definido.

---

# 15. Checklist Após a Execução

* [ ] Todos os endpoints analisados.
* [ ] Cobertura funcional completa.
* [ ] Cobertura negativa completa.
* [ ] Cobertura não funcional completa.
* [ ] Cobertura de segurança completa.
* [ ] Gherkin válido.
* [ ] Justificativas técnicas presentes.
* [ ] Matriz de rastreabilidade gerada.
* [ ] Relatório executivo produzido.

---

# 16. Recomendações para Uso Corporativo

Para adoção em equipes de QA, recomenda-se:

* centralizar a documentação do framework em um repositório corporativo;
* controlar versões do Skill;
* padronizar os prompts utilizados;
* registrar alterações no CHANGELOG;
* revisar periodicamente os templates;
* realizar validações por pares (peer review);
* integrar o framework ao processo de desenvolvimento e testes.

---

# 17. Benefícios Esperados

A adoção destas boas práticas contribui para:

* maior consistência entre análises;
* aumento da cobertura de testes;
* redução do esforço manual;
* melhoria da rastreabilidade;
* maior qualidade dos cenários gerados;
* identificação precoce de riscos;
* padronização do processo de Engenharia de Qualidade.

---

# Histórico do Documento

| Versão | Data       | Autor              | Descrição                                     |
| ------ | ---------- | ------------------ | --------------------------------------------- |
| 1.0.0  | 27/06/2026 | Antonio G. Martins | Criação inicial do documento de Boas Práticas |

---

# Observações

Este documento deve ser revisado sempre que houver alterações significativas na metodologia, nos templates ou na arquitetura do **QA REST API Test Designer**, garantindo que as recomendações permaneçam alinhadas à evolução do framework e às melhores práticas de Engenharia de Qualidade.

