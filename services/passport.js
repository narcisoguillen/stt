const Logger = require('../lib/logger');

module.exports = {

  start : function(){
    Logger.info('[Passport Service]', 'Initialize');
    this.passport = require('passport');
    this.passport.use(require('../strategies/local')());

    this.passport.serializeUser(this.serialize);
    this.passport.deserializeUser(this.deserialize);
  },

  serialize : function(user, done){
    return done(null, user);
  },

  deserialize : function(user, done){
    return done(null, user);
  }

};
