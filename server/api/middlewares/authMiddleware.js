import auth from '../../packages/auth'
const responser = require('../../packages/responser')

// const jwt = require('jsonwebtoken');
// module.exports = (req, res, next) => {
//     console.log(req.query.token + ' From auth server middleware')
//     try {
//         const token = req.query.token
//         const decoded = jwt.verify(token, 'secret');
//         next();
//     } catch (error) {
//         console.log('Not authenticate')
//         res.status(200).json({
//             message: 'You are not autenticated'
//         });
//     }
// }

export default async (req, res, next) => {
    const Auth = new auth(req)
    const isAuth = await Auth.Check()
    if(isAuth) {
        next()
    }else {
        responser.send(res, 400, "Failed", "You are not Authenticated!" )
    }
}

