//Scripts desenvolvidos por: ANtonio G. Martins
describe('Validacao das Apis Rest', () => {
    let resultado
    const token = '5a4f0f863fa656873c54695739bdd93f4f50534d817f8c89ea94a8074adbc3cd'
    const authorization= `Bearer ${ token }`;
    const uuid = () => Cypress._.random(0, 1e6)
    const idgenerator = uuid()
    let id = 0
    let name = ''
    it('Listar todos os Usuarios', () => {
        cy.request({
         method: 'GET',   
         url: 'https://gorest.co.in/public/v2/users',
         headers: {
            'Context-Type':'application/json'
         }
        }).then(response => {
//            resultado = response
            expect(response.status).to.eq(200)
            //response.body
            //expect(response.body[0].name).to.eq('Mrs. Padma Dwivedi')
            expect(response.statusText).to.eq('OK')
        })
    });

    it('Criar 01 Usuario', () => {
        cy.request({
         method: 'POST',   
         url: 'https://gorest.co.in/public/v2/users',
         body: {
            "name":"Tenali Ramakrishna2", 
            "gender":"male", 
            "email": idgenerator+'@gmail.com', 
            "status":"active"
        },
         headers: {
            'Context-Type':'application/json',
            'authorization': authorization         
         }}).then(response => {
            //resultado = response
            expect(response.status).to.eq(201)
            //response.body
            expect(response.body.name).to.eq('Tenali Ramakrishna2')
            expect(response.statusText).to.eq('Created')
            id = response.body.id
            name = response.body.name
        })
      
    });
   
    it('Pesquisar pelo Usuario recentemente cadastrado', () => {
        cy.request({
         method: 'GET',   
         url: 'https://gorest.co.in/public/v2/users/'+id,
         headers: {
            'Context-Type':'application/json',
            'authorization': authorization   
         }
        }).then(response => {
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq(name)
            expect(response.statusText).to.eq('OK')
        })
    });

    it('Alterar Usuario recentemente cadastrado', () => {
        cy.request({
            method: 'PATCH',   
            url: 'https://gorest.co.in/public/v2/users/'+id,
            body: {
               "name":idgenerator, 
               "gender":"male", 
               "email": idgenerator+'@gmail.com', 
               "status":"active"
           },
            headers: {
               'Context-Type':'application/json',
               'authorization': authorization         
            }}).then(response => {
               //resultado = response
               expect(response.status).to.eq(200)
               //response.body
               expect(response.statusText).to.eq('OK')
           })
       });
    
    //This block will delete the user which exist
    it('Deletar Usuario recentemente cadastrado', () => {
    cy.request({method: 'DELETE', url: 'https://reqres.in/api/users/'+id}).then((response) =>{
        //Asserting the status code to be 204 for successful execution
        expect(response.status).to.eq(204)
        expect(response.statusText).to.eq('No Content')
        })
    });

});