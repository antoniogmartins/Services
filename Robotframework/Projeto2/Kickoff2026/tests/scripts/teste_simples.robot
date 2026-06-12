*** Settings ***
Library    SeleniumLibrary
Library    Collections
Resource  ../../variables/variables_simples.robot

*** Test Cases ***

CT01 - Validando e exibindo as variaveis

    Log To Console             ${Variavel1}
    Log To Console             ${Variavel2}
    Log To Console             ${Variavel3}
    Log To Console             ${lista[0]}
    Log To Console             ${lista[1]}
    Log To Console             ${lista[2]}
    Log To Console             Nome : ${pessoa['nome']}
    Log to Console             Minha idade é: ${pessoa['idade']}
    Log To Console             Minha cidade é: ${pessoa['cidade']} 
    # ele pega sempre o ultimo valor definido para a chave nome, ou seja, Antonio
    Log To Console             Meu nome é: ${pessoa2['nome'][1]} 
    Log To Console             A listagem de Pessoa 2: ${pessoa2}
    Log To Console             ${pessoa2.veiculo}
  
    #Acessar uma listagem
    @{nomes}=                  Create List    Flor    Jose    Matheus
    &{dados}=                  Create Dictionary           nome=@{nomes}
    ${listagem}=               Get From Dictionary    ${dados}    nome
    ${segundo}=                Get From List    ${listagem}    0
    Log To Console             ${segundo}
    #ou
    ${segundo}=                Set Variable    ${dados['nome'][2]}
    Log To Console             ${segundo}

    #Json
    ${response}=    Evaluate    {"nomes": ["Joaquina", "Manu", "Teimosia"]}

    ${lista}=       Get From Dictionary    ${response}    nomes
    ${segundo}=     Get From List          ${lista}    0

    Log To Console    ${segundo}
    #ou
    ${segundo}=      Set Variable          ${response['nomes'][1]}
    Log To Console      ${segundo}