const express = require('express');
const ControllerUser = require('../controllers/c_user');

const routes = express.Router();

routes.post('/users', ControllerUser.addUser)

module.exports = routes;