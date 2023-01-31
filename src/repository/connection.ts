import { Sequelize } from 'sequelize'
import env from '../../env-vars.json'

export default class Connection {

    static sequelize: Sequelize

    static getConnection() {
        if(!Connection.sequelize){
            Connection.sequelize = new Sequelize(
                env.DB,
                env.DBUSER,
                env.DBPASSWORD,
                {
                    host: env.DBADRESS,
                    port: parseInt(env.DBPORT),
                    dialect: 'mysql',
                }
            )
        }
        return Connection.sequelize
    }
}
