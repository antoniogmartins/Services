*** Settings ***
Documentation     Suite de Testes validando APIś - Author: ANTONIO G. MARTINS.
Resource          validar_apis.robot

*** Test Cases ***
 CENARIO 01: Gerar Token
      Gerar token para a Apis

 CENARIO 02: Pesquisar por todos os contatos Cadastrados
      Buscar Todos os Contatos

 CENARIO 03: Cadastrar um contato 
      Cadastrar Um Contato      

 CENARIO 04: Pesquisar por um contato cadastrado
      Buscar Um Contato    

 CENARIO 04: Alterar um contato cadastrado
       Alterar Um Contato    

 CENARIO 05: Deletar por um contato cadastrado
      Deletar Um Contato    