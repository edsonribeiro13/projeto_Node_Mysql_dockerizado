import accountModel from '../repository/model/accountModel'
import userModel from '../repository/model/userModel'
import jwt from 'jsonwebtoken'
export default async (token: string) => {
    let tokenDecoded
    try {
        tokenDecoded = Object(jwt.verify(token, String(process.env.SECRET)))
    } catch {
        return 'Token inválido'
    }

    const userId = await userModel().findOne({
        where: {
            userName: tokenDecoded.username,
        },
    })

    const balance = await accountModel().findOne({
        where: {
            idAccounts: userId?.dataValues.Accounts_idAccounts,
        },
    })

    return balance?.dataValues.balance
}
