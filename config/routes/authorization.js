/**
 *
 * @description Routing for Authorization service.
 *
 */

var routes = {

    'POST /oauth2/token': {
        controller: 'AuthorizationController',
        action: 'getToken'
    }
};

module.exports = routes;
