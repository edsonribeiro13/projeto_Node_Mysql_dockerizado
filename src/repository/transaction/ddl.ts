import account from '../model/accountModel'
import transaction from '../model/transactionModel'
import user from '../model/userModel'

export default async () => {
    try {
        await account().sync()
        await transaction().sync()
        await user().sync()
    } catch (error) {
        console.log(error)
    }
}
