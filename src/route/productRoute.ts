import getAllProduct from '../controller/product/getAllProduct'
import express from 'express'
const router = express.Router()

router.get('/product', async (req, res) => {
    const result =  await getAllProduct()
    res.send(result)
})

export default router