const request = require('supertest');
//const express = require('express');
const { expect } = require('chai', 'chai-json-schema');

const url = 'https://serverest.dev';
let token1 = "";
let token2 = "";
let payloadusuario = '';
let id_usuario = 0;
let id_produto = 0;
let id_produto_plus = 0;
let id_carrinho = 0;
let qtdeprodutoantes = 0;
let qtdeprodutoaposadicionaraocarrinho = 0;
let qtdeprodutodepois = 0;
let consultarcarrinho = '';

let _iemail = "";

before(async function () {
  this.timeout(40000);
});

//-> Realizar Login e Gerar token1
//**1.1 - Cenários Positivos**

describe('Carrinho - CAR', function () {
  describe('Carrinho - Cenários Positivos', () => {
    describe ('Adicionar produto ao Carrinho de Compras', () => {
      it('USR-000 - Validar retorno do token1 JWT/autorização', async function() { 
        const resposta1 = await request(url)
            .post('/login')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .send({
                  email: 'fulano@qa.com',
                  password: 'teste'
            })
         expect(resposta1.headers["content-type"]).to.match(/json/);
         expect(resposta1.status).to.equal(200);
         expect(resposta1.body).to.have.property('authorization');
         expect(resposta1.body.message).to.equal('Login realizado com sucesso');
         token1 = resposta1.body.authorization;
         console.log('O valor do token1 é: ' + token1);
     });

      it('USR-000 - Cadastrar usuário2 como administrador', async function() { 

         payloadusuario = {
               nome: 'Fulana',
               email: `usuario${Date.now()}@qa.com.br`,
               password: 'teste',
               administrador: 'true'
              };



        const response = await request(url)
            .post('/usuarios')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .send(payloadusuario)
            expect(response.status).to.equal(201);
                 
                  // Validação da estrutura
            expect(response.headers["content-type"]).to.match(/json/);
            expect(response.body).to.have.property('message');
            expect(response.body).to.have.property('_id');
            expect(response.body).to.have.all.keys(['message', '_id']);
            console.log('Email: '+ payloadusuario.email);
            expect(response.body).to.have.property('message').equal('Cadastro realizado com sucesso');
        });

 
      it('USR-000 - Validar retorno do token2 do usuario 2 JWT/autorização', async function() { 
        const resposta2 = await request(url)
            .post('/login')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .send({
                  email: payloadusuario.email,
                  password: 'teste'
            })
         expect(resposta2.headers["content-type"]).to.match(/json/);
         expect(resposta2.status).to.equal(200);
         expect(resposta2.body).to.have.property('authorization');
         expect(resposta2.body.message).to.equal('Login realizado com sucesso');
         token2 = resposta2.body.authorization;
         console.log('O valor do token2 é: ' + token2);
         });

      it('PRD-000 - Validar geração do ID do produto', async function() { 
        const response = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
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

//**4.1.1 - Adicionar produto ao Carrinho de compras**

      it('CAR-001 - Adicionar produto ao carrinho', async function() { 
        
        await request(url)
            .del('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
        
        const resposta = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
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
            .set("authorization", token1)
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
 
      it('CAR-002 - Adicionar multiplos produtos ao carrinho', async function() { 
        
        await request(url)
            .del('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
        
        const resposta = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
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
            .set("authorization", token1)
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
            .set("authorization", token1)
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

      it('CAR-003 - Adicionar produto com quantidade disponivel ao carrinho', async function() { 
        
        await request(url)
            .del('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
        
        const resposta = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
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
            .set("authorization", token1)
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

      it('CAR-004 - Validar cálculo do valor total do carrinho', async function() { 
        
        await request(url)
            .del('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
        
        const adicionarproduto1 = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
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
            .set("authorization", token1)
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
            .set("authorization", token1)
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
            .set("authorization", token1)

         //console.log(consultarprodutonocarrinho.body);
         expect(consultarprodutonocarrinho.status).to.equal(200);
         
           const carrinhos = consultarprodutonocarrinho.body.carrinhos[0];
           const somaQuantidades = carrinhos.produtos.reduce(
                (total, produto) => {return total + produto.quantidade;}, 0, 0);

        // console.log(carrinhos.quantidadeTotal);
        // console.log(somaQuantidades);
               
         expect(carrinhos.quantidadeTotal).to.equal(somaQuantidades);

        });

      it('CAR-005 - Validar cálculo do valor total do carrinho', async function() { 
        
        await request(url)
            .del('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
        
        const adicionarproduto1 = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
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
            .set("authorization", token1)
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
            .set("authorization", token1)
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
            .set("authorization", token1)

         //console.log(consultarprodutonocarrinho.body);
         expect(consultarprodutonocarrinho.status).to.equal(200);
         
           const carrinhos = consultarprodutonocarrinho.body.carrinhos[0];
           const somaPrecoTotal = carrinhos.produtos.reduce(
                (total, produto) => {return total + (produto.quantidade * produto.precoUnitario);}, 0);

         //console.log(carrinhos.precoTotal);
         //console.log(somaPrecoTotal);

         expect(carrinhos.precoTotal).to.equal(somaPrecoTotal);
        });
    });

//**4.1.2 - Consultar Carrinho de compras**
    describe ('Consultar Carrinho de compras', () => {
  
      it('CAR-006 - Listar carrinhos', async function() { 
        
            let consultarcarrinho = await request(url)
            .get('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
         
       
         expect(consultarcarrinho.status).to.equal(200);
         
         if (consultarcarrinho.body.quantidade > 0){

            await request(url)
            .delete('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
 
             }    // 
        else {
        
             expect(consultarcarrinho.body.quantidade).to.equal(0);
             expect(consultarcarrinho.body.carrinhos).to.be.an('array').that.is.empty;
            // console.log('Quantidade de Produtos no carinho (Inicio): '+consultarcarrinho.body.quantidade);    
            // console.log('Quantidade de Carrinhos (Inicio): '+consultarcarrinho.body.carrinhos.length);    

         } 

        const adicionarproduto = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    preco: 100,
                    descricao: 'Mouse',
                    quantidade: 301
                 });
            id_produto = adicionarproduto.body._id;

        console.log('Produto criado: '+id_produto);    

        const adicionarprodutoaocarrinho = await request(url)
            .post('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
            .send({
                     produtos: [
                {
                         idProduto: `${id_produto}`,
                         quantidade: 1
                }
                              ]
                });        
            
              id_carrinho= adicionarprodutoaocarrinho.body._id;
        
         console.log('Produto adicionado ao carrinho: '+id_carrinho);

         consultarcarrinho = await request(url)
            .get('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
        
         const carrinhos = consultarcarrinho.body.carrinhos[0];

         console.log('Consultando produto adicionado ao carrinho: '+carrinhos._id);
         
         expect(carrinhos._id).to.equal(id_carrinho);
         expect(carrinhos.produtos[0].quantidade).to.equal(1);
         expect(carrinhos.produtos[0].precoUnitario).to.equal(100);

        //ou

         const produto = carrinhos.produtos.find((p) => p.idProduto === id_produto);
         expect(produto.idProduto).to.equal(id_produto);
         expect(produto.quantidade).to.equal(1);
         expect(produto.precoUnitario).to.equal(100);
            
         
        });

      it('CAR-007 - Buscar carrinho por Id Válido', async function() { 
        
          let consultarcarrinho = await request(url)
            .get('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
         
       
         expect(consultarcarrinho.status).to.equal(200);
         
         if (consultarcarrinho.body.quantidade > 0){

            await request(url)
            .delete('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
 
             }    // 
        else {
        
             expect(consultarcarrinho.body.quantidade).to.equal(0);
             expect(consultarcarrinho.body.carrinhos).to.be.an('array').that.is.empty;
            // console.log('Quantidade de Produtos no carinho (Inicio): '+consultarcarrinho.body.quantidade);    
            // console.log('Quantidade de Carrinhos (Inicio): '+consultarcarrinho.body.carrinhos.length);    

         } 

        const adicionarproduto = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    preco: 100,
                    descricao: 'Mouse',
                    quantidade: 301
                 });
            id_produto = adicionarproduto.body._id;

        console.log('Produto criado: '+id_produto);    

        const adicionarprodutoaocarrinho = await request(url)
            .post('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
            .send({
                     produtos: [
                {
                         idProduto: `${id_produto}`,
                         quantidade: 1
                }
                              ]
                });        
            
              id_carrinho= adicionarprodutoaocarrinho.body._id;
        
         console.log('Produto adicionado ao carrinho: '+id_carrinho);

         consultarcarrinho = await request(url)
            .get(`/carrinhos/${id_carrinho}`)
            //ou
            //.get(`/carrinhos`)
            //.query(`${id_carrinho}`)
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
        
//            const carrinhos = consultarcarrinho.body;
             const carrinhos = consultarcarrinho.body;

         console.log('Consultando produto adicionado ao carrinho: '+carrinhos._id);
         
         expect(carrinhos._id).to.equal(id_carrinho);
         expect(carrinhos.produtos[0].quantidade).to.equal(1);
         expect(carrinhos.produtos[0].precoUnitario).to.equal(100);

        //ou

         const produto = carrinhos.produtos.find((p) => p.idProduto === id_produto);
         expect(produto.idProduto).to.equal(id_produto);
         expect(produto.quantidade).to.equal(1);
         expect(produto.precoUnitario).to.equal(100);
             
         
        });

      it('CAR-008 - Buscar carrinho por Preco Total', async function() { 
        
          let consultarcarrinho = await request(url)
            .get('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
         
       
         expect(consultarcarrinho.status).to.equal(200);
         
         if (consultarcarrinho.body.quantidade > 0){

            await request(url)
            .delete('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
 
             }    // 
        else {
        
             expect(consultarcarrinho.body.quantidade).to.equal(0);
             expect(consultarcarrinho.body.carrinhos).to.be.an('array').that.is.empty;
            // console.log('Quantidade de Produtos no carinho (Inicio): '+consultarcarrinho.body.quantidade);    
            // console.log('Quantidade de Carrinhos (Inicio): '+consultarcarrinho.body.carrinhos.length);    

         } 

        const adicionarproduto = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    preco: 6180,
                    descricao: 'Mouse',
                    quantidade: 301
                 });
            id_produto = adicionarproduto.body._id;

        console.log('Produto criado: '+id_produto);    

        const adicionarprodutoaocarrinho = await request(url)
            .post('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
            .send({
                     produtos: [
                {
                         idProduto: `${id_produto}`,
                         quantidade: 1
                }
                              ]
                });        
            
              id_carrinho= adicionarprodutoaocarrinho.body._id;
        
         console.log('Produto adicionado ao carrinho: '+id_carrinho);

         consultarcarrinho = await request(url)
            .get('/carrinhos')
            .query({ precoTotal: 6180 })
            //ou
            //.get(`/carrinhos?precoTotal=6180`)
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
        
            const carrinhos = consultarcarrinho.body.carrinhos[0];

         console.log('Consultando produto adicionado ao carrinho: '+carrinhos._id);
         
         expect(carrinhos._id).to.equal(id_carrinho);
         expect(carrinhos.produtos[0].quantidade).to.equal(1);
         expect(carrinhos.produtos[0].precoUnitario).to.equal(6180);

        //ou

         const produto = carrinhos.produtos.find((p) => p.idProduto === id_produto);
         expect(produto.idProduto).to.equal(id_produto);
         expect(produto.quantidade).to.equal(1);
         expect(produto.precoUnitario).to.equal(6180);
  
        });

     it('CAR-009 - Buscar carrinho por Quantidade Total', async function() { 
        
         let consultarcarrinho = await request(url)
            .get('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
         
       
         expect(consultarcarrinho.status).to.equal(200);
         
         if (consultarcarrinho.body.quantidade > 0){

            await request(url)
            .delete('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
 
             }    // 
        else {
        
             expect(consultarcarrinho.body.quantidade).to.equal(0);
             expect(consultarcarrinho.body.carrinhos).to.be.an('array').that.is.empty;
            // console.log('Quantidade de Produtos no carinho (Inicio): '+consultarcarrinho.body.quantidade);    
            // console.log('Quantidade de Carrinhos (Inicio): '+consultarcarrinho.body.carrinhos.length);    

         } 

        const cadastrarproduto = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    preco: 6180,
                    descricao: 'Mouse',
                    quantidade: 301
                 });
            id_produto = cadastrarproduto.body._id;

        console.log('Produto criado: '+id_produto);    

        const adicionarprodutoaocarrinho = await request(url)
            .post('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
            .send({
                     produtos: [
                {
                         idProduto: `${id_produto}`,
                         quantidade: 1
                }
                              ]
                });        
            
              id_carrinho= adicionarprodutoaocarrinho.body._id;
        
         console.log('Produto adicionado ao carrinho: '+id_carrinho);

          consultarcarrinho = await request(url)
            .get('/carrinhos')
            .query({ quantidadeTotal: 1 })
            //ou
            //.get(`/carrinhos?precoTotal=6180`)
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
        
         const carrinhos = consultarcarrinho.body.carrinhos[0];

         console.log('Consultando produto adicionado ao carrinho: '+carrinhos._id);
         
         expect(carrinhos._id).to.equal(id_carrinho);
         expect(carrinhos.produtos[0].quantidade).to.equal(1);
         expect(carrinhos.produtos[0].precoUnitario).to.equal(6180);

        //ou

         const produto = carrinhos.produtos.find((p) => p.idProduto === id_produto);
         expect(produto.idProduto).to.equal(id_produto);
         expect(produto.quantidade).to.equal(1);
         expect(produto.precoUnitario).to.equal(6180);
                 
        });
    });
//**4.1.3 - Concluir Compra e Atualizar Estoque**
    describe ('Concluir Compra e Atualizar Estoque', () => {
 
    it('CAR-010 - Concluir Compra com sucesso', async function() { 
        
        const consultarcarrinho = await request(url)
            .get('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
         
       
         expect(consultarcarrinho.status).to.equal(200);
         
         if (consultarcarrinho.body.quantidade > 0){

            await request(url)
            .delete('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
 
             }    // 
        else {
        
             expect(consultarcarrinho.body.quantidade).to.equal(0);
             expect(consultarcarrinho.body.carrinhos).to.be.an('array').that.is.empty;
            // console.log('Quantidade de Produtos no carinho (Inicio): '+consultarcarrinho.body.quantidade);    
            // console.log('Quantidade de Carrinhos (Inicio): '+consultarcarrinho.body.carrinhos.length);    

         } 

        const cadastrarproduto = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    preco: 6180,
                    descricao: 'Mouse',
                    quantidade: 301
                 });
            id_produto = cadastrarproduto.body._id;

        console.log('Produto criado: '+id_produto);    

        const adicionarprodutoaocarrinho = await request(url)
            .post('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
            .send({
                     produtos: [
                {
                         idProduto: `${id_produto}`,
                         quantidade: 1
                }
                              ]
                });        
            
         const carrinhos = adicionarprodutoaocarrinho.body;
         id_carrinho= carrinhos._id;
        
         console.log('Produto adicionado ao carrinho: '+id_carrinho);
         expect(carrinhos.message).to.equal('Cadastro realizado com sucesso');
         
         const concluircompra = await request(url)
            .del('/carrinhos/concluir-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)

        const comprado = concluircompra.body;
          
        expect(comprado.message).to.equal('Registro excluído com sucesso');
          
              
        });    


    it('CAR-011 - Atualizar Estoque após compra', async function() { 
        
        const consultarcarrinho = await request(url)
            .get('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
         
       
         expect(consultarcarrinho.status).to.equal(200);
         
         if (consultarcarrinho.body.quantidade > 0){

            await request(url)
            .delete('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
 
             }    // 
        else {
        
             expect(consultarcarrinho.body.quantidade).to.equal(0);
             expect(consultarcarrinho.body.carrinhos).to.be.an('array').that.is.empty;
             console.log('Quantidade de Produtos no carinho (Inicio): '+consultarcarrinho.body.quantidade);    
             console.log('Quantidade de Carrinhos (Inicio): '+consultarcarrinho.body.carrinhos.length);    

         } 

        const cadastrarproduto = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    preco: 6180,
                    descricao: 'Mouse',
                    quantidade: 100
                 });
            id_produto = cadastrarproduto.body._id;
            console.log('Produto criado: '+id_produto);    

        const consultarprodutocadastradoantes = await request(url)
            .get(`/produtos/${id_produto}`)     
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)

            qtdeprodutoantes = consultarprodutocadastradoantes.body.quantidade;
            console.log('Qtde de Produtos (Antes de adicionar ao carrinho): ' + qtdeprodutoantes);   

        const adicionarprodutoaocarrinho = await request(url)
            .post('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
            .send({
                     produtos: [
                {
                         idProduto: `${id_produto}`,
                         quantidade: 99
                }
                              ]
                });        
            
        const carrinhos = adicionarprodutoaocarrinho.body;
         id_carrinho= carrinhos._id;
        
         console.log('Produto adicionado ao carrinho: '+id_carrinho);
         expect(carrinhos.message).to.equal('Cadastro realizado com sucesso');

        const consultarprodutocadastradoaposadicionaraocarrinho = await request(url)
            .get(`/produtos/${id_produto}`)     
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)

            qtdeprodutoaposadicionaraocarrinho = consultarprodutocadastradoaposadicionaraocarrinho.body.quantidade;
            console.log('Qtde de Produtos (Após adicionar ao carrinho): ' + qtdeprodutoaposadicionaraocarrinho);   
         
        const concluircompra = await request(url)
            .del('/carrinhos/concluir-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)

        const conclusaodacompra = concluircompra.body;
          
        expect(conclusaodacompra.message).to.equal('Registro excluído com sucesso');
          
        const consultarprodutoadicionadodepois = await request(url)
            .get(`/produtos/${id_produto}`)   
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)

            qtdeprodutodepois = consultarprodutoadicionadodepois.body.quantidade;
            console.log('Qtde de Produtos (Depois de adicionar ao carrinho e cancelar a compra): ' + qtdeprodutodepois);   

            //Comparando estoque antigo ao atual: Estoque foi atualizado com o cancelamento da compra
            expect(qtdeprodutodepois).to.equal(qtdeprodutoaposadicionaraocarrinho);
           
        });    
    });
    describe('Cancelar Compra e Atualizar Estoque', () => {
// **4.1.4 - Cancelar Compra e Atualizar Estoque**

    it('CAR-012 - Cancelar compra', async function() { 
        
        const consultarcarrinho = await request(url)
            .get('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
         
       
         expect(consultarcarrinho.status).to.equal(200);
         
         if (consultarcarrinho.body.quantidade > 0){

            await request(url)
            .delete('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
 
             }    // 
        else {
        
             expect(consultarcarrinho.body.quantidade).to.equal(0);
             expect(consultarcarrinho.body.carrinhos).to.be.an('array').that.is.empty;
             console.log('Quantidade de Produtos no carinho (Inicio): '+consultarcarrinho.body.quantidade);    
             console.log('Quantidade de Carrinhos (Inicio): '+consultarcarrinho.body.carrinhos.length);    

         } 

        const cadastrarproduto = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    preco: 6180,
                    descricao: 'Mouse',
                    quantidade: 100
                 });
            id_produto = cadastrarproduto.body._id;
            console.log('Produto criado: '+id_produto);    

        const consultarprodutocadastradoantes = await request(url)
            .get(`/produtos/${id_produto}`)     
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)

            qtdeprodutoantes = consultarprodutocadastradoantes.body.quantidade;
            console.log('Qtde de Produtos (Antes de adicionar ao carrinho): ' + qtdeprodutoantes);   

        const adicionarprodutoaocarrinho = await request(url)
            .post('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
            .send({
                     produtos: [
                {
                         idProduto: `${id_produto}`,
                         quantidade: 99
                }
                              ]
                });        
            
        const carrinhos = adicionarprodutoaocarrinho.body;
         id_carrinho= carrinhos._id;
        
         console.log('Produto adicionado ao carrinho: '+id_carrinho);
         expect(carrinhos.message).to.equal('Cadastro realizado com sucesso');
         
        const cancelarcompra = await request(url)
            .del('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)

        const cancelado = cancelarcompra.body;
          
        expect(cancelado.message).to.equal('Registro excluído com sucesso. Estoque dos produtos reabastecido');

        const consultarprodutodepoisdecanceladocompra = await request(url)
            .get(`/produtos/${id_produto}`)     
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)

            qtdeprodutodepois = consultarprodutodepoisdecanceladocompra.body.quantidade;
            console.log('Qtde de Produtos (Depois de cancelar compra): ' + qtdeprodutodepois);   

            //Comparando estoque antigo ao atual: Estoque foi atualizado com o cancelamento da compra
            expect(qtdeprodutoantes).to.equal(qtdeprodutodepois);
           
        });

   it('CAR-013 - Devolver Estoque ao Cancelar', async function() { 
        
        const consultarcarrinho = await request(url)
            .get('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
         
       
         expect(consultarcarrinho.status).to.equal(200);
         
         if (consultarcarrinho.body.quantidade > 0){

            await request(url)
            .delete('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
 
             }    // 
        else {
        
             expect(consultarcarrinho.body.quantidade).to.equal(0);
             expect(consultarcarrinho.body.carrinhos).to.be.an('array').that.is.empty;
             console.log('Quantidade de Produtos no carinho (Inicio): '+consultarcarrinho.body.quantidade);    
             console.log('Quantidade de Carrinhos (Inicio): '+consultarcarrinho.body.carrinhos.length);    

         } 

        const cadastrarproduto = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    preco: 6180,
                    descricao: 'Mouse',
                    quantidade: 100
                 });
            id_produto = cadastrarproduto.body._id;
            console.log('Produto criado: '+id_produto);    

        const consultarprodutocadastradoantes = await request(url)
            .get(`/produtos/${id_produto}`)     
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)

            qtdeprodutoantes = consultarprodutocadastradoantes.body.quantidade;
            console.log('Qtde de Produtos (Antes de adicionar ao carrinho): ' + qtdeprodutoantes);   

        const adicionarprodutoaocarrinho = await request(url)
            .post('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
            .send({
                     produtos: [
                {
                         idProduto: `${id_produto}`,
                         quantidade: 99
                }
                              ]
                });        
            
        const carrinhos = adicionarprodutoaocarrinho.body;
         id_carrinho= carrinhos._id;
        
         console.log('Produto adicionado ao carrinho: '+id_carrinho);
         expect(carrinhos.message).to.equal('Cadastro realizado com sucesso');
         
        const cancelarcompra = await request(url)
            .del('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)

        const cancelado = cancelarcompra.body;
          
        expect(cancelado.message).to.equal('Registro excluído com sucesso. Estoque dos produtos reabastecido');
          
        const consultarprodutoadicionadodepois = await request(url)
            .get(`/produtos/${id_produto}`)   
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)

            qtdeprodutodepois = consultarprodutoadicionadodepois.body.quantidade;
            console.log('Qtde de Produtos (Depois de adicionar ao carrinho e cancelar a compra): ' + qtdeprodutodepois);   

            //Comparando estoque antigo ao atual: Estoque foi atualizado com o cancelamento da compra
            expect(qtdeprodutoantes).to.equal(qtdeprodutodepois);
        });   
});
  });

describe('Carrinho - Cenários Negativos', () => {
      it('CAR-014 - Adicionar no carrinho um Produto inexistente', async function() { 
          
        await request(url)
            .del('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
        
        id_produto = '11111112221212';

        const response = await request(url)
            .post('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
            .send({
                     produtos: [{
                         idProduto: `${id_produto}`,
                         quantidade: 1
                 }]
                });    

         expect(response.status).to.equal(400);
         expect(response.body.message).to.equal('Produto não encontrado');
 
       });

      it('CAR-015 - Adicionar no carrinho um produto com a quantidade superior ao estoque', async function() { 
        
        await request(url)
            .del('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
        
        const payloadproduto = ({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    preco: 100,
                    descricao: 'MousePad',
                    quantidade: 2
                 });
          
        const resposta = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
            .send(payloadproduto);
            id_produto = resposta.body._id;


       const payloadcarrinho = ({
                     produtos: [
                {
                         idProduto: `${id_produto}`,
                         quantidade: 3
                }
                              ]
                });    
            
       const response = await request(url)
            .post('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
            .send(payloadcarrinho);  

         expect(response.status).to.equal(400);
         expect(response.body.message).to.equal('Produto não possui quantidade suficiente');
         expect(response.body.item).to.have.property('idProduto');
         expect(response.body.quantidade).to.equal(payloadcarrinho.quantidade);
        
        });
       
      it('CAR-016 - Adicionar no carrinho um produto ao carrinho sem token1', async function() { 
        
        await request(url)
            .del('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
        
        const payloadproduto = ({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    preco: 100,
                    descricao: 'MousePad',
                    quantidade: 2
                 });
          
        const resposta = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
            .send(payloadproduto);
            id_produto = resposta.body._id;


        const payloadcarrinho = ({
                     produtos: [
                {
                         idProduto: `${id_produto}`,
                         quantidade: 3
                }
                              ]
                });    
            
        const response = await request(url)
            .post('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .send(payloadcarrinho);  

         expect(response.status).to.equal(401);
         expect(response.body.message).to.equal('token1 de acesso ausente, inválido, expirado ou usuário do token1 não existe mais');
         
        });

      it('CAR-017 - Adicionar carrinho vazio', async function() { 
        
        await request(url)
            .del('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
        
        const payloadcarrinho = ({
                     produtos: []
                });    
            
        const response = await request(url)
            .post('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
            .send(payloadcarrinho);  

         expect(response.status).to.equal(400);
         console.log(response.body.message);
         expect(response.body.produtos).to.equal('produtos não contém 1 valor obrigatório');
         
        });
     
     it('CAR-018 - Buscar carrinho inexistente', async function() { 

        id_carrinho = 2222222222222222;

        const consultarcarrinho = await request(url)
            .get(`/carrinhos/${id_carrinho}`)
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
        
            expect(consultarcarrinho.status).to.equal(400);
            const carrinhos = consultarcarrinho.body;
             
            expect(carrinhos.message).to.equal('Carrinho não encontrado');
     });
    
     it('CAR-019 - Concluir compra sem carrinho ativo', async function() { 

         await request(url)
            .del('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)


         const concluircompra = await request(url)
            .del('/carrinhos/concluir-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
      
            expect(concluircompra.status).to.equal(400);
            const carrinhos = concluircompra.body;
             
            expect(carrinhos.message).to.equal('Não foi encontrado carrinho para esse usuário');
     });
    
     it('CAR-020 - Cancelar compra sem carrinho ativo', async function() { 

         await request(url)
            .del('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)


         const concluircompra = await request(url)
            .del('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
      
            expect(concluircompra.status).to.equal(400);
            const carrinhos = concluircompra.body;
             
            expect(carrinhos.message).to.equal('Não foi encontrado carrinho para esse usuário');
     });
    
     it('CAR-021 - Concluir compra com estoque insuficiente ', async function() { 
        
        const consultarcarrinho = await request(url)
            .get('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
         
       
         expect(consultarcarrinho.status).to.equal(200);
         
         if (consultarcarrinho.body.quantidade > 0){

            await request(url)
            .delete('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
 
             }    // 
        else {
        
             expect(consultarcarrinho.body.quantidade).to.equal(0);
             expect(consultarcarrinho.body.carrinhos).to.be.an('array').that.is.empty;
            // console.log('Quantidade de Produtos no carinho (Inicio): '+consultarcarrinho.body.quantidade);    
            // console.log('Quantidade de Carrinhos (Inicio): '+consultarcarrinho.body.carrinhos.length);    

         } 

        const cadastrarproduto = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    preco: 6180,
                    descricao: 'Mouse',
                    quantidade: 100
                 });
            id_produto = cadastrarproduto.body._id;
            expect(cadastrarproduto.status).to.equal(201);

        console.log('Produto criado: '+id_produto);    

        const adicionarprodutoaocarrinho = await request(url)
            .post('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
            .send({
                     produtos: [
                {
                         idProduto: `${id_produto}`,
                         quantidade: 101
                }
                              ]
                });        
            
         expect(adicionarprodutoaocarrinho.status).to.equal(400);       
         expect(adicionarprodutoaocarrinho.body.message).to.equal('Produto não possui quantidade suficiente');
         
         const concluircompra = await request(url)
            .del('/carrinhos/concluir-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)

        const comprado = concluircompra.body;
        expect(concluircompra.status).to.equal(400);  
        expect(comprado.message).to.equal('Não foi encontrado carrinho para esse usuário');
          
              
        });  
    
});
describe('Carrinho - Cenários Alternativos', () => {
      it('CAR-022 - Adicionar no carrinho o mesmo produto mais de uma vez', async function() { 
    
      const consultarcarrinho = await request(url)
            .get('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
         
         expect(consultarcarrinho.status).to.equal(200);
         
         if (consultarcarrinho.body.quantidade > 0){

            await request(url)
            .delete('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
 
             }    // 
        else {
        
             expect(consultarcarrinho.body.quantidade).to.equal(0);
             expect(consultarcarrinho.body.carrinhos).to.be.an('array').that.is.empty;
            // console.log('Quantidade de Produtos no carinho (Inicio): '+consultarcarrinho.body.quantidade);    
            // console.log('Quantidade de Carrinhos (Inicio): '+consultarcarrinho.body.carrinhos.length);    

         } 

        const cadastrarproduto = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    preco: 6180,
                    descricao: 'Mouse',
                    quantidade: 100
                 });
            id_produto = cadastrarproduto.body._id;
            expect(cadastrarproduto.status).to.equal(201);

        console.log('Produto criado: '+id_produto);    

        const adicionarprodutoaocarrinho = await request(url)
            .post('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
            .send({
                     produtos: [
                {
                         idProduto: `${id_produto}`,
                         quantidade: 100
                },//adiciono o mesmo produto 2 vezes
                {
                         idProduto: `${id_produto}`,
                         quantidade: 100
                }
                              ]
                });        
            
         expect(adicionarprodutoaocarrinho.status).to.equal(400);       
         expect(adicionarprodutoaocarrinho.body.message).to.equal('Não é permitido possuir produto duplicado');
         expect(adicionarprodutoaocarrinho.body.idProdutosDuplicados[0]).to.equal(`${id_produto}`);
         
         const concluircompra = await request(url)
            .del('/carrinhos/concluir-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)

        const comprado = concluircompra.body;
        expect(concluircompra.status).to.equal(400);  
        expect(comprado.message).to.equal('Não foi encontrado carrinho para esse usuário');
    });

     it('CAR-023 - Adicionar produto no carrinho com quantidade igual ao estoque', async function() { 
    
      const consultarcarrinho = await request(url)
            .get('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
         
         expect(consultarcarrinho.status).to.equal(200);
         
         if (consultarcarrinho.body.quantidade > 0){

            await request(url)
            .delete('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
 
             }    // 
        else {
        
             expect(consultarcarrinho.body.quantidade).to.equal(0);
             expect(consultarcarrinho.body.carrinhos).to.be.an('array').that.is.empty;
            // console.log('Quantidade de Produtos no carinho (Inicio): '+consultarcarrinho.body.quantidade);    
            // console.log('Quantidade de Carrinhos (Inicio): '+consultarcarrinho.body.carrinhos.length);    

         } 

        const cadastrarproduto = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    preco: 6180,
                    descricao: 'Mouse',
                    quantidade: 100
                 });
            id_produto = cadastrarproduto.body._id;
            expect(cadastrarproduto.status).to.equal(201);

        console.log('Produto criado: '+id_produto);    

        const adicionarprodutoaocarrinho = await request(url)
            .post('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
            .send({
                     produtos: [
                {
                         idProduto: `${id_produto}`,
                         quantidade: 100
                }
                              ]
                });        
            
         expect(adicionarprodutoaocarrinho.status).to.equal(201);       
         expect(adicionarprodutoaocarrinho.body.message).to.equal('Cadastro realizado com sucesso');
         
         const concluircompra = await request(url)
            .del('/carrinhos/concluir-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)

        const comprado = concluircompra.body;
        
        expect(concluircompra.status).to.equal(200);
        expect(comprado.message).to.equal('Registro excluído com sucesso');
    });

     it('CAR-024.1 - Comprar todos os itens disponíveis', async function() { 
    
      const consultarcarrinho = await request(url)
            .get('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
         
         expect(consultarcarrinho.status).to.equal(200);
         
         if (consultarcarrinho.body.quantidade = 0){

             expect(consultarcarrinho.body.quantidade).to.equal(0);
             expect(consultarcarrinho.body.carrinhos).to.be.an('array').that.is.empty;
            // console.log('Quantidade de Produtos no carinho (Inicio): '+consultarcarrinho.body.quantidade);    
            // console.log('Quantidade de Carrinhos (Inicio): '+consultarcarrinho.body.carrinhos.length);    

         const produtos = [

         {
             key: `Notebook`,
             nome: `Notebook${Date.now()}`,
             preco: 3500,
             descricao: "Notebook",
             quantidade: 8
         },

         {
             key: `Mouse`,
             nome: `Mouse${Date.now()}`,
             preco: 80,
             descricao: "Mouse",
             quantidade: 20
         },

         {
             key: `Monitor`,
             nome: `Monitor${Date.now()}`,
             preco: 1200,
             descricao: "Monitor",
             quantidade: 5
          }
         ];

             //const idsProdutos = {};
             const produtosCriados = {};

             for (const produto of produtos) {

             const {key, ...bodyProduto} = produto;

             const cadastrarproduto = await request(url)
             .post('/produtos')
             .set("Content-Type", "application/json")
             .set("accept", "application/json")
             .set('authorization', token1)
             .send(bodyProduto);

             
               // idsProdutos[produto.nome] = response.body._id; 

                   produtosCriados[produto.key] = {
                   id: cadastrarproduto.body._id, 
                   nome: bodyProduto.nome,
                   descricao: bodyProduto.descricao,
                   preco: bodyProduto.preco,
                   quantidade: bodyProduto.quantidade
                };

                console.log(JSON.stringify(cadastrarproduto.body, null, 2));
                //id_produto = cadastrarproduto.body._id;
                expect(cadastrarproduto.status).to.equal(201);
               // console.log('Produto criado: '+id_produto);    

             }

             const idProdutoNotebook = produtosCriados.Notebook.id;
             const idProdutoMouse = produtosCriados.Mouse.id;
             const idProdutoMonitor = produtosCriados.Monitor.id;
        
             const QtdeNotebook = produtosCriados.Notebook.quantidade;
             const QtdeMouse = produtosCriados.Mouse.quantidade;
             const QtdeMonitor = produtosCriados.Monitor.quantidade;
            
             console.log('O id do notebook é: '+idProdutoNotebook) ;
             console.log('A quantidade do notebook é: '+QtdeNotebook) ;
             //console.log('o id do mouse é: '+idMouse) ;
             //console.log('o id do monitor é: '+idMonitor) ;

            const adicionarprodutoaocarrinho = await request(url)
            .post('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
            .send({
                     produtos: [
                          {
                              idProduto: `${idProdutoNotebook}`,
                              quantidade: QtdeNotebook
                          }

                              ]
                });    

             console.log(
                         'body: ',
                          JSON.stringify(adicionarprodutoaocarrinho.body, null, 2)
                    );  
            expect(adicionarprodutoaocarrinho.status).to.equal(201);       
            expect(adicionarprodutoaocarrinho.body.message).to.equal('Cadastro realizado com sucesso');

         }  else  {

          /*  const concluircompra = await request(url)
            .del('/carrinhos/concluir-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
          */
             const response = await request(url)
                 .get('/produtos')
                 .set("Content-Type", "application/json")
                 .set("accept", "application/json")
                 .set("authorization", token1);

             const produtos = response.body;
             const listadeprodutos = produtos.produtos;

             if (produtos.quantidade > 0) {
                const bodyCarrinho = {
                  produtos: listadeprodutos.map(produto => ({
                      idProduto: produto._id,
                      quantidade: produto.quantidade
                                  }))
             };
           

             const adicionarprodutoaocarrinho = await request(url)
            .post('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token1)
            .send(bodyCarrinho);    

            console.log(adicionarprodutoaocarrinho.body);
            expect(adicionarprodutoaocarrinho.body.message).to.equal('Não é permitido ter mais de 1 carrinho');

             }

 
            }
    });

     it('CAR-024.2 - Comprar todos os itens disponíveis (refinado)', async function() { 
    
             const concluircompra = await request(url)
                 .del('/carrinhos/concluir-compra')
                 .set("Content-Type", "application/json")
                 .set("accept", "application/json")
                 .set("authorization", token1)
       
             const cancelarcompra = await request(url)
                 .del('/carrinhos/cancelar-compra')
                 .set("Content-Type", "application/json")
                 .set("accept", "application/json")
                 .set("authorization", token1)

              const produtos = [

         {
             nome: `Notebook${Date.now()}`,
             preco: 3500,
             descricao: "Notebook",
             quantidade: 8
         },

         {
             nome: `Mouse${Date.now()}`,
             preco: 80,
             descricao: "Mouse",
             quantidade: 20
         },

         {
             nome: `Monitor${Date.now()}`,
             preco: 1200,
             descricao: "Monitor",
             quantidade: 5
          }
         ];    

         const produtosComId = [];

         for (const produto of produtos) {
         const cadastrarproduto = await request(url)
             .post('/produtos')
             .set("Content-Type", "application/json")
             .set("accept", "application/json")
             .set('authorization', token1)
             .send(produto);
                 
         //   console.log(cadastrarproduto.status);
         //   console.log(cadastrarproduto.body);

        //    console.log('Cadastrando Produtos: ',JSON.stringify(cadastrarproduto.body, null, 2));

          //   console.log(produtos[0]);
              produtosComId.push({
                  idProduto: cadastrarproduto.body._id,
                  quantidade: produto.quantidade
              });
            }
            
         //   console.log('Montando o body de produtos com Id: ',JSON.stringify(produtosComId, null, 2));

             const bodyCarrinho = {
                  produtos: produtosComId
                  };
             
       //    console.log('Listagem de Produtos a serem inseridos no carrinho: ',JSON.stringify(bodyCarrinho, null, 2));
 
             const adicionarprodutoaocarrinho = await request(url)
               .post('/carrinhos')
               .set("Content-Type", "application/json")
               .set("accept", "application/json")
               .set("authorization", token1)
               .send(bodyCarrinho);  

      //      console.log('Adicionando Produtos ao Carrinho: ',JSON.stringify(adicionarprodutoaocarrinho.body, null, 2));
            expect(adicionarprodutoaocarrinho.body.message).to.equal('Cadastro realizado com sucesso');
            console.log('Id do Carrinho gerado:', adicionarprodutoaocarrinho.body._id);
});

    it('CAR-025 - Carrinho contendo apenas um item', async function() { 
    
         const concluircompra = await request(url)
                 .del('/carrinhos/concluir-compra')
                 .set("Content-Type", "application/json")
                 .set("accept", "application/json")
                 .set("authorization", token1)

         const produto =       {
                                   nome: `Notebook${Date.now()}`,
                                   preco: 3500,
                                   descricao: 'Notebook',
                                   quantidade: 8
                                };    

         const cadastrarproduto = await request(url)
             .post('/produtos')
             .set("Content-Type", "application/json")
             .set("accept", "application/json")
             .set('authorization', token1)
             .send(produto);
                 
       //     console.log('Cadastrando Produtos: ',JSON.stringify(cadastrarproduto.body, null, 2));
            expect(cadastrarproduto.status).to.equal(201);

             const bodyCarrinho = {
                produtos:[
                 {
                      idProduto: cadastrarproduto.body._id,
                      quantidade: produto.quantidade
                  }
                ]
               };
             
          //  console.log('Listagem de Produtos a serem inseridos no carrinho: ',JSON.stringify(bodyCarrinho, null, 2));
 
             const adicionarprodutoaocarrinho = await request(url)
                 .post('/carrinhos')
                 .set("Content-Type", "application/json")
                 .set("accept", "application/json")
                 .set("authorization", token1)
                 .send(bodyCarrinho);  

         //   console.log('Adicionando Produtos ao Carrinho: ',JSON.stringify(adicionarprodutoaocarrinho.body, null, 2));
            expect(adicionarprodutoaocarrinho.body.message).to.equal('Cadastro realizado com sucesso');
        //    console.log('Id do Carrinho gerado:', adicionarprodutoaocarrinho.body._id);
});



});

describe('Carrinho - Cenários De Exceção', () => {
      it('CAR-026.1 - Falha ao debitar estoque - Qtde maior que o estoque', async function() { 

         const cancelarcompra = await request(url)
                 .del('/carrinhos/cancelar-compra')
                 .set("Content-Type", "application/json")
                 .set("accept", "application/json")
                 .set("authorization", token1)
    
         const produto =       {
                                   nome: `Notebook${Date.now()}`,
                                   preco: 3500,
                                   descricao: 'Notebook',
                                   quantidade: 2
                                };    

         const cadastrarproduto = await request(url)
             .post('/produtos')
             .set("Content-Type", "application/json")
             .set("accept", "application/json")
             .set('authorization', token1)
             .send(produto);
                 
       //     console.log('Cadastrando Produtos: ',JSON.stringify(cadastrarproduto.body, null, 2));
            expect(cadastrarproduto.status).to.equal(201);

             const bodyCarrinho = {
                produtos:[
                 {
                      idProduto: cadastrarproduto.body._id,
                      quantidade: 3
                  }
                ]
               };
  
      

             const adicionarprodutoaocarrinho = await request(url)
                 .post('/carrinhos')
                 .set("Content-Type", "application/json")
                 .set("accept", "application/json")
                 .set("authorization", token1)
                 .send(bodyCarrinho);  

           // console.log('Adicionando Produtos ao Carrinho: ',JSON.stringify(adicionarprodutoaocarrinho.body, null, 2));
            expect(bodyCarrinho.produtos[0].quantidade).not.to.equal(produto.quantidade);
            expect(adicionarprodutoaocarrinho.body.message).to.equal('Produto não possui quantidade suficiente');
    });

      it('CAR-026.2 - Falha ao debitar estoque - Produto Inexistente', async function() { 

             const cancelarcompra = await request(url)
                 .del('/carrinhos/cancelar-compra')
                 .set("Content-Type", "application/json")
                 .set("accept", "application/json")
                 .set("authorization", token1)
    
             const produto =       {
                                   nome: `Notebook${Date.now()}`,
                                   preco: 3500,
                                   descricao: 'Notebook',
                                   quantidade: 2
                                };    

             const cadastrarproduto = await request(url)
                .post('/produtos')
                .set("Content-Type", "application/json")
                .set("accept", "application/json")
                .set('authorization', token1)
                .send(produto);
                 
       //     console.log('Cadastrando Produtos: ',JSON.stringify(cadastrarproduto.body, null, 2));
            expect(cadastrarproduto.status).to.equal(201);

             const bodyCarrinho = {
                produtos:[
                 {
                      idProduto: cadastrarproduto.body._id+1,  // Simulando produto inexistente
                      quantidade: 3
                  }
                ]
               };   

             const adicionarprodutoaocarrinho = await request(url)
                 .post('/carrinhos')
                 .set("Content-Type", "application/json")
                 .set("accept", "application/json")
                 .set("authorization", token1)
                 .send(bodyCarrinho);  

         //  console.log('Produto Não Encontrado: ',JSON.stringify(adicionarprodutoaocarrinho.body, null, 2));
           
           expect(adicionarprodutoaocarrinho.body.message).to.equal('Produto não encontrado');
           expect(adicionarprodutoaocarrinho.body.item.idProduto).to.equal(bodyCarrinho.produtos[0].idProduto);
           expect(adicionarprodutoaocarrinho.body.item.quantidade).to.equal(bodyCarrinho.produtos[0].quantidade);
           expect(adicionarprodutoaocarrinho.body.item.index).to.equal(0);
        });

      it('CAR-026.3 - Falha ao debitar estoque - Produto Removido antes da compra', async function() { 

             const cancelarcompra = await request(url)
                 .del('/carrinhos/cancelar-compra')
                 .set("Content-Type", "application/json")
                 .set("accept", "application/json")
                 .set("authorization", token1)
    
             const produto =       {
                                   nome: `Notebook${Date.now()}`,
                                   preco: 3500,
                                   descricao: 'Notebook',
                                   quantidade: 4
                                };    

             const cadastrarproduto = await request(url)
                 .post('/produtos')
                 .set("Content-Type", "application/json")
                 .set("accept", "application/json")
                 .set('authorization', token1)
                 .send(produto);
                 
       //     console.log('Cadastrando Produtos: ',JSON.stringify(cadastrarproduto.body, null, 2));
            expect(cadastrarproduto.status).to.equal(201);
            id_produto = cadastrarproduto.body._id;

             const bodyCarrinho = {
                produtos:[
                 {
                      idProduto: cadastrarproduto.body._id,  // Simulando produto inexistente
                      quantidade: 3
                  }
                ]
               };   

             const adicionarprodutoaocarrinho = await request(url)
                 .post('/carrinhos')
                 .set("Content-Type", "application/json")
                 .set("accept", "application/json")
                 .set("authorization", token1)
                 .send(bodyCarrinho);  

          //  console.log(JSON.stringify(adicionarprodutoaocarrinho.body, null, 2))

             const resposta = await request(url)
                 .del(`/produtos/${id_produto}`)
                 .set("Content-Type", "application/json")
                 .set("Accept", "application/json")
                 .set("authorization", token1)

           // console.log(JSON.stringify(resposta.body, null, 2))
             expect(resposta.status).to.equal(400);
             expect(resposta.body.message).to.equal('Não é permitido excluir produto que faz parte de carrinho');

        });

        it('CAR-027 - Falha ao concluir compra após pagamento', async function() { 
        
              console.log("Não será possível implementar literalmente esse cenário usando apenas a API pública");
              console.log("do ServeRest, porque a regra de negócio não existe na aplicação.")
      
        });
       
        it('CAR-028 - Inconsistência de estoque concorrente', async function() { 

             const cancelarcompra = await request(url)
                 .del('/carrinhos/cancelar-compra')
                 .set("Content-Type", "application/json")
                 .set("accept", "application/json")
                 .set("authorization", token1)


             const produto =       {
                                   nome: `Notebook${Date.now()}`,
                                   preco: 3500,
                                   descricao: 'Notebook',
                                   quantidade: 4
                                };    

             const cadastrarproduto = await request(url)
                 .post('/produtos')
                 .set("Content-Type", "application/json")
                 .set("accept", "application/json")
                 .set('authorization', token1)
                 .send(produto);

                 idproduto = cadastrarproduto.body._id;
                 expect(cadastrarproduto.status).to.equal(201);

        
            const payloadcarrinho = {
                    produtos: [{
                           idProduto: `${idproduto}`,
                           quantidade: 3
                              }]
            };
            
            const [res1, res2] = await Promise.all([
                  request(url)
                      .post('/carrinhos')
                      .set("Content-Type", "application/json")
                      .set("accept", "application/json")
                      .set("authorization", token1)
                      .send(payloadcarrinho),

                  request(url)
                     .post('/carrinhos')
                     .set("Content-Type", "application/json")
                     .set("accept", "application/json")
                     .set("authorization", token2)
                     .send(payloadcarrinho)
           ]);
                   
                   console.log(res1.body);
                   console.log(res2.body);

                   //certifica que retornou 201 e 400, e depois será feita a ordenação (201,400)
                   const status = [res1.status, res2.status].sort();

                   expect(status).to.deep.equal([201, 400]);

                   //certifica que retornou apenas um 201 e um 400, mas não importa a ordem
                   const status1 = [res1.status, res2.status];

                   expect(status1.filter(s => s === 201)).to.have.lengthOf(1);
                   expect(status1.filter(s => s === 400)).to.have.lengthOf(1);

                   //Validando as mensagens de retorno.

                   const mensagens = [res1.body.message, res2.body.message];

                   expect(mensagens).to.include("Cadastro realizado com sucesso");
                   expect(mensagens).to.include("Produto não possui quantidade suficiente");
        });
        it('CAR-029 - Erro interno ao cancelar compra ', async function() { 
        
              console.log("Não é possivel validar um erro 500 ('Erro interno ao cancelar compra') utilizando");
              console.log("apenas a API pública do ServeRest, porque esse comportamento não é exposto pela API ")
              console.log("e não pode ser induzido pelo consumidor")

        });

});


});
