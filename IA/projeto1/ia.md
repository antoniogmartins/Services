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

<img width="696" height="503" alt="image" src="https://github.com/user-attachments/assets/917560af-2198-418e-9055-705b1cd85e98">

🚀 Tecnologias

| Automação               |
| :---------------------- |
| 📝 Java11               |
| 📝 Maven                |
| 📝 RestAssured          |
| 📝 Junit 5              |
| 📝 Jackson              |
 
| IA Generativa           |
| :---------------------- |
| 📝 ChapGpt              |
| 📝 GitHub Copilot       |
| 📝 Gemini               |



🚀 Setup Maven

<dependencies>
 
    <dependency>
        <groupId>io.rest-assured</groupId>
        <artifactId>rest-assured</artifactId>
        <version>5.5.0</version>
        <scope>test</scope>
    </dependency>

    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter</artifactId>
        <version>5.11.0</version>
        <scope>test</scope>
    </dependency>

</dependencies>

============================================================================================================

## Fase 1 - Test Design Assistido por IA ##

🔖 Objetivo

Mostrar como a IA auxilia na análise.

🔖 Cenário

Endpoint:

   GET https://reqres.in/api/users/2
   
   POST https://reqres.in/api/users

Payload

<img width="696" height="145" alt="image" src="https://github.com/user-attachments/assets/eb6cf613-aca1-4972-a282-ea7344242376" />

🔖 Prompt Utilizado

<img width="693" height="353" alt="image" src="https://github.com/user-attachments/assets/61d472c7-1952-4818-9c47-d2109c04a053" />


🔖 Resultado da IA

🔖  Gerando Casos de Testes:

| Positivos                                        | Negativo                              | Borda (criar usuario com tamanho maximo                 | Performance                                 |
| :----------------------------------------------- | :------------------------------------ | :------------------------------------------------------ | :------------------------------------------ |
| 📝 CT001 Cadastrar usuario válido                | 📝 CT004 Nome vazio                   | 📝 CT007 Cadastrar usuario ate 1 caracter               | 📝 CT015 100 requisições simultâneas        |
| 📝 CT002 Cadastrar Nome de usuario com acento    | 📝 CT005 Job vazio                    | 📝 CT008 Cadastrar usuario com mais de 255 caracteres   | 📝 CT016 500 requisições simultâneas        |
| 📝 CT003 Cadastrar Nome de usuario composto      | 📝 CT006 Payload nulo                 | 📝 CT009 Cadastrar usuario com mais de 256 caracteres   |                                             |
|                                                  |                                       | 📝 CT010 Cadastrar usuario com caracteres especiais     |                                             |
|                                                  |                                       | 📝 CT011 Cadastrar usuario com caracteres unidoce       |                                             |
|                                                  |                                       | 📝 CT012 Cadastrar usuario com campos nulo              |                                             |
|                                                  |                                       | 📝 CT013 Cadastrar usuario com campos vazio             |                                             |
|                                                  |                                       | 📝 CT014 Cadastrar usuario com espaços em branco        |                                             |

🔖  Implementando:

<img width="699" height="456" alt="image" src="https://github.com/user-attachments/assets/ae752a20-3484-4b5a-8a8e-55419fe5cad5" />

============================================================================================================

## Fase 2 - Assertions Gerada por IA ##

<img width="709" height="215" alt="image" src="https://github.com/user-attachments/assets/c76096c8-1ef3-47b4-9a7f-3fa1dcc1fe27" />

🔖 Prompt Utilizado

<img width="709" height="57" alt="image" src="https://github.com/user-attachments/assets/dc22e771-fce9-4740-a6b1-bc42793d8b12" />


🔖 Resposta IA

<img width="706" height="146" alt="image" src="https://github.com/user-attachments/assets/4a47881d-c9a2-4afa-b0bb-90319981d1cf" />

🔖 Implementando:

<img width="722" height="358" alt="image" src="https://github.com/user-attachments/assets/c7d0f1df-0c25-4ddf-b470-b59ef336d20b" />


============================================================================================================

## Fase 3 - Massa de Teste Gerada por IA ##

🔖 Prompt Utilizado

<img width="693" height="61" alt="image" src="https://github.com/user-attachments/assets/4e1d3e86-9d05-49a9-9a50-f975c85bbdf5" />

🔖 Resposta da IA

<img width="725" height="338" alt="image" src="https://github.com/user-attachments/assets/8db6fd4a-80d2-4e0c-9c4e-67c02805d1cb" />

🔖 Implementação

<img width="705" height="492" alt="image" src="https://github.com/user-attachments/assets/158b2767-1bd5-4c65-bdb4-6efa0ad783fe" />

============================================================================================================

## Fase 4 - Casos de Borda Gerados por IA ##

🔖 Prompt Utilizado

<img width="704" height="90" alt="image" src="https://github.com/user-attachments/assets/f58e68fc-6475-4a2a-b629-83be7847bb51" />

🔖 Resposta da IA

<img width="707" height="314" alt="image" src="https://github.com/user-attachments/assets/3749bf02-bb39-4ea4-865d-47dc6ac3bcb1" />

🔖 Implementação

<img width="683" height="483" alt="image" src="https://github.com/user-attachments/assets/6e524185-7e69-4739-8279-e613603496fd" />

============================================================================================================

## Fase 5 - JSON Schema Gerados por IA ##

🔖 Prompt Utilizado

<img width="705" height="55" alt="image" src="https://github.com/user-attachments/assets/25bad941-b53b-4dcd-86bd-c2e3a283b006" />

🔖 Resposta da IA

<img width="713" height="274" alt="image" src="https://github.com/user-attachments/assets/46e55edc-f0ee-468e-8bd8-08615a7452c1" />

🔖 Implementação

<img width="712" height="316" alt="image" src="https://github.com/user-attachments/assets/46d0a18e-d9b4-42fd-a272-49d09c51e16b" />

============================================================================================================

## Fase 6 - IA Descobrindo Testes que Você Não Pensou #

🔖 Prompt Utilizado

<img width="701" height="217" alt="image" src="https://github.com/user-attachments/assets/4400d0a9-5036-46af-aa00-aca6530208a4" />

🔖 Resposta da IA

<img width="714" height="129" alt="image" src="https://github.com/user-attachments/assets/34c86693-ab12-462d-b7b1-da5551de4b42" />

🔖 Segurança

<img width="702" height="163" alt="image" src="https://github.com/user-attachments/assets/5f33576e-c579-406a-962d-8f85dc4cead1" />

🔖 Resiliência

<img width="703" height="139" alt="image" src="https://github.com/user-attachments/assets/b11beb83-48c2-4c34-a4d8-3c589bf80cf7" />

============================================================================================================

## Fase 7 - POJO Gerados por IA ##

🔖 Prompt Utilizado

<img width="703" height="203" alt="image" src="https://github.com/user-attachments/assets/0d31fb7c-12c6-4fc0-81bb-33f304a3bfdf" />

🔖 Resposta da IA

<img width="703" height="440" alt="image" src="https://github.com/user-attachments/assets/93a9b90d-b7f6-4671-812f-c5dac2e08655" />

🔖 Implementação

<img width="709" height="235" alt="image" src="https://github.com/user-attachments/assets/e640e2ed-bafd-44ef-9f09-105df02252c9" />

============================================================================================================

## Fase 8 - IA Atuano como Revisor de AUtomação ##

🔖 Prompt Utilizado

<img width="711" height="95" alt="image" src="https://github.com/user-attachments/assets/2fc154e4-d27e-4537-89b1-f140d8883888" />

🔖 Resposta da IA (Sugestão da IA)

<img width="710" height="273" alt="image" src="https://github.com/user-attachments/assets/f51125b8-cfe2-4838-b530-7a8d18eff193" />

============================================================================================================

🚀 Estrutura do Repositório 

<img width="721" height="588" alt="image" src="https://github.com/user-attachments/assets/f91689f5-582c-4f67-ba17-524ff38c017d" />

============================================================================================================

🚀 Como a IA foi utilizada

| Atividade                 | IA Utilizada |
| ------------------------- | ------------ |
| Geração de cenários       | ChatGPT      |
| Criação de massa de teste | ChatGPT      |
| Criação de POJOs          | Copilot      |
| Geração de JSON Schema    | Gemini       |
| Revisão de código         | ChatGPT      |
| Identificação de riscos   | ChatGPT      |

============================================================================================================

📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
Feito com 💜  por Antonio Martins 👋   Meu linkedin

