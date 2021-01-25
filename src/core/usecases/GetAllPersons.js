'use strict';

const PersonDto = require("../dtos/PersonDto");

module.exports = async (personRepository) => {

    var persons = await personRepository.list();
    if (persons != null)
        return persons.map((person) => {
            return new PersonDto(
                person.id,
                person.firstName,
                person.lastName,
                person.email
            );
        });
    return null;

};


