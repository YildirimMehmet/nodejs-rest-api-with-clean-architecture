'use strict';

const express = require('express');
const checkAuth = require('../middleware/checkauth');
const auth = require('./auth');
const persons = require('./persons');

const apiRouter = (serviceLocator) => {
    const routes = express.Router();

    routes.use('/auth', auth(serviceLocator));
    routes.use('/', checkAuth);

    routes.use('/persons', persons(serviceLocator));

    return routes;
};


module.exports = apiRouter;