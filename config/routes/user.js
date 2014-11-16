/**
 *
 * @description Routing for User service.
 *
 */

var routes = {

    'POST /api/user/login': {
        controller: 'UserController',
        action: 'login'
    }
};

module.exports = routes;
