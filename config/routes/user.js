/**
 *
 * @description Routing for User service.
 *
 */

var routes = {

    'GET /user/:id': {
        controller: 'UserController',
        action: 'findOne',
        roles: [ 'ROLE_TRUSTED_CLIENT' ]
    }
};

module.exports = routes;
