/**
 *
 * @description Service to manage roles based authorizations
 *
 */

function getRoles( controller, action ) {

    var roles = [];

    if( controller && action &&
        sails.config.roles[ controller ] &&
        sails.config.roles[ controller ][ action ] ) {

        roles = sails.config.roles[ controller ][ action ];
    }
    else if( controller &&
        sails.config.roles[ controller ] &&
        sails.config.roles[ controller ][ '*' ] )
    {

        roles = sails.config.roles[ controller ][ '*' ];
    }
    else if( sails.config.roles[ '*' ] )
    {

        roles = sails.config.roles[ '*' ];
    }

    return roles;
}

module.exports = {

    /**
     *
     * RolesService.checkRoles()
     *
     * @description Check the roles of the client.
     *
     */
    checkRoles: function( clientRoles, options ) {

        // Get roles list
        var roles = getRoles( options.controller, options.action );

        // Check them from client
        return _.reduce( roles, function( result, neededRole ) {

            return result && _.contains(
                clientRoles,
                neededRole
            );
        }, true);
    }
};