import mongoose from 'mongoose';
require('dotenv').config(); //loading environmental variables

const connectDB = async () => {   //defining the connectDB function
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log('MongoDB connected');
  } catch (error: any) {  //handling connection errors and logs successful/failed connection
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

export default connectDB;