/**
 * ResourceCategory.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        name: {
            type: 'string',
            unique: true,
            required: true,
            minLength: 1
        },

        isVisible: {
            type: 'boolean',
            defaultsTo: true
        },

        resources: {
            collection: 'Resource',
            via: 'category'
        },

        conference: {
            model: 'Conference',
            required: true
        }
    }
};
