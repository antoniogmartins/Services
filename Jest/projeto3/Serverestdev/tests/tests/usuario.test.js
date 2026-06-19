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

describe('Realizar Login', function () {
    describe ('POST /Login - Cenarios Positivos', () => {
      it('LGN-001 - Validar retorno do token JWT/autorização', async function() { 

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

      it('USR-001 - Cadastrar usuário administrador', async function() { 
        const response = await request(url)
            .post('/usuarios')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                     nome: 'João Mendes',
                     email: `usuario${Date.now()}y@qa.com.br`,
                     password: 'teste',
                     administrador: 'true'
            })
         expect(response.status).to.equal(201);
        
         // Validação da estrutura
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.body).to.have.property('message');
         expect(response.body).to.have.property('_id');
         expect(response.body).to.have.all.keys(['message', '_id']);
         expect(response.body).to.have.property('message').equal('Cadastro realizado com sucesso');
        });

      it('USR-002 - Cadastrar usuário comum', async function() { 
        const response = await request(url)
            .post('/usuarios')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                     nome: 'João Mendes',
                     email: `usuario${Date.now()}y@qa.com.br`,
                     password: 'teste',
                     administrador: 'false'
            })
            expect(response.status).to.equal(201);
        
         // Validação da estrutura
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.body).to.have.property('message');
         expect(response.body).to.have.property('_id');
         expect(response.body).to.have.all.keys(['message', '_id']);
         expect(response.body).to.have.property('message').equal('Cadastro realizado com sucesso');
        });
     
      it('USR-003 - Cadastrar usuário com dados válidos', async function() { 
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
         expect(response.status).to.equal(201);
        
         // Validação da estrutura
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.body).to.have.property('message');
         expect(response.body).to.have.property('_id');
         expect(response.body).to.have.all.keys(['message', '_id']);
         expect(response.body).to.have.property('message').equal('Cadastro realizado com sucesso');
        });

      it('USR-004 - Validar geração do ID do usuario', async function() { 
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
            id= response.body._id;
            console.log('O valor do id é: ' + id);
         expect(response.status).to.equal(201);
         expect(response.body).to.have.property('_id');
        });

      it('USR-005.1 - Validar persistência dos dados cadastrados', async function() { 

        const email = `Maria${Date.now()}y@qa.com.br`;

        const response = await request(url)
            .post('/usuarios')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                     nome: 'Maria Delfina',
                     email: email,
                     password: 'teste',
                     administrador: 'false'
            })

         expect(response.status).to.equal(201);
         expect(response.body).to.have.property('_id');

         const responseConsulta = await request(url)
            .get(`/usuarios/${id}`)
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token);
             
            console.log("body: " + JSON.stringify(responseConsulta.body));
        
            expect(responseConsulta.status).to.equal(200);
         expect(responseConsulta.body).to.have.property('nome').equal('Maria Delfina');
        // expect(responseConsulta.body).to.have.property('email').equal(email);
         expect(responseConsulta.body).to.have.property('password').equal('teste');
         expect(responseConsulta.body).to.have.property('administrador').equal('false');
         expect(responseConsulta.body).to.deep.include({
                         nome: 'Maria Delfina',
                      //   email: email,
                         administrador: 'false'
                         });
        });












































    });
});


/*
it('LGN-001 - Realizar login com email e senha válidos', async function() { 
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
*/
