# POSTMAN

🚀 Collections:
#### Nome do Arquivo: ContactList.postman_collection.json

### Cadastro/Consulta de uma Lista de Contatos
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


🚀 Logar, Gerar Token

![postaman_gerar_token](https://github.com/antoniogmartins/Services/assets/35534493/b6e1a825-ce27-44e1-9b1e-7a181fb36a06)

🚀 Cadastrar/Consultar/Atualizar/Deletar uma Lista de Contatos

🔖 => Cadastrar

![postman_cadastrar_contato](https://github.com/antoniogmartins/Services/assets/35534493/a2c78138-1afa-4d6c-9d81-20c725bb2695)

🔖 => Listar todos os contatos,

![postman_Listar_Contatos](https://github.com/antoniogmartins/Services/assets/35534493/8ebde181-4c23-499c-8892-4cab49d8f4df)

🔖 => Pesquisar somente por 01 contato



🔖 => Atualizar o contato



🔖 => Deletar um contato



🚀 Apos a Execução - Interface



🚀 Monitoria/Execucao dos testes de tempos em tempos



🚀 Errors encontrados

Quando os erros forem detectados a propria ferramenta encaminhará uma mensagem para o email configurado, alertando que existe um erro na api.



🚀 Como executar de forma automatica, os smoketests utilizando as apis, por meio do GitActions

Obs.: É preciso que vc esteja conectado a internet

🚀 Integracao Continua - Pipeline




🚀 Como executar de forma automatica, os smoketests utilizando as apis, por meio do Postman



🚀 Análise do Smoke Tests realizados

Os testes foram executados com exito tanto utilizando o gitactions quanto diretamente por meio do Postman.

🚀 Análise Final

Smoketests concluidos com exito. StatusCode retornados dentro do esperado de acordo com cada metodo do request

🚀 Fontes - Documentação da Api:

https://thinking-tester-contact-list.herokuapp.com/contactList

📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
Feito com 💜  por Antonio Martins 👋   Meu linkedin

