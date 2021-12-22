const mongoose = require("./db/db");
const poll = require("./routes/poll");
const polls = require("./routes/polls");
const apiKeyMiddleware = require("./middlewares/apiKeyMiddleware");
const express = require("express");
const app = express();
const http = require("http").Server(app);
const cors = require("cors");
require("dotenv").config();

app.use(cors());

app.use(express.json());

app.use("/api/poll", poll);
app.use("/api/polls", polls);

const port = process.env.PORT;
http.listen(port, () => console.log(`Listening on port ${port}...`));
