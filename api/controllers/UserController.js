/**
 *
 * UserController
 *
 * @description The controller that handle user request
 *
 */

module.exports = {

    login: function( req, res ) {

        var mail = req.param( 'mail' ),
            password = req.param( 'password' ),
            connect = req.param( 'connect' );

        if( mail && password ) {

            User.findOneByMail( mail )
                .populate( 'quizzAnswers' )
                .exec( function( err, user ) {
                    if ( err ) return res.notDone();

                    if ( !user ) return res.done( {
                        exist: false
                    } );

                    user.isCorrectPassword( password, function( result ) {
                        if ( result ) {

                            return res.done( {
                                exist: true,
                                connected: true,
                                user: user
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
    }
};