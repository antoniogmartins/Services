module.exports = {

    type: 'object',

    required: [
        'message',
        'authorization'
    ],

    properties: {

        message: {
            type: 'string'
        },

        authorization: {
            type: 'string'
        }

    }

};