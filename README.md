# AwsSum Test #

This repo is designed for you to test your installation of Node.js, AwsSum and your credentials.

## Instructions ##

```
# clone the repo
git clone https://github.com/awssum/awssum-test.git
cd awssum-test

# install all of the AwsSum packages
npm install

# set up your environment credentials
cp set-env.sh set-env-mine.sh
vi set-env-mine.sh
source set-env-mine.sh

# run a listing on your buckets
node amazon-s3.js

# describe all of your instances
node amazon-ec2.js

# list all of your queues
node amazon-sqs.js
```

All of the programs are designed to run a command in each service whereby you don't have to pay for it, so don't worry
about trying a few different ones.

## Examples ##

There are plenty more example programs in the ```examples/``` directory, but don't just run them, look at them and
stufy the source code. Only run them if you know what they will do and are happy with it.

(Ends)
