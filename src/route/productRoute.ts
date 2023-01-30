import express from 'express'
const router = express.Router()

router.get('/product', async (req, res) => {
    res.send('TESTE')
})

export default router