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
            password = req.param( 'password' );

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
                                user: user
                            } );
                        } else {

                            return res.done( {
                                exist: true
                            } );
                        }
                    } );
                } );
        } else {

            return res.notDone();
        }
    }
};