# ROBOT FRAMEWORK (ApiRest)

=> Foram utilizadas a linguagem Python, Json e o proprio RobotFramework para desenvolver este scripts de testes automatizados

 
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

No código fonte
![Captura de tela de 2023-10-02 19-13-56](https://github.com/antoniogmartins/robotframeworkapirest/assets/35534493/fba70c8f-639e-493a-88f3-254f7f083e95)

Executando via terminal
![Captura de tela de 2023-10-02 19-10-54](https://github.com/antoniogmartins/robotframeworkapirest/assets/35534493/5adc5c91-92e0-4d70-8e0f-5c0a0435e641)


🚀 Cadastrar/Consultar/Atualizar/Deletar uma Lista de Contatos

🔖 => Validar a ação de Cadastrar um Contato

No código fonte
![Captura de tela de 2023-10-02 19-33-49](https://github.com/antoniogmartins/robotframeworkapirest/assets/35534493/d0959627-e427-49a5-8e3c-98410b5066e0)

Executando via terminal
![Captura de tela de 2023-10-02 19-34-02](https://github.com/antoniogmartins/robotframeworkapirest/assets/35534493/55632da6-c894-4982-abb9-25e855488c61)


🔖 => Validar a ação de Buscar o contato cadastrado

No código fonte
![Captura de tela de 2023-10-02 19-38-26](https://github.com/antoniogmartins/robotframeworkapirest/assets/35534493/f1dabcba-21a4-452e-ae7f-29c6ed2d9ae6)

Executando via terminal
![Captura de tela de 2023-10-02 19-38-49](https://github.com/antoniogmartins/robotframeworkapirest/assets/35534493/62757140-e7d6-4caa-9792-a3ef1510cb14)


🔖 => Validar a ação Alterar os dados do Contato cadastrado,

No código fonte
![Captura de tela de 2023-10-02 19-40-36](https://github.com/antoniogmartins/robotframeworkapirest/assets/35534493/6d2e668f-41fd-407f-9931-330e3c5b5737)

Executando via terminal
![Captura de tela de 2023-10-02 19-40-58](https://github.com/antoniogmartins/robotframeworkapirest/assets/35534493/39570248-8439-43d8-9558-d9994ceddc32)


🔖 => Validar a ação de Deletar o contato cadastrado

No código fonte
![Captura de tela de 2023-10-02 19-42-17](https://github.com/antoniogmartins/robotframeworkapirest/assets/35534493/33dcbe77-d2c1-421c-a7ac-c66abe6ba1fb)

Executando via terminal
![Captura de tela de 2023-10-02 19-42-35](https://github.com/antoniogmartins/robotframeworkapirest/assets/35534493/b37369cd-3031-4b1e-b953-87900413a555)


🔖 => Validar a ação de Buscar todos os contatos cadastrados

No código fonte
![Captura de tela de 2023-10-02 19-43-35](https://github.com/antoniogmartins/robotframeworkapirest/assets/35534493/c5a19237-fa5c-4cc3-ad81-bda199e40a8f)

Executando via terminal
![Captura de tela de 2023-10-02 19-44-11](https://github.com/antoniogmartins/robotframeworkapirest/assets/35534493/4530c8c1-f7d3-478e-bfd8-4a4c64a3eede)


🚀 Como executar de forma automatica, os smoketests utilizando as apis, por meio do GitActions


Obs.: É preciso que vc esteja conectado a internet

🚀 Integracao Continua - Pipeline


🚀 Análise do Smoke Tests realizados

Os testes foram executados com exito tanto utilizando o gitactions quanto diretamente por meio do Postman.

🚀 Análise Final

Smoketests concluidos com exito. StatusCode retornados dentro do esperado de acordo com cada metodo do request e no tempo desejado

🚀 Fontes - Documentação da Api:

https://thinking-tester-contact-list.herokuapp.com/contactList

