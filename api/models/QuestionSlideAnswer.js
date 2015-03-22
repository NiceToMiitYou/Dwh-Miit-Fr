/**
 * QuestionAnswer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        answer: {
            type: 'string',
            required: true,
            minLength: 1
        },

        question: {
            model: 'QuestionSlide',
            required: true
        },

        users: {
            collection: 'User',
            via: 'slideAnswers'
        },

        toJSON: function toJSON() {
            var obj = this.toObject();
            obj.toJSON = null;
            return obj;
        }
    }
};
