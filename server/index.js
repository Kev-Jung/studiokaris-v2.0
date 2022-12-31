const express = require("express");
const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/studiokaris");
    console.log("Successfully connected to mongo database");
  } catch (err) {
    console.log(err.message);
  }
};
connectToDB();

const app = express();

const PORT = 3001;

app.listen(PORT, () => console.log("Server open on port " + PORT));
