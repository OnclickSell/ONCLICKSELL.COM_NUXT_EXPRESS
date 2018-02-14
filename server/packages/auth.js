const jwt = require('jsonwebtoken');
const db = require('../database/config');

module.exports = {
    getUser: function (req, field) {
        return new Promise((resolve, reject) => {
            try {
                const token = req.headers.authorization.split(" ")[1];
                const decoded = jwt.verify(token, 'secret');    
                db("users")
                .where('id', decoded.identifier )
                .select(field)
                .then(value => {
                    resolve(value[0][field])
                }).catch(error => reject(err))
            } catch (Error) {
              reject(Error)
            }
        }) 
    }
}




