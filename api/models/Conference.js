/**
 * Conference.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        name: {
            type: 'string',
            required: true
        },

        logo: {
            type: 'text',
            required: true
        },

        colorScheme: {
            type: 'text',
            required: true
        },

        token: {
            type: 'string',
            required: true,
            unique: true
        },

        description: {
            type: 'text'
        },

        restrictions: {
            type: 'array'
        },

        presentations: {
            collection: 'Presentation',
            via: 'conference'
        },

        categories: {
            collection: 'ResourceCategory',
            via: 'conference'
        },

        client: {
            model: 'Client',
            required: true
        }
    }
};
