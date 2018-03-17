import jwt from 'jsonwebtoken'

export default class passwordReset {
    async GenerateToken (data) {
      const token = await jwt.sign(data, "secret", {expiresIn: '1h'})
      return token
    }

    GenerateExpirationDate() {

    }

    ValidateToken (token) {

    }
}