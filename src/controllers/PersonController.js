'use strict';

const ResponseDto = require('../core/dtos/ResponseDto');
const GetPerson = require('../core/usecases/GetPerson');
const GetAllPersons = require('../core/usecases/GetAllPersons');
const CreatePerson = require('../core/usecases/CreatePerson');
const UpdatePerson = require('../core/usecases/UpdatePerson');
const DeletePerson = require('../core/usecases/DeletePerson');

module.exports = class PersonController {

    constructor(personRepository) {
        this.personRepository = personRepository;
    }

    async getPerson(personId) {
        var response = await GetPerson(personId, this.personRepository);
        if (response == null) return new ResponseDto("bad request", null, 400);
        return new ResponseDto("person", response, 200);
    }
    async listPerson() {
        var response = await GetAllPersons(this.personRepository);
        if (response == null) return new ResponseDto("bad request", null, 400);
        return new ResponseDto("person list", response, 200);
    }
    async createPerson(req) {
        var response = await CreatePerson(req, this.personRepository);
        if (response == null) return new ResponseDto("bad request", null, 400);
        return new ResponseDto("created", response, 201);
    }
    async updatePerson(personId, req) {
        var response = await UpdatePerson(personId, req, this.personRepository);
        if (response == null) return new ResponseDto("bad request", null, 400);
        return new ResponseDto("updated", response, 200);
    }
    async deletePerson(personId) {
        var response = await DeletePerson(personId, this.personRepository);
        if (response > 0) return new ResponseDto("bad request", null, 400);
        return new ResponseDto("deleted", response, 200);
    }
}