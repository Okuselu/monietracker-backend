import express, {ErrorRequestHandler, NextFunction, Request, Response} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import AuthRoutes from '../routes/auth.routes';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', AuthRoutes);

app.all('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: 'Internal Server Error' });
});

export default app;