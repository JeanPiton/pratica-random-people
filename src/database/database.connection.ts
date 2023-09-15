import pg,{PoolConfig} from "pg"
import dotenv from "dotenv"
dotenv.config()

const { Pool } = pg

const configDatabase:PoolConfig = {
    connectionString: process.env.DATABASE_URL
}

export const db = new Pool(configDatabase)