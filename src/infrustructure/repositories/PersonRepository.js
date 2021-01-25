'use strict';

const sequelize = require('../orm/sequelize/sequelize');
const PersonRepository = require('../../core/contracts/PersonRepository');

module.exports = class extends PersonRepository {

    constructor() {
        super();
        this.db = sequelize;
        this.model = this.db.model('Person');
    }

    async get(personId) {
        return await this.model.findOne({
            where: {
                id: personId
            }
        });
    }

    async list() {
        return await this.model.findAll();
    }

    async create(request) {
        return await this.model.create(request);
    }

    async update(personId, request) {
        return await this.model.update(request, {
            where: { id: personId }
        });
    }

    async delete(personId) {
        return await this.model.destroy({
            where: {
                id: personId
            }
        });
    }

    async login(request) {
        return await this.model.findOne({
            where: {
                email: request.email,
                password: request.password
            }
        });
    }
};