# FAQ

# QA REST API Test Designer

**Versão:** 1.0.0

---

# Perguntas Frequentes (FAQ)

Este documento reúne as dúvidas mais comuns sobre o uso do **QA REST API Test Designer**, suas limitações, premissas e melhores práticas.

---

# 1. O que é o QA REST API Test Designer?

É um Skill corporativo desenvolvido para apoiar equipes de QA na análise de APIs REST utilizando IA Generativa.

Seu objetivo é identificar lacunas de cobertura de testes e gerar cenários em Gherkin com foco em:

* Testes Funcionais
* Testes Negativos
* Testes Não Funcionais
* Testes de Segurança

---

# 2. O Skill executa testes?

Não.

O Skill apenas analisa os artefatos fornecidos e produz documentação técnica e cenários de testes.

Não realiza chamadas para a API.

---

# 3. O Skill substitui um QA?

Não.

O Skill auxilia o processo de Engenharia de Qualidade, mas a validação final continua sendo responsabilidade da equipe de QA.

---

# 4. Quais entradas são obrigatórias?

Obrigatoriamente:

* Collection Postman (JSON)

Opcionalmente:

* Swagger/OpenAPI
* Documentação da API
* Requisitos de negócio
* Critérios de aceitação
* Casos de teste existentes

Quanto mais informações forem fornecidas, maior será a qualidade da análise.

---

# 5. O Skill funciona apenas com a ServeRest?

Não.

Embora tenha sido desenvolvido utilizando a ServeRest como referência, ele pode ser utilizado para qualquer API REST documentada.

---

# 6. Posso utilizar apenas o Swagger?

Sim.

Quando não existir Collection Postman, o Swagger/OpenAPI pode ser utilizado como principal fonte de análise.

---

# 7. O Skill gera código de automação?

Não.

A geração de código de automação não faz parte do escopo da versão atual.

Caso seja solicitado explicitamente, a IA poderá gerar código em uma etapa separada.

---

# 8. O Skill modifica minha Collection?

Não.

A Collection é utilizada apenas como fonte de consulta.

Nenhuma alteração é realizada nos arquivos fornecidos.

---

# 9. Como o Skill identifica novos cenários?

Para cada endpoint ele executa o seguinte processo:

1. Analisa o endpoint.
2. Identifica regras explícitas.
3. Identifica regras implícitas.
4. Avalia riscos técnicos.
5. Compara com os testes existentes.
6. Localiza lacunas.
7. Prioriza os riscos.
8. Gera novos cenários.

---

# 10. O Skill pode repetir cenários existentes?

Não deveria.

Uma das regras do framework é evitar a duplicação de testes já existentes.

Caso isso ocorra, recomenda-se revisar a Collection utilizada como entrada.

---

# 11. O que acontece quando faltar documentação?

O Skill deverá:

* informar a limitação encontrada;
* registrar as premissas adotadas;
* evitar criar regras de negócio sem evidências.

---

# 12. Como os riscos são priorizados?

Os cenários são ordenados considerando:

* Impacto no negócio
* Probabilidade de falha
* Exposição de segurança
* Complexidade técnica
* Frequência de utilização do endpoint

---

# 13. Quais aspectos de segurança são considerados?

O Skill utiliza como referência a **OWASP API Security Top 10**, incluindo cenários como:

* Broken Object Level Authorization
* Broken Authentication
* Broken Function Level Authorization
* Mass Assignment
* Injection
* SQL Injection
* NoSQL Injection
* JWT inválido
* JWT expirado
* JWT alterado
* Token ausente
* Parameter Pollution
* HTTP Verb Tampering
* Excessive Data Exposure
* Resource Exhaustion

---

# 14. Quais tipos de testes são gerados?

Para cada endpoint são produzidos, no mínimo:

* Testes Funcionais
* Testes Negativos
* Testes Não Funcionais
* Testes de Segurança

Novos cenários poderão ser adicionados sempre que forem identificados riscos adicionais.

---

# 15. Como saber se a análise foi concluída?

A análise somente é considerada concluída quando:

* todos os endpoints forem analisados;
* todas as regras forem documentadas;
* todos os riscos forem classificados;
* todos os cenários estiverem em Gherkin válido;
* todas as justificativas técnicas forem apresentadas;
* a matriz de rastreabilidade estiver completa.

---

# 16. O Skill funciona com APIs GraphQL?

Não na versão atual.

O suporte a GraphQL está previsto no ROADMAP.

---

# 17. O Skill suporta APIs SOAP?

Ainda não.

Esse recurso está planejado para versões futuras.

---

# 18. Posso adaptar o Skill para minha empresa?

Sim.

O framework foi projetado para ser extensível.

É possível adaptar:

* Persona
* Critérios de qualidade
* Metodologia
* Templates
* Critérios mínimos
* Modelo de saída
* Regras de priorização

---

# 19. Como garantir resultados consistentes entre colaboradores?

Recomenda-se que todos utilizem:

* a mesma versão do Skill;
* o mesmo Prompt Mestre;
* a mesma Collection;
* a mesma documentação de apoio;
* os mesmos parâmetros de execução.

---

# 20. Como registrar evoluções do framework?

Toda alteração deve seguir o processo de governança:

1. Atualizar a versão.
2. Registrar a alteração no CHANGELOG.
3. Atualizar a documentação afetada.
4. Revisar os templates impactados.
5. Validar exemplos e artefatos relacionados.

---

# 21. Quais artefatos o Skill produz?

Ao final da execução, o Skill poderá gerar:

* Relatório Executivo
* Análise por Endpoint
* Cenários em Gherkin
* Matriz de Rastreabilidade
* Matriz de Riscos
* Recomendações Técnicas
* Resumo Executivo

---

# 22. Como reportar melhorias ou problemas?

Sugere-se seguir o processo de governança do framework:

* Registrar a solicitação.
* Avaliar impacto técnico.
* Atualizar o ROADMAP, quando aplicável.
* Implementar a alteração.
* Registrar a mudança no CHANGELOG.
* Publicar uma nova versão.

---

# Histórico do Documento

| Versão | Data       | Autor              | Descrição              |
| ------ | ---------- | ------------------ | ---------------------- |
| 1.0.0  | DD/MM/AAAA | Antonio G. Martins | Criação inicial do FAQ |

---

# Observações

Este FAQ deve ser revisado sempre que novas funcionalidades forem incorporadas ao **QA REST API Test Designer**, garantindo que as dúvidas recorrentes da equipe sejam respondidas de forma clara e padronizada.

