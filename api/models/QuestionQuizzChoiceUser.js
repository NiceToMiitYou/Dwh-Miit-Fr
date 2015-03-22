/**
 * QuestionQuizzChoiceUser.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        type: {
            type: 'integer',
            defaultsTo: 0
        },

        extra: {
            type: 'json'
        },
        
        answer: {
            model: 'QuestionQuizzAnswer',
            required: true
        },

        user: {
            model: 'User',
            required: true
        }
    }
};
