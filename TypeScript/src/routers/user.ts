import express from 'express';
import {registerUser,checkTypeAndInterface} from '../controllers/user'
const router = express.Router();
router.post('/register', registerUser);
router.post('/update', checkTypeAndInterface);


export default router;

