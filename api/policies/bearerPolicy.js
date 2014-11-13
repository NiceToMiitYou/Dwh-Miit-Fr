/**
 *
 * @module      :: Policy
 *
 */

var passport = require('passport');

module.exports = function(req, res, next) {

    passport.authenticate(
        'bearer',
        {
            session: false
        },
        function( err, client, infos ) {
            if ( err ) return next( err );

            if ( client ) {

                req.session.roles = client.roles;

                return next();
            }

            // Client is not allowed
            return res.forbidden();
        }
    ) (req, res);
};
