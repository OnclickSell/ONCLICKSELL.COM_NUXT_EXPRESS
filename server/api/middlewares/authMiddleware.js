
const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    console.log(req.query.token + ' From auth server middleware')
    try {
        const token = req.query.token
        const decoded = jwt.verify(token, 'secret');
        next();
    } catch (error) {
        console.log('Not authenticate')
        res.status(200).json({
            message: 'You are not autenticated'
        });
    }
}