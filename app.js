// Load services
require('./services/configuration').start();
require('./services/passport')     .start();
require('./services/server')       .start();

// Load routes
require('./routes');
