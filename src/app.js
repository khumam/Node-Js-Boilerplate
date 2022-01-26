var express = require('express')
var loader = require('./loader.js')

class App {
  app;

  constructor() {
    this.app = express();
    this.settings();
    loader.controller(this.app);
  }

  listen() {
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server started at http://${this.app.get('host')}:${this.app.get('port')}`);
    })
  }

  settings() {
    this.app.set('host', 'localhost');
    this.app.set('port', process.env.PORT || 8888);
    this.app.set('views', `${__dirname}/../views`);
    this.app.set('view engine', 'pug');
    this.app.use('/assets', express.static('views/assets'));
  }
}

const server = new App();
server.listen();