/**
 * Client.js
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
            defaultsTo: ''
        },

        colorScheme: {
            type: 'text',
            defaultsTo: ''
        },

        conferences: {
            collection: 'Conference',
            via: 'client'
        },

        toJSON: function toJSON() {
            var obj = this.toObject();
            obj.toJSON = null;
            return obj;
        }
    }
};
