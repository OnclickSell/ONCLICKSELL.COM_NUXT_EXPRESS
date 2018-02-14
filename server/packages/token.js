const jwt = require('jsonwebtoken');

module.exports = {
    issueToken: function (id) {
        return new Promise((resolve, reject) => {
            try {
             const token = jwt.sign({
                       identifier: id
                    }, "secret", {expiresIn: '1h'});
              resolve(token)
            } catch (error) {
              reject(error)
            }
        }) 
    },
    veryfyToken: function (token) {
        return new Promise((resolve, reject) => {
            try {
                const decoded = jwt.verify(token, 'secret');
                resolve(token)
            } catch (error) {
              reject(error)
            }
        })
    }
}

