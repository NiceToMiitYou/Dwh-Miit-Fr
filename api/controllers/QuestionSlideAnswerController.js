/**
 *
 * QuestionSlideAnswerController
 *
 * @description The controller that handle answer of slide's questions request
 *
 */

module.exports = {

    exportUsers: function( req, res ) {

        var answer = req.param( 'answer' ),
            users  = req.param( 'users' );

        if ( answer && users ) {

            QuestionQuizzAnswer
                .update( answer, {
                    users: users
                } )
                .exec( function( err, answers ) {
                    if( err ) {

                        return res.notDone();
                    }
                   
                    return res.done();
                } );

        } else {

            return res.notDone();
        }
    }
};