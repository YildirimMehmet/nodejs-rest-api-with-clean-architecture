'use strict';

const LoginRequestDto = require("../dtos/requests/LoginRequestDto");

module.exports = (login, personRepository) => {
    return personRepository.login(
        new LoginRequestDto(
            login.email,
            login.password
        )
    );
};