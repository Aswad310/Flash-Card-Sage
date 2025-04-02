import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async (): Promise<void> => {
  const dbOptions: ConnectOptions = {
    autoIndex: false,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4,
    connectTimeoutMS: 30000,
  };

  try {
    if (!process.env.DB_HOST) {
      throw new Error('DB_HOST is not defined in the environment variables');
    }
    await mongoose.connect(process.env.DB_HOST, dbOptions);
    console.log('DB connection successful');
  } catch (error) {
    console.error('DB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
