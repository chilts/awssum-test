// ----------------------------------------------------------------------------

var fmt    = require('fmt');
var amazon = require('awssum-amazon');
var S3     = require('awssum-amazon-s3').S3;

var print  = require('./lib/print.js');

// ----------------------------------------------------------------------------

s3 = new S3({
    'accessKeyId'     : process.env.ACCESS_KEY_ID,
    'secretAccessKey' : process.env.SECRET_ACCESS_KEY,
    'region'          : amazon.US_EAST_1,
});

// ----------------------------------------------------------------------------

// ListBuckets
s3.ListBuckets(print('ListBuckets'));

// ListBuckets
s3.PostObjectRestore({ BucketName : 'this', ObjectName : 'that', Days : '1' }, print('POR'));

// ListObjects
var params = { BucketName : 'pie-17', MaxKeys : 4 };
s3.ListObjects(params, print('ListObjects'));

// ----------------------------------------------------------------------------
