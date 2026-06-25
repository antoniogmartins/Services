![NodeJS](https://img.shields.io/badge/Node.js-20.x-green)
![Mocha](https://img.shields.io/badge/Test-Mocha-red)
![Chai](https://img.shields.io/badge/Assertions-Chai-orange)
![Supertest](https://img.shields.io/badge/API-Supertest-blue)
![QA](https://img.shields.io/badge/Quality-Engineering-purple)

# 🚀 API Test Automation Framework

## Sobre o Projeto

Com base na collection Postman anexada, identifiquei os módulos Login, Usuários, Produtos e Carrinhos. Abaixo estão os principais cenários de teste organizados por tipo.

Endpoints identificados: **Login, CRUD de Usuários, CRUD de Produtos e Operações de Carrinho.**
   
**1 - LOGIN**

Endpoints:

-> Realizar Login e Gerar Token

**1.1 - Cenários Positivos** 

| ID         | Cenário                                                       |
| ---------- | ------------------------------------------------------------- |
| LGN-001    | Realizar login com email e senha válidos                      |
| LGN-002    | Validar retorno do token JWT/autorização                      |
| LGN-003    | Validar estrutura da resposta de autenticação                 |
| LGN-004    | Utilizar token gerado em chamadas autenticadas                |


**1.2 - Cenários Negativos**

| ID         | Cenário                                                       |
| ---------- | ------------------------------------------------------------- |
| LGN-005    | Login com senha incorreta                                     |
| LGN-006    | Login com email inexistente                                   |
| LGN-007    | Login com email vazio                                         |
| LGN-008    | Login com senha vazia                                         |
| LGN-009    | Login sem enviar body                                         |
| LGN-010    | Login com formato inválido de email                           |
| LGN-011    | Login com caracteres especiais maliciosos (SQL Injection/XSS) |


**1.3 - Cenários Alternativos** 

| ID         | Cenário                                                       |
| ---------- | ------------------------------------------------------------- |
| LGN-012    | Login com letras maiúsculas/minúsculas no email               |
| LGN-013    | Login com espaços antes/depois do email                       |


**1.4 - Cenários de Exceção** 

| ID         | Cenário                                                       |
| ---------- | ------------------------------------------------------------- |
| LGN-014    | Falha interna do servidor durante autenticação                |
| LGN-015    | Timeout da requisição                                         |
| LGN-016    | Serviço de autenticação indisponível                          |

** Para o LGN-014 não foi pssivel automatizar de forma confiável na ServeRest, pois a pessoa não consegue derrubar banco, 
matar serviço de autenticação ou simular indisponibilidade.

** Para o LGN-016 utilizando a ServeRest pública, você não consegue provocar um "Serviço de autenticação indisponível" real, porque não controla a infraestrutura.


**2. USUÁRIOS**

Endpoints:

-> Listar usuários

-> Cadastrar usuário

-> Buscar usuário por ID

-> Alterar usuário

-> Excluir usuário


**2.1 - Cenários Positivos**

**2.1.1 - Cadastro de Usuário** 

| ID         | Cenário                                                       |
| ---------- | ------------------------------------------------------------- |
| USR-001    | Cadastrar usuário administrador                               |
| USR-002    | Cadastrar usuário comum                                       |
| USR-003    | Cadastrar usuário com dados válidos                           |
| USR-004    | Validar geração do ID do usuário                              |
| USR-005    | Validar persistência dos dados cadastrados                    |


**2.1.2 - Consulta de Usuário** 

| ID         | Cenário                                                       |
| ---------- | ------------------------------------------------------------- |
| USR-006    | Listar usuários cadastrados                                   |
| USR-007    | Buscar usuário por ID válido                                  |
| USR-008    | Validar filtros de listagem (se suportados)                   |


**2.1.3 - Alteração de Usuário**

| ID         | Cenário                                                       |
| ---------- | ------------------------------------------------------------- |
| USR-009    | Alterar somente o nome do usuário                             |
| USR-010    | Alterar somente o email                                       |
| USR-011    | Alterar somente o perfil administrador                        |
| USR-012    | Alterar todos os campos                                       |


**2.1.4 - Exclusão de Usuário**

| ID         | Cenário                                                       |
| ---------- | ------------------------------------------------------------- |
| USR-013    | Excluir usuário existente                                     |
| USR-014    | Validar remoção após exclusão                                 |
| USR-015    | Validar uma retentativa de Excluir um usuario ja deletado     |



**2.2 - Cenários Negativos**

**2.2.1 - Cadastro Usuarios**

| ID         | Cenário                                                       |
| ---------- | ------------------------------------------------------------- |
| USR-016    | Cadastrar usuário sem nome                                    |
| USR-017    | Cadastrar usuário sem email                                   |
| USR-018    | Cadastrar usuário sem senha                                   |
| USR-019    | Cadastrar usuário com email duplicado                         |
| USR-020    | Cadastrar usuário com email inválido                          |
| USR-021    | Cadastrar usuário sem token                                   |
| USR-022    | Cadastrar usuário com token inválido                          |
| USR-023    | Cadastrar usuário com campos nulos                            |


**2.2.2 - Consulta Usuarios**
| ID         | Cenário                                                       |
| ---------- | ------------------------------------------------------------- |
| USR-024    | Buscar usuário inexistente                                    |
| USR-025    | Buscar usuário com ID inválido                                |
| USR-026    | Buscar usuário com ID vazio                                   |


**2.2.3 - Alteração Usuarios**

| ID         | Cenário                                                              |
| ---------- | -------------------------------------------------------------------- |
| USR-027    | Alterar usuário inexistente                                          |
| USR-028    | Alterar email para um já existente                                   |
| USR-029    | Alterar sem token válido                                             |
| USR-030    | Alterar enviando payload inválido                                    |


**2.2.4 - Exclusão Usuarios**

| ID         | Cenário                                                              |
| ---------- | -------------------------------------------------------------------- |
| USR-031    | Excluir usuário inexistente                                          |
| USR-032    | Excluir usuário com token inválido                                   |
| USR-033    | Excluir usuário vinculado a regras de negócio que impeçam remoção    |


**2.3 - Cenários Alternativos**

| ID         | Cenário                                                              |
| ---------- | -------------------------------------------------------------------- |
| USR-034    | PUT em ID inexistente criando novo recurso (caso suportado)          |
| USR-035    | Cadastro de usuarios com caracteres especiais no nome                |
| USR-036    | Cadastro de usuarios com nomes extensos                              |
| USR-037    | Cadastro de usuarios com administrador=true e administrador=false    |


**2.4 - Cenários Exceção**

| ID         | Cenário                                                              |
| ---------- | -------------------------------------------------------------------- |
| USR-038    | Banco de dados indisponível durante cadastro                         |
| USR-039    | Falha na gravação dos dados                                          |
| USR-040    | Erro interno ao consultar usuário                                    |


**3. PRODUTOS**

Endpoints:

-> Listar produtos

-> Cadastrar produto

-> Buscar produto por ID

-> Alterar produto

-> Excluir produto


**3.1 - Cenários Positivos**

**3.1.1 - Cadastro de Produtos** 

| ID         | Cenário                                                              |
| ---------- | -------------------------------------------------------------------- |
| PRD-001    | Cadastrar produto válido                                             |
| PRD-002    | Cadastrar produto com estoque zero                                   |
| PRD-003    | Cadastrar produto com quantidade alta                                |
| PRD-004    | Validar geração do ID do produto                                     |


**3.1.2 - Consulta de Produtos** 

| ID         | Cenário                                                              |
| ---------- | -------------------------------------------------------------------- |
| PRD-005    | Listar produtos                                                      |
| PRD-006    | Buscar produto por ID válido                                         |
| PRD-007    | Filtrar por preço                                                    |
| PRD-008    | Filtrar por quantidade                                               |


**3.1.3 - Alteração de Produtos** 

| ID         | Cenário                                                              |
| ---------- | -------------------------------------------------------------------- |
| PRD-009    | Alterar nome do produto                                              |
| PRD-010    | Alterar preço                                                       |
| PRD-011    | Alterar estoque                                                      |
| PRD-012    | Alterar descrição                                                    |


**3.1.4 - Exclusão de Produtos**

| ID         | Cenário                                                              |
| ---------- | -------------------------------------------------------------------- |
| PRD-013    | Excluir produto existente                                            |
| PRD-014    | Confirmar remoção após exclusão                                      |


**3.2 - Cenários Negativos**

| ID         | Cenário                                                              |
| ---------- | -------------------------------------------------------------------- |
| PRD-015    | Cadastrar produto sem nome                                           |
| PRD-016    | Cadastrar produto sem preço                                          |
| PRD-017    | Cadastrar produto com preço negativo                                 |
| PRD-018    | Cadastrar produto com quantidade negativa                            |
| PRD-019    | Cadastrar produto duplicado                                          |
| PRD-020    | Cadastrar produto sem token                                          |
| PRD-021    | Buscar produto inexistente                                           |
| PRD-022    | Alterar produto inexistente                                          |
| PRD-023    | Excluir produto inexistente                                          |
| PRD-024    | Excluir produto associado a carrinho                                 |


**3.3 - Cenários Alternativos**

| ID         | Cenário                                                              |
| ---------- | -------------------------------------------------------------------- |
| PRD-025    | Cadastrar Produto com preço zero                                     |
| PRD-026    | Cadastrar Produto com descrição vazia                                |
| PRD-027    | Cadastrar Produto com caracteres especiais                           |
| PRD-028    | Atualização parcial dos dados                                        |


**3.4 - Cenários de Exceção** 

| ID         | Cenário                                                              |
| ---------- | -------------------------------------------------------------------- |
| PRD-029    | Falha ao atualizar estoque                                           |
| PRD-030    | Erro interno ao excluir produto                                      |
| PRD-031    | Timeout durante cadastro                                             |



**4. CARRINHOS**

Endpoints:

-> Listar carrinhos

-> Adicionar carrinho

-> Buscar carrinho

-> Concluir compra

-> Cancelar compra


**4.1 - Cenários Positivos** (em andamento)

**4.1.1 - Adicionar produto ao Carrinho de compras**

| ID         | Cenário                                                              |
| ---------- | -------------------------------------------------------------------- |
| CAR-001    | Adicionar produto ao carrinho                                        |
| CAR-002    | Adicionar múltiplos produtos ao carrinho                             |
| CAR-003    | Adicionar produto com quantidade disponível                          |
| CAR-004    | Validar cálculo do valor total                                       |
| CAR-005    | Validar cálculo da quantidade total                                  |


**4.1.2 - Consultar Carrinho de compras**

| ID         | Cenário                                                              |
| ---------- | -------------------------------------------------------------------- |
| CAR-006    | Listar carrinhos                                                     |
| CAR-007    | Buscar carrinho por ID válido                                        |
| CAR-008    | Filtrar por preço total                                              |
| CAR-009    | Filtrar por quantidade total                                         |


**4.1.3 - Concluir Compra e Atualizar Estoque**

| ID         | Cenário                                                              |
| ---------- | -------------------------------------------------------------------- |
| CAR-010    | Concluir compra com sucesso                                          |
| CAR-011    | Atualizar estoque após compra                                        |


**4.1.4 - Cancelar Compra e Atualizar Estoque**

| ID         | Cenário                                                              |
| ---------- | -------------------------------------------------------------------- |
| CAR-012    | Cancelar compra                                                      |
| CAR-013    | Devolver estoque ao cancelar                                         |


**4.2 - Cenários Negativos**

| ID         | Cenário                                                              |
| ---------- | -------------------------------------------------------------------- |
| CAR-014    | Adicionar produto inexistente                                        |
| CAR-015    | Adicionar quantidade superior ao estoque                             |
| CAR-016    | Adicionar produto sem token                                          |
| CAR-017    | Adicionar carrinho vazio                                             |
| CAR-018    | Buscar carrinho inexistente                                          |
| CAR-019    | Concluir compra sem carrinho ativo                                   |
| CAR-020    | Cancelar compra sem carrinho ativo                                   |
| CAR-021    | Concluir compra com estoque insuficiente                             |


**4.3 - Cenários Alternativos**

| ID         | Cenário                                                              |
| ---------- | -------------------------------------------------------------------- |
| CAR-022    | Adicionar mesmo produto mais de uma vez                              |
| CAR-023    | Adicionar produto com quantidade igual ao estoque                    |
| CAR-024    | Comprar todos os itens disponíveis                                   |
| CAR-025    | Carrinho contendo apenas um item                                     |


**4.4 - Cenários de Exceção**

| ID         | Cenário                                                              |
| ---------- | -------------------------------------------------------------------- |
| CAR-026    | Falha ao debitar estoque                                             |
| CAR-027    | Falha ao concluir compra após pagamento                              |
| CAR-028    | Inconsistência de estoque concorrente                                |
| CAR-029    | Erro interno ao cancelar compra                                      |


**5. TESTES E2E (Fluxos completos)**

**5.1 - Cenários E2E (Fluxos completos)**

| ID         | Cenário                                                                                 |
| ---------- | --------------------------------------------------------------------------------------- |
| E2E-001    | Login → Criar Usuário → Consultar Usuário → Excluir Usuário                           |
| E2E-002    | Login → Cadastrar Produto → Consultar Produto → Alterar Produto → Excluir Produto    |
| E2E-003    | Login → Cadastrar Produto → Criar Carrinho → Concluir Compra                          |
| E2E-004    | Login → Cadastrar Produto → Criar Carrinho → Cancelar Compra                          |
| E2E-005    | Validar redução do estoque após compra                                                  |
| E2E-006    | Validar restauração do estoque após cancelamento                                        |
| E2E-007    | Validar acesso sem token em todos endpoints protegidos                                  |


Essa suíte cobre os cenários funcionais principais, validações de negócio, segurança, autorização, integridade de dados e fluxos críticos da API Serverest.

---

## Boas Práticas Aplicadas


---

## Como Executar


---

## Evidências


---

## Pipelines


---

## Relatórios


---

## Melhorias Futuras

### Qualidade Técnica


### Qualidade de Engenharia


### Observabilidade


---

## Desafio Encontrado


---




## Competências Demonstradas

* API Testing
* Test Automation
* REST Services
* JavaScript
* Node.js
* Mocha
* Chai
* Supertest
* Test Design
* Quality Assurance
* Quality Engineering

---

## Autor





