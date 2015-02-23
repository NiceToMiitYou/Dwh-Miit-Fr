/**
* Role.js
*
* @description :: Handle all roles
*/

module.exports = {

    attributes: {

        conference : {
            model: 'Conference',
            required: true
        },

        user : {
            model: 'User',
            required: true
        },

        roles : {
            type: 'array',
            required: true
        }
    }
};

