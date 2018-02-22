const jwt = require('jsonwebtoken');
const db = require('../database/config');

module.exports = {
    getUser: function (req, field) {
        return new Promise((resolve, reject) => {
            try {
                const token = req.query.token
                const decoded = jwt.verify(token, 'secret')
                db("users")
                .where('id', decoded.identifier )
                .select(field)
                .then(value => resolve(value[0]))
            } catch (error) {
              reject(error)
            }
        }) 
    }
}




