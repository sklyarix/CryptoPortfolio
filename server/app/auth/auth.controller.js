import cookieParser from 'cookie-parser'
import expressAsyncHandler from 'express-async-handler'
import { prisma } from '../prisma.js'
import {hash, verify} from 'argon2'
import { generateToken } from './generateToken.js'

// @desc Auth user
// @route POST /api/auth/login
// @access Public
export const userAuth = expressAsyncHandler(async (req, res) => {
	const { email, password } = req.body
	
	const user = await prisma.user.findUnique({
			where: { email },
	})
	
	if(!user){
		res.status(401)
		throw new Error('User Not Found')
	} else {
		const passwordCorrect =  await verify(user.password, password)
		
		if (!passwordCorrect) {
			throw new Error('Incorrect password')
		}
	}
	const token = generateToken(user.id)
	
	res.json({user, token})
})

// @desc Register user
// @route POST /api/auth/register
// @access Public
export const userRegister = expressAsyncHandler(async (req, res) => {
	
	const {email, name, password} = req.body
	
	const isUser = await prisma.user.findUnique({
			where: { email },
	})
	
	if(isUser){
		res.status(400)
		throw new Error('User already exists')
	}
	
	const user = await prisma.user.create({
		data: {
			email, name, password: await hash(password),
		},
		select: {
			email: true,
			name: true,
		},
	});
	
	const token = generateToken(user.id)
	
	res.json({ user, token })
})