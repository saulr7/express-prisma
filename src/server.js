const App = require('./app');

class Server {
  constructor(port) {
    this.PORT = port;
  }

  serve() {
    const app = new App().build();

    app.listen(this.PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`App listening on port ${this.PORT}`);
    });
  }
}

module.exports = Server;
