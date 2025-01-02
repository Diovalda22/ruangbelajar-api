const { findUserByEmail } = require("../models/userModel");

const getUserProfile = async (req, res) => {
  const email = req.userEmail; // Dapatkan email dari req.userEmail (hasil autentikasi middleware)

  // Jika email tidak ada, kirimkan pesan error
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  // Mencari user berdasarkan email
  const user = await findUserByEmail(email);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json({
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
  });
};

module.exports = { getUserProfile };
