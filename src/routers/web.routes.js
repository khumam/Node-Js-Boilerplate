var express = require('express');
const { MainController } = require('../modules/web/main/main.controller');
var WebRoutes = express.Router();

WebRoutes.get('/index', MainController.index);

module.exports = { WebRoutes }