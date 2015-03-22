/**
 *
 * ConferenceController
 *
 * @description The controller that handle conference request
 *
 */

module.exports = {

    export: function( req, res ) {

        var conferenceId = +req.param( 'conference' );

        if( !conferenceId ) {

            return res.notDone();
        }

        Conference
            .findOne( conferenceId )
            .exec( function( err, conference ) {
                if(  err                 ||
                    !conference          ||
                    !conference.imported ||
                     conference.exported ) {

                    return res.notDone();
                }

                // Lock the status
                conference.exported = true;
                conference.save();

                // Ask for export
                QueueService.exportConference( conference.id, function( err ) {

                    if( err ) {

                        // On fail, reset the status
                        conference.exported = false;
                        conference.save();

                        return res.notDone();
                    }

                    return res.done();
                } );
            } );
    },

    import: function( req, res ) {

        var conferenceId = +req.param( 'conference' );

        if( !conferenceId ) {

            return res.notDone();
        }

        Conference
            .findOne( conferenceId )
            .exec( function( err, conference ) {
                if(  err                 || 
                    !conference          ||
                     conference.imported ||
                     conference.exported ) {

                    return res.notDone();
                }

                // Lock the status
                conference.imported = true;
                conference.save();

                // Ask for import
                QueueService.importConference( conference.id, function( err ) {

                    if( err ) {

                        // On fail, reset the status
                        conference.imported = false;
                        conference.save();

                        return res.notDone();
                    }

                    return res.done();
                } );
            } );
    }
};