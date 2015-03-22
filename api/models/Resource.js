/**
 * Resource.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        name: {
            type: 'string',
            required: true,
            minLength: 1
        },
        
        type: {
            type: 'string',
            required: true
        },

        path: {
            type: 'text',
            required: true
        },

        category: {
            model: 'ResourceCategory',
            required: true
        },

        slides: {
            collection: 'Slide',
            via: 'resources'
        },

        toJSON: function toJSON() {
            var obj = this.toObject();
            obj.toJSON = null;
            return obj;
        }
    }
};
