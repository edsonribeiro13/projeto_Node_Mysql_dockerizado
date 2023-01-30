import { DataTypes } from 'sequelize'
import Connection from '../connection'

export default () => {
    const product = Connection.getConnection().define('Product', {
        idProduct: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(45),
            unique: true,
            allowNull: false
        },
        value: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        unit: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        monthly: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        density: {
            type: DataTypes.FLOAT
        }
    })

    return product
}
