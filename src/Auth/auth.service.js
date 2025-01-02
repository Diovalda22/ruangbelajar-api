const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findUserByEmail, createUser } = require("./auth.repository");

const registerUser = async ({ email, password, role }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const userRole = role || "student";

  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    throw new Error("Email is already registered");
  }

  const user = await createUser({
    email,
    password: hashedPassword,
    role: userRole,
  });
  return user;
};

const loginUser = async ({ email, password }) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error("User not found");

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) throw new Error("Invalid credentials");

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  return token;
};

module.exports = { registerUser, loginUser };
