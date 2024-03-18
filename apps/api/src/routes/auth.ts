import authController from '@api/controllers/auth';
import express from 'express';

export const router = express.Router();
const controller = authController();

router.post('/login', controller.postLogin);
