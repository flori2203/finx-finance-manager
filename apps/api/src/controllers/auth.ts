import express from 'express';
import jwt from 'jsonwebtoken';
import { prisma } from '@api/contexts/prisma';

const authController = () => {
  const getUserFromDb = async (username: string) => {
    const user = await prisma.user.findFirst({
      where: {
        name: username,
      },
    });
    return user;
  };

  const postLogin = async (req: express.Request, res: express.Response) => {
    try {
      const { username, password } = req.body;

      const user = await getUserFromDb(username);

      if (user === null) {
        return res.status(401).json({
          error: 'invalid username',
        });
      }

      if (user.password !== password) {
        return res.status(401).json({
          error: 'invalid password',
        });
      }

      const token = jwt.sign(user, 'ThisIs1VerySecureSecretLol', {
        expiresIn: '1h',
      });

      res.cookie('token', token);
      return;
    } catch (err) {
      res.status(500).send(err);
    }
  };

  return {
    postLogin,
  };
};

export default authController;
