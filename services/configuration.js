const nconf = require('nconf');

module.exports.start = function(){
  nconf.argv().env();

  let enviroment = nconf.get('NODE_ENV') || 'development';

  nconf.file({ file: `./config/${enviroment}.json` }); // Environment configuration
  require('../lib/logger').info('[Configuration Service]', `Env \x1b[36m${enviroment}\x1b[0m`);
};
