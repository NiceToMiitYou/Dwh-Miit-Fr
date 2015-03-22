/**
 *
 * @description Service to manage sessions
 *
 */

var characters = 'abcdefghijklmnopqrstuvwxyz' +
                 '0123456789' +
                 '$-_.+!*';

function generateId( length )
{
    var id = '';

    for( var i = 0; i < length; i++ ) {
        id += characters.charAt(
            Math.floor(
                Math.random() * characters.length
            )
        );
    }

    return id;
}

function createSession( user, data, targetLocation, cb ) {

    // Initialize variable
    var sessionId = generateId( 128 );

    // Generate redirection URL
    if( targetLocation.slice( -1 ) !== '/' ) {
        targetLocation += '/';
    }

    // Add token Param
    targetLocation += 'connect/' + sessionId;

    // Create Session
    Session
        .create( {
            user:  user.id,
            token: sessionId,
            data:  data
        } )
        .exec( function( errSession, session ) {

            if ( typeof cb === 'function' ) {

                return cb( errSession, targetLocation );
            }
        } );

}

// The expression for url
var expression = /^(((https?):\/\/)(%[0-9A-Fa-f]{2}|[-()_.!~*';\/?:@&=+$,A-Za-z0-9])+)([).!';\/?:,][[:blank:]])?$/i;

// The object that check if it's an url
var isUrl = new RegExp(expression);

module.exports = {

    /**
     * Create a session for an user
     */
    create: function( user, data, cb ) {

        if( data.conference &&
            data.conference.id ) {

            Conference
                .findOne( data.conference.id )
                .exec( function( errConf, actualConference ) {

                    if( !actualConference && errConf ) {

                        if ( typeof cb === 'function' ) {

                            return cb( errConf || new Error('Not enought data send to the session service.') );
                        }
                    } else {

                        // Create the session for a conference
                        return createSession( user, data, actualConference.url, cb );
                    }
                } );

        } else if(
            data.service &&
            data.url     &&
            isUrl.test( data.url )
        ) {

            // Create the session for an url
            return createSession( user, data, data.url, cb);

        } else {

            if ( typeof cb === 'function' ) {

                return cb( new Error('Not enought data send to the session service.') );
            }
        }
    }
};