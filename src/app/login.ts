import userModel from '../repository/model/userModel'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default async (username: string, password: string) => {
    const userFromDataBase = await userModel().findOne({
        where: {
            userName: username,
        },
    })
    if (userFromDataBase?.dataValues.password) {
        const hashResponse = await bcrypt
            .compare(password, userFromDataBase.dataValues.password)
            .then((res) => {
                return res
            })

        if (hashResponse === true) {
            const userName = userFromDataBase.dataValues.userName
            const token = jwt.sign(
                { username: userName },
                String(process.env.SECRET),
                {
                    expiresIn: 86400,
                }
            )
            return token
        } else {
            return 'senha incorreta'
        }
    } else {
        return 'usuário não encontrado'
    }
}
