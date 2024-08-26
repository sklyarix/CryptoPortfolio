import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const prisma = new PrismaClient()

const app = express()
const port = process.env.HOST_PORT || 4000

async function main() {
	app.get('/', async (req, res) => {
		const allUsers = await prisma.user.findMany()

		res.json(allUsers)
	})

	app.listen(port, () => {
		console.log(`Example app listening on port ${port}`)
	})
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
