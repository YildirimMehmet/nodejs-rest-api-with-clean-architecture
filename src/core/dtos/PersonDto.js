'use strict';

module.exports = class {
    constructor(id = null, firstName, lastName, email) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
};