/**
 *
 * @description Service to manage OAuth authorizations
 */

var passport = require('passport')
  , BearerStrategy = require('passport-http-bearer').Strategy;


var clients = [
    { 'client_name': 'public-miit-fr', 'client_id': '1234', 'client_secret': '98765432', 'token': 'abcdef', 'roles': [] },
    { 'client_name': 'secure-miit-fr', 'client_id': '1235', 'client_secret': '98765431', 'token': 'qwerty', 'roles': [ 'TEST_ACCES' ] }
];


// Temporary defined to search an OAuth token
function findByToken( token, cb ) {
    
    for ( var i = 0, len = clients.length; i < len; i++ ) {

        var client = clients[i];
    
        if (client.token === token) {
    
            return cb( null, client );
        }
    }
    
    return cb( null, null );
}

// Temporary defined to search an OAuth Client
function findByClient( clientId, clientSecret, cb ) {

    for (var i = 0, len = clients.length; i < len; i++) {

        var client = clients[i];
    
        if ( client.client_id === clientId &&
             client.client_secret === clientSecret ) {
    
            return cb( null, client.token );
        }
    }

    return cb( null, null );
}

/**
 *
 * @description Initiliaze the verification of the Bearer Token
 *
 */
passport.use(

    new BearerStrategy(
    
        function(token, done) {
    
            process.nextTick(function () {
              
                findByToken(token, function(err, client) {

                    if ( err ) { return done( err ); }
                    if ( !client ) { return done( null, false ); }

                    return done( null, client );
                })
            });
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

            findByClient(
                clientId,
                clientSecret,
                function( err, accessToken ) {

                    cb( err, accessToken );
                }
            );
        }
    }
};