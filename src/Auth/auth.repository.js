const prisma = require("../db");

const findUserByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: { email },
  });
};

const createUser = async ({ email, password, role }) => {
  return await prisma.user.create({
    data: { email, password, role },
  });
};

module.exports = { findUserByEmail, createUser };
