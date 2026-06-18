const { expect } = require('chai');
const LoginService = require('../services/LoginService');

describe('Login', () => {

    it('LGN-001 - Login com sucesso', async () => {

        const response =
            await LoginService.login(
                'fulano@qa.com',
                'teste'
            );

        expect(response.status).to.equal(200);

        expect(response.body.message)
            .to.equal('Login realizado com sucesso');

    });

});