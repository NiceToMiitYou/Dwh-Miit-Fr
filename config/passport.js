
var passport = require('passport');

module.exports = {

    http: {
    
        customMiddleware: function( app ){

            sails.log.verbose('Express midleware for passport');
            
            app.use(passport.initialize());
            app.use(passport.session());
        }
    }
};