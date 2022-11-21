import express from 'express'
import ddl from './src/repository/transaction/ddl'
import dotEnv from 'dotenv-safe'
dotEnv.config({ path: __dirname + '/.env' })

const app = express()
app.listen(10109, async () => {
    await ddl()
})
