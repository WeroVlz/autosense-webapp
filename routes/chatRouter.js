import '../config.js';

import {Router} from 'express'

const router = Router()

import { askChat } from '../controllers/chatController.js'

router.route('/').post(askChat);

export default router;