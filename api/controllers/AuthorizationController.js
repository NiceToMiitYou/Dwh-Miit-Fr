/**
 *
 * AuthorizationController
 *
 * @description The controller that handle OAuth request
 *
 */

module.exports = {

    /**
     *
     * AuthorizationController.getToken()
     *
     * @description Return the access token of an application if the
     *              application is allowed, only client_credentials.
     *
     */
    getToken: function( req, res ) {

        // Get all REQUIRED field of the token request
        var client_id     = req.param('client_id'),
            client_secret = req.param('client_secret'),
            grant_type    = req.param('grant_type');

        // Check them
        if ( !grant_type ||
             !client_id  ||
             !client_secret ) {

            // Malformed request
            res.status( 400 );

            return res.json( {
                error: 'invalid_request'
            } );
        }

        // Check if it's the rigth grant_type
        if( grant_type === 'client_credentials' ) {

            // Call the service to check credentials
            AuthorizationService.findByClient(
                client_id,
                client_secret,
                function( err, accessToken ) {

                    if ( err || !accessToken ) {

                        // Credentials refused or not found
                        res.status( 400 );
                        
                        return res.json({
                            error: 'invalid_client'
                        });
                    }

                    // Credentials accepted
                    res.status( 200 );

                    return res.json( {
                        access_token: accessToken,
                        token_type: 'bearer'
                    } );
                }
            );
        } else {

            // Other grant type not allowed
            res.status( 400 );

            return res.json( {
                'error': 'unsupported_grant_type'
            } );
        }
    }
};