const request = require('supertest');
//const express = require('express');
const { expect } = require('chai', 'chai-json-schema');

const url = 'https://serverest.dev';
let token = "";
let id = 0;
let _iemail = "";

before(async function () {
  this.timeout(20000);
});

//-> Realizar Login e Gerar Token
//**1.1 - Cenários Positivos**

describe('Produto - PRD', function () {
  describe('Produto - Cenários Positivos', () => {
    describe ('Cadastro de Produto(s)', () => {
      it('USR-000 - Validar retorno do token JWT/autorização', async function() { 

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
         expect(response.body.message).to.equal('Login realizado com sucesso');
         token = response.body.authorization;
         console.log('O valor do token é: ' + token);
         });

      it('USR-000 - Validar geração do ID do usuario', async function() { 
        const response = await request(url)
            .post('/usuarios')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                     nome: 'Maria Delfina',
                     email: `Maria${Date.now()}y@qa.com.br`,
                     password: 'teste',
                     administrador: 'false'
            })
            id = response.body._id;
            console.log('O valor do id é: ' + id);
         expect(response.status).to.equal(201);
         expect(response.body).to.have.property('_id');
        });
    });
});
});