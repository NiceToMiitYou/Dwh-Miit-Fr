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
    }
};

module.exports = routes;
