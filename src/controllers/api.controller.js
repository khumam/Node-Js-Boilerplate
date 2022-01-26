var express = require('express');
const { ApiRoutes } = require('../routers/api.routes');
var ApiController = express.Router();

ApiController.use(ApiRoutes);

module.exports = { ApiController }