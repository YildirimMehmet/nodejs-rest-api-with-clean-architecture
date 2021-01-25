'use strict';
const constant = require('../../src/config/constants');
const ResponseDto = require('../core/dtos/ResponseDto');
const AuthDto = require('../core/dtos/AuthDto');
const LoginPerson = require('../core/usecases/LoginPerson');
const jwt = require('jsonwebtoken');

module.exports = class AuthController {

    constructor(personRepository) {
        this.personRepository = personRepository;
    }

    async login(req) {
        var response = await LoginPerson(req, this.personRepository);
        if (response != null) {
            const token = jwt.sign(
                {
                    id: response.id,
                    email: response.email,
                },
                constant.JWT.SECRET_KEY,
                {
                    expiresIn: '2h',
                },
            );
            return new ResponseDto("ok", new AuthDto(token), 200);
        }
        else {
            return new ResponseDto("bad request", null, 400);
        }
    }
}