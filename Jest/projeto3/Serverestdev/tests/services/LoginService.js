const request = require('supertest');
const { baseURL } = require('../config/environment');

class LoginService {

    async login(email, password) {

        return await request(baseURL)
            .post('/login')
            .send({
                email,
                password
            });

    }

}

module.exports = new LoginService();