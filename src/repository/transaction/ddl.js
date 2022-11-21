const account = require('../model/accountModel')
const transaction = require('../model/transactionModel')
const user = require('../model/userModel')

const DDl = async () => {
    try {
        await account().sync()
        await transaction().sync()
        await user().sync()
    } catch (error) {
        console.log(error)
    }
}

module.exports = DDl
