const request = require('supertest');
const { baseURL } = require('../config/environment');

class UsuarioService {

    async criarUsuario(body, token) {

        return await request(baseURL)
            .post('/usuarios')
            .set('Authorization', token)
            .send(body);

    }

}

module.exports = new UsuarioService();