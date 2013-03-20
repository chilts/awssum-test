// ----------------------------------------------------------------------------

var fmt    = require('fmt');
var amazon = require('awssum-amazon');
var Swf    = require('awssum-amazon-swf').Swf;

var print     = require('./lib/print.js');

// ----------------------------------------------------------------------------

swf = new Swf({
    'accessKeyId'     : process.env.ACCESS_KEY_ID,
    'secretAccessKey' : process.env.SECRET_ACCESS_KEY,
    'region'          : amazon.US_EAST_1,
});

// ----------------------------------------------------------------------------

// swf.ListDomains(print('ListDomains'));
swf.ListDomains({ RegistrationStatus : 'REGISTERED' }, print('ListDomains'));

// ----------------------------------------------------------------------------
