const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();

const port = 3030;

const app = express();

// middleware
app.use(express.json());

// connessione db
mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Db connection error"));
db.once("open", () => {
  console.log("Db connected succesfully");
});

app.listen(port, () => {
  console.log(`Server connected and listening on port ${port}`);
});
