/**
 * Slide.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        notes: {
            type: 'text'
        },

        title: {
            type: 'string'
        },

        content: {
            type: 'text',
            required: true
        },

        time: {
            type: 'integer',
            defaultsTo: 0
        },

        type: {
            type: 'integer',
            defaultsTo: 1
        },

        presentation: {
            model: 'Presentation',
            required: true
        },

        question: {
            model: 'QuestionSlide'
        },

        resources: {
            collection: 'Resource',
            via: 'slides',
            dominant: true
        }
    }
};
