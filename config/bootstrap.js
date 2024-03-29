/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

    // Change the logo of sails
    sails.log.ship = function() {
        
        var logo = require( 'fs' )
                    .readFileSync( 'logo.txt', 'utf8' )
                    .toString()
                    .split( '\n' );

        for ( var line in logo ) {
            sails.log.info( logo[ line ] );
        }
    };

    // Initialize QueueService
    QueueService.initialize( function() {

        // Initialize data if in developpement
        InitializationDataService.initialize( function() { 

            // Call next
            cb();
        } );
    } );
};
