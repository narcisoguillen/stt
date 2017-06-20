const {app} = require('./services/server').engine;

app.get('/', function(req, res){
  res.render('index');
});
