'use strict';

const { Sequelize } = require('sequelize');
const environment = require('../../../config/environment');

const sequelize = new Sequelize(
    environment.database.database,
    environment.database.username,
    environment.database.password,
    {
        host: environment.database.host,
        dialect: environment.database.dialect
    });

sequelize.import('./models/Person');

module.exports = sequelize;