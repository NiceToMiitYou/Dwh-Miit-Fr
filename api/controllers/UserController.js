/**
 *
 * UserController
 *
 * @description The controller that handle user request
 *
 */

module.exports = {

    /**
     * `UserController.login()`
     */
    login: function( req, res ) {

        var conference = req.param( 'conference' ),
            mail       = req.param( 'mail' ),
            password   = req.param( 'password' );

        if( mail ) {

            User
                .findOneByMail( mail )
                .exec( function( err, user ) {
                    if ( err ) return res.notDone();

                    if ( !user ) return res.done( {
                        exist: false
                    } );

                    user.isCorrectPassword( password, function( result ) {
                        if ( result ) {

                            return res.done( {
                                exist: true,
                                connected: true
                            } );
                        } else {

                            return res.done( {
                                exist: true,
                                connected: false
                            } );
                        }
                    } );
                } );
        } else {

            return res.notDone();
        }
    },

    /**
     * `UserController.register()`
     */
    register: function( req, res ) {

        var mail     = req.param( 'mail' ),
            password = req.param( 'password' );

        if( mail && password ) {

            User
                .create( {
                    mail: mail,
                    password: password,
                    roles: [ 'ROLE_LOGIN', 'ROLE_VIEWER' ]
                } )
                .exec( function( err, user ) {
                    if ( err ) return res.notDone();

                    return res.done( {
                        user: user
                    } );
                } );
        } else {

            return res.notDone();
        }
    },

};