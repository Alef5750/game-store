import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose
  .connect(process.env.MONGO_DB_CONNECTION as string)
  .then(() => console.log("Successfully connected to MONGODB database"))
  .catch((error) => console.log(error));
