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
        }
    }
};
