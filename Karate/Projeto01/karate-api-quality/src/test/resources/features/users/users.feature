Feature: Users API

  Scenario: CT01 Listar todos Usuarios
    Given url baseUrl
    And path 'users'
    And header Accept = 'application/json'
    When method get
    Then status 200
    And def data = read('../data/users/response/users.json')
    And match each response contains data
    And def streets = karate.map(response, function(x){ return x.address.street })
    And match each streets == '#string'

  Scenario: CT02 Listar um Usuario
    Given url baseUrl
    And path 'users', 1
    And header Accept = 'application/json'
    When method get
    Then status 200
    And def data = read('../data/users/response/users.json')
    And match response == data
    And match response.address.geo.lat == '#string'

  Scenario: CT03 Listar Comentarios de todos Usuarios
    Given url baseUrl
    And path 'users', 1, 'comments'
    And header Accept = 'application/json'
    When method get
    Then status 200
    And def data = read('../data/users/response/comments.json')
    And match each response contains data

  Scenario: CT04 Listar Comentarios relacionados a um PostId
    Given url baseUrl
    And path 'comments'
    And param postId = 10
    And header Accept = 'application/json'
    When method get
    Then status 200
    And def data = read('../data/users/response/comments.json')
    And match each response contains data

  Scenario: CT05 Criar um Usuario
    Given url baseUrl
    And path 'users'
    And def data = read('../data/users/request/users.json')
    And request data
    And header Accept = 'application/json'
    When method post
    Then status 201
    And def data = read('../data/users/response/users_create.json')
    And match response == data

  Scenario: CT06 Atualizar todos os dados de um Usuario
    Given url baseUrl
    And path 'users', 10
    And def data = read('../data/users/request/users.json')
    And request data
    And header Accept = 'application/json'
    When method put
    Then status 200
    And def data = read('../data/users/response/users_create.json')
    And match response == data

  Scenario: CT07 Atualizar somente um dado do Usuario
    Given url baseUrl
    And path 'users', 1
    And def data = read('../data/users/request/users_patch.json')
    And request data
    And header Accept = 'application/json'
    When method patch
    Then status 200
    And def data = read('../data/users/response/users_patch.json')
    And match response == data

  Scenario: CT08 Deletar Usuario
    Given url baseUrl
    And path 'users', 1
    And header Accept = 'application/json'
    When method delete
    Then status 200