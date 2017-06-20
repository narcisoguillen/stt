const Server = require('../lib/server');
const Logger = require('../lib/logger');

/*
 * {Engine}
 *    - {app} Express
 *    - {server} Http/s
 * */

module.exports.start = function(){
  Logger.info('[Server Service]', 'Initialize server');
  this.engine  = new Server();
};
