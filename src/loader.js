const { ApiController } = require("./controllers/api.controller");
const { WebController } = require("./controllers/web.controller");

const controller = (app) => {
  app.use('/api', ApiController);
  app.use('/', WebController);
}

module.exports = { controller }