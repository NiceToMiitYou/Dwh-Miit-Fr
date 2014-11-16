/**
 *
 * @description Service to manage OAuth authorizations
 *
 */

var passport = require('passport'),
    BearerStrategy = require('passport-http-bearer').Strategy;


// Search an OAuth token
function findByToken( token, cb ) {
    
    Application
        .findOne( { 
            accessToken: token
        } )
        .exec( function( err, application ) {
            if( err || !application ) return cb( null, null );

            return cb( null, application );
        } );
}

// Search an OAuth Client
function findByClient( clientId, clientSecret, cb ) {
    
    Application
        .findOne( { 
            clientId: clientId,
            clientSecret: clientSecret
         } )
        .exec( function( err, application ) {
            if( err || !application ) return cb( null, null );

            return cb( null, application.accessToken );
        } );
}

/**
 *
 * @description Initiliaze the verification of the Bearer Token
 *
 */
passport.use(

    new BearerStrategy(
    
        function( token, done ) {
    
            process.nextTick( function () {
                
                findByToken( token, function(err, application) {

                    if ( err ) { return done( err ); }
                    if ( !application ) { return done( null, false ); }

                    return done( null, application );
                } );
            } );
    }
));

module.exports = {

    /**
     *
     * AuthorizationService.findByClient()
     *
     * @description After some request validity check, this service is
     *              called to find if a client exist with this credentials.
     *
     */
    findByClient: function( clientId, clientSecret, cb ) {

        if( typeof cb === 'function' ) {

            findByClient( clientId, clientSecret, cb );
        }
    }
};