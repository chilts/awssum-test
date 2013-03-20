// ----------------------------------------------------------------------------

var fmt    = require('fmt');
var amazon = require('awssum-amazon');
var Iam    = require('awssum-amazon-iam').Iam;

var print     = require('./lib/print.js');

// ----------------------------------------------------------------------------

iam = new Iam({
    'accessKeyId'     : process.env.ACCESS_KEY_ID,
    'secretAccessKey' : process.env.SECRET_ACCESS_KEY,
    'region'          : amazon.US_EAST_1,
});

// ----------------------------------------------------------------------------

iam.ListUsers(print('ListUsers'));

// ----------------------------------------------------------------------------
