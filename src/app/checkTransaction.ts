import transactionModel from '../repository/model/transactionModel'
import userModel from '../repository/model/userModel'
import detoken from './util/detoken'
import { Model, Op, Sequelize } from 'sequelize'

export default async (
    token: string,
    date: any,
    cashOut?: string,
    cashIn?: string
) => {
    const tokenResolved = await detoken(token)

    const idUser = await userModel().findOne({
        attributes: ['Accounts_idAccounts'],
        where: {
            userName: tokenResolved.username,
        },
    })

    let transferedTransaction: Model<any, any>[] = []
    let receivedTransaction: Model<any, any>[] = []

    if ((cashIn && cashOut) || (!cashIn && !cashOut)) {
        transferedTransaction = await transactionModel().findAll({
            where: {
                [Op.and]: [
                    {
                        Accounts_debitedAccountId:
                            idUser?.dataValues.Accounts_idAccounts,
                    },
                    Sequelize.where(
                        Sequelize.fn('date', Sequelize.col('createdAt')),
                        '=',
                        date
                    ),
                ],
            },
        })
        receivedTransaction = await transactionModel().findAll({
            where: {
                [Op.and]: [
                    Sequelize.where(
                        Sequelize.fn('date', Sequelize.col('createdAt')),
                        '=',
                        date
                    ),
                    {
                        Accounts_creditedAccountId:
                            idUser?.dataValues.Accounts_idAccounts,
                    },
                ],
            },
        })
    } else if (cashOut) {
        transferedTransaction = await transactionModel().findAll({
            where: {
                [Op.and]: [
                    {
                        Accounts_debitedAccountId:
                            idUser?.dataValues.Accounts_idAccounts,
                    },
                    Sequelize.where(
                        Sequelize.fn('date', Sequelize.col('createdAt')),
                        '=',
                        date
                    ),
                ],
            },
        })
    } else {
        receivedTransaction = await transactionModel().findAll({
            where: {
                [Op.and]: [
                    {
                        Accounts_creditedAccountId:
                            idUser?.dataValues.Accounts_idAccounts,
                    },
                    Sequelize.where(
                        Sequelize.fn('date', Sequelize.col('createdAt')),
                        '=',
                        date
                    ),
                ],
            },
        })
    }

    return [transferedTransaction, receivedTransaction]
}
