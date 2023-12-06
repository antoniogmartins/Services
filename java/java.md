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

![java_gerar_token](https://github.com/antoniogmartins/Services/assets/35534493/54e440f3-ffff-4fca-a61c-03bc20761230)

🚀 Cadastrar/Consultar/Atualizar/Deletar uma Lista de Contatos

🔖 => Validar a ação de Cadastrar um Contato

![java_restassured_cadastrar](https://github.com/antoniogmartins/Services/assets/35534493/a89c28fc-5727-46d7-a76c-aee244bd1c97)

🔖 => Validar a ação de Buscar o contato cadastrado

![java_restassured_buscarususario](https://github.com/antoniogmartins/Services/assets/35534493/5a5d27d7-618e-4561-87b4-b027647b7340)


🔖 => Validar a ação Alterar os dados do Contato cadastrado,

![java_restassured_alterarususario](https://github.com/antoniogmartins/Services/assets/35534493/aa776dcf-f7d2-44d1-86d0-80b639e30222)


🔖 => Validar a ação de Deletar o contato cadastrado

![java_restassured_deletarususario](https://github.com/antoniogmartins/Services/assets/35534493/0194abef-e563-4cd3-a5d8-5483ba0f0626)


🔖 => Validar a ação de Buscar todos os contatos cadastrados

![java_restassured_buscartodosusuarios](https://github.com/antoniogmartins/Services/assets/35534493/347b93bc-cb67-4ce0-987a-f6cd79adf9f7)


🚀 Como executar de forma automatica, os smoketests utilizando as apis, por meio do GitActions

Obs.: É preciso que vc esteja conectado a internet

🚀 Integracao Continua - Pipeline




🚀 Análise do Smoke Tests realizados

Os testes foram executados com exito tanto utilizando o gitactions quanto diretamente por meio do Postman.

🚀 Análise Final

Smoketests concluidos com exito. StatusCode retornados dentro do esperado de acordo com cada metodo do request e no tempo desejado

🚀 Fontes - Documentação da Api:

https://thinking-tester-contact-list.herokuapp.com/contactList

📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
Feito com 💜  por Antonio Martins 👋   Meu linkedin


