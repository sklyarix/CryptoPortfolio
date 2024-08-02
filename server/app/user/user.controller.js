import expressAsyncHandler from 'express-async-handler'
import { prisma } from '../prisma.js'

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
export const userProfile = expressAsyncHandler(async (req, res, next) => {
	
	const user = await prisma.user.findUnique({
			where: {
				email: req.user.email,
			},
			select: {
				email: true,
				name: true,
			}
	})
	
	res.json({ user })
})