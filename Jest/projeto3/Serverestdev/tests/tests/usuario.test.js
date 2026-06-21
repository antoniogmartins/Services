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

describe('Usuário - USU', function () {
  describe('Usuário - Cenarios Positivos', () => {
    describe ('Cadastro de Usuário(s)', () => {
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

      it.skip('USR-001 - Cadastrar usuário administrador', async function() { 
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

      it.skip('USR-002 - Cadastrar usuário comum', async function() { 
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
     
      it.skip('USR-003 - Cadastrar usuário com dados válidos', async function() { 
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
 

      it.skip('USR-005 - Validar persistência dos dados cadastrados', async function() { 

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
      });


describe ('Consulta de Usuário(s)', () => {

      it.skip('USR-006 - Listar usuários cadastrados', async function() { 
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

     it.skip('USR-007 - Buscar usuário por ID válido', async function() { 
        console.log('O valor do id é: ' + id);
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

    it.skip('USR-008.1 - Validar filtros de listagem, montando a url', async function() { 
        const response = await request(url)
            .get('/usuarios?email=marl8y@qa.com.br')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")

            expect(response.status).to.equal(200);
        
         // Validação da estrutura
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.body).to.have.property('quantidade');
         expect(response.body).to.have.property('usuarios');
         expect(response.body.usuarios).to.be.an('array');
      // expect(response.body.usuarios.length).to.be.greaterThan(0);
         expect(response.body.usuarios[0]).to.have.property('nome').equal('SHIBIRUBA');
         expect(response.body.usuarios[0]).to.have.property('email').equal('marl8y@qa.com.br');
         expect(response.body.usuarios[0]).to.have.property('password').equal('teste');
         expect(response.body.usuarios[0]).to.have.property('administrador').equal('true');
         expect(response.body.usuarios[0]).to.have.property('_id');
     });

    it.skip('USR-008.2 - Validar filtros de listagem, usando query', async function() { 
        const response = await request(url)
            .get('/usuarios')
            .query({ email: 'fulano@qa.com' })
            .set("Content-Type", "application/json")
            .set("accept", "application/json")

         expect(response.status).to.equal(200);
        
         // Validação da estrutura
         expect(response.headers["content-type"]).to.match(/json/);
         
         
         expect(response.body.usuarios).to.be.an('array');
      //   expect(response.body.usuarios.length).to.be.greaterThan(0);

         response.body.usuarios.forEach(usuario => {
         expect(usuario.email).to.equal('fulano@qa.com');
         });
        
     });

    it.skip('USR-008.3 - Validar filtro de listagem pelo nome do usuário criado', async function() { 
        
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
  

describe ('Alteração de Usuário(s)', () => {

      it.skip('USR-009 - Alterar somente o nome de um usuario cadastrado', async function() { 
        const response = await request(url)
            .put(`/usuarios/${id}`)
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .send({
                     nome: 'João Mendes'
            })

        console.log(id);
         expect(response.status).to.equal(400);
        
         // Validação da estrutura
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.body).to.have.property('email').equal('email é obrigatório');
         expect(response.body).to.have.property('password').equal('password é obrigatório');
         expect(response.body).to.have.property('administrador').equal('administrador é obrigatório');
      });
  

     it.skip('USR-010 - Alterar somente o ema ilde um usuario cadastrado', async function() { 
        const response = await request(url)
            .put(`/usuarios/${id}`)
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .send({
                     email: 'beltran11o@qa.com.br'
            })

        console.log(id);
         expect(response.status).to.equal(400);
        
         // Validação da estrutura
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.body).to.have.property('nome').equal('nome é obrigatório');
         expect(response.body).to.have.property('password').equal('password é obrigatório');
         expect(response.body).to.have.property('administrador').equal('administrador é obrigatório');
      });

      it.skip('USR-011 - Alterar somente o perfil de administrador', async function() { 
        const response = await request(url)
            .put(`/usuarios/${id}`)
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .send({
                     administrador: true
            })

        console.log(id);
         expect(response.status).to.equal(400);
        
         // Validação da estrutura
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.body).to.have.property('nome').equal('nome é obrigatório');
         expect(response.body).to.have.property('email').equal('email é obrigatório');
         expect(response.body).to.have.property('password').equal('password é obrigatório');

      });
      
      it.skip('USR-012 - Alterar somente o perfil de administrador', async function() { 
        const response = await request(url)
            .put(`/usuarios/${id}`)
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .send({
                     nome: 'Maria Delfina',
                     email: `Maria${Date.now()}y@qa.com.br`,
                     password: 'teste',
                     administrador: 'false'
            })

        console.log(id);
         expect(response.status).to.equal(200);
        
         // Validação da estrutura
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.body).to.have.property('message').equal('Registro alterado com sucesso');

      });
    });

describe ('Exclusão de Usuário(s)', () => {

      it.skip('USR-013 - Excluir usuário existente', async function() { 
        const response = await request(url)
            .del(`/usuarios/${id}`)
            .set("Content-Type", "application/json")
            .set("accept", "application/json")

        console.log(id);
         expect(response.status).to.equal(200);
        
         // Validação da estrutura
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.body).to.have.property('message').equal('Registro excluído com sucesso');
      });
  

     it.skip('USR-014 - Validar remoção após exclusão', async function() { 
        const response = await request(url)
            .get(`/usuarios/${id}`)
            .set("Content-Type", "application/json")
            .set("accept", "application/json")

        console.log(id);
         expect(response.status).to.equal(400);
        
         // Validação da estrutura
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.body).to.have.property('message').equal('Usuário não encontrado');
      });

      it.skip('USR-015 - Validar retentativa de Excluir um usuário ja deletado', async function() { 
        const response = await request(url)
            .del(`/usuarios/${id}`)
            .set("Content-Type", "application/json")
            .set("accept", "application/json")

        console.log(id);
         expect(response.status).to.equal(200);
        
         // Validação da estrutura
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.body).to.have.property('message').equal('Nenhum registro excluído');
      });
    });
}); 

describe ('Usuário - Cenarios Negativos', () => {
    describe ('Cadastro de Usuário(s)', () => {
      it.skip('USR-016 - Cadastrar usuário sem nome', async function() { 
        const response = await request(url)
            .post('/usuarios')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                     email: `Maria${Date.now()}y@qa.com.br`,
                     password: 'teste',
                     administrador: 'false'
            })
         expect(response.status).to.equal(400);
        
         // Validação da estrutura
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.body).to.have.property('nome').equal('nome é obrigatório');
        });

      it.skip('USR-017 - Cadastrar usuário sem email', async function() { 
        const response = await request(url)
            .post('/usuarios')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                     nome: 'Maria Delfina',
                     password: 'teste',
                     administrador: 'false'
            })
         expect(response.status).to.equal(400);
        
         // Validação da estrutura
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.body).to.have.property('email').equal('email é obrigatório');
        });

      it.skip('USR-018 - Cadastrar usuário sem senha', async function() { 
        const response = await request(url)
            .post('/usuarios')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                     nome: 'Maria Delfina',
                     email: `Maria${Date.now()}y@qa.com.br`,
                     administrador: 'false'
            })
         expect(response.status).to.equal(400);
        
         // Validação da estrutura
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.body).to.have.property('password').equal('password é obrigatório');
        });

        it.skip('USR-019 - Cadastrar usuário com email duplicado ', async function() { 
        await request(url)
            .post('/usuarios')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                     nome: 'Maria Delfina',
                     email: `MariaDelfina@qa.com.br`,
                     password: 'teste',
                     administrador: 'false'
            })


         const response = await request(url)
            .post('/usuarios')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                     nome: 'Maria Delfina',
                     email: `MariaDelfina@qa.com.br`,
                     password: 'teste',
                     administrador: 'false'
            })
         expect(response.status).to.equal(400);
        
         // Validação da estrutura
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.body).to.have.property('message').equal('Este email já está sendo usado');
        });
        
        it.skip('USR-020 - Cadastrar usuário com email inválido', async function() { 
        const response = await request(url)
            .post('/usuarios')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                     nome: 'Maria Delfina',
                     email: `@qa.com.br`,
                     password: 'teste',
                     administrador: 'false'
            })
         expect(response.status).to.equal(400);
        
         // Validação da estrutura
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.body).to.have.property('email').equal('email deve ser um email válido');
        });

        it.skip('USR-021 - Cadastrar usuário sem token', async function() { 
        const response = await request(url)
            .post('/usuarios')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .send({
                     nome: 'Marta Josefina',
                     email: `marta${Date.now()}@qa.com.br`,
                     password: 'teste',
                     administrador: 'false'
            })
         expect(response.status).to.equal(201);
        
         // Validação da estrutura
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.body).to.have.property('message').equal('Cadastro realizado com sucesso');
        });

        it.skip('USR-022 - Cadastrar usuário com token invalido', async function() { 
        const response = await request(url)
            .post('/usuarios')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token+1)
            .send({
                     nome: 'Marta Josefina',
                     email: `marta${Date.now()}@qa.com.br`,
                     password: 'teste',
                     administrador: 'false'
            })
         expect(response.status).to.equal(201);
        
         // Validação da estrutura
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.body).to.have.property('message').equal('Cadastro realizado com sucesso');
        });

        it.skip('USR-023 - Cadastrar usuário com campos nulos', async function() { 
        const response = await request(url)
            .post('/usuarios')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token+1)
            .send({
                     nome: '',
                     email: ``,
                     password: '',
                     administrador: ''
            })
         expect(response.status).to.equal(400);
        
         // Validação da estrutura
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.body).to.have.property('nome').equal('nome não pode ficar em branco');
         expect(response.body).to.have.property('email').equal('email não pode ficar em branco');
         expect(response.body).to.have.property('password').equal('password não pode ficar em branco');
         expect(response.body).to.have.property('administrador').equal("administrador deve ser 'true' ou 'false'");
          
        });

    });

     describe ('Consulta de Usuário(s)', () => {
      it('USR-024 - Buscar usuário inexistente', async function() { 
        const response = await request(url)
            .get('/usuarios/'+"59wmGEOtnHWqWwKA")
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
         expect(response.status).to.equal(400);
        
         // Validação da estrutura
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.body).to.have.property('message').equal('Usuário não encontrado');
        });
      });   
});





    













describe ('Usuário - Cenarios Alternativos', () => {

      it.skip('USR-000 - Em andamento', async function() { 
        const response = await request(url)
            .get('/usuarios/'+id)
            .set("Content-Type", "application/json")
            .set("accept", "application/json")

         console.log("body: " + JSON.stringify(response.body));   
         expect(response.status).to.equal(200);
      });        
}); 

describe ('Usuário - Cenarios Exceção', () => {

      it.skip('USR-000 - Em andamento', async function() { 
        const response = await request(url)
            .get('/usuarios/'+id)
            .set("Content-Type", "application/json")
            .set("accept", "application/json")

         console.log("body: " + JSON.stringify(response.body));   
         expect(response.status).to.equal(200);
       }); 
    });
  });




/*
 it.skip('USR-012 - Alterar somente o perfil de administrador', async function() { 
        const response = await request(url)
            .put(`/usuarios/${id}`)
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .send({
                     nome: 'Maria Delfina',
                     email: `Maria${Date.now()}y@qa.com.br`,
                     password: 'teste',
                     administrador: 'false'
            })

        console.log(id);
         expect(response.status).to.equal(200);
        
         // Validação da estrutura
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.body).to.have.property('message').equal('Registro alterado com sucesso');
*/
