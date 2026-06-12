*** Variables ***
# GERAL
${BROWSER}      Chrome
${Selenium_Speed}    0.5

# Variáveis para o DESAFIO 2
# Data inputs
${URL_DESAFIO2}                  https://practicetestautomation.com/practice-test-login/
${USUARIO_DESAFIO2}              student
${USUARIOINVALIDO_DESAFIO2}      student 1
${SENHA_DESAFIO2}                Password123

# locators
${input_username}        //input[@id='username']
${input_password}        //input[@id='password']
${button_submit}         //button[@id='submit']

${URL_PRINCIPAL}          https://practicetestautomation.com/logged-in-successfully/

${LOGGED_SUCDESSFULLY}   Logged In Successfully
${CONGRATULATIONS}       Congratulations student. You successfully logged in!
${MENSAGEM_ACCESS_USER_ERROR}        Your username is invalid!


# fim