import jwt from 'jsonwebtoken';
import express from 'express';
import { prisma } from '../contexts/prisma';

export const router = express.Router();

const getUserFromDb = async (username: string) => {
  const user = await prisma.user.findFirst({
    where: {
      name: username,
    },
  });
  return user;
};

router.post('/', async (req, res) => {
  const { username, password } = req.body;

  const user = await getUserFromDb(username);

  if (user === null) {
    return res.status(404).json({
      error: 'invalid username',
    });
  }

  //TODO Encrypt password

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
