const jwt = require('jsonwebtoken');

const constant = require('../../config/constants');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, constant.JWT.SECRET_KEY, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });

    } else {
        res.sendStatus(401);
    }
};

