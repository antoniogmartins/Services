*** Settings ***
Library    SeleniumLibrary
Resource   ../variables/variables_primeirocenario.robot

*** Keywords ***
Abro o Navegador  
    [Arguments]            ${url}    ${browser}
    Set Selenium Speed     value=${Selenium_Speed}
    Open Browser           url=${url}              browser=${browser}
    Maximize Browser Window

Escrevo o Nome Bianca no campo first_Name
    [Arguments]         ${first_name}    
    Input Text          ${input_firstname}        ${first_name}

Escrevo o sobreNome no campo last_Name
    [Arguments]         ${last_name}    
    Input Text          ${input_lastname}        ${last_name}


Escrevo o email no campo user_Email
    [Arguments]         ${e_mail}    
    Input Text          ${input_email}           ${e_mail}

Selecione o Sexo Masculino 
    Click Element    ${gender}    

Escreva o Telefone no campo user_Telefone 
    [Arguments]         ${telefone}    
    Input Text          ${input_telefone}        ${telefone}    

Capturo a Tela
    Capture Page Screenshot          ../../tests/Evidencias/primeirocenario/Tela/formulario.png

Capturo os Elementos
    Capture Element Screenshot         ${input_firstname}               ../../tests/Evidencias/primeirocenario/Campos/FirstName.png        
    Capture Element Screenshot         ${input_lastname}                ../../tests/Evidencias/primeirocenario/Campos/LastName.png          
    Capture Element Screenshot         ${input_email}                   ../../tests/Evidencias/primeirocenario/Campos/Email.png          
    Capture Element Screenshot         ${input_telefone}                ../../tests/Evidencias/primeirocenario/Campos/Telefone.png          
    Capture Element Screenshot         ${gender}                        ../../tests/Evidencias/primeirocenario/Campos/Sexo.png          
     
    
Aguardo 2 segundos
    Sleep  2s

*** Comments ***    
Escrevo o Nome Bianca no campo first_Name e o sobreNome Campos no campo last_Name 
    [Arguments]         ${first_name}              ${last_name}
    Input Text          ${input_firstname}        ${first_name}    
    Input Text          ${input_lastname}         ${last_name}
    
