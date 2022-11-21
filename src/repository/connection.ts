import { Sequelize } from 'sequelize'

export default () => {
    const sequelize = new Sequelize(
        String(process.env.DB),
        String(process.env.DBUSER),
        String(process.env.DBPASSWORD),
        {
            host: String(process.env.DBADRESS),
            port: parseInt(String(process.env.DBPORT)),
            dialect: 'mysql',
        }
    )
    return sequelize
}
