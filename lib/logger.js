/*
 * Logger library
 * */
const winston = require('winston');
const nconf   = require('nconf');
const path    = require('path');

let filename = path.join(process.cwd(), nconf.get('log'));

let logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({ timestamp: true }),
    new (winston.transports.File)({ filename })
  ],
  exitOnError: false
});


module.exports = logger;
