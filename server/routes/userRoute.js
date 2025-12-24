import express from 'express';
import { userRegister } from '../controllers/userRegister.js';
import { userLogin } from '../controllers/userRegister.js';

const router = express.Router();

router.route('/').post(userRegister);
router.route('/login').post(userLogin);

export default router;
