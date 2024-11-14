import app from './config/app.config';
import connectDB from './config/db.config';
import colors from 'colors';
require('dotenv').config(); 

const connect = async (): Promise<void> => {
  await connectDB();
};

connect();

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(colors.yellow.bold(`MonieTracker server running in ${process.env.NODE_ENV} mode`));
});

process.on('unhandledRejection', (err: any, promise) => {
  console.log(colors.bold.red(`Error: ${err.message}`));
  server.close(() => process.exit(1));
});