// ----------------------------------------------------------------------------

var fmt      = require('fmt');
var awssum   = require('awssum');
var amazon   = require('awssum-amazon');
var DynamoDB = require('awssum-amazon-dynamodb').DynamoDB;

var print     = require('./lib/print.js');

// ----------------------------------------------------------------------------

var dynamodb1 = new DynamoDB({
    'accessKeyId'     : process.env.ACCESS_KEY_ID,
    'secretAccessKey' : process.env.SECRET_ACCESS_KEY,
    'awsAccountId'    : process.env.AWS_ACCOUNT_ID,
    'region'          : amazon.US_EAST_1,
});

var dynamodb2 = new DynamoDB({
    'accessKeyId'     : process.env.ACCESS_KEY_ID,
    'secretAccessKey' : process.env.SECRET_ACCESS_KEY,
    'awsAccountId'    : process.env.AWS_ACCOUNT_ID,
    'region'          : amazon.US_EAST_1,
    'protocol'        : 'http',
});

// ----------------------------------------------------------------------------

dynamodb1.ListTables(print('ListTables (https)'));
dynamodb2.ListTables(print('ListTables (http)'));

// ----------------------------------------------------------------------------
