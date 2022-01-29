const express = require('express');
const routeEmploye = require('./routes/employeRoutes');

class App {
  constructor() {
    this.app = express();
    this.setUp();
    this.routes();
  }

  setUp() {
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/employe', routeEmploye);
    this.app.get('/ping', (req, res) => res.json({ msg: 'pong' }));
  }

  build() {
    return this.app;
  }
}

module.exports = App;
