import jwt from 'jsonwebtoken'
export default async (token: string) => {
    let tokenDecoded
    try {
        tokenDecoded = Object(jwt.verify(token, String(process.env.SECRET)))
    } catch {
        throw Error('Token inválido')
    }

    return tokenDecoded
}
