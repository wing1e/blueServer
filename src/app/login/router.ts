import express from 'express';
import { wxLogin } from './controller';

const router = express.Router();

// 微信登录
router.post('/wxLogin', wxLogin);

export default router;
