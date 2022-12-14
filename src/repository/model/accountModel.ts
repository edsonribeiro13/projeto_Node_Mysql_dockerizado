import { DataTypes } from 'sequelize'
import sequelize from '../connection'

export default () => {
    const account = sequelize().define('Accounts', {
        idAccounts: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        balance: {
            type: DataTypes.FLOAT,
            defaultValue: 100,
            allowNull: false,
        },
    })
    sequelize().close()
    return account
}
