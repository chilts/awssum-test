// ----------------------------------------------------------------------------

var fmt    = require('fmt');
var awssum = require('awssum');
var amazon = require('awssum-amazon');
var Ec2    = require('awssum-amazon-ec2').Ec2;

var print     = require('./lib/print.js');

// ----------------------------------------------------------------------------

ec2 = new Ec2({
    'accessKeyId'     : process.env.ACCESS_KEY_ID,
    'secretAccessKey' : process.env.SECRET_ACCESS_KEY,
    'region'          : amazon.US_EAST_1,
});

// ----------------------------------------------------------------------------

ec2.DescribeInstances(print('DescribeInstances'));

// ----------------------------------------------------------------------------
