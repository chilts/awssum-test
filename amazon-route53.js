// ----------------------------------------------------------------------------

var fmt     = require('fmt');
var amazon  = require('awssum-amazon');
var Route53 = require('awssum-amazon-route53').Route53;

var print     = require('./lib/print.js');

// ----------------------------------------------------------------------------

route53 = new Route53({
    'accessKeyId'     : process.env.ACCESS_KEY_ID,
    'secretAccessKey' : process.env.SECRET_ACCESS_KEY,
    'region'          : amazon.US_EAST_1,
});

// ----------------------------------------------------------------------------

route53.ListHostedZones(print('ListHostedZones'));

// ----------------------------------------------------------------------------
