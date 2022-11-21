const { DataTypes } = require('sequelize')
const sequelize = require('../connection')

const account = () => {
    const account = sequelize().define('Accounts', {
        idAccounts: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        balance: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    })
    sequelize().close()
    return account
}

module.exports = account
