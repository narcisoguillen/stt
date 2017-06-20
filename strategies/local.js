const LocalStrategy = require('passport-local').Strategy;
const nconf         = require('nconf');

module.exports = function (){
  return new LocalStrategy( (username, password, done) =>{
    return done(null, { id : 1, name : 'bob' });
  });
};
