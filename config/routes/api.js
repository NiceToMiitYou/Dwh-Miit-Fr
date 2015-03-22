/**
 *
 * @description Routing for API service.
 *
 */

var routes = {

    'POST /api/conference/export': {
        controller: 'ConferenceController',
        action: 'export'
    },

    'POST /api/conference/import': {
        controller: 'ConferenceController',
        action: 'import'
    },

    'POST /api/questionquizzanswer/export': {
        controller: 'QuestionQuizzAnswerController',
        action: 'exportUsers'
    },

    'POST /api/questionslideanswer/export': {
        controller: 'QuestionSlideAnswerController',
        action: 'exportUsers'
    }
};

module.exports = routes;
