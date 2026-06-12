*** Settings ***
Library    SeleniumLibrary
Library    XML
Resource   ../variables/variables_desafio1.robot

*** Keywords ***
Abro o Navegador  
    [Arguments]            ${url}    ${browser}
    Set Selenium Speed     value=${Selenium_Speed}
    Open Browser           url=${url}              browser=${browser}
    Maximize Browser Window
Escrevo usuario no campo Username  
    [Arguments]         ${user_name}    
    Input Text          locator=${input_username}        text=${user_name}

Escrevo senha no campo Password  
    [Arguments]         ${password}    
    Input Text          locator=${input_password}        text=${password}

Clico no botão Submit
    Click Button        locator=id=submit

Verifico se houve redirecionamento para a pagina principal
    Location Should Be       ${URL_PRINCIPAL}    

Verifico se estou logado
    Element Should Contain    xpath=//h1[normalize-space()='Logged In Successfully']   ${LOGGED_SUCDESSFULLY}
    Element Should Contain    xpath=//strong[contains(text(),'Congratulations student. You successfully logged i')]      ${CONGRATULATIONS}

Verifico mensagem de error
    Element Should Contain    xpath=//div[@id='error']        ${MENSAGEM_ACCESS_USER_ERROR}
Capturo a Tela
    Capture Page Screenshot          ../../tests/Evidencias/desafio1/Tela/Tela_sucesso.png

Capturo a Tela com Error
    Capture Page Screenshot          ../../tests/Evidencias/desafio1/Tela/Tela_login_Parte01_Error.png 
    Press Keys    NONE    PAGE_DOWN
    Capture Page Screenshot          ../../tests/Evidencias/desafio1/Tela/Tela_login_Parte02_Error.png    

Capturo os Elementos
    Capture Element Screenshot         ${input_username}               ../../tests/Evidencias/desafio1/Campos/FirstName.png        
    Capture Element Screenshot         ${input_password}               ../../tests/Evidencias/desafio1/Campos/LastName.png   
    Capture Page Screenshot                                            ../../tests/Evidencias/desafio1/Tela/Tela_login.png               

Capturo os Elementos com error
    Capture Element Screenshot         ${input_username}               ../../tests/Evidencias/desafio1/Campos/FirstName_Error.png        
    Capture Element Screenshot         ${input_password}               ../../tests/Evidencias/desafio1/Campos/LastName_Error.png   

Aguardo 2 segundos
    Sleep  2s

Fechar Navegador    
    Aguardo 2 segundos
    Close Browser