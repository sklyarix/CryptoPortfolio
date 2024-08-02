import express from 'express';
import { cryptoCoins } from './crypto.controller.js'

const router = express.Router()

router.route('/coins').get(cryptoCoins)

export default router