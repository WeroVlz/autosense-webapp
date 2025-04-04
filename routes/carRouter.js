import {Router} from 'express';

const router = Router()

import { getMakes, addCar, getModels } from '../controllers/carController.js'

router.route('/').get(getMakes).post(addCar);
router.route('/:make').get(getModels);

export default router;