/**
 *
 * ConferenceController
 *
 * @description The controller that handle conference request
 *
 */

module.exports = {

    import: function( req, res ) {

        var conference = +req.param( 'conference' );

        QueueService.importConference( conference, function( err ) {

            if( err ) {

                return res.notDone();
            }

            return res.done();
        } );
    }
};