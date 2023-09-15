import { Person } from "protocols"
import personRepository from "../repositories/person.repository"
import RandomInt from "../utils/randomizer"

async function getPerson():Promise<Person> {
    const persons = await personRepository.getPersons()
    return persons[RandomInt(persons.length)]
}

const personServices = {
    getPerson
}

export default personServices