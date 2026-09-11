Feature: Resources API

  Scenario: CT01 Listar todos os Recursos e verificar retorno do response
     Given url baseUrl
     And path 'posts'
     And header Accept = 'application/json'
     When method get
     Then status 200
     And def data = read('../data/recursos/response/recursos.json')
     And match each response contains data
     And match response[0].id == '#number'

  Scenario: CT02 Listar Recurso por userID e verificar que o UserId retornado é 1
     Given url baseUrl
     And path 'posts/1'
     And header Accept = 'application/json'
     When method get
     Then status 200
     And match response.userId == 1
     And match response.id == 1
     And match response.title == '#string'
     And match response.body == '#string'

Scenario: CT03 Filtrar Recursos por userId e verificar que o UserId retornado é 1
     Given url baseUrl
     And path 'posts'
     And param userId = 1
     When method get
     Then status 200
     And def data = read('../data/recursos/response/recursos.json')
     And match each response contains data

Scenario: CT04 Listar Hierarquia dos Recursos e verificar que o Body é uma string
     Given url baseUrl
     And path 'posts',3, 'comments'
     When method get
     Then status 200
     And def data = read('../data/recursos/response/recursos_listagem.json')
     And match each response contains data

Scenario: CT05 Criar Recurso e verificar o retorno do response
     Given url baseUrl
     And path 'posts'
     And def data = read('../data/recursos/request/recursos_create.json')
     And request data
     And header Accept = 'application/json'
     When method post
     Then status 201
     #And match response.id == 101
     And def data = read('../data/recursos/response/recursos_conteudo_listagem.json')
     And match response contains data

Scenario: CT06 Atualizar todos os dados de um Recurso
     Given url baseUrl
     And path 'posts', 1
     And def data = read('../data/recursos/request/recursos.json')
     And request data
     And header Accept = 'application/json'
     When method put
     Then status 200
     And def data = read('../data/recursos/response/recursos_put.json')
     And match response == data

Scenario: CT07 Atualizar somente um dado do Recurso
     Given url baseUrl
     And path 'posts', 1
     And def data = read('../data/recursos/request/recursos_patch.json')
     And request data
     And header Accept = 'application/json'
     When method patch
     Then status 200
     And def data = read('../data/recursos/response/recursos_patch.json')
     And match response == data

Scenario: CT08 Deletar Recurso
     Given url baseUrl
     And path 'posts', 1
     And header Accept = 'application/json'
     When method delete
     Then status 200