'use strict';

const PersonRequestDto = require("../dtos/requests/PersonRequestDto");

module.exports = (personId, request, personRepository) => {

    return personRepository.update(personId,
        new PersonRequestDto(
            request.id,
            request.firstName,
            request.lastName,
            request.email,
            request.password
        )
    );

}; 
