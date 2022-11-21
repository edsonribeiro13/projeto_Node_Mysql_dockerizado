import { DataTypes } from 'sequelize'
import sequelize from '../connection'
import account from './accountModel'

export default () => {
    const transaction = sequelize().define('Transactions', {
        idTransactions: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        Accounts_debitedAccountId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: account(),
                key: 'idAccounts',
            },
        },
        Accounts_creditedAccountId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: account(),
                key: 'idAccounts',
            },
        },
        value: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
    })
    sequelize().close
    return transaction
}
