const request = require('supertest');
//const express = require('express');
const { expect } = require('chai');

const url = 'https://api.restful-api.dev/collections/';
const id = 'ff8081819d82fab6019ed226deb7211c';

describe('1 - Add a new object',() => {
    describe ('POST /Objects', () => {
      it('Deve retornar 200 ao acrescentar um novo objeto', () => { 
         return request(url)
            .post('celular/objects')
            .set("Content-Type", "application/json")
            .set("x-api-key", "4f7dfc0d-c810-4189-b0c9-da03bea5c317")
            .send({
                  name: 'Apple MacBook Pro 18',
                  data: {
                  year: 2019,
                  price: 1849.99,
                  'CPU model': 'Intel Core i8',
                  'Hard disk size': '1 TB'
                }
            })
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.body).to.have.property('id');
                expect(res.body.name).to.equal('Apple MacBook Pro 18');
            });
    });    
});

describe('2 - List all your collections info', function() {
  describe ('GET /Collections', () => {
     it('Deve retornar 200 ao Listar todas as informações do collections', async function() {
        const response = await request(url)
          .get('')
          .set("Content-Type", "application/json")
          .set("x-api-key", "4f7dfc0d-c810-4189-b0c9-da03bea5c317") 
        expect(response.headers["content-type"]).to.match(/json/);
        expect(response.status).to.equal(200);
        expect(response.body[1].collectionName).to.equal('celular');
        });
   });
});

describe('3 - List all objects in a collection', function() {
  describe ('GET /Collections/TipoProduto/Objetos', () => {
      it('Deve retornar 200 ao Listar todas os objetos de uma collection', async function() {
        const response = await request(url)
          .get('celular/objects')
          .set("Content-Type", "application/json")
          .set("x-api-key", "4f7dfc0d-c810-4189-b0c9-da03bea5c317") 
        expect(response.headers["content-type"]).to.match(/json/);
        expect(response.status).to.equal(200);
        expect(response.body[2].name).to.equal('Apple MacBook Pro 16');
        });
   });
});

describe('4 - Single Object from a collection', function() {
  describe ('GET /Collections/TipoProduto/Objetos/:id', () => {
      it('Deve retornar 200 ao Listar as informações de um unico Objeto de uma collection', async function() {
        const response = await request(url)
          .get('celular/objects/' + id)
          .set("Content-Type", "application/json")
          .set("x-api-key", "4f7dfc0d-c810-4189-b0c9-da03bea5c317") 
        expect(response.headers["content-type"]).to.match(/json/);
        expect(response.status).to.equal(200);
        expect(response.body.name).to.equal('Apple MacBook Pro 18');
        expect(response.body.data['Hard disk size']).to.equal('1 TB');
        });
   });
});







});

