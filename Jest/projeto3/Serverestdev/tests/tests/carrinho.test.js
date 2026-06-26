const request = require('supertest');
//const express = require('express');
const { expect } = require('chai', 'chai-json-schema');

const url = 'https://serverest.dev';
let token = "";
let id_usuario = 0;
let id_produto = 0;
let id_produto_plus = 0;
let _iemail = "";

before(async function () {
  this.timeout(40000);
});

//-> Realizar Login e Gerar Token
//**1.1 - Cenários Positivos**

describe('Carrinho - CAR', function () {
  describe('Carrinho - Cenários Positivos', () => {
    describe ('Adicionar produto ao Carrinho de Compras', () => {
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

      it('PRD-000 - Validar geração do ID do produto', async function() { 
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
      
      it.skip('CAR-001 - Adicionar produto ao carrinho', async function() { 
        
        await request(url)
            .del('/carrinhos/concluir-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
        
        const resposta = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    preco: 470,
                    descricao: 'Mouse',
                    quantidade: 381
                 });
            id_produto = resposta.body._id;

        const response = await request(url)
            .post('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                     produtos: [{
                         idProduto: `${id_produto}`,
                         quantidade: 1
                 }]
                });    

         expect(response.status).to.equal(201);
         expect(response.body.message).to.equal('Cadastro realizado com sucesso');
         expect(response.body).to.have.property('_id');
        });
 
      it.skip('CAR-002 - Adicionar multiplos produtos ao carrinho', async function() { 
        
        await request(url)
            .del('/carrinhos/concluir-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
        
        const resposta = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    preco: 100,
                    descricao: 'Mouse',
                    quantidade: 301
                 });
            id_produto = resposta.body._id;

        const outraresposta = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    preco: 200,
                    descricao: 'Teclado',
                    quantidade: 400
                 });
            id_produto_plus = outraresposta.body._id;

        const response = await request(url)
            .post('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                     produtos: [
                {
                         idProduto: `${id_produto}`,
                         quantidade: 1
                },
                {
                         idProduto: `${id_produto_plus}`,
                         quantidade: 1
                }
                              ]
                });    

         expect(response.status).to.equal(201);
         expect(response.body.message).to.equal('Cadastro realizado com sucesso');
         expect(response.body).to.have.property('_id');
        });

      it.skip('CAR-003 - Adicionar produto com quantidade disponivel ao carrinho', async function() { 
        
        await request(url)
            .del('/carrinhos/concluir-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
        
        const resposta = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    preco: 100,
                    descricao: 'MousePad',
                    quantidade: 2
                 });
            id_produto = resposta.body._id;

       const response = await request(url)
            .post('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                     produtos: [
                {
                         idProduto: `${id_produto}`,
                         quantidade: 1
                }
                              ]
                });    

         expect(response.status).to.equal(201);
         expect(response.body.message).to.equal('Cadastro realizado com sucesso');
         expect(response.body).to.have.property('_id');
        });

      it.skip('CAR-004 - Validar cálculo do valor total do carrinho', async function() { 
        
        await request(url)
            .del('/carrinhos/concluir-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
        
        const adicionarproduto1 = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    preco: 100,
                    descricao: 'Mouse',
                    quantidade: 301
                 });
            id_produto = adicionarproduto1.body._id;

        const adicionarproduto2 = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    preco: 200,
                    descricao: 'Teclado',
                    quantidade: 400
                 });
            id_produto_plus = adicionarproduto2.body._id;

        const adicionarprodutoaocarrinho = await request(url)
            .post('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                     produtos: [
                {
                         idProduto: `${id_produto}`,
                         quantidade: 1
                },
                {
                         idProduto: `${id_produto_plus}`,
                         quantidade: 1
                }
                              ]
                });    

         expect(adicionarprodutoaocarrinho.status).to.equal(201);
         expect(adicionarprodutoaocarrinho.body.message).to.equal('Cadastro realizado com sucesso');
         expect(adicionarprodutoaocarrinho.body).to.have.property('_id');

        const consultarprodutonocarrinho = await request(url)
            .get('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)

         //console.log(consultarprodutonocarrinho.body);
         expect(consultarprodutonocarrinho.status).to.equal(200);
         
           const carrinhos = consultarprodutonocarrinho.body.carrinhos[0];
           const somaQuantidades = carrinhos.produtos.reduce(
                (total, produto) => {return total + produto.quantidade;}, 0);

         expect(carrinhos.quantidadeTotal).to.equal(somaQuantidades);

         console.log(carrinhos.quantidadeTotal);
         console.log(somaQuantidades);
        
        });

        it.skip('CAR-005 - Validar cálculo do valor total do carrinho', async function() { 
        
        await request(url)
            .del('/carrinhos/concluir-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
        
        const adicionarproduto1 = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    preco: 100,
                    descricao: 'Mouse',
                    quantidade: 301
                 });
            id_produto = adicionarproduto1.body._id;

        const adicionarproduto2 = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    preco: 200,
                    descricao: 'Teclado',
                    quantidade: 400
                 });
            id_produto_plus = adicionarproduto2.body._id;

        const adicionarprodutoaocarrinho = await request(url)
            .post('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                     produtos: [
                {
                         idProduto: `${id_produto}`,
                         quantidade: 1
                },
                {
                         idProduto: `${id_produto_plus}`,
                         quantidade: 1
                }
                              ]
                });    

         expect(adicionarprodutoaocarrinho.status).to.equal(201);
         expect(adicionarprodutoaocarrinho.body.message).to.equal('Cadastro realizado com sucesso');
         expect(adicionarprodutoaocarrinho.body).to.have.property('_id');

        const consultarprodutonocarrinho = await request(url)
            .get('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)

         //console.log(consultarprodutonocarrinho.body);
         expect(consultarprodutonocarrinho.status).to.equal(200);
         
           const carrinhos = consultarprodutonocarrinho.body.carrinhos[0];
           const somaPrecoTotal = carrinhos.produtos.reduce(
                (total, produto) => {return total + (produto.quantidade * produto.precoUnitario);}, 0);

         expect(carrinhos.precoTotal).to.equal(somaPrecoTotal);

         //console.log(carrinhos.precoTotal);
         //console.log(somaPrecoTotal);
         
        });

      });
    });
});
 
