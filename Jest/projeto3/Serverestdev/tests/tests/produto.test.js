const request = require('supertest');
//const express = require('express');
const { expect } = require('chai', 'chai-json-schema');

const url = 'https://serverest.dev';
let token = "";
let id_usuario = 0;
let id_produto = 0;
let _iemail = "";

before(async function () {
  this.timeout(40000);
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
            id_usuario = response.body._id;
            console.log('O valor do id é: ' + id_usuario);
         expect(response.status).to.equal(201);
         expect(response.body).to.have.property('_id');
        });
      
      it.skip('PRD-001 - Cadastrar produto válido', async function() { 
        const response = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    preco: 470,
                    descricao: 'Mouse',
                    quantidade: 381
            })
            expect(response.status).to.equal(201);
            expect(response.body).to.have.property('_id');
            expect(response.body.message).to.equal('Cadastro realizado com sucesso');

        });
      it.skip('PRD-002 - Cadastrar produto com estoque zero', async function() { 
        const response = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    preco: 470,
                    descricao: 'Mouse',
                    quantidade: 0
            })
            expect(response.status).to.equal(201);
            expect(response.body).to.have.property('_id');
            expect(response.body.message).to.equal('Cadastro realizado com sucesso');

        });
      it.skip('PRD-003 - Cadastrar produto com quantidade bem alta', async function() { 
        const response = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    preco: 47000000999990888880,
                    descricao: 'Mouse',
                    quantidade: 381
            })
            id_produto = response.body._id;
            //console.log('O valor do id é: ' + id_produto);
            expect(response.status).to.equal(400);
            expect(response.body.preco).to.equal('preco não pode ser maior que 9007199254740991');

        });
      it('PRD-004 - Validar geração do ID do produto', async function() { 
        const response = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    preco: 470,
                    descricao: 'Mouse',
                    quantidade: 381
            })
            id_produto = response.body._id;
            console.log('O valor do id é: ' + id_produto);
            expect(response.status).to.equal(201);
            expect(response.body).to.have.property('_id');
            expect(response.body.message).to.equal('Cadastro realizado com sucesso');

        });
    });     
   describe ('Consulta de Produto(s)', () => {
      it.skip('PRD-005 - Listar produtos', async function() { 
         const resposta = await request(url)
            .get('/produtos')
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")
            
         expect(resposta.headers["content-type"]).to.match(/json/);
         expect(resposta.status).to.equal(200);
         expect(resposta.body).to.have.property('quantidade');
         expect(resposta.body).to.have.property('produtos');


         //console.log(produto.nome);
         //expect(resposta.body.produtos.find((p) => p._id === id_produto)).to.exist;
         //ou
         const produto = resposta.body.produtos.find((p) => p._id === id_produto);
         expect(produto.descricao).to.equal('Mouse');
         expect(produto.preco).to.equal(470);
         expect(produto.quantidade).to.equal(381);

      });
      it.skip('PRD-006 - Buscar produto por ID Válido', async function() { 
        console.log("id_produto é: "+id_produto); 
        const resposta = await request(url)
            .get(`/produtos/${id_produto}`)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")
         
         expect(resposta.headers["content-type"]).to.match(/json/);
         expect(resposta.status).to.equal(200);
         expect(resposta.body).to.have.property('nome');
         expect(resposta.body).to.have.property('preco');
         expect(resposta.body).to.have.property('descricao');
         expect(resposta.body).to.have.property('quantidade');
         expect(resposta.body).to.have.property('_id');


      });
       it.skip('PRD-007 - Filtrar por preço', async function() { 
         const resposta = await request(url)
            .get(`/produtos/?preco=470`)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")
            
         expect(resposta.headers["content-type"]).to.match(/json/);
         expect(resposta.status).to.equal(200);
         expect(resposta.body).to.have.property('quantidade');
         expect(resposta.body).to.have.property('produtos');
         expect(resposta.body.produtos[0]).to.have.property('nome');
         expect(resposta.body.produtos[0]).to.have.property('preco');
         expect(resposta.body.produtos[0]).to.have.property('descricao');
         expect(resposta.body.produtos[0]).to.have.property('quantidade');

         expect(resposta.body.produtos[0]).to.have.property('nome').equal('Logitech MX Vertical');
         expect(resposta.body.produtos[0]).to.have.property('preco').equal(470);
         expect(resposta.body.produtos[0]).to.have.property('descricao').equal('Mouse');
         expect(resposta.body.produtos[0]).to.have.property('quantidade').equal(382);
           
      });

       it.skip('PRD-008 - Filtrar por quantidade', async function() { 
         const resposta = await request(url)
            .get(`/produtos/?quantidade=382`)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")
            
         expect(resposta.headers["content-type"]).to.match(/json/);
         expect(resposta.status).to.equal(200);
         expect(resposta.body).to.have.property('quantidade');
         expect(resposta.body).to.have.property('produtos');
         expect(resposta.body.produtos[0]).to.have.property('nome');
         expect(resposta.body.produtos[0]).to.have.property('preco');
         expect(resposta.body.produtos[0]).to.have.property('descricao');
         expect(resposta.body.produtos[0]).to.have.property('quantidade');

         expect(resposta.body.produtos[0]).to.have.property('nome').equal('Logitech MX Vertical');
         expect(resposta.body.produtos[0]).to.have.property('preco').equal(470);
         expect(resposta.body.produtos[0]).to.have.property('descricao').equal('Mouse');
         expect(resposta.body.produtos[0]).to.have.property('quantidade').equal(382);
           
      });
   });
   describe ('Alteração de Produto(s)', () => {
      it('PRD-009 - Alterar Nome do Produto', async function() { 
         const resposta = await request(url)
            .put(`/produtos/${id_produto}`)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")
            .set("authorization", token)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    preco: 57000000,
                    descricao: 'Mouse',
                    quantidade: 170
            }) 
         expect(resposta.headers["content-type"]).to.match(/json/);
         expect(resposta.status).to.equal(200);
         expect(resposta.body.message).to.equal('Registro alterado com sucesso');

      });
});
  });

  describe('Produto - Cenários Negativos', () => {
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
});
});
