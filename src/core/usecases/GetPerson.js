'use strict';

const PersonDto = require("../dtos/PersonDto");

module.exports = async (personId, personRepository) => {

    var person = await personRepository.get(personId);
    if (person != null)
        return new PersonDto(
            person.id,
            person.firstName,
            person.lastName,
            person.email
        );
    return null;

}; 
