'use strict';

module.exports = (personId, personRepository) => {

    return personRepository.delete(personId);

}; 
