const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
  // Ambil token dari header Authorization
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied, No Token Provided" });
  }

  try {
    // Dekode token untuk mendapatkan payload
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Gunakan JWT_SECRET dari environment variable
    // Simpan email ke dalam req.userEmail dari hasil decoding
    req.userEmail = decoded.email;
    next();
  } catch (error) {
    return res.status(400).json({ message: "Invalid Token" });
  }
};

module.exports = authenticateUser;
