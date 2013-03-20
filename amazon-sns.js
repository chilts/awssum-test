// ----------------------------------------------------------------------------

var fmt    = require('fmt');
var amazon = require('awssum-amazon');
var Sns    = require('awssum-amazon-sns').Sns;

var print     = require('./lib/print.js');

// ----------------------------------------------------------------------------

sns = new Sns({
    'accessKeyId'     : process.env.ACCESS_KEY_ID,
    'secretAccessKey' : process.env.SECRET_ACCESS_KEY,
    'region'          : amazon.US_EAST_1,
});

// ----------------------------------------------------------------------------

sns.ListTopics(print('ListTopics'));

// ----------------------------------------------------------------------------
