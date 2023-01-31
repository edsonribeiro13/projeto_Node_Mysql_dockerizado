import productModel from '../../../models/productModel'
import Connection from '../../repository/connection' 

export default async () => {
    try {

        return await Connection.getConnection().transaction(async (t) => {

            const Product = productModel()
            const product = await Product.findAll({attributes: ['name', 'value', 'unit']})
            return JSON.stringify(product, null, 2)
        })
    } catch(e) {
        console.error('Falha na requisição de todos os produtos\n' + e)
    }
}