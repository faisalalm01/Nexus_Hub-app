import { prismaClient } from "../application/database.js";
import bcrypt from "bcrypt";
import "dotenv/config";
export const removeTestUser = async () => {
  await prismaClient.user.deleteMany({
    where: {
      email: "test@gmail.com",
    },
  });
};
export const createTestUser = async () => {
  await prismaClient.user.create({
    data: {
      fullname: "test",
      email: "test@gmail.com",
      password: await bcrypt.hash("12345678", 10),
    },
  });
};
