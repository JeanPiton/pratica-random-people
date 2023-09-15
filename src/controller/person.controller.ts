import { Request, Response } from "express"
import { Person } from "../protocols"
import personServices from "../services/person.services"

async function getPerson(req:Request,res:Response) {
    const result:Person = await personServices.getPerson()
    res.status(200).send(result)
}

const personController = {
    getPerson
}
export default personController