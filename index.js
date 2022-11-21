const express = require('express')
const ddl = require('./src/repository/transaction/ddl')

const app = express()
app.listen(10109, async () => {
    await ddl()
})
