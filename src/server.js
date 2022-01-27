const express = require('express');
const routeEmploye = require('./routes/employeRoutes');

class Server {
  constructor(port) {
    this.PORT = port;
    this.app = express();
    this.setUp();
    this.routes();
  }

  setUp() {
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/employe', routeEmploye);
  }

  serve() {
    this.app.listen(this.PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`App listening on port ${this.PORT}`);
    });
  }
}

module.exports = Server;
