import express from 'express';

export const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'This is a secret message' });
});
