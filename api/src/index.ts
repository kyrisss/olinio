import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

import router from "./router";
import mongoose from "mongoose";

const app = express();

const port = process.env.PORT ?? 5000;

app.use(cors());

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

async function start() {
  try {
    const uri = `mongodb://mongodb:27017/users?authSource=admin`;
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected.");
    app.listen(
      port,
      console.log.bind(console, `Server has been started on port ${port}`)
    );
  } catch (e) {
    console.log("MongoDB connection failed.", e.message);
    console.log(e);
  }
}

start();

app.use("/", router());
