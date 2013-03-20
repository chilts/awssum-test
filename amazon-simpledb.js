// ----------------------------------------------------------------------------

var fmt    = require('fmt');
var amazon = require('awssum-amazon');
var SimpleDB = require('awssum-amazon-simpledb').SimpleDB;

var print  = require('./lib/print.js');

// ----------------------------------------------------------------------------

simpledb = new SimpleDB({
    'accessKeyId'     : process.env.ACCESS_KEY_ID,
    'secretAccessKey' : process.env.SECRET_ACCESS_KEY,
    'region'          : amazon.US_EAST_1,
});

// ----------------------------------------------------------------------------

simpledb.ListDomains(print('ListDomains'));

// ----------------------------------------------------------------------------
