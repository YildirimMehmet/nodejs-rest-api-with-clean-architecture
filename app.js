'use strict';

const startServer = require('./src/api/server');
const start = async () => {
    try {
        await startServer();
    } catch (err) {
        console.log(err);
    }
};

start();