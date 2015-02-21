/**
 * Session.js
 *
 * @description :: Model that handle Session.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        token: {
            type: 'string',
            required: true
        },

        user: {
            model: 'User',
            required: true
        },

        conference: {
            model: 'Conference',
            required: true
        },

        expire: {
            type: 'datetime',
            defaultsTo: function() {
                return new Date(
                    ( new Date() ).getTime() + 2 * 60 * 1000
                ); // Now + 2 minutes
            }
        }
    }
};
