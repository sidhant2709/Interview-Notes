import express from 'express';
import { registerUser, authUser } from '../controllers/authController.js';

const router = express.Router();

router.route('/register').post(registerUser);

router.route('/login').post(authUser);

export default router;
