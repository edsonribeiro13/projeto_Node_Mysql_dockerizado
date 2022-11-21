import express from 'express'
import ddl from './src/repository/transaction/ddl'

const app = express()
app.listen(10109, async () => {
    await ddl()
})
