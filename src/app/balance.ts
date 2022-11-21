import accountModel from '../repository/model/accountModel'
import userModel from '../repository/model/userModel'
import detoken from './util/detoken'
export default async (token: string) => {
    const tokenDecoded = await detoken(token)

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
