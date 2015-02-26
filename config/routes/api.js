/**
 *
 * @description Routing for API service.
 *
 */

var routes = {

    'POST /api/conference/import': {
        controller: 'ConferenceController',
        action: 'import'
    }
};

module.exports = routes;
