const request = require('supertest');
//const express = require('express');
const { expect } = require('chai', 'chai-json-schema');


const url = 'https://serverest.dev';
let token = "";
let id = 0;

before(async function () {
  this.timeout(10000);
});

//-> Realizar Login e Gerar Token
//**1.1 - Cenários Positivos**

describe('LGN-001 - Realizar login com email e senha válidos', function () {
    describe ('POST /Login', () => {
      it('Realizar login com email e senha válidos', async function() { 
        const response = await request(url)
            .post('/login')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .send({
                  email: 'fulano@qa.com',
                  password: 'teste'
            })
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.status).to.equal(200);
         expect(response.body.message).to.equal('Login realizado com sucesso');
         });
    });    
  });

describe('LGN-002 - Validar retorno do token JWT/autorização', function () {
    describe ('POST /Login', () => {
      it('Validar retorno do token JWT/autorização', async function() { 
        const response = await request(url)
            .post('/login')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .send({
                  email: 'fulano@qa.com',
                  password: 'teste'
            })
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.status).to.equal(200);
         expect(response.body).to.have.property('authorization');
         token = response.body.authorization;
         console.log('O valor do token é: ' + token);
         });
    });   
  });


describe('LGN-003 - Validar estrutura da resposta de autenticação', function () {
    describe ('POST /Login', () => {
      it('Validar estrutura da resposta de autenticação', async function() { 
        const response = await request(url)
            .post('/login')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .send({
                  email: 'fulano@qa.com',
                  password: 'teste'
            })
        expect(response.status).to.equal(200);
        
         // Validação da estrutura
         expect(response.body).to.be.an('object');
         expect(response.body).to.have.property('message');
         expect(response.body).to.have.property('authorization');
         expect(response.body).to.have.all.keys(['message', 'authorization']);

         // Validação do tipo
         expect(response.body.authorization).to.be.a('string');

        // Validação de conteúdo
        expect(response.body.authorization).to.not.be.empty;

       });
    });   
});

//-> Realizar Login e Gerar Token
//1.2 - Cenários Negativos
describe('LGN-004 - Utilizar token gerado em chamadas autenticadas', function () {
    describe ('POST /Login', () => {
      it('Utilizar token gerado em chamadas autenticadas', async function() { 
        
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
    });   
});


//-> Realizar Cadastro de um Usuario
//2.1 - Cenários Positivos

describe('5 - Adiciona um Novo Usuario', function() {
    describe ('POST /Usuarios', () => {

      it('Deve retornar 201 ao criar um Usuario', async function() { 
        //  this.timeout(10000);
          const response = await request(url)
            .post('/usuarios')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("Authorization", token)
            .send({
                    nome: 'SHIBIRUBA',
                    email: `marly${Date.now()}@qa.com.br`,
                    password: 'teste',
                    administrador: 'true'
            })
         console.log('O valor do token é: ' + token);
         console.log('O valor do status é: ' + response.status);
         console.log('O valor do body é: ' + JSON.stringify(response.body));
         id = response.body._id;
         console.log('O valor do id é: ' + id);
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.status).to.equal(201);
         expect(response.body.message).to.equal('Cadastro realizado com sucesso');


         });
    });  
});
/*
describe('2 - List all your collections info', function() {
  describe ('GET /Collections', () => {
     it('Deve retornar 200 ao Listar todas as informações do collections', async function() {
        const response = await request(url)
          .get('')
          .set("Content-Type", "application/json")
          .set("x-api-key", "4f7dfc0d-c810-4189-b0c9-da03bea5c317") 
        expect(response.headers["content-type"]).to.match(/json/);
        expect(response.status).to.equal(200);
        expect(response.body[1].collectionName).to.equal('celular');
        });
   });
});

describe('3 - List all objects in a collection', function() {
  describe ('GET /Collections/TipoProduto/Objetos', () => {
      it('Deve retornar 200 ao Listar todas os objetos de uma collection para um Tipo de Produto', async function() {
        const response = await request(url)
          .get('celular/objects')
          .set("Content-Type", "application/json")
          .set("x-api-key", "4f7dfc0d-c810-4189-b0c9-da03bea5c317") 
        expect(response.headers["content-type"]).to.match(/json/);
        expect(response.status).to.equal(200);
        expect(response.body[2].name).to.equal('Apple MacBook Pro 16');
        });
   });
});

describe('4 - Single Object from a collection', function() {
  describe ('GET /Collections/TipoProduto/Objetos/:id', () => {
      it('Deve retornar 200 ao Listar as informações de um unico objeto de uma collection para um Tipo de Produto', async function() {
        const response = await request(url)
          .get('celular/objects/' + id)
          .set("Content-Type", "application/json")
          .set("x-api-key", "4f7dfc0d-c810-4189-b0c9-da03bea5c317") 
        expect(response.headers["content-type"]).to.match(/json/);
        expect(response.status).to.equal(200);
        expect(response.body.name).to.equal('Apple MacBook Pro 18');
        expect(response.body.data['Hard disk size']).to.equal('1 TB');
        });
   });
});

//Parei aqui, não consegui atualizar o objeto criado no teste 1, por isso utilizei um objeto já existente para os testes 4, 5 e 6.
describe('5 - Update an object', function() {     
  describe ('PUT /Collections/TipoProduto/Objetos/:id', () => {
      it('Deve retornar 200 ao Atualizar um objeto de uma collection para um Tipo de Produto', async function() {
        const response = await request(url)
          .put('celular/objects/' + id)
          .set("Content-Type", "application/json")
          .set("x-api-key", "4f7dfc0d-c810-4189-b0c9-da03bea5c317")
          .send({
                  name: 'Apple MacBook Pro 14',
                  data: {
                  year: 2019,
                  price: 2049.99,
                  'CPU model': 'Intel Core i9',
                  'Hard disk size': '1 TB',
                  'color': 'silver'
                }
          })
        expect(response.status).to.equal(200);
        });
   });  
});

describe('6 - Delete an object', function() {     
  describe ('DELETE /Collections/TipoProduto/Objetos/:id', () => {
      it('Deve retornar 200 ao Deletar um objeto de uma collection para um Tipo de Produto', async function() {
        const response = await request(url)
          .delete('celular/objects/' + id)
          .set("Content-Type", "application/json")
          .set("x-api-key", "4f7dfc0d-c810-4189-b0c9-da03bea5c317")
        expect(response.status).to.equal(200);
        });
   });  
});

});
*/

