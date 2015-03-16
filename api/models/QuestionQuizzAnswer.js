/**
 * QuestionQuizzAnswer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        answer: {
            type: 'string',
            defaultsTo: ''
        },

        type: {
            type: 'integer',
            defaultsTo: 0
        },

        question: {
            model: 'QuestionQuizz',
            required: true
        },

        usersChoices: {
            collection: 'QuestionQuizzChoiceUser',
            via: 'answer'
        }
    }
};
