import jwt from 'jsonwebtoken';

export const cookieJwtAuth = (req, res, next) => {
  const token = req.cookies.token;

  try {
    const user = jwt.verify(token, 'ThisIs1VerySecureSecretLol');
    req.user = user;
    console.log('User is authenticated!');
    next();
  } catch (err) {
    res.clearCookie('token').status(403).json({
      error: 'invalid token',
    });
    return;
  }
};
