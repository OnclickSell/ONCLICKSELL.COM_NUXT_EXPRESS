import auth from '../../packages/auth'
import Responser from '../../packages/responser'

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
        const user = await Auth.GetAuth()
        req.body['user'] = user.user
        next()
    }else {
        Responser.send(res, 400, "Failed", "['Middleware']- You are not Authenticated!" )
    }
}

