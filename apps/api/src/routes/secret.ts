import express from 'express';
import { cookieJwtAuth } from '../middlewares/cookieJwtAuth';

export const router = express.Router();

router.get('/', cookieJwtAuth, (req, res) => {
  res.send({ message: 'Secret' });
});
