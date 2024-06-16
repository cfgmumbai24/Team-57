const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo Error", err));
app.use(express.json());
const userRouter = require("./routes/user");
const beneficiaryRoute = require("./routes/beneficiaryRoute");

const paramedicrouter = require("./routes/paramedicroute");

const goatrouter = require("./routes/goatRoute");

const volunteerrouter = require("./routes/volunteerRoute");
const treatmentrouter = require("./routes/treatmentroute");
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api/beneficiary", beneficiaryRoute);
app.use("/api/user", userRouter);
app.use("/api/paramedic", paramedicrouter);
app.use("/api/goat", goatrouter);
app.use("/api/volunteer", volunteerrouter);

app.use("/api/treatment", treatmentrouter);
app.listen(PORT, () => console.log(`server started at PORT: ${PORT}`));
