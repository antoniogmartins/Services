# jest (RestApi)
=> Foi utilizado o Jest e o SuperTest para desenvolver/validar os cenarios de testes automatizados

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


🚀 Cadastrar/Consultar/Atualizar/Deletar uma Lista de Contatos

🔖 => Validar a ação de Cadastrar um Contato


🔖 => Validar a ação de Buscar o contato cadastrado


🔖 => Validar a ação Alterar os dados do Contato cadastrado,


🔖 => Validar a ação de Deletar o contato cadastrado


🔖 => Validar a ação de Buscar todos os contatos cadastrados


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