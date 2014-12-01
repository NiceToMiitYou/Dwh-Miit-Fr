/**
 *
 * @description Service to manage sessions
 *
 */

function generateId( length )
{
    var id = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$-_.+!*';

    for( var i = 0; i < length; i++ ) {
        id += characters.charAt( Math.floor( Math.random() * characters.length ) );
    }

    return id;
}

module.exports = {

    create: function( user, conference, cb ) {

        Conference
            .findOne( conference )
            .exec( function( errConf, actualConference ) {

                // Initialize variable
                var targetLocation = actualConference.url,
                    sessionId = generateId( 16 );

                // Generate redirection URL
                if( targetLocation.slice( -1 ) !== '/' ) {
                    targetLocation += '/';
                }

                // Add token Param
                targetLocation += 'connect/' + sessionId;

                // Create Session
                Session
                    .create( {
                        user: user.id,
                        conference: conference,
                        token: sessionId
                    } )
                    .exec( function( errSession, session ) {

                        if ( typeof cb === 'function' ) {

                            cb( errConf || errSession, targetLocation );
                        }
                    } );
            } );
    }
};