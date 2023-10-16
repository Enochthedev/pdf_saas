import {neon, neonConfig} from '@neondatabase/serverless'
import {drizzle} from 'drizzle-orm/neon-http'
neonConfig.fetchConnectionCache = true

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable not set')
}

const sqlDataBase = neon(process.env.DATABASE_URL)

export const dataBase = drizzle(sqlDataBase)