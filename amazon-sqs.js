// ----------------------------------------------------------------------------

var fmt    = require('fmt');
var amazon = require('awssum-amazon');
var Sqs    = require('awssum-amazon-sqs').Sqs;

var print     = require('./lib/print.js');

// ----------------------------------------------------------------------------

sqs = new Sqs({
    'accessKeyId'     : process.env.ACCESS_KEY_ID,
    'secretAccessKey' : process.env.SECRET_ACCESS_KEY,
    'awsAccountId'    : process.env.AWS_ACCOUNT_ID,
    'region'          : amazon.US_EAST_1,
});

// ----------------------------------------------------------------------------

sqs.ListQueues(print('ListQueues'));

// ----------------------------------------------------------------------------
