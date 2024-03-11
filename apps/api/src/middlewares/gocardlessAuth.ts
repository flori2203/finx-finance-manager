import NordigenClient from 'nordigen-node';

export const gocardlessAuth = (req, res, next) => {
  try {
    const client = new NordigenClient({
      secretId: process.env.NORDIGEN_SECRET_ID,
      secretKey: process.env.NORDIGEN_SECRET_KEY,
      baseUrl: undefined,
    });
    next();
  } catch (err) {
    res.status(400).json({
      error: 'Nordigen authentication failed',
    });
    return;
  }
};
