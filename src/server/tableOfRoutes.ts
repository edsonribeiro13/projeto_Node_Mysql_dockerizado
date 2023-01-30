import express from 'express'
import productRoute from '../route/productRoute'

export default (app: express.Application) => {
    app.use('/', productRoute)
}