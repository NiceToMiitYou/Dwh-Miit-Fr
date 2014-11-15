/**
 * User.js
 *
 * @description :: User representation
 */

var bcrypt = require( 'bcrypt' );

module.exports = {

    attributes: {

        lastname: {
            type: 'string'
        },

        firstname: {
            type: 'string'
        },

        fullname: function() {
            return this.firstname + ' ' + this.lastname;
        },

        username: {
            type: 'string'
        },

        society: {
            type: 'string'
        },

        avatar: {
            type: 'json'
        },

        password: {
            type: 'string',
            required: true
        },

        mail: {
            type: 'email',
            unique: true,
            required: true
        },

        slideAnswers: {
            collection: 'QuestionSlideAnswer',
            via: 'users',
            dominant: true
        },

        quizzAnswers: {
            collection: 'QuestionQuizzAnswer',
            via: 'users',
            dominant: true
        },

        roles: {
            type: 'array'
        },

        isCorrectPassword: function( password, cb ) {
            bcrypt.compare( password, this.password, function( err, res ) {
                if ( err ) cb( false );

                cb( res );
            } );
        },

        toJSON: function() {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        }
    },

    beforeCreate: function( user, cb ) {

        bcrypt.genSalt( 10, function( err, salt ) {
        
            bcrypt.hash( user.password, salt, function( err, hash ) {

                if ( err ) {
                    cb( err );
                } else {

                    user.password = hash;
                    cb( null, user );
                }
            } );
        } );
    }
};