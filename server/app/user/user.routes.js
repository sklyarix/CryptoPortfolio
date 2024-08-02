import express from 'express'
import { protect } from '../middleware/auth.middleware.js'
import { userProfile } from './user.controller.js'

const router = express.Router();

router.route('/profile').get(protect, userProfile)

export default router;
