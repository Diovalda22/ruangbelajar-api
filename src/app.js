const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const app = express();

// Middleware untuk memparsing JSON
app.use(bodyParser.json());

// Halaman utama untuk API
app.get("/", (req, res) => {
  res.send("API RuangBelajar.id by ferren diovalda");
});

// Gunakan route untuk autentikasi dan user
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

module.exports = app;
