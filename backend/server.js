const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Import dotenv
require("dotenv").config();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
mongoose
  .connect(
    "mongodb+srv://aayushbgondaliya:GS7JRTcdQWgf2NkL@aayushbg.fjeeqha.mongodb.net/?retryWrites=true&w=majority&appName=aayushbg"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo Error", err));
app.use(express.json());
const userRouter = require("./routes/user");
const beneficiaryRoute = require("./routes/beneficiaryRoute");
app.use("/api/user", userRouter);
app.use("/api/beneficiaryRoute", beneficiaryRoute);
app.use("/api/user", userRouter);
app.listen(PORT, () => console.log(`server started at PORT: ${PORT}`));
