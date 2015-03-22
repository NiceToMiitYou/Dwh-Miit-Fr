/**
 * Track.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        action: {
            type: 'string',
            required: true
        },

        start: {
            type: 'datetime'
        },

        end: {
            type: 'datetime'
        },

        user: {
            model: 'User',
            required: true
        },

        conference: {
            model: 'Conference',
            required: true
        },

        toJSON: function toJSON() {
            var obj = this.toObject();
            obj.toJSON = null;
            return obj;
        }
    }
};
