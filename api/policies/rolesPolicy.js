/**
 *
 * @module      :: Policy
 *
 */

module.exports = function(req, res, next) {

    // Client is allowed
    if ( req.session.roles && 
         RolesService.checkRoles( req.session.roles, req.options )
    ) {
        
        return next();
    }

    // Client is not allowed
    return res.forbidden();
};
