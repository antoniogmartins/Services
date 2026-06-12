*** Settings ***
Library    SeleniumLibrary
Test Tags  SetandoNomeDoTeste
Resource   ../../resources/keywords_desafio1.robot
Resource  ../../variables/variables_desafio1.robot

Test Setup    Abro o Navegador    ${URL_DESAFIO1}    ${BROWSER}  

Suite Setup

Test Teardown  Fechar Navegador    

Suite Teardown

*** Test Cases ***
  
CT01 - Validar Login
    [Tags]   CT01     primeiro
#    Given Abro o Navegador                            ${URL_DESAFIO1}    ${BROWSER} 
          
    Given Escrevo usuario no campo Username            ${USUARIO_DESAFIO1}      
    And Escrevo senha no campo Password               ${SENHA_DESAFIO1}
    And Capturo os Elementos
    And Capturo a Tela
    When Clico no botão Submit                          
    Then Verifico se houve redirecionamento para a pagina principal
    And Verifico se estou logado 
    And Capturo a Tela                     
#    And Aguardo 2 segundos
#    And Fechar Navegador 

CT02 - Validar Efetuar Login com usuario invalido
    [Tags]   CT02     segundo
#    Given Abro o Navegador                            ${URL_DESAFIO1}    ${BROWSER}       

    Given Escrevo usuario no campo Username            ${USUARIOINVALIDO_DESAFIO1}     
    And Escrevo senha no campo Password               ${SENHA_DESAFIO1}
    And Capturo os Elementos com error
    When Clico no botão Submit                          
    And Capturo a Tela com Error
    Then Verifico mensagem de error              
#    And Aguardo 2 segundos  
#    And Fechar Navegador  