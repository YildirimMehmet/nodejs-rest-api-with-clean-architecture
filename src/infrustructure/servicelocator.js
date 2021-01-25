'use strict';

const PersonRepository = require('../infrustructure/repositories/PersonRepository');

function services() {
    const services = {};

    services.personRepository = new PersonRepository();

    return services;
}

module.exports = services();
