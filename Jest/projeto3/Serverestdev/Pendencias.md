
![NodeJS](https://img.shields.io/badge/Node.js-20.x-green)
![Mocha](https://img.shields.io/badge/Test-Mocha-red)
![Chai](https://img.shields.io/badge/Assertions-Chai-orange)
![Supertest](https://img.shields.io/badge/API-Supertest-blue)
![QA](https://img.shields.io/badge/Quality-Engineering-purple)


# 🚀 Pendências

Com base na collection Postman anexada, identifiquei os módulos Login, Usuários, Produtos e Carrinhos. Abaixo estão os principais cenários de teste organizados por tipo.

Endpoints identificados: **Login, CRUD de Usuários, CRUD de Produtos e Operações de Carrinho.**
   
**1 - LOGIN**

Endpoints:
-> Realizar Login e Gerar Token

**1.1 - Cenários Positivos**

Realizar Login

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


**2. USUÁRIOS**

Endpoints:
-> Listar usuários
-> Cadastrar usuário
-> Buscar usuário por ID
-> Alterar usuário
-> Excluir usuário

**2.1 - Cenários Positivos**

Cadastro de Usuário

| ID         | Cenário                                                       |
| ---------- | ------------------------------------------------------------- |
| USR-001    | Cadastrar usuário administrador                               |
| USR-002    | Cadastrar usuário comum                                       |
| USR-003    | Cadastrar usuário com dados válidos                           |
| USR-004    | Validar geração do ID do usuário                              |
| USR-005    | Validar persistência dos dados cadastrados                    |


Consulta
ID	Cenário
USR-006	Listar usuários cadastrados
USR-007	Buscar usuário por ID válido
USR-008	Validar filtros de listagem (se suportados)

Alteração
ID	Cenário
USR-009	Alterar nome do usuário
USR-010	Alterar email
USR-011	Alterar perfil administrador
USR-012	Alterar todos os campos

Exclusão
ID	Cenário
USR-013	Excluir usuário existente
USR-014	Validar remoção após exclusão

Cenários Negativos:
Cadastro
ID	Cenário
USR-015	Cadastrar usuário sem nome
USR-016	Cadastrar usuário sem email
USR-017	Cadastrar usuário sem senha
USR-018	Cadastrar usuário com email duplicado
USR-019	Cadastrar usuário com email inválido
USR-020	Cadastrar usuário sem token
USR-021	Cadastrar usuário com token inválido
USR-022	Cadastrar usuário com campos nulos

Consulta
ID	Cenário
USR-023	Buscar usuário inexistente
USR-024	Buscar usuário com ID inválido
USR-025	Buscar usuário com ID vazio

Alteração
ID	Cenário
USR-026	Alterar usuário inexistente
USR-027	Alterar email para um já existente
USR-028	Alterar sem token válido
USR-029	Alterar enviando payload inválido

Exclusão
ID	Cenário
USR-030	Excluir usuário inexistente
USR-031	Excluir usuário com token inválido
USR-032	Excluir usuário vinculado a regras de negócio que impeçam remoção

Cenários Alternativos
ID	Cenário
USR-033	PUT em ID inexistente criando novo recurso (caso suportado)
USR-034	Cadastro com caracteres especiais no nome
USR-035	Cadastro com nomes extensos
USR-036	Cadastro com administrador=true e administrador=false

Cenários de Exceção
ID	Cenário
USR-037	Banco indisponível durante cadastro
USR-038	Falha na gravação dos dados
USR-039	Erro interno ao consultar usuário

3. PRODUTOS

Endpoints:

-> Listar produtos
-> Cadastrar produto
-> Buscar produto por ID
-> Alterar produto
-> Excluir produto

Cenários Positivos:
Cadastro
ID	Cenário
PRD-001	Cadastrar produto válido
PRD-002	Cadastrar produto com estoque zero
PRD-003	Cadastrar produto com quantidade alta
PRD-004	Validar geração do ID do produto

Consulta
ID	Cenário
PRD-005	Listar produtos
PRD-006	Buscar produto por ID válido
PRD-007	Filtrar por preço
PRD-008	Filtrar por quantidade

Alteração
ID	Cenário
PRD-009	Alterar nome do produto
PRD-010	Alterar preço
PRD-011	Alterar estoque
PRD-012	Alterar descrição

Exclusão
ID	Cenário
PRD-013	Excluir produto existente
PRD-014	Confirmar remoção após exclusão

Cenários Negativos
ID	Cenário
PRD-015	Cadastrar produto sem nome
PRD-016	Cadastrar produto sem preço
PRD-017	Cadastrar produto com preço negativo
PRD-018	Cadastrar produto com quantidade negativa
PRD-019	Cadastrar produto duplicado
PRD-020	Cadastrar produto sem token
PRD-021	Buscar produto inexistente
PRD-022	Alterar produto inexistente
PRD-023	Excluir produto inexistente
PRD-024	Excluir produto associado a carrinho

Cenários Alternativos
ID	Cenário
PRD-025	Produto com preço zero
PRD-026	Produto com descrição vazia
PRD-027	Produto com caracteres especiais
PRD-028	Atualização parcial dos dados

Cenários de Exceção
ID	Cenário
PRD-029	Falha ao atualizar estoque
PRD-030	Erro interno ao excluir produto
PRD-031	Timeout durante cadastro

4. CARRINHOS

Endpoints:

-> Listar carrinhos
-> Adicionar carrinho
-> Buscar carrinho
-> Concluir compra
-> Cancelar compra

Cenários Positivos:
Criação
ID	Cenário
CAR-001	Adicionar produto ao carrinho
CAR-002	Adicionar múltiplos produtos ao carrinho
CAR-003	Adicionar produto com quantidade disponível
CAR-004	Validar cálculo do valor total
CAR-005	Validar cálculo da quantidade total

Consulta
ID	Cenário
CAR-006	Listar carrinhos
CAR-007	Buscar carrinho por ID válido
CAR-008	Filtrar por preço total
CAR-009	Filtrar por quantidade total

Compra
ID	Cenário
CAR-010	Concluir compra com sucesso
CAR-011	Atualizar estoque após compra

Cancelamento
ID	Cenário
CAR-012	Cancelar compra
CAR-013	Devolver estoque ao cancelar

Cenários Negativos:
ID	Cenário
CAR-014	Adicionar produto inexistente
CAR-015	Adicionar quantidade superior ao estoque
CAR-016	Adicionar produto sem token
CAR-017	Adicionar carrinho vazio
CAR-018	Buscar carrinho inexistente
CAR-019	Concluir compra sem carrinho ativo
CAR-020	Cancelar compra sem carrinho ativo
CAR-021	Concluir compra com estoque insuficiente

Cenários Alternativos:
ID	Cenário
CAR-022	Adicionar mesmo produto mais de uma vez
CAR-023	Adicionar produto com quantidade igual ao estoque
CAR-024	Comprar todos os itens disponíveis
CAR-025	Carrinho contendo apenas um item

Cenários de Exceção
ID	Cenário
CAR-026	Falha ao debitar estoque
CAR-027	Falha ao concluir compra após pagamento
CAR-028	Inconsistência de estoque concorrente
CAR-029	Erro interno ao cancelar compra

Cenários E2E (Fluxos completos)

Além dos testes por endpoint, recomendo estes fluxos ponta a ponta:

ID	Fluxo
E2E-001	Login → Criar Usuário → Consultar Usuário → Excluir Usuário
E2E-002	Login → Cadastrar Produto → Consultar Produto → Alterar Produto → Excluir Produto
E2E-003	Login → Cadastrar Produto → Criar Carrinho → Concluir Compra
E2E-004	Login → Cadastrar Produto → Criar Carrinho → Cancelar Compra
E2E-005	Validar redução do estoque após compra
E2E-006	Validar restauração do estoque após cancelamento
E2E-007	Validar acesso sem token em todos endpoints protegidos

Essa suíte cobre os cenários funcionais principais, validações de negócio, segurança, autorização, integridade de dados e fluxos críticos da API Serverest.

============================================================

Exemplo 1 - Obter token no login e usar para cadastrar produto
const request = require('supertest');
const { expect } = require('chai');

const baseURL = 'https://serverest.dev';

describe('LGN-004 - Utilizar token gerado em chamadas autenticadas', () => {

    let token;

    before(async () => {

        const loginResponse = await request(baseURL)
            .post('/login')
            .send({
                email: 'fulano@qa.com',
                password: 'teste'
            });

        token = loginResponse.body.authorization;
    });

    it('Deve permitir cadastrar produto utilizando token válido', async () => {

        const response = await request(baseURL)
            .post('/produtos')
            .set('Authorization', token)
            .send({
                nome: `Mouse Gamer ${Date.now()}`,
                preco: 150,
                descricao: 'Mouse Gamer RGB',
                quantidade: 10
            });

        expect(response.status).to.equal(201);
        expect(response.body).to.have.property('message');
    });

});
Exemplo 2 - Validar que o token foi retornado

Esse seria o cenário LGN-002.

it('Deve retornar token após login válido', async () => {

    const response = await request(baseURL)
        .post('/login')
        .send({
            email: 'fulano@qa.com',
            password: 'teste'
        });

    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('authorization');
    expect(response.body.authorization).to.be.a('string');
});
Exemplo 3 - Positivo + Negativo no mesmo describe
describe('Autenticação via Token', () => {

    let token;

    before(async () => {

        const login = await request(baseURL)
            .post('/login')
            .send({
                email: 'fulano@qa.com',
                password: 'teste'
            });

        token = login.body.authorization;
    });

    it('Deve acessar recurso protegido com token válido', async () => {

        const response = await request(baseURL)
            .post('/produtos')
            .set('Authorization', token)
            .send({
                nome: `Produto ${Date.now()}`,
                preco: 100,
                descricao: 'Teste',
                quantidade: 5
            });

        expect(response.status).to.equal(201);
    });

    it('Não deve acessar recurso protegido sem token', async () => {

        const response = await request(baseURL)
            .post('/produtos')
            .send({
                nome: `Produto ${Date.now()}`,
                preco: 100,
                descricao: 'Teste',
                quantidade: 5
            });

        expect(response.status).to.equal(401);
    });

});
Exemplo mais profissional (Service Layer)

Em projetos que impressionam mais coordenadores e líderes de QA, normalmente não deixamos o login dentro do teste.

auth.service.js
const request = require('supertest');

class AuthService {

    static async getToken() {

        const response = await request(process.env.BASE_URL)
            .post('/login')
            .send({
                email: process.env.EMAIL,
                password: process.env.PASSWORD
            });

        return response.body.authorization;
    }
}

module.exports = AuthService;

produto.spec.js
const AuthService = require('../services/auth.service');

describe('Produtos', () => {

    let token;

    before(async () => {
        token = await AuthService.getToken();
    });

    it('Deve cadastrar produto', async () => {

        const response = await request(process.env.BASE_URL)
            .post('/produtos')
            .set('Authorization', token)
            .send({
                nome: `Produto ${Date.now()}`,
                preco: 100,
                descricao: 'Teste',
                quantidade: 10
            });

        expect(response.status).to.equal(201);
    });

});
O que um coordenador de QA gosta de ver
src/
├── services/
│   ├── auth.service.js
│   ├── produto.service.js
│
├── payloads/
│   ├── produto.payload.js
│
├── tests/
│   ├── login.spec.js
│   ├── produtos.spec.js
│
├── helpers/
│   ├── token.helper.js
│
└── reports/
    └── allure/

Isso demonstra reutilização, manutenção e escalabilidade, características valorizadas em projetos de automação de API.

===================================================================================================================================
Se você estiver usando Express + Supertest + Chai, um cenário de teste para "Validar estrutura da resposta de autenticação" pode ser:

const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

const app = require('../src/app'); // sua aplicação Express

describe('Login', () => {

  it('Deve validar a estrutura da resposta de autenticação', async () => {

    const response = await request(app)
      .post('/login')
      .send({
        email: 'fulano@qa.com',
        password: 'teste'
      });

    expect(response.status).to.equal(200);

    // Validação da estrutura
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('authorization');

    // Validação do tipo
    expect(response.body.authorization).to.be.a('string');

    // Validação de conteúdo
    expect(response.body.authorization).to.not.be.empty;

  });

});
Validação mais robusta

Caso queira garantir exatamente os campos retornados:

expect(response.body).to.have.all.keys([
  'authorization'
]);
Utilizando JSON Schema

Uma abordagem muito utilizada em automação de API é validar a estrutura através de schema:

const authSchema = {
  type: 'object',
  required: ['message'],['authorization'],
  properties: {
    authorization: {
      type: 'string'
    }
  }
};

Com chai-json-schema:

expect(response.body).to.be.jsonSchema(authSchema);

============================================================

Ao usar o chai, express, supertest que tipo de relatorio posso dispor para rodar os testes?

1. Relatório Console (Padrão do Mocha)

O mais simples, exibido no terminal.

mocha tests/**/*.spec.js

Exemplo:

Login API
  ✓ Deve realizar login com sucesso
  ✓ Deve retornar token válido

Produtos API
  ✓ Deve cadastrar produto
  ✓ Deve excluir produto

4 passing (3s)

Vantagens

Simples
Sem configuração

Desvantagens

Não histórico
Pouca visibilidade para gestão
2. Mochawesome (Mais usado)

Gera relatório HTML navegável.

Instalação:

npm install mochawesome --save-dev

Execução:

mocha tests/**/*.spec.js \
--reporter mochawesome

Arquivos gerados:

mochawesome-report/
├── mochawesome.html
├── mochawesome.json

Recursos:

✅ Passou/Falhou

✅ Tempo de execução

✅ Stack trace

✅ Screenshots (quando aplicável)

✅ Histórico

✅ Dashboard visual

Exemplo:

✔ Login
✔ Cadastro Produto
✖ Exclusão Produto

Total: 10
Pass: 9
Fail: 1

É o relatório mais utilizado em projetos de automação de APIs com Node.js.

3. Allure Report (Mais profissional)

Muito utilizado em QA corporativo.

Instalação:

npm install allure-mocha --save-dev

Execução:

mocha tests/**/*.spec.js \
--reporter allure-mocha

Gerar relatório:

allure generate allure-results
allure open

Recursos:

✅ Dashboard executivo

✅ Histórico de execuções

✅ Tendência de falhas

✅ Categorias de bugs

✅ Integração Jenkins

✅ Integração GitHub Actions

✅ Evidências

Exemplo:

Suites
├── Login
├── Usuários
├── Produtos
└── Carrinhos

Passed: 45
Failed: 2
Broken: 1

Ideal para projetos enterprise.

4. JUnit XML

Muito utilizado para CI/CD.

Instalação:

npm install mocha-junit-reporter --save-dev

Execução:

mocha tests/**/*.spec.js \
--reporter mocha-junit-reporter

Gera:

<testsuite tests="50" failures="2">
 ...
</testsuite>

Usado em:

Jenkins
Azure DevOps
GitLab CI
GitHub Actions
Bamboo
5. JSON Report

Bom para integrações customizadas.

mocha tests/**/*.spec.js \
--reporter json

Saída:

{
  "stats": {
    "tests": 10,
    "passes": 9,
    "failures": 1
  }
}

Útil para:

Dashboards internos
Power BI
Grafana
ELK
6. HTML Reporter

Instalação:

npm install mocha-html-reporter

Gera relatório HTML simples.

Bom para compartilhar com equipes que não têm acesso ao pipeline.

7. Relatório de Cobertura (Istanbul/NYC)

Mesmo em APIs, você pode medir cobertura.

Instalação:

npm install nyc --save-dev

Execução:

nyc mocha tests/**/*.spec.js

Gera:

Statements : 92%
Branches   : 85%
Functions  : 95%
Lines      : 93%

Relatório HTML:

nyc report --reporter=html
8. Relatório para GitHub Actions

Combinação muito comum:

Mocha
+
Chai
+
Supertest
+
Mochawesome
+
JUnit XML

Script:

{
  "scripts": {
    "test": "mocha tests/**/*.spec.js",
    "test:report": "mocha tests/**/*.spec.js --reporter mochawesome",
    "test:junit": "mocha tests/**/*.spec.js --reporter mocha-junit-reporter"
  }
}
Estrutura recomendada para seu projeto Serverest
reports/
├── allure/
├── mochawesome/
├── junit/
└── coverage/

E gerar simultaneamente:

✓ Mochawesome (HTML)
✓ JUnit (CI/CD)
✓ NYC Coverage

Essa combinação atende tanto o time de QA quanto DevOps e gestores.

Stack que eu recomendaria

Para um projeto de automação de API da Serverest:

Mocha
Chai
Supertest
Mochawesome
NYC
GitHub Actions/Jenkins

ou, se o projeto for corporativo:

Mocha
Chai
Supertest
Allure Report
NYC
Jenkins

O Allure costuma ser o padrão mais valorizado em empresas por fornecer histórico, métricas, tendências e evidências de execução.

============================================================
Melhor opção 100% gratuita

Se você quiser montar um projeto profissional sem gastar nada:

Mocha
Chai
Supertest
Allure Report
NYC
GitHub Actions

onde
Allure Report → Qualidade dos testes

Mostra:

Quantos testes executaram
Quantos passaram/falharam
Tempo de execução
Histórico de execuções
Evidências (logs, requests, responses)
Tendência de falhas

Exemplo:

Testes Executados: 120
Passou: 118
Falhou: 2
Taxa de Sucesso: 98,3%
NYC → Cobertura de código

Mostra:

Statements (%)
Branches (%)
Functions (%)
Lines (%)

Exemplo:

Statements : 92%
Branches   : 85%
Functions  : 95%
Lines      : 93%
============================================================
O que um Líder de QA Sênior quer ver

Aqui começa a ficar interessante.

Ele vai observar:

Organização
Page Object?
Factory?
Builders?
Fixtures?

Mesmo em API.

Exemplo:

src/
├── services/
├── factories/
├── payloads/
├── tests/

===========================================================
## Sobre o Projeto 3: 

# Objetivo

# Arquitetura

# Tecnologias

# Como executar

# Evidências

# Pipeline

# Relatórios

# Melhorias futuras

# Inclua screenshots: Allure Reports, GitHub Actions, Test Results


==========================================================
