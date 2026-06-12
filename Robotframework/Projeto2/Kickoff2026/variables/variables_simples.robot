*** Variables ***
# GERAL
${BROWSER}      Chrome
${Selenium_Speed}    0.5

# Para fins de treinamento
# Inicio
${Variavel1}    Valor da Variavel é: carro
${Variavel2}    Valor da Variavel é: maça
${Variavel3}    Valor da Variavel é: banana

#Definimos uma lista utilizando o simbolo (@) e atribuímos os valores das variáveis a ela
@{lista}       ${Variavel1}    ${Variavel2}    ${Variavel3}

&{pessoa}     
...    nome=Bianca    
...    idade=30    
...    cidade=São Paulo

&{pessoa2}     
...    nome=Bianca
...    idade=30    
...    cidade=São Paulo
...    veiculo=${lista[2]}
...    nome=Antonio



# fim