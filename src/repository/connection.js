const { Sequelize } = require('sequelize')

const connection = () => {
    const sequelize = new Sequelize('NGDB', 'root', 'admin', {
        host: '172.28.5.254',
        port: 33360,
        dialect: 'mysql',
    })
    return sequelize
}

module.exports = connection
