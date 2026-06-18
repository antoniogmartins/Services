const { expect } = require('chai');

const UsuarioService =
    require('../../services/UsuarioService');

const UsuarioPayload =
    require('../../payloads/usuarioPayload');

const {
    obterToken
} = require('../../helpers/authHelper');

describe('Usuários', () => {

    let token;

    before(async () => {

        token = await obterToken();

    });

    it('USR-001 - Criar usuário', async () => {

        const body =
            UsuarioPayload.usuarioAdmin();

        const response =
            await UsuarioService.criarUsuario(
                body,
                token
            );

        expect(response.status)
            .to.equal(201);

        expect(response.body.message)
            .to.equal('Cadastro realizado com sucesso');

    });

});