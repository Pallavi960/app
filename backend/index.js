const express = require("express");
const { connectMongoDB } = require("./connection");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/user");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true
}));

app.use(cookieParser());
app.use("/user", userRoute);

// connect to MongoDB Atlas
connectMongoDB();

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
