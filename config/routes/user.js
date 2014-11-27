/**
 *
 * @description Routing for User service.
 *
 */

var routes = {

    'POST /api/user/login': {
        controller: 'UserController',
        action: 'login'
    },

    'POST /api/user/register': {
        controller: 'UserController',
        action: 'register'
    }
};

module.exports = routes;
