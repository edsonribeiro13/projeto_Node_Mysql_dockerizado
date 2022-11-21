import transactionModel from '../repository/model/transactionModel'
import userModel from '../repository/model/userModel'
import balance from './balance'
import detoken from './util/detoken'
export default async (
    token: string,
    value: number,
    receiverUsername: string
) => {
    const senderUsername = await detoken(token)
    if (senderUsername.username === receiverUsername) {
        return 'Mesmo usuário de envio e recebimento'
    }

    const balanceFromUser = await balance(token)
    if (value > balanceFromUser) {
        return 'saldo insuficiente'
    }

    const idReceiver = await userModel().findOne({
        attributes: ['Accounts_idAccounts'],
        where: {
            userName: receiverUsername,
        },
    })
    const idSender = await userModel().findOne({
        attributes: ['Accounts_idAccounts'],
        where: {
            userName: senderUsername.username,
        },
    })
    try {
        await transactionModel().create({
            Accounts_debitedAccountId: idSender?.dataValues.Accounts_idAccounts,
            Accounts_creditedAccountId:
                idReceiver?.dataValues.Accounts_idAccounts,
            value: value,
        })
    } catch {
        return 'Erro na inserção'
    }

    return 'transferência realizada com sucesso'
}
