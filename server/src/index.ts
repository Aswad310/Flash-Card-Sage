/**
 * Libraries
 */
import express, { Application } from 'express';
import cors, { CorsOptions } from 'cors';
import { config as dotenvConfig } from "dotenv";
import connectDB from './config/db';

// Route imports
import indexRouter from './routes/index';

// Determine which .env file to load based on the environment
const envFile: string = `.env.${process.env.NODE_ENV || "local"}`;
dotenvConfig({ path: envFile });

/**
 * Variables
 */
const app: Application = express();
const PORT: number = Number(process.env.PORT || "8000");

const corsOptions: CorsOptions = {
  origin: true,
  credentials: true,
  optionsSuccessStatus: 200,
};

/**
 * Middlewares
 */
app.use(cors(corsOptions));
app.use(express.json({ limit: "20mb", strict: false }));
app.use(express.urlencoded({ extended: true }));

/**
 * Mount Index API Route
 */
app.use("/api/v1", indexRouter);

/**
 * Database & Server Connection
 */
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((error: Error) => {
    console.error('Failed to connect to the database:', error.message);
  });