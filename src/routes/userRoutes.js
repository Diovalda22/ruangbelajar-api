const express = require("express");
const { getUserProfile } = require("../controllers/userController");
const authenticate = require("../middlewares/authMiddleware");
const router = express.Router();

// Rute untuk mendapatkan profil pengguna yang terautentikasi
router.get("/profile", authenticate, getUserProfile);

module.exports = router;
