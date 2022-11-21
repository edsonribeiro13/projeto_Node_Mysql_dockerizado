const { DataTypes } = require('sequelize')
const sequelize = require('../connection')
const account = require('./accountModel')

const transaction = () => {
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

module.exports = transaction
