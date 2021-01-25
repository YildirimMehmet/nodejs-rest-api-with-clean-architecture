'use strict';

const PersonRequestDto = require("../dtos/requests/PersonRequestDto");

module.exports = (request, personRepository) => {

    return personRepository.create(
        new PersonRequestDto(
            request.id,
            request.firstName,
            request.lastName,
            request.email,
            request.password
        )
    );

}; 
