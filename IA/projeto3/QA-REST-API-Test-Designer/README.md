# CHANGELOG

# QA REST API Test Designer

Todas as alterações relevantes deste framework serão documentadas neste arquivo.

Este documento segue o princípio de versionamento semântico (Semantic Versioning) adaptado para Skills de IA.

---

# Versionamento

Formato utilizado:

**MAJOR.MINOR.PATCH**

Onde:

* **MAJOR** → mudanças incompatíveis ou alteração significativa da metodologia.
* **MINOR** → novas funcionalidades ou novos templates compatíveis.
* **PATCH** → correções, ajustes e melhorias sem alteração de comportamento.

Exemplo:

* 1.0.0
* 1.1.0
* 1.2.0
* 2.0.0

---

# Histórico de Versões

## [1.0.0] - Versão Inicial

**Data:** 27/06/2026

### Adicionado

* Criação do framework **QA REST API Test Designer**.
* Definição da Persona da IA.
* Definição da metodologia de análise baseada em Risk-Based Testing.
* Cobertura funcional.
* Cobertura negativa.
* Cobertura não funcional.
* Cobertura baseada na OWASP API Security Top 10.
* Priorização de cenários por risco.
* Autoavaliação da IA.
* Matriz de rastreabilidade.
* Critérios mínimos de cobertura.
* Critérios de qualidade da resposta.
* Critérios de sucesso (KPIs).
* Premissas operacionais.
* Limitações do Skill.
* Fluxo de execução.

### Templates incluídos

* Template de Saída
* Template Gherkin
* Template Matriz de Riscos
* Template Relatório Executivo
* Template Análise por Endpoint

### Documentação

* Skill.md
* Guia de Utilização.md
* Prompt Mestre.md
* Configuração.md
* Arquitetura.md
* Glossário.md
* Exemplos de Entrada
* Exemplos de Saída

---

## [1.1.0] - Em Desenvolvimento

### Planejado

* Suporte a GraphQL.
* Suporte a Async APIs.
* Suporte a WebSockets.
* Geração de Plano de Testes.
* Geração de Casos de Teste detalhados.
* Template para Evidências de Testes.
* Integração com ferramentas de automação.
* Exportação para Azure DevOps.
* Exportação para Jira.
* Exportação para Xray.
* Exportação para TestRail.

---

## [1.2.0] - Planejado

### Planejado

* Geração de testes de contrato.
* Geração de testes de mutação.
* Análise automática de Swagger/OpenAPI.
* Análise automática de coleções Insomnia.
* Geração de cenários para APIs SOAP.
* Avaliação automática de cobertura.
* Métricas de qualidade da suíte de testes.

---

## [2.0.0] - Futuro

### Planejado

* Framework Multiagente.
* Especialistas independentes para:

  * QA Funcional
  * Segurança
  * Performance
  * Arquitetura
  * Engenharia de Dados
* Consolidação automática das análises.
* Aprendizado baseado em feedback humano (Human-in-the-Loop).
* Integração com pipelines CI/CD.
* Dashboard de indicadores.
* Geração automática de documentação executiva.

---

# Registro de Alterações

| Versão | Data       | Autor              | Tipo    | Descrição                    |
| ------ | ---------- | ------------------ | ------- | ---------------------------- |
| 1.0.0  | 27/06/2026 | Antonio G. Martins | Criação | Primeira versão do framework |

---

# Tipos de Alteração

Utilizar uma das categorias abaixo para registrar novas alterações.

## Adicionado (Added)

Novas funcionalidades, templates ou componentes.

Exemplos:

* Novo template.
* Novo relatório.
* Novo formato de saída.

---

## Alterado (Changed)

Mudanças em funcionalidades existentes.

Exemplos:

* Atualização da metodologia.
* Ajuste de critérios.
* Melhoria do Prompt Mestre.

---

## Corrigido (Fixed)

Correções de comportamento.

Exemplos:

* Correção na geração de Gherkin.
* Ajuste da matriz de riscos.
* Correção da priorização.

---

## Removido (Removed)

Componentes removidos do framework.

Exemplos:

* Exclusão de template.
* Remoção de parâmetro.
* Eliminação de funcionalidade obsoleta.

---

## Segurança (Security)

Alterações relacionadas à segurança.

Exemplos:

* Atualização para nova versão da OWASP API Security Top 10.
* Inclusão de novos cenários de segurança.
* Correções em validações de autenticação.

---

# Processo de Atualização

Sempre que uma nova versão do framework for publicada:

1. Atualizar o número da versão.
2. Registrar a data da alteração.
3. Identificar o autor.
4. Classificar o tipo da alteração.
5. Descrever claramente o impacto da mudança.
6. Atualizar a documentação relacionada.
7. Revisar os exemplos e templates, quando necessário.

---

# Convenções

* Cada versão deve possuir um identificador único.
* Não alterar registros históricos já publicados.
* Alterações devem ser registradas em ordem cronológica.
* Toda mudança relevante deve estar refletida neste documento.
* Versões em desenvolvimento devem ser marcadas como **Planejado** ou **Em Desenvolvimento**.

---

# Política de Versionamento

## Alteração PATCH (1.0.x)

Aplicada quando houver:

* correções de texto;
* melhorias de templates;
* ajustes de formatação;
* pequenas melhorias na engenharia de prompts.

---

## Alteração MINOR (1.x.0)

Aplicada quando houver:

* novos templates;
* novos artefatos;
* novas capacidades da IA;
* ampliação da metodologia;
* novos relatórios.

---

## Alteração MAJOR (x.0.0)

Aplicada quando houver:

* mudança na arquitetura do framework;
* alteração da metodologia principal;
* incompatibilidade com versões anteriores;
* reestruturação dos componentes.

---

# Próximas Evoluções

Backlog sugerido:

* Suporte a APIs GraphQL.
* Testes para gRPC.
* Geração automática de automação em diferentes frameworks.
* Exportação para formatos CSV, Excel e PDF.
* Integração com GitHub Actions, GitLab CI e Azure DevOps.
* Dashboard de métricas.
* IA especializada por domínio (QA Funcional, Segurança, Performance e Arquitetura).
* Geração automática de documentação técnica.

---

# Aprovação

| Papel           | Responsável        | Data |
| --------------- | ------------------ | ---- |
| Autor           | Antonio G. Martins |      |
| Revisor Técnico |                    |      |
| Aprovador       |                    |      |

---

# Observações

Este documento faz parte da governança do **QA REST API Test Designer** e deve ser mantido atualizado sempre que houver evolução do framework, garantindo rastreabilidade, transparência e controle sobre todas as mudanças realizadas.

