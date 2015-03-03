/**
 *
 * @description Service to manage queues messaging
 *
 */

var AWS = require('aws-sdk'), sqs, queueUrl;

module.exports = {

    /**
     *
     * QueueService.initialize()
     *
     * @description Initialize the service
     *
     */
    initialize: function( cb ) {
        
        // Set up AWS
        AWS.config.update( sails.config.application.aws );

        // Set up SQS
        sqs = new AWS.SQS( {
            apiVersion: '2012-11-05'
        } );

        // Retrieve queue URL
        var params = {
            QueueName: sails.config.application.sqs
        };

        // Retrieve queue URL
        sqs.getQueueUrl( params, function( err, data ) {
            if (err) {
                sails.log.debug( err );
            } else {
                queueUrl = data.QueueUrl;
            }

            if( typeof cb === 'function') {

                cb( err );
            }
        });
    },

    /**
     *
     * QueueService.exportConference()
     *
     * @description Send the message to export a conference
     *
     */
    exportConference: function( conference, cb ) {

        // If correct syntax
        if( conference && queueUrl ) {

            // Default params
            var params = {
                MessageBody: JSON.stringify( {
                    action:     'export',
                    conference: conference
                } ),
                QueueUrl:    queueUrl
            };

            // Send the message
            sqs.sendMessage( params, function( err, data ) {
                if ( err ) {
                    sails.log.debug( err );
                }

                // Handle callback
                if( typeof cb === 'function') {

                    cb( err );
                }
            });

        } else {

            // Handle callback
            if( typeof cb === 'function') {

                cb( new Error('No conference provided.') );
            }
        }
    },

    /**
     *
     * QueueService.importConference()
     *
     * @description Send the message to import a conference
     *
     */
    importConference: function( conference, cb ) {

        // If correct syntax
        if( conference && queueUrl ) {

            // Default params
            var params = {
                MessageBody: JSON.stringify( {
                    action:     'import',
                    conference: conference
                } ),
                QueueUrl:    queueUrl
            };

            // Send the message
            sqs.sendMessage( params, function( err, data ) {
                if ( err ) {
                    sails.log.debug( err );
                }

                // Handle callback
                if( typeof cb === 'function') {

                    cb( err );
                }
            });

        } else {

            // Handle callback
            if( typeof cb === 'function') {

                cb( new Error('No conference provided.') );
            }
        }
    }
};