import accountModel from '../repository/model/accountModel'
import userModel from '../repository/model/userModel'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default async (username: string, password: string) => {
    if (username.length < 3) {
        return 'username curto'
    }
    const regexPassword = new RegExp('(?=.*[A-Z])(?=.*[0-9])')
    if (password.length < 8 || regexPassword.test(password) === false) {
        return 'senha fraca'
    }

    const hashPassword = await bcrypt
        .hash(password, 2)
        .catch((e) => console.error(e))

    try {
        const resultId = await accountModel().findOne({
            order: [['idAccounts', 'DESC']],
            attributes: ['idAccounts'],
        })
        await userModel().create({
            userName: username,
            password: hashPassword,
            Accounts_idAccounts: resultId?.dataValues.idAccounts + 1 || 1,
        })
        await accountModel().create()
        const token = jwt.sign({ username }, String(process.env.SECRET), {
            expiresIn: 86400,
        })
        return token
    } catch (e: any) {
        if (e.name === 'SequelizeUniqueConstraintError') {
            return 'usuário já existe'
        }
        console.error(e)
        return 'Erro no registro'
    }
}
