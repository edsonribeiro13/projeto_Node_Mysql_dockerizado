import { DataTypes } from 'sequelize'
import sequelize from '../connection'
import account from './accountModel'

export default () => {
    const user = sequelize().define('Users', {
        idUsers: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        userName: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        Accounts_idAccounts: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: account(),
                key: 'idAccounts',
            },
        },
    })
    sequelize().close()
    return user
}
