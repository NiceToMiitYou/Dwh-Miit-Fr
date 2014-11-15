/**
* Application.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    name : { 
        type: 'string',
        unique: true,
        required: true
    },

    clientId : {
        type: 'string',
        unique: true,
        required: true
    },

    clientSecret : {
        type: 'string',
        unique: true,
        required: true
    },

    accessToken : {
        type: 'string',
        unique: true,
        required: true
    },

    roles : {
        type: 'array',
        required: true
    },

    deleted: {
        type: 'boolean',
        defaultTo: false
    }
  }
};

