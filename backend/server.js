const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Import dotenv
require("dotenv").config();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

//Connect MongoDB
mongoose
  .connect(
    "mongodb+srv://aayushbgondaliya:GS7JRTcdQWgf2NkL@aayushbg.fjeeqha.mongodb.net/?retryWrites=true&w=majority&appName=aayushbg"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo Error", err));

// Middlewares
// app.use(express.urlencoded({ extended: false }))
app.use(express.json());

// Import Routes
const userRouter = require("./routes/user");

// use Routes
app.use("/api/user", userRouter);

// Listen to the server
app.listen(PORT, () => console.log(`server started at PORT: ${PORT}`));
