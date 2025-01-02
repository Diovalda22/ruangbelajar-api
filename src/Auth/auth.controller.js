const express = require("express");
const { registerUser, loginUser } = require("./auth.service");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).send({ message: "User registered successfully", user });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const token = await loginUser(req.body);
    res.send({ message: "Login successful", token });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

module.exports = router;
