import express from 'express'
import { userAuth, userRegister } from './auth.controller.js'

const router = express.Router();

router.route('/login').post(userAuth)
router.route('/register').post(userRegister)

export default router;