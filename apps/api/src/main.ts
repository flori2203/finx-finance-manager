import express from 'express';
import cookieParser from 'cookie-parser';
import { router as loginRouter } from './routes/login';
import { router as secretRouter } from './routes/secret';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/login', loginRouter);
app.use('/secret', secretRouter);

app.get('/', (req, res) => {
  res.send({ message: 'Startseite' });
});

app.listen(3000, () => {
  console.log(`Server is running`);
});
