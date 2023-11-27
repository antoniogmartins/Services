*** Settings ***
Documentation     Suite de Testes validando apis - Author: ANTONIO G. MARTINS.
Library           RequestsLibrary
Library           Collections
Library           JSONLibrary
           

*** Variables ***
${base_url}  https://thinking-tester-contact-list.herokuapp.com
${endPointtoken}  /users/login
${id_contact}  651b1a811ee68f0013b207e3
${endPointlistContacts}  /contacts
${id_path}    $.user._id
*** Keywords ***
         
Gerar token para a Apis

      Create Session  aliasName  url=${base_url}   disable_warnings=1
      
      ${header}=  Create dictionary  Content-Type=application/json  
      &{data_token}=  Create dictionary  
      ...  email=agmartins2018@gmail.com  
      ...  password=12345678
      
      ${response}=  POST On Session  alias=aliasName   url=${endPointtoken}  json=${data_token}   headers=${header}
      Log To Console  Resposta do Json: ${response.content}
      Log To Console  ============================
     
 #     ${resposta}=  Convert To String  ${response.text}
 #     Log To Console  Convertendo o Response para Texto: ${resposta}
 #     Log To Console  ============================

 #     ${obj}=  Convert To String  ${response.json()}   
 #     Log To Console  Convertendo para uma String: ${obj}
 #     Log To Console  ============================

      ${token}=  Convert To String  ${response.json()["token"]}        
      Log To Console  Pegando o atributo token do json: ${token}
      Set Suite Variable    ${token}
# ou
#      ${json_response}=  Convert String To Json  ${response.content} 
#      ${token}=  Get Value From Json  ${json_response}   ${id_token}        
#      Log To Console  Pegando o atributo token do json: ${token}
#      Set Suite Variable    ${token}

#Validations
      ${status_code}=  Convert To String    ${response.status_code}
      Should Be Equal    ${status_code}    200

      ${json_response}=  Convert String To Json    ${response.content}
      ${conteudo}=    Get Value From Json    ${json_response}  ${idpath} 
      Should Not Be Empty   ${conteudo} 


Buscar Todos os Contatos
 
      Create Session  aliasName  url=${base_url}    disable_warnings=1

      ${header}=  Create dictionary  Content-Type=application/json   Authorization=Bearer ${token}   

      ${response}=  GET On Session  alias=aliasName   url=${endPointlistContacts}  headers=${header}  
  
      Log To Console   ============================
      Log To Console   Retorno: ${response.json}
      Log To Console   ============================
      Log To Console   Status Code: ${response.status_code}
      Should Be True   200 == ${response.status_code}
      Log To Console   ============================
      Log To Console   Response: ${response.content}

#Validations
      ${status_code}=  Convert To String    ${response.status_code}
      Should Be Equal    ${status_code}    200

Cadastrar Um Contato 
      
      Create Session  aliasName  url=${base_url}   disable_warnings=1
      ${Contacts}  set variable    /contacts/
      
      ${header}=  Create dictionary  Content-Type=application/json   Authorization=Bearer ${token}
      &{data_post}=  Create dictionary  
      ...  firstName=Ana   
      ...  lastName=de Fatima
      ...  birthdate=1977-07-07
      ...  email=maneol@gmail.com
      ...  phone=21999991919
      ...  street1=xpto 1
      ...  city=rj
      ...  stateProvince=rj
      ...  postalCode=2024020
      ...  country=brasil
      ...  owner=64fb27375bffa8001368e49c
      ...  v=0

      ${response}=  POST On Session  alias=aliasName   url=${Contacts}  json=${data_post}  headers=${header}
      
      Log To Console  Resposta do Json: ${response.content}
      Log To Console  ============================
     
      ${id}=  Convert To String  ${response.json()["_id"]}        
      Log To Console  Pegando o atributo id do json: ${id}
      Set Suite Variable   ${id}

#Validations
      ${status_code}=  Convert To String    ${response.status_code}
      Should Be Equal    ${status_code}    201

Buscar Um Contato
 
      Create Session  aliasName  url=${base_url}    disable_warnings=1
      ${header}=  Create dictionary  Content-Type=application/json   Authorization=Bearer ${token}   

      ${response}=  GET On Session  alias=aliasName   url=${endPointlistContacts}${id_contact}   headers=${header}  
  
      Log To Console   ============================
      Log To Console   Retorno: ${response.json}
      Log To Console   ============================
      Log To Console   Status Code: ${response.status_code}
      Should Be True   200 == ${response.status_code}
      Log To Console   ============================
      Log To Console   Response: ${response.content}

#Validations
      ${status_code}=  Convert To String    ${response.status_code}
      Should Be Equal    ${status_code}    200

Alterar Um Contato
 
      Create Session  aliasName  url=${base_url}   disable_warnings=1
      ${Contacts}  set variable    /contacts/
      
      ${header}=  Create dictionary  Content-Type=application/json   Authorization=Bearer ${token}
      &{data_post}=  Create dictionary  
      ...  firstName=zE   
      ...  lastName=Ramalho
      ...  birthdate=1977-07-25
      ...  email=maneol@gmail.com
      ...  phone=21999991919
      ...  street1=xpto 1
      ...  city=rj
      ...  stateProvince=rj
      ...  postalCode=2024020
      ...  country=brasil
      ...  owner=64fb27375bffa8001368e49c
      ...  v=0

      ${response}=  PUT On Session  alias=aliasName   url=${Contacts}${id}  json=${data_post}  headers=${header}
      
      Log To Console  Resposta do Json: ${response.content}
      Log To Console  ============================

#Validations
      ${status_code}=  Convert To String    ${response.status_code}
      Should Be Equal    ${status_code}    200

Deletar Um Contato
 
      Create Session  aliasName  url=${base_url}   disable_warnings=1
      ${Contacts}  set variable    /contacts/
      
      ${header}=  Create dictionary  Content-Type=application/json   Authorization=Bearer ${token}

      ${response}=  DELETE On Session  alias=aliasName   url=${Contacts}${id}  headers=${header}
      
      Log To Console  Resposta do Json: ${response.content}

#Validations
      ${status_code}=  Convert To String    ${response.status_code}
      Should Be Equal    ${status_code}    200