# Generative AI Assisted API Testing Framework (RestApi) + RestAssured

## Problema de Negócio ##

Antes de escrever qualquer código, explique o problema.

## Desafio ##

Times de QA gastam muitas horas em:

- Elaborar cenários
- Criar massa de teste
- Desenvolver assertions
- Revisar automações
- Criar documentação

Este projeto demonstra como a IA Generativa pode acelerar essas atividades sem substituir a análise crítica do QA.

🚀 Arquitetura do Projeto

<img width="696" height="503" alt="image" src="https://github.com/user-attachments/assets/917560af-2198-418e-9055-705b1cd85e98" />

============================================================================================================

## Fase 1 - Test Design Assistido por IA ##

🔖 Objetivo

Mostrar como a IA auxilia na análise.

🔖 Cenário

Endpoint:

    POST /users

Payload

<img width="696" height="145" alt="image" src="https://github.com/user-attachments/assets/eb6cf613-aca1-4972-a282-ea7344242376" />

🔖 Prompt Utilizado

<img width="693" height="353" alt="image" src="https://github.com/user-attachments/assets/61d472c7-1952-4818-9c47-d2109c04a053" />


🔖 Resultado da IA

=> Casos de Testes:

| Positivos                             | Negativo                              | Borda                                  | Performance                                 |
| :------------------------------------ | :------------------------------------ | :------------------------------------- | :------------------------------------------ |
| 📝 CT001 Cadastro válido              | 📝 CT004 Nome vazio                   | 📝 CT007 255 caracteres                | 📝 CT009 100 requisições simultâneas        |
| 📝 CT002 Nome com acento              | 📝 CT005 Job vazio                    | 📝 CT008 256 caracteres                | 📝 CT010 500 requisições simultâneas        |
| 📝 CT003 Nome composto                | 📝 CT006 Payload nulo                 |                                        |                                             |



============================================================================================================

## Fase 2 - Massa de Teste Gerada por IA ##


🔖 Prompt Utilizado

<img width="693" height="61" alt="image" src="https://github.com/user-attachments/assets/4e1d3e86-9d05-49a9-9a50-f975c85bbdf5" />

Resposta

<img width="702" height="245" alt="image" src="https://github.com/user-attachments/assets/a0372494-983d-4489-a81d-249081cdbbfa" />

Implementação


============================================================================================================

🚀 IA Gerando Massa

Prompt documentado:

           Atue como QA Senior.

           Gere 10 usuários brasileiros válidos.

           Formato JSON.

Resultado salvo em:

src/test/resources/testdata/users.json

[

 {

   "name":"Antonio Martins",

   "job":"QA Senior"

 },

 {

   "name":"Maria Oliveira",

   "job":"Product Owner"

 }

]


🚀 IA Gerando Assertions






🚀 Collections: 
#### Nome do Arquivo: GO Rest.postman_collection.json.json 

### Cadastro/Consultar Usuario
## 🔖 Requisitos funcionais
- [X] Deve retornar 201 ao cadastrar um usuario
- [X] Deve retornar 200 ao listar todos os usuarios cadastrados
- [X] Deve retornar 200 ao pesquisar somente por 1 ususario existente
- [X] Deve retornar 200 ao alterar um usuario existente
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

🚀 Demonstração Geral de um crud contendo uma Lista de Usuarios
🚀 Cadastrar/Consultar/Atualizar/Deletar uma Lista de Usuarios

Executando diretamente pelo cypress:
![Captura de tela de 2023-10-06 13-50-20](https://github.com/antoniogmartins/cypress/assets/35534493/2e78d3d6-a74c-4c23-a5cf-f7c1d8a791be)

🔖 => Cadastrar

No código fonte
![Captura de tela de 2023-10-06 13-06-00](https://github.com/antoniogmartins/cypress/assets/35534493/de3d7fb9-ff1a-4a18-90a6-426120befd25)

Executando diretamente pelo cypress:
![Captura de tela de 2023-10-06 13-07-36](https://github.com/antoniogmartins/cypress/assets/35534493/d43feb9a-a935-4ae4-8202-e28718da2def)


🔖 => Listar todos os usuarios

No código fonte
![Captura de tela de 2023-10-06 13-09-25](https://github.com/antoniogmartins/cypress/assets/35534493/6c4ef279-7dca-47a4-aa45-cd469edb4f62)

Executando diretamente pelo cypress:
![Captura de tela de 2023-10-06 13-07-27](https://github.com/antoniogmartins/cypress/assets/35534493/ad640b1c-779c-4a2b-a319-c522f956aed0)


🔖 => Pesquisar somente por 01 usuario

No código fonte
![Captura de tela de 2023-10-06 13-06-23](https://github.com/antoniogmartins/cypress/assets/35534493/c4233c89-6f18-4583-912c-ebb66732c7d9)

Executando diretamente pelo cypress:
![Captura de tela de 2023-10-06 13-07-42](https://github.com/antoniogmartins/cypress/assets/35534493/82077b00-3dfc-46be-b6ff-6cbfc15e0d2e)


🔖 => Atualizar os dados de um usuario

No código fonte
![Captura de tela de 2023-10-06 13-06-28](https://github.com/antoniogmartins/cypress/assets/35534493/2a8020a5-8562-4bde-a45a-85d2229bc310)

Executando diretamente pelo cypress:
![Captura de tela de 2023-10-06 13-07-52](https://github.com/antoniogmartins/cypress/assets/35534493/1097a31a-e75c-43fb-b80f-d585741e154b)


🔖 => Deletar um usuario

No código fonte
![Captura de tela de 2023-10-06 13-06-31](https://github.com/antoniogmartins/cypress/assets/35534493/72241a7f-326d-4bd6-bd04-cdb99d0dfcfe)

Executando diretamente pelo cypress:
![Captura de tela de 2023-10-06 13-07-59](https://github.com/antoniogmartins/cypress/assets/35534493/0f584e02-7aee-45e3-b6cc-85b148b0cbd7)


🚀 Como executar de forma automatica, os smoketests utilizando as apis, por meio do GitActions

Obs.: É preciso que vc esteja conectado a internet

🚀 Integracao Continua - Pipeline


🚀 Análise do Smoke Tests realizados

Os testes foram executados com exito tanto utilizando o gitactions quanto diretamente por meio do Postman no apoio a validação das rotas das apis.

🚀 Análise Final

Smoketests concluidos com exito. StatusCode retornados dentro do esperado de acordo com cada metodo do request

🚀 Fontes:

https://gorest.co.in/

📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
Feito com 💜  por Antonio Martins 👋   Meu linkedin

