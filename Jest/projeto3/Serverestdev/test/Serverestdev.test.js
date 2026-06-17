const request = require('supertest');
//const express = require('express');
const { expect } = require('chai');

const url = 'https://serverest.dev';
let token = "";
let id = 0;

before(async function () {
  this.timeout(10000);
});

describe('1 - Gera um token', function () {
    describe ('POST /Login', () => {
      it('Deve retornar 200 ao criar um Login e gerar um Token', async function() { 
        const response = await request(url)
            .post('/login')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .send({
                  email: 'fulano@qa.com',
                  password: 'teste'
            })
         token = response.body.authorization;
         console.log('O valor do token é: ' + token);
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.status).to.equal(200);
         expect(response.body.message).to.equal('Login realizado com sucesso');

         });
    });    


describe('2 - Adiciona um Novo Usuario', function() {
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


*/
});
