const Server = require('./src/server');

const PORT = process.env.PORT || 3002;
new Server(PORT).serve();
