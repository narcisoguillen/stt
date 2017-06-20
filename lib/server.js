const express    = require('express');
const session    = require('express-session');
const Logger     = require('./logger');
const nconf      = require('nconf');
const bodyParser = require('body-parser');
const {passport} = require('../services/passport');

module.exports = class Server {

  constructor (){
    this.app = express();
    this.configure();
  }

  configure (){
    this.app.set('view engine', 'pug');
    this.app.use(express.static(process.cwd() + '/public'));

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended : true }));
    this.app.use(session(nconf.get('session')));

    // Activity:Logger
    this.app.use(function(req, res, next) {
      Logger.info('[Middleware]', 'Incomming Request: ', req.method, req.url, req.headers['x-forwarded-for'] || req.connection.remoteAddress);
      return next();
    });

    this.app.use(passport.initialize());
    this.app.use(passport.session());

    this.protocol = nconf.get('server:ssl') ? 'https' : 'http';
    this.PORT     = process.env.PORT || nconf.get('server:port') || 3030;

    this[this.protocol]();
  }

  http (){
    Logger.info('[Lib Server]', 'Creating http server');
    this.server = require('http').createServer(this.app);
    this.server.listen(this.PORT, this.onReady.bind(this));
  }

  https (){
    Logger.info('[Lib Server]', 'Creating https server');
    // TODO
  }

  onReady (){
    Logger.info('[Lib Server]', 'Server running: ', JSON.stringify(this.server.address(), null, 2));
  }

};
