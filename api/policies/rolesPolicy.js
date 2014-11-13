/**
 *
 * @module      :: Policy
 *
 */

function checkRoles( clientRoles, neededRoles ) {

    var roles = [];

    if( neededRoles ) {

        roles = neededRoles;
    }

    return _.reduce( neededRoles, function( result, neededRole ) {

        return result && _.contains(
            clientRoles,
            neededRole
        );
    }, true);
}


module.exports = function(req, res, next) {

    // Client is allowed
    if ( req.session.roles && 
         checkRoles( req.session.roles, req.options.roles )
    ) {
        
        return next();
    }

    // Client is not allowed
    return res.forbidden();
};
