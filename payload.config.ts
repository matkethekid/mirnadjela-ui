import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'
import path from 'path'
import { fileURLToPath } from 'url'
import { Product } from "@/collections/Product";
import { Media } from "@/collections/Media";

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
    editor: lexicalEditor(),
    collections: [Product, Media],
    secret: process.env.PAYLOAD_SECRET || '',
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URL,
            ssl: {
                rejectUnauthorized: false,
            }
        },
    }),
    sharp,
    admin: {
        importMap: {
            baseDir: path.resolve(dirname, 'admin'),
        },
    },
})