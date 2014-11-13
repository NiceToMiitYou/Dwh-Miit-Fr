
var passport = require('passport');

module.exports = {

    express: {
    
        customMiddleware: function( app ){

            sails.log.verbose('Express midleware for passport');
            
            app.use(passport.initialize());
            app.use(passport.session());
        }
    }
};