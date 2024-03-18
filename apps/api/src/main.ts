import express from 'express';
import { initalSetup } from './initialSetup';
import cookieParser from 'cookie-parser';
import { router as loginRouter } from './routes/login';
import { router as authRouter } from './routes/auth';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);
initalSetup();

app.use('/auth', authRouter);
app.use('/login', loginRouter);

app.get('/', (req, res) => {
  res.send({ message: 'Startseite' });
});

app.listen(3000, () => {
  console.log(`Server is running`);
});
