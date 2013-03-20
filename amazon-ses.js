// ----------------------------------------------------------------------------

var fmt    = require('fmt');
var amazon = require('awssum-amazon');
var Ses    = require('awssum-amazon-ses').Ses;

var print     = require('./lib/print.js');

// ----------------------------------------------------------------------------

ses = new Ses({
    'accessKeyId'     : process.env.ACCESS_KEY_ID,
    'secretAccessKey' : process.env.SECRET_ACCESS_KEY,
    'region'          : amazon.US_EAST_1,
});

// ----------------------------------------------------------------------------

ses.ListIdentities(print('ListIdentities'));

// ----------------------------------------------------------------------------
