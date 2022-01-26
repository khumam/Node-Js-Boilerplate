var express = require('express');
const { HelloController } = require('../modules/api/hello/hello.controller');
var ApiRoutes = express.Router();

ApiRoutes.get('/hello', HelloController.index);

module.exports = { ApiRoutes }