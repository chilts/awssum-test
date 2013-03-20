// ----------------------------------------------------------------------------

var fmt    = require('fmt');
var amazon = require('awssum-amazon');
var StorageGateway = require('awssum-amazon-storagegateway').StorageGateway;

var print     = require('./lib/print.js');

// ----------------------------------------------------------------------------

sg = new StorageGateway({
    'accessKeyId'     : process.env.ACCESS_KEY_ID,
    'secretAccessKey' : process.env.SECRET_ACCESS_KEY,
    'region'          : amazon.US_EAST_1,
});

// ----------------------------------------------------------------------------

sg.ListGateways(print('ListGateways'));

// ----------------------------------------------------------------------------
