module.exports = {

    usuarioAdmin() {

        return {
            nome: 'QA Automation',
            email: `qa${Date.now()}@email.com`,
            password: 'teste',
            administrador: 'true'
        };

    }

};