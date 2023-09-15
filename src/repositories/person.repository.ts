import { db } from "../database/database.connection";
import { Person } from "protocols";

async function getPersons():Promise<Person[]> {
    const {rows} = await db.query(`SELECT * FROM people`)
    return rows
}

const personRepository = {
    getPersons
}

export default personRepository