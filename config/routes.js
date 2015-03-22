/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */


function extend( target ) {
    var sources = [].slice.call( arguments, 1 );

    sources.forEach( function( source ) {
        for ( var prop in source ) {
            target[ prop ] = source[ prop ];
        }
    } );

    return target;
}


var authorizationRoutes = require( './routes/authorization.js' ),
    userRoutes          = require( './routes/user.js' ),
    apiRoutes           = require( './routes/api.js' );

var routes = {
    
};

extend( routes, authorizationRoutes,
                userRoutes,
                apiRoutes );

module.exports.routes = routes;
