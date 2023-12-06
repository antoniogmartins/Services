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

[Captura de tela de 2023-09-18 17-44-40](https://github.com/antoniogmartins/postman/assets/35534493/0efc1d28-b0a1-4104-87f3-d7accb9429e1

https://github.com/antoniogmartins/postman/assets/35534493/0efc1d28-b0a1-4104-87f3-d7accb9429e1

[Captura de tela de 2023-09-18 17-44-40](https://github.com/antoniogmartins/postman/assets/35534493/0efc1d28-b0a1-4104-87f3-d7accb9429e1

🚀 Cadastrar/Consultar/Atualizar/Deletar uma Lista de Contatos

🔖 => Cadastrar

![Captura de tela de 2023-09-18 17-47-12](https://github.com/antoniogmartins/postman/assets/35534493/6ba3900f-88f1-4681-b20d-d125800c5a93)

![Captura de tela de 2023-09-18 17-47-12](https://github.com/antoniogmartins/postman/assets/35534493/6ba3900f-88f1-4681-b20d-d125800c5a93)


🔖 => Listar todos os contatos,

![Captura de tela de 2023-09-18 17-48-46](https://github.com/antoniogmartins/postman/assets/35534493/c741a033-09f4-4c59-ac7e-6f82f3e3f04e)


🔖 => Pesquisar somente por 01 contato

![Captura de tela de 2023-09-18 17-48-50](https://github.com/antoniogmartins/postman/assets/35534493/8a1c5ebd-0d69-4cb4-bfb6-8664a1cecccc)


🔖 => Atualizar o contato

![Captura de tela de 2023-09-18 18-12-16](https://github.com/antoniogmartins/postman/assets/35534493/5fbdce67-71c5-415b-913c-a0205a5a79a3)


🔖 => Deletar um contato

![Captura de tela de 2023-09-18 18-12-43](https://github.com/antoniogmartins/postman/assets/35534493/c5807128-59dc-4f7c-bfec-9920a99ea6d4)


🚀 Apos a Execuccao - Interface

![Captura de tela de 2023-09-19 13-12-15](https://github.com/antoniogmartins/postman/assets/35534493/22a621f1-e7e2-493e-95aa-6893e25a5c67)


🚀 Monitoria/Execucao dos testes de tempos em tempos

![Captura de tela de 2023-09-18 18-08-35](https://github.com/antoniogmartins/postman/assets/35534493/864c2c1a-d1ee-47aa-9b8b-32125b9fb2a3)


🚀 Errors encontrados

Quando os erros forem detectados a propria ferramenta encaminhará uma mensagem para o email configurado, alertando que existe um erro na api.

![Captura de tela de 2023-09-18 18-21-161](https://github.com/antoniogmartins/postman/assets/35534493/ce8c11d4-19bf-4da1-bb43-278c9806ec93)


🚀 Como executar de forma automatica, os smoketests utilizando as apis, por meio do GitActions

Obs.: É preciso que vc esteja conectado a internet

🚀 Integracao Continua - Pipeline

![Captura de tela de 2023-09-19 08-00-03](https://github.com/antoniogmartins/postman/assets/35534493/983d7435-6f07-4d39-97dc-31dd7c20f0d7)


![Captura de tela de 2023-09-19 07-59-55](https://github.com/antoniogmartins/postman/assets/35534493/ea3f2cc2-3c7f-49d7-b88f-51bd1baf0e1a)

🚀 Como executar de forma automatica, os smoketests utilizando as apis, por meio do Postman

![Captura de tela de 2023-09-19 07-38-49](https://github.com/antoniogmartins/postman/assets/35534493/4baf1f32-724e-4271-85a2-d4f48f3d5e41)


🚀 Análise do Smoke Tests realizados

Os testes foram executados com exito tanto utilizando o gitactions quanto diretamente por meio do Postman.

🚀 Análise Final

Smoketests concluidos com exito. StatusCode retornados dentro do esperado de acordo com cada metodo do request

🚀 Fontes - Documentação da Api:

https://thinking-tester-contact-list.herokuapp.com/contactList

📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
Feito com 💜  por Antonio Martins 👋   Meu linkedin

