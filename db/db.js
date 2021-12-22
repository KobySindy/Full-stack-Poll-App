const mongoose = require("mongoose");
require("dotenv").config();

const mongoConnectionString = process.env.MONGODB_URI;

mongoose
  .connect(mongoConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Concected to DB..."))
  .catch((err) => console.error("Could not connect to DB..."));

module.exports = mongoose;
