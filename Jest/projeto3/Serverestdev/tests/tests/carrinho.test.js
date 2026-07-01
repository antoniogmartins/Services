const request = require('supertest');
//const express = require('express');
const { expect } = require('chai', 'chai-json-schema');

const url = 'https://serverest.dev';
let token = "";
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

//**4.1.1 - Adicionar produto ao Carrinho de compras**

      it.skip('CAR-001 - Adicionar produto ao carrinho', async function() { 
        
        await request(url)
            .del('/carrinhos/cancelar-compra')
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
            .del('/carrinhos/cancelar-compra')
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
            .del('/carrinhos/cancelar-compra')
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
            .del('/carrinhos/cancelar-compra')
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
                (total, produto) => {return total + produto.quantidade;}, 0, 0);

        // console.log(carrinhos.quantidadeTotal);
        // console.log(somaQuantidades);
               
         expect(carrinhos.quantidadeTotal).to.equal(somaQuantidades);

        });

      it.skip('CAR-005 - Validar cálculo do valor total do carrinho', async function() { 
        
        await request(url)
            .del('/carrinhos/cancelar-compra')
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

         //console.log(carrinhos.precoTotal);
         //console.log(somaPrecoTotal);

         expect(carrinhos.precoTotal).to.equal(somaPrecoTotal);
        });


//**4.1.2 - Consultar Carrinho de compras**

      it.skip('CAR-006 - Listar carrinhos', async function() { 
        
            let consultarcarrinho = await request(url)
            .get('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
         
       
         expect(consultarcarrinho.status).to.equal(200);
         
         if (consultarcarrinho.body.quantidade > 0){

            await request(url)
            .delete('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
 
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
            .set("authorization", token)
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
            .set("authorization", token)
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
            .set("authorization", token)
        
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

      it.skip('CAR-007 - Buscar carrinho por Id Válido', async function() { 
        
          let consultarcarrinho = await request(url)
            .get('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
         
       
         expect(consultarcarrinho.status).to.equal(200);
         
         if (consultarcarrinho.body.quantidade > 0){

            await request(url)
            .delete('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
 
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
            .set("authorization", token)
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
            .set("authorization", token)
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
            .set("authorization", token)
        
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

      it.skip('CAR-008 - Buscar carrinho por Preco Total', async function() { 
        
          let consultarcarrinho = await request(url)
            .get('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
         
       
         expect(consultarcarrinho.status).to.equal(200);
         
         if (consultarcarrinho.body.quantidade > 0){

            await request(url)
            .delete('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
 
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
            .set("authorization", token)
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
            .set("authorization", token)
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
            .set("authorization", token)
        
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

     it.skip('CAR-009 - Buscar carrinho por Quantidade Total', async function() { 
        
         let consultarcarrinho = await request(url)
            .get('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
         
       
         expect(consultarcarrinho.status).to.equal(200);
         
         if (consultarcarrinho.body.quantidade > 0){

            await request(url)
            .delete('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
 
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
            .set("authorization", token)
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
            .set("authorization", token)
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
            .set("authorization", token)
        
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

//**4.1.3 - Concluir Compra e Atualizar Estoque**
  
    it.skip('CAR-010 - Concluir Compra com sucesso', async function() { 
        
        const consultarcarrinho = await request(url)
            .get('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
         
       
         expect(consultarcarrinho.status).to.equal(200);
         
         if (consultarcarrinho.body.quantidade > 0){

            await request(url)
            .delete('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
 
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
            .set("authorization", token)
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
            .set("authorization", token)
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
            .set("authorization", token)

        const comprado = concluircompra.body;
          
        expect(comprado.message).to.equal('Registro excluído com sucesso');
          
              
        });    


    it.skip('CAR-011 - Atualizar Estoque após compra', async function() { 
        
        const consultarcarrinho = await request(url)
            .get('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
         
       
         expect(consultarcarrinho.status).to.equal(200);
         
         if (consultarcarrinho.body.quantidade > 0){

            await request(url)
            .delete('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
 
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
            .set("authorization", token)
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
            .set("authorization", token)

            qtdeprodutoantes = consultarprodutocadastradoantes.body.quantidade;
            console.log('Qtde de Produtos (Antes de adicionar ao carrinho): ' + qtdeprodutoantes);   

        const adicionarprodutoaocarrinho = await request(url)
            .post('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
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
            .set("authorization", token)

            qtdeprodutoaposadicionaraocarrinho = consultarprodutocadastradoaposadicionaraocarrinho.body.quantidade;
            console.log('Qtde de Produtos (Após adicionar ao carrinho): ' + qtdeprodutoaposadicionaraocarrinho);   
         
        const concluircompra = await request(url)
            .del('/carrinhos/concluir-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)

        const conclusaodacompra = concluircompra.body;
          
        expect(conclusaodacompra.message).to.equal('Registro excluído com sucesso');
          
        const consultarprodutoadicionadodepois = await request(url)
            .get(`/produtos/${id_produto}`)   
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)

            qtdeprodutodepois = consultarprodutoadicionadodepois.body.quantidade;
            console.log('Qtde de Produtos (Depois de adicionar ao carrinho e cancelar a compra): ' + qtdeprodutodepois);   

            //Comparando estoque antigo ao atual: Estoque foi atualizado com o cancelamento da compra
            expect(qtdeprodutodepois).to.equal(qtdeprodutoaposadicionaraocarrinho);
           
        });    

// **4.1.4 - Cancelar Compra e Atualizar Estoque**

    it.skip('CAR-012 - Cancelar compra', async function() { 
        
        const consultarcarrinho = await request(url)
            .get('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
         
       
         expect(consultarcarrinho.status).to.equal(200);
         
         if (consultarcarrinho.body.quantidade > 0){

            await request(url)
            .delete('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
 
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
            .set("authorization", token)
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
            .set("authorization", token)

            qtdeprodutoantes = consultarprodutocadastradoantes.body.quantidade;
            console.log('Qtde de Produtos (Antes de adicionar ao carrinho): ' + qtdeprodutoantes);   

        const adicionarprodutoaocarrinho = await request(url)
            .post('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
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
            .set("authorization", token)

        const cancelado = cancelarcompra.body;
          
        expect(cancelado.message).to.equal('Registro excluído com sucesso. Estoque dos produtos reabastecido');

        const consultarprodutodepoisdecanceladocompra = await request(url)
            .get(`/produtos/${id_produto}`)     
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)

            qtdeprodutodepois = consultarprodutodepoisdecanceladocompra.body.quantidade;
            console.log('Qtde de Produtos (Depois de cancelar compra): ' + qtdeprodutodepois);   

            //Comparando estoque antigo ao atual: Estoque foi atualizado com o cancelamento da compra
            expect(qtdeprodutoantes).to.equal(qtdeprodutodepois);
           
        });

   it.skip('CAR-013 - Devolver Estoque ao Cancelar', async function() { 
        
        const consultarcarrinho = await request(url)
            .get('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
         
       
         expect(consultarcarrinho.status).to.equal(200);
         
         if (consultarcarrinho.body.quantidade > 0){

            await request(url)
            .delete('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
 
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
            .set("authorization", token)
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
            .set("authorization", token)

            qtdeprodutoantes = consultarprodutocadastradoantes.body.quantidade;
            console.log('Qtde de Produtos (Antes de adicionar ao carrinho): ' + qtdeprodutoantes);   

        const adicionarprodutoaocarrinho = await request(url)
            .post('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
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
            .set("authorization", token)

        const cancelado = cancelarcompra.body;
          
        expect(cancelado.message).to.equal('Registro excluído com sucesso. Estoque dos produtos reabastecido');
          
        const consultarprodutoadicionadodepois = await request(url)
            .get(`/produtos/${id_produto}`)   
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)

            qtdeprodutodepois = consultarprodutoadicionadodepois.body.quantidade;
            console.log('Qtde de Produtos (Depois de adicionar ao carrinho e cancelar a compra): ' + qtdeprodutodepois);   

            //Comparando estoque antigo ao atual: Estoque foi atualizado com o cancelamento da compra
            expect(qtdeprodutoantes).to.equal(qtdeprodutodepois);
        });   
    });
});

describe('Carrinho - Cenários Negativos', () => {
      it.skip('CAR-014 - Adicionar no carrinho um Produto inexistente', async function() { 
          
        await request(url)
            .del('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
        
        id_produto = '11111112221212';

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

         expect(response.status).to.equal(400);
         expect(response.body.message).to.equal('Produto não encontrado');
 
       });

      it.skip('CAR-015 - Adicionar no carrinho um produto com a quantidade superior ao estoque', async function() { 
        
        await request(url)
            .del('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
        
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
            .set("authorization", token)
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
            .set("authorization", token)
            .send(payloadcarrinho);  

         expect(response.status).to.equal(400);
         expect(response.body.message).to.equal('Produto não possui quantidade suficiente');
         expect(response.body.item).to.have.property('idProduto');
         expect(response.body.quantidade).to.equal(payloadcarrinho.quantidade);
        
        });
       
      it.skip('CAR-016 - Adicionar no carrinho um produto ao carrinho sem token', async function() { 
        
        await request(url)
            .del('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
        
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
            .set("authorization", token)
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
         expect(response.body.message).to.equal('Token de acesso ausente, inválido, expirado ou usuário do token não existe mais');
         
        });

      it.skip('CAR-017 - Adicionar carrinho vazio', async function() { 
        
        await request(url)
            .del('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
        
        const payloadcarrinho = ({
                     produtos: []
                });    
            
        const response = await request(url)
            .post('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send(payloadcarrinho);  

         expect(response.status).to.equal(400);
         console.log(response.body.message);
         expect(response.body.produtos).to.equal('produtos não contém 1 valor obrigatório');
         
        });
     
     it.skip('CAR-018 - Buscar carrinho inexistente', async function() { 

        id_carrinho = 2222222222222222;

        const consultarcarrinho = await request(url)
            .get(`/carrinhos/${id_carrinho}`)
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
        
            expect(consultarcarrinho.status).to.equal(400);
            const carrinhos = consultarcarrinho.body;
             
            expect(carrinhos.message).to.equal('Carrinho não encontrado');
     });
    
     it.skip('CAR-019 - Concluir compra sem carrinho ativo', async function() { 

         await request(url)
            .del('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)


         const concluircompra = await request(url)
            .del('/carrinhos/concluir-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
      
            expect(concluircompra.status).to.equal(400);
            const carrinhos = concluircompra.body;
             
            expect(carrinhos.message).to.equal('Não foi encontrado carrinho para esse usuário');
     });
    
     it.skip('CAR-020 - Cancelar compra sem carrinho ativo', async function() { 

         await request(url)
            .del('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)


         const concluircompra = await request(url)
            .del('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
      
            expect(concluircompra.status).to.equal(400);
            const carrinhos = concluircompra.body;
             
            expect(carrinhos.message).to.equal('Não foi encontrado carrinho para esse usuário');
     });
    
     it.skip('CAR-021 - Concluir compra com estoque insuficiente ', async function() { 
        
        const consultarcarrinho = await request(url)
            .get('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
         
       
         expect(consultarcarrinho.status).to.equal(200);
         
         if (consultarcarrinho.body.quantidade > 0){

            await request(url)
            .delete('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
 
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
            .set("authorization", token)
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
            .set("authorization", token)
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
            .set("authorization", token)

        const comprado = concluircompra.body;
        expect(concluircompra.status).to.equal(400);  
        expect(comprado.message).to.equal('Não foi encontrado carrinho para esse usuário');
          
              
        });  
    
});
describe('Carrinho - Cenários Alternativos', () => {
      it.skip('CAR-022 - Adicionar no carrinho o mesmo produto mais de uma vez', async function() { 
    
      const consultarcarrinho = await request(url)
            .get('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
         
         expect(consultarcarrinho.status).to.equal(200);
         
         if (consultarcarrinho.body.quantidade > 0){

            await request(url)
            .delete('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
 
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
            .set("authorization", token)
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
            .set("authorization", token)
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
            .set("authorization", token)

        const comprado = concluircompra.body;
        expect(concluircompra.status).to.equal(400);  
        expect(comprado.message).to.equal('Não foi encontrado carrinho para esse usuário');
    });

     it.skip('CAR-023 - Adicionar produto no carrinho com quantidade igual ao estoque', async function() { 
    
      const consultarcarrinho = await request(url)
            .get('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
         
         expect(consultarcarrinho.status).to.equal(200);
         
         if (consultarcarrinho.body.quantidade > 0){

            await request(url)
            .delete('/carrinhos/cancelar-compra')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
 
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
            .set("authorization", token)
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
            .set("authorization", token)
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
            .set("authorization", token)

        const comprado = concluircompra.body;
        
        expect(concluircompra.status).to.equal(200);
        expect(comprado.message).to.equal('Registro excluído com sucesso');
    });

     it.skip('CAR-024.1 - Comprar todos os itens disponíveis', async function() { 
    
      const consultarcarrinho = await request(url)
            .get('/carrinhos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
         
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
             .set('authorization', token)
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
            .set("authorization", token)
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
            .set("authorization", token)
          */
             const response = await request(url)
                 .get('/produtos')
                 .set("Content-Type", "application/json")
                 .set("accept", "application/json")
                 .set("authorization", token);

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
            .set("authorization", token)
            .send(bodyCarrinho);    

            console.log(adicionarprodutoaocarrinho.body);
            expect(adicionarprodutoaocarrinho.body.message).to.equal('Não é permitido ter mais de 1 carrinho');

             }

 
            }
    });

     it.skip('CAR-024.2 - Comprar todos os itens disponíveis (refinado)', async function() { 
    
             const concluircompra = await request(url)
                 .del('/carrinhos/concluir-compra')
                 .set("Content-Type", "application/json")
                 .set("accept", "application/json")
                 .set("authorization", token)
       
             const cancelarcompra = await request(url)
                 .del('/carrinhos/cancelar-compra')
                 .set("Content-Type", "application/json")
                 .set("accept", "application/json")
                 .set("authorization", token)

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
             .set('authorization', token)
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
               .set("authorization", token)
               .send(bodyCarrinho);  

      //      console.log('Adicionando Produtos ao Carrinho: ',JSON.stringify(adicionarprodutoaocarrinho.body, null, 2));
            expect(adicionarprodutoaocarrinho.body.message).to.equal('Cadastro realizado com sucesso');
            console.log('Id do Carrinho gerado:', adicionarprodutoaocarrinho.body._id);
});

    it.skip('CAR-025 - Carrinho contendo apenas um item', async function() { 
    
         const concluircompra = await request(url)
                 .del('/carrinhos/concluir-compra')
                 .set("Content-Type", "application/json")
                 .set("accept", "application/json")
                 .set("authorization", token)

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
             .set('authorization', token)
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
                 .set("authorization", token)
                 .send(bodyCarrinho);  

         //   console.log('Adicionando Produtos ao Carrinho: ',JSON.stringify(adicionarprodutoaocarrinho.body, null, 2));
            expect(adicionarprodutoaocarrinho.body.message).to.equal('Cadastro realizado com sucesso');
        //    console.log('Id do Carrinho gerado:', adicionarprodutoaocarrinho.body._id);
});



});

describe('Carrinho - Cenários De Exceção', () => {
      it.skip('CAR-026.1 - Falha ao debitar estoque - Qtde maior que o estoque', async function() { 

         const cancelarcompra = await request(url)
                 .del('/carrinhos/cancelar-compra')
                 .set("Content-Type", "application/json")
                 .set("accept", "application/json")
                 .set("authorization", token)
    
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
             .set('authorization', token)
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
                 .set("authorization", token)
                 .send(bodyCarrinho);  

           // console.log('Adicionando Produtos ao Carrinho: ',JSON.stringify(adicionarprodutoaocarrinho.body, null, 2));
            expect(bodyCarrinho.produtos[0].quantidade).not.to.equal(produto.quantidade);
            expect(adicionarprodutoaocarrinho.body.message).to.equal('Produto não possui quantidade suficiente');
    });

      it.skip('CAR-026.2 - Falha ao debitar estoque - Produto Inexistente', async function() { 

             const cancelarcompra = await request(url)
                 .del('/carrinhos/cancelar-compra')
                 .set("Content-Type", "application/json")
                 .set("accept", "application/json")
                 .set("authorization", token)
    
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
                .set('authorization', token)
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
                 .set("authorization", token)
                 .send(bodyCarrinho);  

         //  console.log('Produto Não Encontrado: ',JSON.stringify(adicionarprodutoaocarrinho.body, null, 2));
           
           expect(adicionarprodutoaocarrinho.body.message).to.equal('Produto não encontrado');
           expect(adicionarprodutoaocarrinho.body.item.idProduto).to.equal(bodyCarrinho.produtos[0].idProduto);
           expect(adicionarprodutoaocarrinho.body.item.quantidade).to.equal(bodyCarrinho.produtos[0].quantidade);
           expect(adicionarprodutoaocarrinho.body.item.index).to.equal(0);
        });

      it.skip('CAR-026.3 - Falha ao debitar estoque - Produto Removido antes da compra', async function() { 

             const cancelarcompra = await request(url)
                 .del('/carrinhos/cancelar-compra')
                 .set("Content-Type", "application/json")
                 .set("accept", "application/json")
                 .set("authorization", token)
    
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
                 .set('authorization', token)
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
                 .set("authorization", token)
                 .send(bodyCarrinho);  

          //  console.log(JSON.stringify(adicionarprodutoaocarrinho.body, null, 2))

             const resposta = await request(url)
                 .del(`/produtos/${id_produto}`)
                 .set("Content-Type", "application/json")
                 .set("Accept", "application/json")
                 .set("authorization", token)

           // console.log(JSON.stringify(resposta.body, null, 2))
             expect(resposta.status).to.equal(400);
             expect(resposta.body.message).to.equal('Não é permitido excluir produto que faz parte de carrinho');

        });

        it.skip('CAR-027 - Falha ao concluir compra após pagamento', async function() { 
        
              console.log("Não será possível implementar literalmente esse cenário usando apenas a API pública");
              console.log("do ServeRest, porque a regra de negócio não existe na aplicação.")
      
        });
     });
});
