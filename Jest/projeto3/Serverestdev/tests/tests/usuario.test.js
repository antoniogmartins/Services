const request = require('supertest');
//const express = require('express');
const { expect } = require('chai', 'chai-json-schema');

const url = 'https://serverest.dev';
let token = "";
let id = 0;

before(async function () {
  this.timeout(20000);
});

//-> Realizar Login e Gerar Token
//**1.1 - Cenários Positivos**

describe('Cadastrar Usuario', function () {
    describe ('Usuario - Cenarios Positivos', () => {
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
            id = response.body._id;
            console.log('O valor do id é: ' + id);
         expect(response.status).to.equal(201);
         expect(response.body).to.have.property('_id');
        });
 

      it('USR-005 - Validar persistência dos dados cadastrados', async function() { 

        const email = `Maria${Date.now()}y@qa.com.br`;

        await request(url)
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

         const responseConsulta = await request(url)
            .get(`/usuarios/${id}`)
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token);
             
            //console.log("body: " + JSON.stringify(responseConsulta.body));
        
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

      it('USR-006 - Listar usuários cadastrados', async function() { 
        const response = await request(url)
            .get('/usuarios')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")

          
         expect(response.status).to.equal(200);
        
         // Validação da estrutura
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.body).to.have.property('quantidade');
         expect(response.body).to.have.property('usuarios');
         expect(response.body.usuarios[0]).to.have.property('_id');
         
         expect(response.body.usuarios).to.be.an('array');
         expect(response.body.usuarios.length).to.be.greaterThan(0);
         
         response.body.usuarios.forEach(usuario => {
         expect(usuario).to.have.all.keys([
               '_id',
               'nome',
               'email',
               'password',
                'administrador'
        ]);

        expect(usuario.nome).to.be.a('string');
        expect(usuario.email).to.be.a('string');
        expect(usuario.password).to.be.a('string');
        expect(usuario.administrador).to.be.oneOf(['true', 'false']);
        });
    });

     it('USR-007 - Buscar usuário por ID válido', async function() { 
        const response = await request(url)
            .get('/usuarios/'+id)
            .set("Content-Type", "application/json")
            .set("accept", "application/json")

          
         expect(response.status).to.equal(200);
        
         // Validação da estrutura
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.body).to.have.property('nome');
         expect(response.body).to.have.property('email');
         expect(response.body).to.have.property('password');
         expect(response.body).to.have.property('administrador');
         expect(response.body).to.have.property('_id');
         expect(response.body).to.have.property('_id').equal(id);
        
    });

    it('USR-008.1 - Validar filtros de listagem, montando a url', async function() { 
        const response = await request(url)
            .get('/usuarios?email=Maria1781872995314y@qa.com.br')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")

         
         expect(response.status).to.equal(200);
        
         // Validação da estrutura
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.body).to.have.property('quantidade');
         expect(response.body).to.have.property('usuarios');
         expect(response.body.usuarios[0]).to.have.property('nome');
         expect(response.body.usuarios[0]).to.have.property('email');
         expect(response.body.usuarios[0]).to.have.property('password');
         expect(response.body.usuarios[0]).to.have.property('administrador');
         expect(response.body.usuarios[0]).to.have.property('_id');

         
         expect(response.body.usuarios).to.be.an('array');
         expect(response.body.usuarios.length).to.be.greaterThan(0);
        
     });

    it('USR-008.2 - Validar filtros de listagem, usando query', async function() { 
        const response = await request(url)
            .get('/usuarios')
            .query({ email: 'fulano@qa.com' })
            .set("Content-Type", "application/json")
            .set("accept", "application/json")

         expect(response.status).to.equal(200);
        
         // Validação da estrutura
         expect(response.headers["content-type"]).to.match(/json/);
         
         
         expect(response.body.usuarios).to.be.an('array');
         expect(response.body.usuarios.length).to.be.greaterThan(0);

         response.body.usuarios.forEach(usuario => {
         expect(usuario.email).to.equal('fulano@qa.com');
         });
        
     });

     it('USR-008.3 - Validar filtro por email do usuário criado', async function() { 
        
        const email = `Maria${Date.now()}y@qa.com.br`;

        await request(url)
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

        const response = await request(url)
            .get('/usuarios')
            .query({ nome: 'Maria Delfina' })
            .set("Content-Type", "application/json")
            .set("accept", "application/json")

         expect(response.status).to.equal(200);
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.body.usuarios).to.be.an('array');
         expect(response.body.usuarios.length).to.be.greaterThan(0);
         expect(response.body.usuarios[0].nome).to.equal('Maria Delfina');
  
        
     });




































});
}); 

describe ('Usuario - Cenarios Negativos', () => {

      it.skip('USR-000 - Em andamento', async function() { 
        const response = await request(url)
            .get('/usuarios/'+id)
            .set("Content-Type", "application/json")
            .set("accept", "application/json")

         console.log("body: " + JSON.stringify(response.body));   
         expect(response.status).to.equal(200);
        

       }); 
});

describe ('Usuario - Cenarios Alternativos', () => {

      it.skip('USR-000 - Em andamento', async function() { 
        const response = await request(url)
            .get('/usuarios/'+id)
            .set("Content-Type", "application/json")
            .set("accept", "application/json")

         console.log("body: " + JSON.stringify(response.body));   
         expect(response.status).to.equal(200);
      });        
}); 

describe ('Usuario - Cenarios Exceção', () => {

      it.skip('USR-000 - Em andamento', async function() { 
        const response = await request(url)
            .get('/usuarios/'+id)
            .set("Content-Type", "application/json")
            .set("accept", "application/json")

         console.log("body: " + JSON.stringify(response.body));   
         expect(response.status).to.equal(200);
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
