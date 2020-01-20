'use-strict';

const express = require('express');
const videoController = require('./video/controller');
const Router = express.Router();

Router.get('/video', videoController.getVideoAll);
Router.get('/video/:id', videoController.getVideoById);

module.exports = Router;