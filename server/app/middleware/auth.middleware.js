import expressAsyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import { prisma } from '../prisma.js'

export const protect = expressAsyncHandler  (async (req, res, next) => {
	
	const token = req.headers.authorization?.split(' ')[1];
	
	if (!token) {
		return res.status(401).send('No token provided');
	}
	
	const decoded = jwt.verify(token, process.env.JWT_SECRET)
	
	const user = await prisma.user.findUnique({
			where: {
				id: decoded.userId
			},
			select: {
				email: true,
				name: true,
			}
	})
	
	if (user){
		req.user = user
		next()
	} else {
		res.status(401)
		throw new Error('Not authorized, token failed')
	}
	
})