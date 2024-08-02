import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import { errorHandler, notFound } from './app/middleware/error.middleware.js'
import { prisma } from './app/prisma.js'

import cryptoRoutes from './app/crypto/crypto.routes.js'
import authRoutes from './app/auth/auth.routes.js'
import userRoutes from './app/user/user.routes.js'


dotenv.config()
const app = express()

async function main() {
	app.use(morgan('dev'))
	app.use(cors())
	app.use(cookieParser())
	app.use(express.json())
	
	app.use('/api/crypto', cryptoRoutes)
	app.use('/api/auth', authRoutes)
	app.use('/api/user', userRoutes)
	
	app.use(notFound)
	app.use(errorHandler)
	
	app.listen(
		process.env.PORT ,
		console.log(`Starting on ${process.env.PORT}`)
	)
}

main().then(async () => {
	await prisma.$disconnect()
})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
