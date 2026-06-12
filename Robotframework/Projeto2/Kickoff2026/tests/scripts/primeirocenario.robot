*** Settings ***
Library    SeleniumLibrary
Resource   ../../resources/keywords_primeirocenario.robot
Resource  ../../variables/variables_primeirocenario.robot

*** Test Cases ***
  
CT01 - Preencher Formulário
    Given Abro o Navegador                                      ${URL_PRIMEIROCENARIO}    ${BROWSER}       
    When Escrevo o Nome Bianca no campo first_Name              ${FIRST_NAME}      
    And Escrevo o sobreNome no campo last_Name           ${LAST_NAME}
    # When Escrevo o Nome Bianca no campo first_Name e o sobreNome Campos no campo last_Name       ${FIRST_NAME}       ${LAST_NAME}
    And Escrevo o email no campo user_Email                     ${E_MAIL}
    And Selecione o Sexo Masculino                          
    And Escreva o Telefone no campo user_Telefone               ${TELEFONE}
    Then Capturo a Tela
    And Capturo os Elementos
    And Aguardo 2 segundos

