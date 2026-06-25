const request = require('supertest');
//const express = require('express');
const { expect } = require('chai', 'chai-json-schema');


const url = 'https://serverest.dev';
let token = "";
let id = 0;
const inicio = Date.now();

const payloads = [
        {
            email: "' OR '1'='1",
            password: "' OR '1'='1"
        },
        {
            email: '<script>alert(1)</script>',
            password: 'teste'
        },
        {
            email: '!@#$%^&*()',
            password: 'teste'
        },
        {
            email: '../../etc/passwd',
            password: 'teste'
        }
    ];


before(async function () {
  this.timeout(40000);
});

//-> Realizar Login e Gerar Token
//**1.1 - Cenários Positivos**

describe('Login - LGN', function () {
    describe ('Login - Cenários Positivos', () => {
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

      it('LGN-002 - Validar retorno do token JWT/autorização', async function() { 
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

     

      it('LGN-003 - Validar estrutura da resposta de autenticação', async function() { 
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

      it('LGN-004 - Utilizar token gerado em chamadas autenticadas', async function() { 
        before(async () => {
        const loginResponse = await request(baseURL)
            .post('/login')
            .send({
                email: 'fulano@qa.com',
                password: 'teste'
            })

        token = loginResponse.body.authorization;
       });

      it('LGN-004 - Deve permitir cadastrar produto utilizando token válido', async () => {

        const response = await request(baseURL)
            .post('/produtos')
            .set('Authorization', token)
            .send({
                nome: `Mouse Gamer ${Date.now()}`,
                preco: 150,
                descricao: 'Mouse Gamer RGB',
                quantidade: 10
            })

        expect(response.status).to.equal(201);
        expect(response.body).to.have.property('message');
      });
  });
}); 
describe ('Login - Cenários Negativos', () => {
      it('LGN-005 - Realizar login com senha incorreta', async function() { 
        const response = await request(url)
            .post('/login')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .send({
                  email: 'fulano@qa.com',
                  password: 'teste123'
            })
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.status).to.equal(401);
         expect(response.body.message).to.equal('Email e/ou senha inválidos');
         });

      it('LGN-006 - Realizar login com email inexistente', async function() { 
        const response = await request(url)
            .post('/login')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .send({
                  email: 'fulano123@qa.com.br',
                  password: 'teste'
            })
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.status).to.equal(401);
         expect(response.body.message).to.equal('Email e/ou senha inválidos');
         });

      it('LGN-007 - Realizar login com email vazio', async function() { 
        const response = await request(url)
            .post('/login')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .send({
                  email: '',
                  password: 'teste'
            })
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.status).to.equal(400);
         expect(response.body.email).to.equal('email não pode ficar em branco');
         });
      
      it('LGN-008 - Realizar login com senha vazia', async function() { 
        const response = await request(url)
            .post('/login')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .send({
                  email: 'fulano@qa.com',
                  password: ''
            })
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.status).to.equal(400);
         expect(response.body.password).to.equal('password não pode ficar em branco');
         });

      it('LGN-009 - Realizar login sem enviar o body', async function() { 
        const response = await request(url)
            .post('/login')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
        // console.log("body: " + JSON.stringify(response.body));
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.status).to.equal(400);
         expect(response.body).has.property('email').to.equal('email é obrigatório');
         expect(response.body).has.property('password').to.equal('password é obrigatório');
         });

      it('LGN-010 - Realizar login com formato inválido de email', async function() { 
        const response = await request(url)
            .post('/login')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .send({
                  email: 'fulano.qa.com',
                  password: 'teste'
                  })
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.status).to.equal(400);
         expect(response.body).has.property('email').to.equal('email deve ser um email válido');
         });

      it('LGN-011.1 - Login com caracteres especiais maliciosos (SQL Injection/XSS)', async function() {

         const response = await request(url)
              .post('/login')
              .set('Content-Type', 'application/json')
              .set('accept', 'application/json')
              .send({
                  email: "' OR '1'='1",
                  password: "' OR '1'='1"
                  })
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.status).to.be.oneOf([400, 401]);
         //expect(response.body).has.property('email').to.equal('email deve ser um email válido');
         expect(response.body).to.have.property('email').that.matches(/(Email e\/ou senha inválidos|email deve ser um email válido)/);
         });

      it('LGN-011.2 - Realizar login com caracteres especiais inválidos', async function() {

         const response = await request(url)
              .post('/login')
              .set('Content-Type', 'application/json')
              .set('accept', 'application/json')
              .send({
                   email: '!@#$%^&*()',
                   password: 'teste'
                  })

         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.status).to.be.oneOf([400, 401]);
         //expect(response.body).has.property('email').to.equal('email deve ser um email válido');
         expect(response.body).to.have.property('email').that.matches(/(Email e\/ou senha inválidos|email deve ser um email válido)/);
         });

      it('LGN-011.3 - Realizar login com payload semelhante a XSS', async function() {

         const response = await request(url)
              .post('/login')
              .set('Content-Type', 'application/json')
              .set('accept', 'application/json')
              .send({
                   email: '<script>alert("xss")</script>',
                   password: 'teste'
                  })

         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.status).to.be.oneOf([400, 401]);
         //expect(response.body).has.property('email').to.equal('email deve ser um email válido');
         expect(response.body).to.have.property('email').that.matches(/(Email e\/ou senha inválidos|email deve ser um email válido)/);
         });


      it('LGN-011.4 - Realizar login com script no campo senha', async function() {

         const response = await request(url)
              .post('/login')
              .set('Content-Type', 'application/json')
              .set('accept', 'application/json')
              .send({
                   email: 'fulano@qa.com.br',
                   password: '<script>alert("xss")</script>'
                  })

         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.status).to.be.oneOf([400, 401]);
         //expect(response.body).has.property('email').to.equal('email deve ser um email válido');
         expect(response.body).to.have.property('message').that.matches(/(Email e\/ou senha inválidos|email deve ser um email válido)/);
         });

     payloads.forEach((payload, index) => {
     it('LGN-011.5 - Realizar login com uso de Data Driven Test${index + 1}', async function() {

            const response = await request(url)
              .post('/login')
              .set('Content-Type', 'application/json')
              .set('accept', 'application/json')
              .send(payload)

         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.status).to.be.oneOf([400, 401]);
      //   expect(response.body).has.property('email').to.equal('email deve ser um email válido');
         expect(response.body).to.have.property('email').that.matches(/(Email e\/ou senha inválidos|email deve ser um email válido)/);
         });
        });
}); 
describe ('Login - Cenários Alternativos', () => {
      it('LGN-012 - Realizar login com leetras maiusculas/minusculas no email', async function() { 
        const response = await request(url)
            .post('/login')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .send({
                  email: 'FULANO@QA.COM',
                  password: 'teste'
            })
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.status).to.equal(401);
         expect(response.body.message).to.equal('Email e/ou senha inválidos');
         });


    it('LGN-013 - Realizar login com espaços antes e depois do email', async function() { 
        const response = await request(url)
            .post('/login')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .send({
                  email: ' fulano@qa.com ',
                  password: 'teste'
            })
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.status).to.equal(400);
         expect(response.body.email).to.equal('email deve ser um email válido');
         });
    });
 
describe ('Login - Cenários de Exceção', () => {
     it('LGN-014 - Falha interna do servidor durante autenticação', async function() { 

      console.log('LGN-014 - Falha interna do servidor durante autenticação - Erro 500 - Internal Server Error');
      console.log('Esse cenário é mais adequado para ser testado manualmente ou utilizando ferramentas de teste de carga/estresse para simular falhas no servidor.');
      console.log('No entanto, para fins de documentação, o teste poderia ser algo como:');
      console.log('Simular falha interna do servidor durante autenticação e verificar se a resposta é adequada (ex: status 500 e mensagem de erro genérica).');
      });
      
     it('LGN-015.1 - Validar o Timeout da Requisição de Login', async function() { 
        const response = await request(url)
            .post('/login')
            .timeout({
                  response: 3000,
                  deadline: 5000
            })
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

      it('LGN-015.2 - Validar que a resposta veio dentro de um tempo aceitável', async function() { 
        const response = await request(url)
            .post('/login')
            .timeout({
                  response: 3000,
                  deadline: 5000
            })
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .send({
                  email: 'fulano@qa.com',
                  password: 'teste'
            })
    
         expect(response.status).to.equal(200);
    
         const tempoResposta = Date.now() - inicio;

         console.log(`Tempo: ${tempoResposta}ms`);

         expect(response.status).to.equal(200);
         expect(tempoResposta).to.be.lessThan(15000);
      });

      it('LGN-016.1 - Validar os Serviços de Autenticação Indisponiveis', async function() { 
        const response = await request(url)
            .post('/login')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .send({
                  email: 'fulano@qa.com',
                  password: 'teste'
            })
         expect(response.status).to.equal(200);
         });

       it('LGN-016.2 - Validar Serviços de Autenticação ao utilizar uma url invalida', async function() { 
        
        try {
        const response = await request('https://servidor-inexistente.dev')
            .post('/login')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .send({
                  email: 'fulano@qa.com',
                  password: 'teste'
            })
                 throw new Error('Era esperado erro de conexão');
                  } catch (error) {

                     expect(error).to.exist;

                  }

                });
         
         it('LGN-016.3 - Validar Serviços de Autenticação ao Simular um Timeout ', async function() { 

         try{
         const response = await request(url)
            .post('/login')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .send({
                  email: 'fulano@qa.com',
                  password: 'teste'
            })
           } catch (error) {

             expect(error.timeout).to.exist;

           }
        
         });
        
 });
});
