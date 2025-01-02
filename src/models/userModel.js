const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createUser = async (email, password, role) => {
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  // Pastikan role ada, jika tidak gunakan default
  const userRole = role || "student"; // Default ke "student"

  const user = await prisma.user.create({
    data: {
      email,
      password,
      role: userRole,
    },
  });
  return user;
};

const findUserByEmail = async (email) => {
  if (!email) {
    throw new Error("Email is required");
  }

  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  return user;
};

module.exports = { createUser, findUserByEmail };
