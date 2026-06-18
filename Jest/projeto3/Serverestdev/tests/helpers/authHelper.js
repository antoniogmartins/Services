const LoginService = require('../services/LoginService');

async function obterToken() {

    const response = await LoginService.login(
        'fulano@qa.com',
        'teste'
    );

    return response.body.authorization;

}

module.exports = {
    obterToken
};