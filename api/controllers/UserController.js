/**
 *
 * UserController
 *
 * @description The controller that handle user request
 *
 */

module.exports = {

    /**
     * `UserController.connect()`
     */
    connect: function( req, res ) {

        var token = req.param( 'token' );

        if( token ) {
            
            Session
                .findOne( {
                    token:   token,
                    expire: {
                        '>': new Date()
                    }
                } )
                .populate( 'user' )
                .exec( function( err, session ) {
                    if ( err || !session ) {

                        return res.notDone();
                    }

                    var defaultRes = {
                        data:  session.data,
                        user:  session.user,
                        roles: [ 'ROLE_LOGIN', 'ROLE_VIEWER' ] 
                    };

                    if( session.data.conference &&
                        session.data.conference.id ) {

                        Role
                            .findOne( {
                                conference: session.data.conference.id,
                                user:       session.user.id
                            } )
                            .exec( function( errRole, role ) {
                                if( !errRole && role ) {

                                    defaultRes.roles = _.union( defaultRes.roles, role.roles );
                                }

                                return res.done( defaultRes );
                            } );

                    } else {

                        return res.done( defaultRes );
                    }
                } );
        } else {

            return res.notDone();
        }
    },

    /**
     * `UserController.login()`
     */
    login: function( req, res ) {

        var data     = req.param( 'data' ),
            mail     = req.param( 'mail' ),
            password = req.param( 'password' );

        if( mail ) {

            User
                .findOneByMail( mail )
                .exec( function( err, user ) {
                    if ( err ) {

                        return res.notDone();
                    }

                    if ( !user ) {

                        return res.done( {
                            exist: false
                        } );
                    }

                    user.isCorrectPassword( password, function( result ) {
                        if ( result ) {

                            SessionService
                                .create( user, data, function( err, targetLocation ) {
                                    if( err ) {
                                    
                                        return res.notDone();
                                    }

                                    return res.done( {
                                        location:  targetLocation,
                                        exist:     true,
                                        connected: true
                                    } );
                                } );
                        } else {

                            return res.done( {
                                exist:     true,
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
                    mail:     mail,
                    password: password,
                    roles:    [ 'ROLE_LOGIN', 'ROLE_VIEWER' ]
                } )
                .exec( function( err, user ) {
                    if ( err ) {
                    
                        return res.notDone();
                    }

                    return res.done( {
                        user: user
                    } );
                } );
        } else {

            return res.notDone();
        }
    },

};