const request = require('supertest');
//const express = require('express');
const { expect } = require('chai', 'chai-json-schema');

const url = 'https://serverest.dev';
let token = "";
let id_usuario = "";
let id_produto = "";
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
      it.skip('PRD-009 - Alterar Nome do Produto', async function() { 
         const resposta = await request(url)
            .put(`/produtos/${id_produto}`)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")
            .set("authorization", token)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`
            }) 
         expect(resposta.headers["content-type"]).to.match(/json/);
         expect(resposta.status).to.equal(400);
         expect(resposta.body.preco).to.equal('preco é obrigatório');
         expect(resposta.body.descricao).to.equal('descricao é obrigatório');
         expect(resposta.body.quantidade).to.equal('quantidade é obrigatório');

      });
      it.skip('PRD-010 - Alterar Preço do Produto', async function() { 
         const resposta = await request(url)
            .put(`/produtos/${id_produto}`)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")
            .set("authorization", token)
            .send({
                    preco: 870
            }) 
         expect(resposta.headers["content-type"]).to.match(/json/);
         expect(resposta.status).to.equal(400);
         expect(resposta.body.nome).to.equal('nome é obrigatório');
         expect(resposta.body.descricao).to.equal('descricao é obrigatório');
         expect(resposta.body.quantidade).to.equal('quantidade é obrigatório');

      });
      it.skip('PRD-011 - Alterar Estoque do Produto', async function() { 
         const resposta = await request(url)
            .put(`/produtos/${id_produto}`)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")
            .set("authorization", token)
            .send({
                    quantidade: 181
            }) 
         expect(resposta.headers["content-type"]).to.match(/json/);
         expect(resposta.status).to.equal(400);
         expect(resposta.body.nome).to.equal('nome é obrigatório');
         expect(resposta.body.descricao).to.equal('descricao é obrigatório');
         expect(resposta.body.preco).to.equal('preco é obrigatório');

      });
     
      it.skip('PRD-012 - Alterar Descrição do Produto', async function() { 
         const resposta = await request(url)
            .put(`/produtos/${id_produto}`)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")
            .set("authorization", token)
            .send({
                    descricao: 'Teclado'
            }) 
         expect(resposta.headers["content-type"]).to.match(/json/);
         expect(resposta.status).to.equal(400);
         expect(resposta.body.nome).to.equal('nome é obrigatório');
         expect(resposta.body.preco).to.equal('preco é obrigatório');
         expect(resposta.body.quantidade).to.equal('quantidade é obrigatório');

      });
    });

   describe ('Exclusão de Produto(s)', () => {
      it.skip('PRD-013 - Excluir Produto existente', async function() { 
          const response = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    preco: 470,
                    descricao: 'Mouse',
                    quantidade: 383
            })
            id_produto = response.body._id;
            
         const resposta = await request(url)
            .del(`/produtos/${id_produto}`)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")
            .set("authorization", token)
            
         expect(resposta.headers["content-type"]).to.match(/json/);
         expect(resposta.status).to.equal(200);
         expect(resposta.body.message).to.equal('Registro excluído com sucesso');
      });
      
      it.skip('PRD-014 - Confirmar remoção após exclusão', async function() { 
          const resposta_adicionar_produto= await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    preco: 470,
                    descricao: 'Mouse',
                    quantidade: 383
            })
            id_produto = resposta_adicionar_produto.body._id;
            
         const resposta_deletar_produto = await request(url)
            .del(`/produtos/${id_produto}`)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")
            .set("authorization", token)
            
         expect(resposta_deletar_produto.headers["content-type"]).to.match(/json/);
         expect(resposta_deletar_produto.status).to.equal(200);
         expect(resposta_deletar_produto.body.message).to.equal('Registro excluído com sucesso');

        //console.log("id_produto é: "+id_produto); 
         const resposta_consultar_produto = await request(url)
            .get(`/produtos/${id_produto}`)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")
         
         expect(resposta_consultar_produto.headers["content-type"]).to.match(/json/);
         expect(resposta_consultar_produto.status).to.equal(400);
         expect(resposta_consultar_produto.body.message).to.equal('Produto não encontrado');
      });
    });
});
  describe('Produto - Cenários Negativos', () => {
      it.skip('PRD-015 - Cadastrar produto sem nome', async function() { 
         const response = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                    preco: 470,
                    descricao: 'Mouse',
                    quantidade: 381
            })
            expect(response.status).to.equal(400);
            expect(response.body).to.have.property('nome');
            expect(response.body.nome).to.equal('nome é obrigatório');
     });
      it.skip('PRD-016 - Cadastrar produto sem preço', async function() { 
         const response = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    descricao: 'Mouse',
                    quantidade: 381
            })
            expect(response.status).to.equal(400);
            expect(response.body).to.have.property('preco');
            expect(response.body.preco).to.equal('preco é obrigatório');
     });
      it.skip('PRD-017 - Cadastrar produto com preço negativo', async function() { 
         const response = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    descricao: 'Mouse',
                    preco: -470,
                    quantidade: 381
            })
            expect(response.status).to.equal(400);
            expect(response.body).to.have.property('preco');
            expect(response.body.preco).to.equal('preco deve ser um número positivo');
     });
      it.skip('PRD-018 - Cadastrar produto com quantidade negativa', async function() { 
         const response = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    descricao: 'Mouse',
                    preco: 470,
                    quantidade: -381
            })
            expect(response.status).to.equal(400);
            expect(response.body).to.have.property('quantidade');
            expect(response.body.quantidade).to.equal('quantidade deve ser maior ou igual a 0');
     });
      it.skip('PRD-019 - Cadastrar produto dulicado', async function() { 
         await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                    nome: `Logitech MX Vertical_Modelo_XPTO01Y`,
                    descricao: 'Mouse',
                    preco: 470,
                    quantidade: 381
            })
         
         const response = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                    nome: `Logitech MX Vertical_Modelo_XPTO01Y`,
                    descricao: 'Mouse',
                    preco: 470,
                    quantidade: 381
            })
            expect(response.status).to.equal(400);
            expect(response.body.message).to.equal('Já existe produto com esse nome');
     });
     it.skip('PRD-020 - Cadastrar produto sem token', async function() { 
         const response = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    descricao: 'Mouse',
                    preco: 470,
                    quantidade: 381
            })
            expect(response.status).to.equal(401);
            expect(response.body.message).to.equal('Token de acesso ausente, inválido, expirado ou usuário do token não existe mais');
     });

     it.skip('PRD-021 - Buscar produto inexistente', async function() { 
         id_produto = "tG9btt3KGER89TZG";
            const response = await request(url)
            .get(`/produtos/${id_produto}`)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")

            expect(response.status).to.equal(400);
            expect(response.body.message).to.equal('Produto não encontrado');
     });

     it.skip('PRD-022 - Alterar produto inexistente', async function() { 
         id_produto = "tG9btt3KGER89TZG";
            const response = await request(url)
            .put(`/produtos/${id_produto}`)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")
            .set("authorization", token)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    descricao: 'Mouse',
                    preco: 470,
                    quantidade: 381
            })
 
            expect(response.status).to.equal(201);
            expect(response.body.message).to.equal('Cadastro realizado com sucesso');
     });

     it.skip('PRD-023 - Excluir produto inexistente', async function() { 
         id_produto = "tG9btt3KGER89TZG";
            const response = await request(url)
            .del(`/produtos/${id_produto}`)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")
            .set("authorization", token)
 
            expect(response.status).to.equal(200);
            expect(response.body.message).to.equal('Nenhum registro excluído');
     });


     it.skip('PRD-024 - Excluir produto associado a carrinho', async function() { 
         id_produto = "BeeJh5lz3k6kSIzA";
            const response = await request(url)
            .del(`/produtos/${id_produto}`)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")
            .set("authorization", token)
 
            expect(response.status).to.equal(400);
            expect(response.body.message).to.equal('Não é permitido excluir produto que faz parte de carrinho');
            expect(response.body.idCarrinhos[0]).to.equal('qbMqntef4iTOwWfg');
      });
});
  describe('Produto - Cenários Alternativos', () => {
      it.skip('PRD-025 - Cadastrar Produto com preço zero', async function() { 
        const response = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    descricao: 'Mouse',
                    preco: 0,
                    quantidade: 381
            })
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.status).to.equal(400);
         expect(response.body.preco).to.equal('preco deve ser um número positivo');
         });

      it.skip('PRD-026 - Cadastrar Produto com descriçao vazia', async function() { 
        const response = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    descricao: '',
                    preco: 481,
                    quantidade: 381
            })
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.status).to.equal(400);
         expect(response.body.descricao).to.equal('descricao não pode ficar em branco');
         });

      it.skip('PRD-027 - Cadastrar Produto com caracteres especiais', async function() { 
         const response = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                    nome: `%**(((&%$$#!@#$%*()$%*((((***)))(*(*(**))))(*&$%*()))))`,
                    descricao: 'Mouse',
                    preco: 481,
                    quantidade: 381
            })
            id_produto = response.body._id;
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.status).to.equal(201);
         expect(response.body.message).to.equal('Cadastro realizado com sucesso');

         await request(url)
            .del(`/produtos/${id_produto}`)
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
         });

      it.skip('PRD-028 - Atualização Parcial dos dados', async function() { 
         const resposta = await request(url)
            .post('/produtos')
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                    nome: `Logitech MX Vertical_Modelo_X${Date.now()}Y`,
                    descricao: 'Mouse',
                    preco: 481,
                    quantidade: 381
            })
            id_produto = resposta.body._id;

         const response = await request(url)
            .put(`/produtos/${id_produto}`)
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .set("authorization", token)
            .send({
                    preco: 555,
                    quantidade: 381
             })
         expect(response.headers["content-type"]).to.match(/json/);
         expect(response.status).to.equal(400);
         expect(response.body.nome).to.equal('nome é obrigatório');
         expect(response.body.descricao).to.equal('descricao é obrigatório');
         });
   });

  describe('Produto - Cenários de Exceção', () => {
      it.skip('PRD-029 - Falhas ao atualizar o estoque', async function() { 
        const response = await request(url)
            .put('/login')
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

