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

        url: {
            type: 'string',
            required: true
        },

        token: {
            type: 'string',
            required: true,
            unique: true
        },

        imported: {
            type: 'boolean',
            defaultsTo: false
        },

        exported: {
            type: 'boolean',
            defaultsTo: false
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

        quizzes: {
            collection: 'Quizz',
            via: 'conference'
        },

        chatrooms: {
            collection: 'Chatroom',
            via: 'conference'
        },

        tracks: {
            collection: 'Track',
            via: 'conference'
        },

        roles: {
            collection: 'Role',
            via: 'conference'
        },

        client: {
            model: 'Client',
            required: true
        },

        toJSON: function toJSON() {
            var obj = this.toObject();
            obj.toJSON = null;
            return obj;
        }
    }
};
