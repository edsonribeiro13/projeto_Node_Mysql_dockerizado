import transactionModel from '../repository/model/transactionModel'
import userModel from '../repository/model/userModel'
import detoken from './util/detoken'

export default async (token: string) => {
    const tokenResolved = await detoken(token)

    const idUser = await userModel().findOne({
        attributes: ['Accounts_idAccounts'],
        where: {
            userName: tokenResolved.username,
        },
    })

    const transferedTransaction = await transactionModel().findAll({
        where: {
            Accounts_debitedAccountId: idUser?.dataValues.Accounts_idAccounts,
        },
    })
    const receivedTransaction = await transactionModel().findAll({
        where: {
            Accounts_creditedAccountId: idUser?.dataValues.Accounts_idAccounts,
        },
    })

    return [transferedTransaction, receivedTransaction]
}
