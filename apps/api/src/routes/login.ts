import jwt from 'jsonwebtoken';
import express from 'express';

export const router = express.Router();

const getUser = async (username) => {
  return { userId: 123, password: '123456', username };
};

router.post('/', async (req, res) => {
  const { username, password } = req.body;

  const user = await getUser(username);

  if (user.password !== password) {
    return res.status(403).json({
      error: 'invalid login',
    });
  }

  delete user.password;

  const token = jwt.sign(user, 'ThisIs1VerySecureSecretLol', {
    expiresIn: '1h',
  });

  res.cookie('token', token);
  res.json({ user, token });
  return;
});
