import express from 'express'
import envVar from '../../env-vars.json'
import tableOfRoutes from './tableOfRoutes'

export default class expressClass {

    static app: express.Application
    static port: String

    constructor() {
        expressClass.app = express()
        expressClass.port = envVar.EXPRESSPORT
        expressClass.app.listen(expressClass.port, () => {})
        expressClass.routeTable()
    }

    static routeTable() {
        if(!expressClass.app){
            new expressClass()
        }
        tableOfRoutes(expressClass.app)
    }

}