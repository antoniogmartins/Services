//Autor: Antonio G. Martins
//Testes Automatizados utilizando o Jest + SuperTest 

const { generateShortUuid} = require('custom-uuid');
const request = require(`supertest`)
const url = 'https://thinking-tester-contact-list.herokuapp.com';

//utilizei dois tipos de uuid
const uuid = require("uuid");
const compl_nome = generateShortUuid(uuid.v4());
const short = require("short-uuid");
const compl_sobrenome = generateShortUuid(short.generate());

let id = '';
let token = 0;

describe("POST /users/login", () => {
  describe("Gerar Token", () => {
  test("Validar a Geração de um token", async () => {
    const retorno = await request(url)
       .post("/users/login/")
       .send({ 
          "email": "agmartins2018@gmail.com",
          "password": "12345678"
             })
             .set(`Content-Type`, `application/json; charset=UTF-8`);
    
    token = retorno.body.token

    console.log('Buscando o retorno da geração do token',retorno.body)
    console.log('Token',token)
    
    //Validações
    expect(retorno.statusCode).toBe(200)
     })
   })
})

describe("POST /Contacts", () => {
  describe("Cadastrar um Contato", () => {
  test("Validar o Cadastro de um Contato", async () => {
    const retorno = await request(url)
       .post("/contacts/")
       .send({ 
          "firstName": "n_"+compl_nome,
          "lastName": "s_"+compl_sobrenome,
          "birthdate": "1977-07-07",
          "email": "maneol@gmail.com",
          "phone": "21999991919",
          "street1": "xpto 1",
          "city": "rj",
          "stateProvince": "rj",
          "postalCode": "2024020",
          "country": "brsil",
          "owner": "64fb27375bffa8001368e49c",
          "__v": 0
             })
             .set(`Content-Type`, `application/json; charset=UTF-8`)
             .set(`Authorization`, `Bearer ${token}`);

    id = retorno.body._id;         
    console.log('Buscando o Contato cadastrado',retorno.body);
    console.log('Buscando o id do Contato cadastrado',id);
    
    //Validações
    expect(retorno.statusCode).toBe(201);
    expect(retorno.headers).toHaveProperty('content-type', 'application/json; charset=utf-8');    
    expect(retorno.body).toHaveProperty('owner', '64fb27375bffa8001368e49c'); 
     })
   })
})


describe("GET /Contacts", () => {
  describe("Listar todos os Contatos cadastrados", () => {
  test("Validar a Listagem de Contatos cadastrados", async () => {
    const retorno = await request(url)
       .get("/contacts/")
       .send({})
             .set(`Content-Type`, `application/json; charset=UTF-8`)
             .set(`Authorization`, `Bearer ${token}`)
          ;

    console.log('Buscando a listagem de contatos cadastrados',retorno.body)
    
    //Validações
    expect(retorno.statusCode).toBe(200)
    expect(retorno.headers).toHaveProperty('content-type', 'application/json; charset=utf-8')    
     })
   })
})


describe("GET /Contacts", () => {
  describe("Listar o Contato cadastrado", () => {
  test("Validar dados do Contato cadastrado", async () => {
    const retorno = await request(url)
       .get("/contacts/"+id)
       .send({})
             .set(`Content-Type`, `application/json; charset=UTF-8`)
             .set(`Authorization`, `Bearer ${token}`)
          ;

    console.log('Buscando o Contato cadastrado',retorno.body)
    
    //Validações
    expect(retorno.statusCode).toBe(200)
    expect(retorno.headers).toHaveProperty('content-type', 'application/json; charset=utf-8')    
     })
   })
})

describe("PUT /Contacts", () => {
  describe("Alterar dados de um Contatos cadastrado", () => {
  test("Validar dados doContato cadastrado", async () => {
    const retorno = await request(url)
       .put("/contacts/"+id)
       .send({
          "firstName": "ze",
          "lastName": "ramalho",
          "birthdate": "1922-01-07",
          "email": "zeramalho@yahoo.com.br",
          "phone": "21992221174",
          "street1": "rua xpto 6",
          "city": "sp",
          "stateProvince": "sp",
          "postalCode": "2022012",
          "country": "brasil",
          "owner": "64fb27375bffa8001368e49c",
          "__v": 0
       })
             .set(`Content-Type`, `application/json; charset=UTF-8`)
             .set(`Authorization`, `Bearer ${token}`)
          ;

    console.log('Buscando o Contato alterado',retorno.body)
    
    //Validações
    expect(retorno.statusCode).toBe(200)
    expect(retorno.headers).toHaveProperty('content-type', 'application/json; charset=utf-8')    
     })
   })
})

describe("DELETE /Contacts", () => {
  describe("Excluir um Contato cadastrado", () => {
  test("Validar a exclusão de um Contato cadastrado", async () => {
    const retorno = await request(url)
       .del("/contacts/"+id)
       .send({})
             .set(`Content-Type`, `application/json; charset=UTF-8`)
             .set(`Authorization`, `Bearer ${token}`)
          ;

    console.log('Buscando informações do Contato deletado',retorno.body)
    
    //Validações
    expect(retorno.statusCode).toBe(200)
    expect(retorno.headers).toHaveProperty('content-type', 'text/html; charset=utf-8')    
     })
   })
})
