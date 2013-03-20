// ----------------------------------------------------------------------------

var fmt      = require('fmt');
var amazon   = require('awssum-amazon');
var Redshift = require('awssum-amazon-redshift').Redshift;

var print     = require('./lib/print.js');

// ----------------------------------------------------------------------------

redshift = new Redshift({
    'accessKeyId'     : process.env.ACCESS_KEY_ID,
    'secretAccessKey' : process.env.SECRET_ACCESS_KEY,
    'awsAccountId'    : process.env.AWS_ACCOUNT_ID,
    'region'          : amazon.US_EAST_1,
});

// ----------------------------------------------------------------------------

redshift.DescribeClusters(print('ListTables'));

// ----------------------------------------------------------------------------
