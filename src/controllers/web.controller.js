var express = require('express');
const { WebRoutes } = require('../routers/web.routes');
var WebController = express.Router();

WebController.use(WebRoutes);

module.exports = { WebController }