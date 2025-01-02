const express = require("express");
const bodyParser = require("body-parser");
const authController = require("./Auth/auth.controller");
const app = express();

// Middleware untuk memparsing JSON
app.use(bodyParser.json());

// Halaman utama untuk API
app.get("/", (req, res) => {
  res.send("API RuangBelajar.id by ferren diovalda");
});

app.use("/api/auth", authController);

module.exports = app;
