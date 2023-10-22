# Python Rest Api - SmokeTests - Testes de Serviços

🚀 Collections:

### Cadastro/Consulta de uma Lista de Usuarios
## 🔖 Requisitos funcionais
- [X] Deve retornar 201 ao cadastrar um usuario
- [X] Deve retornar 200 ao listar todos os usuarios cadastrados
- [X] Deve retornar 200 ao pesquisar somente por 1 usuario existente
- [X] Deve retornar 200 ao alterar um ususario existente
- [X] Deve retornar 200 ao deletar um usuario existente

## 🔖 Requisitos Não funcionais
- [X] Deve retornar 422 ao tentar incluir um usuario sem passar nenhuma informação no body
- [X] Deve retornar 401 (Unauthorized) ao tentar incluir um usuario sem passar no body um dos campos: name, gender, email, status
- [X] Deve retornar 404 (bad request) ao tentar pesquisar por um usuario inexistente
- [X] Deve retornar 422 ao tentar incluir um Email ja utilizado anteriormente

| campos             | descrição                              | tipo     | obrigatório |
| :----------------- | :------------------------------------- | :------- | :---------- |
| name               | primeiro nome ao cadastrar um usuario  | texto    | sim         |
| gender             | genero sexual do usuario               | texto    | sim         |
| email              | email do usuario                       | texto    | sim         |
| status             | tipo do status                         | texto    | sim         |


🔖 => Arquivo(s) contendo a(s) collection(s):

xxxx.json

🚀 Cadastrar/Consultar/Atualizar/Deletar uma Lista de Usuarios

🔖 => Cadastrar

![Captura de tela de 2023-09-22 14-21-52](https://github.com/antoniogmartins/python_restapi/assets/35534493/cbcc3b02-8996-4b98-bfec-330bcaa810a5)

Executando diretamente no prompt:

![Captura de tela de 2023-09-22 14-19-57](https://github.com/antoniogmartins/python_restapi/assets/35534493/63562324-9af6-4ae3-b79d-40147f4e2e63)

🔖 => Listar todos os usuarios

![Captura de tela de 2023-09-22 14-48-45](https://github.com/antoniogmartins/python_restapi/assets/35534493/7be662d5-c137-4b14-912c-96deb43c761e)

Executando diretamente no prompt:

![Captura de tela de 2023-09-22 14-49-19](https://github.com/antoniogmartins/python_restapi/assets/35534493/f727d3f7-685f-4576-abac-c34869519341)

🔖 => Pesquisar somente por 01 usuario

![Captura de tela de 2023-09-22 14-38-41](https://github.com/antoniogmartins/python_restapi/assets/35534493/2c2b11e8-6a71-465b-8303-6c4b30e28dec)

Executando diretamente no prompt:

![Captura de tela de 2023-09-22 14-39-14](https://github.com/antoniogmartins/python_restapi/assets/35534493/5c610c39-6d78-4a14-b193-76522008ba79)

🔖 => Atualizar os dados de um usuario

![Captura de tela de 2023-09-22 14-44-11](https://github.com/antoniogmartins/python_restapi/assets/35534493/8dfe2f86-237d-46be-b9a3-33f1600cafc8)

Executando diretamente no prompt:

![Captura de tela de 2023-09-22 14-44-34](https://github.com/antoniogmartins/python_restapi/assets/35534493/29c1a232-f366-4a55-b727-7b87c010c475)

🔖 => Deletar um usuario

![Captura de tela de 2023-09-22 14-56-35](https://github.com/antoniogmartins/python_restapi/assets/35534493/df4e5a9f-d1aa-4460-b97d-1c31a48981ab)

Executando diretamente no prompt:

![Captura de tela de 2023-09-22 14-57-00](https://github.com/antoniogmartins/python_restapi/assets/35534493/9818fd39-8762-45cb-94fa-b7bbacf837dc)

🚀 Como executar de forma automatica, os smoketests utilizando as apis, por meio do GitActions

Obs.: É preciso que vc esteja conectado a internet

🚀 Integracao Continua - Pipeline

![Captura de tela de 2023-09-22 16-17-06](https://github.com/antoniogmartins/python_restapi/assets/35534493/08c23420-26f5-436c-9114-dd866721a3da)


🚀 Análise do Smoke Tests realizados

Os testes foram executados com exito tanto utilizando o gitactions quanto diretamente por meio do Postman.

🚀 Análise Final

Smoketests concluidos com exito. StatusCode retornados dentro do esperado de acordo com cada metodo do request

🚀 Fontes:

https://gorest.co.in/

📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
Feito com 💜  por Antonio Martins 👋   Meu linkedin
