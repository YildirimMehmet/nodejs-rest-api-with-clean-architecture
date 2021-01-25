'use strict';

module.exports = class {
    constructor(message, data, statusCode) {
        this.message = message;
        this.data = data;
        this.statusCode = statusCode;
    }
};