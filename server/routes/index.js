const express = require('express');
const ControllerUser = require('../controllers/c_user');

const routes = express.Router();

routes.get('/users', ControllerUser.findUser)
routes.post('/users', ControllerUser.addUser)

module.exports = routes;