# JAVA (RestApi - RestAssured)

=> Foram utilizados a linguagem Java(Testng) e a dependencia Restassured para desenvolver este scritps de testes automatizado
 
🚀 Collections: 
#### Nome do Arquivo: ContactList.postman_collection.json 

### Cadastro/Consulta de Contato
## 🔖 Requisitos funcionais
- [X] Deve retornar 201 ao logar/gerar um token 
- [X] Deve retornar 201 ao cadastrar um contato
- [X] Deve retornar 200 ao listar todos os contatos cadastrados
- [X] Deve retornar 200 ao pesquisar somente por 1 contato existente
- [X] Deve retornar 200 ao alterar um contato existente
- [X] Deve retornar 200 ao deletar um contato existente

## 🔖 Requisitos Não funcionais
- [X] Deve retornar 400 (bad request) ao tentar alterar um contato com email invalido
- [X] Deve retornar 401 (Unauthorized) ao tentar pesquisar um contato sem token
- [X] Deve retornar 404 (not found) ao tentar pesquisar por um contao inexistente
- [X] Deve retornar 400 (bad request) ao tentar cadastrar em informar um campo requerido (firstname)
- [X] Deve retornar 400 (bad request) ao tentar cadastrar em informar um campo requerido (lastname)


| campos             | descrição                              | tipo     | obrigatório |
| :----------------- | :------------------------------------- | :------- | :---------- |
| firstname          | primeiro nome ao cadastrar um contato  | texto    | sim         |
| lastname           | segundo nome ao cadastrar um contato   | texto    | sim         |
| birthdate          | preco total                            | date     | sim         |
| email              | valor do pagamento do deposito         | texto    | sim         |
| phone              | data do booking                        | numero   | nao         |
| street1            | data do checking                       | texto    | sim         |
| city               | data do checkout                       | texto    | sim         |
| stateProvince      | necessidades adicionais                | texto    | sim         |
| postalCode         | necessidades adicionais                | numero   | sim         |
| coutnry            | necessidades adicionais                | texto    | sim         |
| owner              | necessidades adicionais                | texto    | sim         |
| __v                | necessidades adicionais                | texto    | sim         |


🔖 => Arquivo(s) contendo a(s) collection(s):

ContactList.postman_collection.json

🚀 Validar a ação de Gerar Token

![Captura de tela de 2023-09-26 17-23-33](https://github.com/antoniogmartins/java_apirest/assets/35534493/98ecdaac-7d5c-4aa5-9020-9b3a7c4e2cce)

🚀 Cadastrar/Consultar/Atualizar/Deletar uma Lista de Contatos

🔖 => Validar a ação de Cadastrar um Contato

![Captura de tela de 2023-09-26 17-25-20](https://github.com/antoniogmartins/java_apirest/assets/35534493/786cf955-719a-4492-b3d8-0bb7c854713c)

🔖 => Validar a ação de Buscar o contato cadastrado

![Captura de tela de 2023-09-26 17-30-23](https://github.com/antoniogmartins/java_apirest/assets/35534493/ab75a5a9-49f6-4fd5-b4a0-37648f5e4b76)

🔖 => Validar a ação Alterar os dados do Contato cadastrado,

![Captura de tela de 2023-09-26 17-31-47](https://github.com/antoniogmartins/java_apirest/assets/35534493/4a5744ee-912f-4aae-9eb3-1dc4cb09c2d1)

🔖 => Validar a ação de Deletar o contato cadastrado

![Captura de tela de 2023-09-26 17-34-47](https://github.com/antoniogmartins/java_apirest/assets/35534493/dc5a6210-52bb-4fe2-acf8-b685a69c7aa0)

🔖 => Validar a ação de Buscar todos os contatos cadastrados

![Captura de tela de 2023-09-26 17-35-49](https://github.com/antoniogmartins/java_apirest/assets/35534493/8839f3f9-50cf-4127-bd3d-f843a04021b9)

🚀 Como executar de forma automatica, os smoketests utilizando as apis, por meio do GitActions

Obs.: É preciso que vc esteja conectado a internet

🚀 Integracao Continua - Pipeline



![Captura de tela de 2023-09-26 20-28-21](https://github.com/antoniogmartins/java_apirest/assets/35534493/cabf159b-6af4-4e29-9d58-002859d37b17)


🚀 Análise do Smoke Tests realizados

Os testes foram executados com exito tanto utilizando o gitactions quanto diretamente por meio do Postman.

🚀 Análise Final

Smoketests concluidos com exito. StatusCode retornados dentro do esperado de acordo com cada metodo do request e no tempo desejado

🚀 Fontes - Documentação da Api:

https://thinking-tester-contact-list.herokuapp.com/contactList

📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
Feito com 💜  por Antonio Martins 👋   Meu linkedin


