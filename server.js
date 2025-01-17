import "express-async-errors";

import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

import morgan from "morgan";
import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { StatusCodes } from "http-status-codes";

import authRouter from "./routes/authRouter.js";

import { PORT, FAIL } from "./utils/constants.js";

import errorHandler from "./middleware/errorHandler.js";

dotenv.config();

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.static(path.resolve(__dirname, "./public")));

app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/auth", authRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

app.use("*", (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({ message: "Route not found" });
});

app.use(errorHandler);

const port = process.env.PORT || PORT;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server running on PORT ${port}...`);
    });
  } catch (error) {
    console.log(error);
    process.exit(FAIL);
  }
};

start();
