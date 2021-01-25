'use strict';

module.exports = (() => {

    const environment = {
        database: {
            username: "",
            password: "",
            database: "",
            host: "",
            dialect: "mysql"
        } 
    };

    if (process.env.NODE_ENV === 'dev') {

    }

    return environment;
})();